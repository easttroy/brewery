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
 * Fetches and parses the beer menu from the Untappd business iframe payload
 */
async function syncUntappd() {
    // The iframe loads this dynamic script which contains the HTML structure
    const UNTAPPD_JS_PAYLOAD = 'https://business.untappd.com/locations/17806/themes/67049/js';
    const OUTPUT_FILE = path.join(DATA_DIR, 'beers.json');

    console.log(`Fetching Untappd JS Payload from ${UNTAPPD_JS_PAYLOAD}...`);
    try {
        const response = await fetch(UNTAPPD_JS_PAYLOAD, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const js = await response.text();

        // The script sets container.innerHTML += "html string"; Let's extract those HTML chunks.
        const match = js.match(/container\.innerHTML \+?= "(.+)";/g);
        if (!match) {
            throw new Error("Could not find innerHTML assignments within the payload.");
        }

        let html = "";
        match.forEach(m => {
            const strStr = m.match(/"(.*)"/);
            if (strStr && strStr[1]) {
                const unescaped = strStr[1].replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\\//g, '/');
                html += unescaped;
            }
        });

        const $ = cheerio.load(html);
        const beers = [];

        $('.item').each((i, el) => {
            const $item = $(el);

            // Name
            const name = $item.find('.item-name a').text().trim();
            if (!name) return; // Skip section headers

            // URL
            const urlAttr = $item.find('.item-name a').attr('href');
            let url = null;
            if (urlAttr) {
                url = "https://untappd.com" + urlAttr.replace('https://untappd.com', ''); // Ensure no double domains
            }

            // Style, ABV, IBU
            const style = $item.find('.item-style').text().trim();
            const abvMatch = $item.find('.item-abv').text().trim().match(/([\d.]+)%/);
            const abv = abvMatch ? abvMatch[1] + "%" : "N/A";
            const ibuMatch = $item.find('.item-ibu').text().trim().match(/([\d.]+)\s*IBU/i);
            const ibu = ibuMatch ? ibuMatch[1] : "N/A";

            // Description
            let description = $item.find('.item-description').text().trim();
            description = description.replace(/More Info ▸/g, '').replace(/Less Info ▴/g, '').trim();

            // Prices
            const prices = [];
            $item.find('.price').each((j, priceEl) => {
                let size = $(priceEl).siblings('.type, .size, .name').text().trim();

                if (!size) {
                    // Sometimes it's a raw text node preceding the .price span
                    const prevNode = $(priceEl).parent().contents().filter(function () {
                        return this.nodeType === 3 && $(this).next().hasClass('price');
                    }).text().trim();
                    if (prevNode) size = prevNode;
                }

                // Clean the escaped '\$' if present, and remove 'USD'
                const price = $(priceEl).text().trim().replace(/\\/g, '').replace(' USD', '');
                prices.push({ size: size || "Draft", price });
            });

            if (name && !beers.some(b => b.name === name)) {
                beers.push({ name, url, style, abv, ibu, description, prices });
            }
        });

        console.log(`Found ${beers.length} beers.`);
        if (beers.length > 0) {
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify(beers, null, 2));
            console.log(`Successfully wrote to ${OUTPUT_FILE}`);
        } else {
            console.warn('No beers found. The Untappd JS payload layout may have changed.');
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
