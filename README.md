# calgary

A website for generating and editing customized travel itineraries. Enter a destination,
dates, interests, and budget to get an AI-generated day-by-day itinerary, then edit it
directly (reorder, add, or remove activities and days).

## Getting started

```bash
npm install
cp .env.local.example .env.local # add your ANTHROPIC_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Itineraries are currently saved to the browser's local storage only — there is no
account system or backend database yet.
