import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

chromium.use(stealth());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure the data directory exists
const DATA_DIR = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

const OUTPUT_FILE = path.join(DATA_DIR, 'events.json');
const EVENTS_IMG_DIR = path.join(__dirname, '..', 'public', 'images', 'events');

function getChicagoDateIso(date = new Date()) {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Chicago',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date);
}

function findAllJsonByKey(text, key, predicate) {
    const prefix = `"${key}":`;
    let pos = 0;
    const matches = [];

    while (pos < text.length) {
        const idx = text.indexOf(prefix, pos);
        if (idx === -1) break;
        let start = idx + prefix.length;
        while (start < text.length && /\s/.test(text[start])) start++;

        const firstChar = text[start];
        if (firstChar !== '{' && firstChar !== '[') {
            pos = start + 1;
            continue;
        }

        const closeChar = firstChar === '{' ? '}' : ']';
        let depth = 0;
        let inStr = false;
        let escaped = false;
        let i = start;

        for (; i < text.length; i++) {
            const ch = text[i];
            if (inStr) {
                if (escaped) {
                    escaped = false;
                } else if (ch === '\\') {
                    escaped = true;
                } else if (ch === '"') {
                    inStr = false;
                }
            } else if (ch === '"') {
                inStr = true;
            } else if (ch === firstChar) {
                depth++;
            } else if (ch === closeChar) {
                depth--;
                if (depth === 0) break;
            }
        }

        if (depth === 0) {
            try {
                const parsed = JSON.parse(text.slice(start, i + 1));
                if (!predicate || predicate(parsed)) {
                    matches.push(parsed);
                }
            } catch {
                // ignore malformed fragment
            }
        }
        pos = start + 1;
    }

    return matches;
}

function dedupeEvents(events) {
    const seen = new Set();
    return events.filter((e) => {
        const key = `${(e.name || '').toLowerCase().trim()}::${e.startDate || e.date || ''}`;
        if (seen.has(e.id) || seen.has(key)) return false;
        seen.add(e.id);
        seen.add(key);
        return true;
    });
}

function readExistingEvents() {
    if (!fs.existsSync(OUTPUT_FILE)) return [];
    try {
        return JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf8'));
    } catch {
        return [];
    }
}

/**
 * Unfold and parse VEVENT blocks from a public iCalendar (.ics) feed (e.g., Google Calendar).
 */
function parseIcsEvents(icsText) {
    const unfolded = icsText.replace(/\r?\n[ \t]/g, '');
    const blocks = unfolded.split('BEGIN:VEVENT').slice(1);
    const todayIso = getChicagoDateIso();
    const parsed = [];

    for (const rawBlock of blocks) {
        const block = rawBlock.split('END:VEVENT')[0] || '';
        const lines = block.split(/\r?\n/);
        const fields = {};

        for (const line of lines) {
            const colonIdx = line.indexOf(':');
            if (colonIdx === -1) continue;
            const rawKey = line.slice(0, colonIdx);
            const value = line.slice(colonIdx + 1).trim();
            const baseKey = rawKey.split(';')[0].toUpperCase();
            fields[baseKey] = value;
            fields[`${baseKey}_RAW`] = rawKey;
        }

        if (!fields.SUMMARY || !fields.DTSTART) continue;
        if (fields.STATUS && fields.STATUS.toUpperCase() === 'CANCELLED') continue;

        const dtRaw = fields.DTSTART;
        let dateObj = null;
        let allDay = false;

        if (/^\d{8}$/.test(dtRaw)) {
            allDay = true;
            const y = Number(dtRaw.slice(0, 4));
            const m = Number(dtRaw.slice(4, 6)) - 1;
            const d = Number(dtRaw.slice(6, 8));
            dateObj = new Date(Date.UTC(y, m, d, 18, 0, 0));
        } else if (/^\d{8}T\d{6}Z?$/.test(dtRaw)) {
            const iso = `${dtRaw.slice(0, 4)}-${dtRaw.slice(4, 6)}-${dtRaw.slice(6, 8)}T${dtRaw.slice(9, 11)}:${dtRaw.slice(11, 13)}:${dtRaw.slice(13, 15)}${dtRaw.endsWith('Z') ? 'Z' : ''}`;
            dateObj = new Date(iso);
        }

        if (!dateObj || Number.isNaN(dateObj.getTime())) continue;

        const startDate = getChicagoDateIso(dateObj);
        const dayPart = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/Chicago',
            weekday: 'short',
            month: 'short',
            day: 'numeric',
        }).format(dateObj);

        const timePart = allDay
            ? ''
            : ` - ${new Intl.DateTimeFormat('en-US', {
                  timeZone: 'America/Chicago',
                  hour: 'numeric',
                  minute: '2-digit',
              })
                  .format(dateObj)
                  .toLowerCase()
                  .replace(/\s+/g, '')}`;

        const unescapeIcs = (str) =>
            str
                .replace(/\\n/gi, ' ')
                .replace(/\\,/g, ',')
                .replace(/\\;/g, ';')
                .replace(/\\\\/g, '\\')
                .trim();

        parsed.push({
            id: (fields.UID || `${startDate}-${fields.SUMMARY}`).replace(/[^a-zA-Z0-9_-]/g, ''),
            name: unescapeIcs(fields.SUMMARY),
            url: fields.URL || 'https://www.facebook.com/ETBrew/events',
            date: `${dayPart}${timePart}`,
            startDate,
            description: fields.DESCRIPTION ? unescapeIcs(fields.DESCRIPTION) : undefined,
            isCanceled: false,
            isPast: startDate < todayIso,
            image: null,
        });
    }

    parsed.sort((a, b) => (a.startDate || '').localeCompare(b.startDate || ''));
    return parsed;
}

/**
 * Fetches events from optional EVENTS_ICS_URL or Facebook using Playwright Stealth,
 * while preserving any manual events in src/data/events.json.
 */
async function syncEvents() {
    const FB_PAGE_URL = 'https://www.facebook.com/ETBrew/events';
    const ICS_URL = process.env.EVENTS_ICS_URL?.trim();
    const todayIso = getChicagoDateIso();

    if (!fs.existsSync(EVENTS_IMG_DIR)) {
        fs.mkdirSync(EVENTS_IMG_DIR, { recursive: true });
    }

    const existingEvents = readExistingEvents();
    const manualEvents = existingEvents
        .filter((e) => e.manual)
        .map((e) => ({
            ...e,
            isPast:
                e.startDate && /^\d{4}-\d{2}-\d{2}$/.test(e.startDate)
                    ? e.startDate < todayIso
                    : Boolean(e.isPast),
        }));

    // 1. Optional ICS Calendar Feed (e.g. Google Calendar public ICS URL)
    if (ICS_URL) {
        try {
            console.log('Fetching events from EVENTS_ICS_URL...');
            const res = await fetch(ICS_URL);
            if (res.ok) {
                const icsText = await res.text();
                const icsEvents = parseIcsEvents(icsText);
                const merged = dedupeEvents([...manualEvents, ...icsEvents]);
                const upcoming = merged.filter((e) => !e.isPast);
                const past = merged
                    .filter((e) => e.isPast)
                    .reverse()
                    .slice(0, 6);
                fs.writeFileSync(OUTPUT_FILE, JSON.stringify([...upcoming, ...past], null, 2) + '\n');
                console.log(`Synced ${upcoming.length} upcoming and ${past.length} past events from ICS feed.`);
                return;
            }
            console.warn(`EVENTS_ICS_URL returned HTTP ${res.status}; falling back to Facebook scrape.`);
        } catch (err) {
            console.warn('Failed fetching EVENTS_ICS_URL; falling back to Facebook scrape:', err.message);
        }
    }

    // 2. Facebook Events Scrape via Playwright Stealth
    console.log(`Fetching Facebook Events for ${FB_PAGE_URL}...`);
    let browser;
    try {
        browser = await chromium.launch({ headless: true });
        const context = await browser.newContext({
            userAgent:
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            viewport: { width: 1440, height: 900 },
            locale: 'en-US',
            timezoneId: 'America/Chicago',
        });
        const page = await context.newPage();

        await page.goto(FB_PAGE_URL, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForTimeout(5000);

        // Dismiss Facebook login modal overlay if present
        const closeBtn = page.locator('[aria-label="Close"]').first();
        if (await closeBtn.isVisible().catch(() => false)) {
            await closeBtn.click().catch(() => {});
            await page.waitForTimeout(1000);
        }

        const html = await page.content();

        // Find the event collection JSON data safely inside the HTML string
        const collections = findAllJsonByKey(html, 'collection', (v) =>
            Array.isArray(v?.pageItems?.edges),
        );
        const jsonData = collections[0] ?? null;

        if (!jsonData || !jsonData.pageItems || !jsonData.pageItems.edges) {
            console.warn('⚠️ No event data found in Facebook payload. The page may be blocking unauthenticated access.');
            // Still update manual event rollover if any manual events changed isPast state
            if (manualEvents.length > 0) {
                const updatedExisting = existingEvents.map((e) =>
                    e.manual && e.startDate && /^\d{4}-\d{2}-\d{2}$/.test(e.startDate)
                        ? { ...e, isPast: e.startDate < todayIso }
                        : e,
                );
                fs.writeFileSync(OUTPUT_FILE, JSON.stringify(updatedExisting, null, 2) + '\n');
            }
            return;
        }

        const events = [];
        const edges = jsonData.pageItems.edges;

        for (const eventWrapper of edges) {
            const node = eventWrapper.node;
            const eventNode = node.node;

            const eventId = eventNode.id;
            let localImagePath = null;

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
                image: localImagePath,
            });
        }

        const activeEvents = dedupeEvents([...manualEvents, ...events.filter((e) => !e.isCanceled)]);
        const upcomingEvents = activeEvents.filter((e) => !e.isPast);
        const pastEvents = activeEvents.filter((e) => e.isPast).slice(0, 6);

        const combinedEvents = [...upcomingEvents, ...pastEvents];

        console.log(`Found ${upcomingEvents.length} upcoming events and keeping ${pastEvents.length} past events.`);

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(combinedEvents, null, 2) + '\n');
        console.log(`Successfully wrote to ${OUTPUT_FILE}`);
    } catch (error) {
        console.warn('⚠️ Scraping Facebook events failed. The proxy or IP might be temporarily blocked:', error.message);
        console.warn('Failing gracefully to preserve existing events.');
    } finally {
        if (browser) await browser.close();
    }
}

async function main() {
    await syncEvents();
}

main();
