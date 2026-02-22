import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the data directory exists
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * Fetches and parses the beer menu from Untappd
 */
async function syncUntappd() {
    const UNTAPPD_URL = 'https://untappd.com/v/east-troy-brewery/7812878';
    const OUTPUT_FILE = path.join(DATA_DIR, 'beers.json');

    console.log(`Fetching Untappd menu from ${UNTAPPD_URL}...`);
    try {
        const response = await fetch(UNTAPPD_URL, {
            headers: {
                // Mimic a standard browser to avoid basic blocking
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        const beers = [];

        // Untappd public page structure embeds beers in standard anchor links within H5s
        $('a[href*="/b/east-troy-brewery-"], a[href*="/b/g5-brewing-company-"]').each((i, el) => {
            const $a = $(el);
            const url = "https://untappd.com" + $a.attr('href');
            const name = $a.text().trim();

            const $parentContainer = $a.closest('li, .beer-item');
            const $parentH5 = $a.closest('h5');

            if ($parentH5.length > 0) {
                // Extract Style
                let style = $parentH5.contents().filter(function () {
                    return this.nodeType === 3; // Text nodes
                }).text().trim();
                style = style.replace(/^-\s*/, '').trim(); // Clean up leading dash

                const $h6 = $parentH5.next('h6');
                if ($h6.length > 0) {
                    const metadataStr = $h6.text();

                    // Extract ABV
                    const abvMatch = metadataStr.match(/([\d.]+)%\s*ABV/);
                    const abv = abvMatch ? abvMatch[1] + "%" : "N/A";

                    // Extract IBU
                    const ibuMatch = metadataStr.match(/([\d.]+|N\/A)\s*IBU/);
                    const ibu = ibuMatch ? ibuMatch[1] : "N/A";

                    // Extract Prices
                    const prices = [];
                    $parentContainer.find('.price').each((j, priceEl) => {
                        const price = $(priceEl).text().trim().replace(' USD', '');
                        const size = $(priceEl).prev('.size').text().trim();
                        prices.push({ size, price });
                    });

                    // Prevent duplicates
                    if (name && !beers.some(b => b.name === name)) {
                        beers.push({
                            name,
                            url,
                            style,
                            abv,
                            ibu,
                            prices
                        });
                    }
                }
            }
        });

        console.log(`Found ${beers.length} beers.`);
        if (beers.length > 0) {
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(beers, null, 2));
            console.log(`Successfully wrote to ${OUTPUT_FILE}`);
        } else {
            console.warn('No beers found. The Untappd HTML layout may have changed.');
        }

    } catch (error) {
        console.error('Error fetching Untappd menu:', error);
        process.exitCode = 1;
    }
}

/**
 * Placeholder for future food menu syncing
 */
async function syncFoodMenu() {
    console.log("Food menu sync not yet implemented. Waiting for endpoint...");
    // const FOOD_URL = '...';
    // const OUTPUT_FILE = path.join(DATA_DIR, 'food.json');
}

/**
 * Placeholder for future cocktail menu syncing
 */
async function syncCocktailMenu() {
    console.log("Cocktail menu sync not yet implemented. Waiting for endpoint...");
    // const COCKTAIL_URL = '...';
    // const OUTPUT_FILE = path.join(DATA_DIR, 'cocktails.json');
}

// Run all syncs
async function main() {
    await syncUntappd();
    await syncFoodMenu();
    await syncCocktailMenu();
}

main();
