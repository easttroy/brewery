import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as jsonUtil from 'facebook-event-scraper/dist/utils/json.js';

chromium.use(stealth());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the data directory exists
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * Fetches events from Facebook using Playwright Stealth
 */
async function syncEvents() {
    const FB_PAGE_URL = 'https://www.facebook.com/ETBrew/events';
    const OUTPUT_FILE = path.join(DATA_DIR, 'events.json');
    const EVENTS_IMG_DIR = path.join(__dirname, '..', 'public', 'images', 'events');

    if (!fs.existsSync(EVENTS_IMG_DIR)) {
        fs.mkdirSync(EVENTS_IMG_DIR, { recursive: true });
    }

    console.log(`Fetching Facebook Events for ${FB_PAGE_URL}...`);
    let browser;
    try {
        browser = await chromium.launch({ headless: true });
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto(FB_PAGE_URL, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(5000);

        const html = await page.content();

        // Find the event collection JSON data safely inside the massive HTML string
        let jsonData = null;
        try {
            const result = jsonUtil.findJsonInString(html, 'collection');
            jsonData = result.jsonData;
        } catch (e) {
            console.warn("Could not parse JSON collection from Facebook HTML.");
        }

        if (!jsonData || !jsonData.pageItems || !jsonData.pageItems.edges) {
            console.warn('⚠️ No event data found in Facebook payload. The page may be temporarily blocking unauthenticated access.');
            console.warn('Scraper will fail gracefully. Current events will not be overwritten.');
            return; // Exit function early, do not overwrite output file
        }

        const events = [];
        const edges = jsonData.pageItems.edges;

        for (const eventWrapper of edges) {
            const node = eventWrapper.node;
            const eventNode = node.node;

            const eventId = eventNode.id;
            let localImagePath = null;

            // Extract and download the image if it exists
            const imageUrl = node.image?.uri;
            if (imageUrl) {
                try {
                    const res = await fetch(imageUrl);
                    if (res.ok) {
                        const buffer = await res.arrayBuffer();
                        const filename = `${eventId}.jpg`;
                        fs.writeFileSync(path.join(EVENTS_IMG_DIR, filename), Buffer.from(buffer));
                        localImagePath = `/images/events/${filename}`;
                    } else {
                        console.warn(`Failed to download image for event ${eventId}: ${res.status}`);
                    }
                } catch (e) {
                    console.warn(`Error downloading image for event ${eventId}:`, e);
                }
            }

            events.push({
                id: eventId,
                name: eventNode.name,
                url: `https://www.facebook.com/events/${eventId}/`,
                date: eventNode.day_time_sentence,
                isCanceled: eventNode.is_canceled,
                isPast: node.actions_renderer?.event?.is_past ?? false,
                image: localImagePath
            });
        }

        // Filter out canceled tools
        let activeEvents = events.filter(e => !e.isCanceled);

        // The events come back in whatever order Facebook returns them. We'll sort via isPast.
        const upcomingEvents = activeEvents.filter(e => !e.isPast);
        const pastEvents = activeEvents.filter(e => e.isPast).slice(0, 5); // Keep up to 5 past events

        const combinedEvents = [...upcomingEvents, ...pastEvents];

        console.log(`Found ${upcomingEvents.length} upcoming events and keeping ${pastEvents.length} past events.`);

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(combinedEvents, null, 2));
        console.log(`Successfully wrote to ${OUTPUT_FILE}`);

    } catch (error) {
        console.warn('⚠️ Scraping Facebook events failed. The proxy or IP might be temporarily blocked:', error.message);
        console.warn('Failing gracefully to preserve existing events.');
        // Do NOT set process.exitCode = 1 here. We want the Action to succeed.
    } finally {
        if (browser) await browser.close();
    }
}

// Run sync
async function main() {
    await syncEvents();
}

main();
