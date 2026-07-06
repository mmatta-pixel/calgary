export type Audience = "solo" | "group";
export type RecommendedMode = "walk" | "drive";

export interface Option {
  id: string;
  name?: string;
  description: string;
  tags?: string[];
  duration?: string;
  bookAhead?: boolean;
  audience?: Audience;
}

export interface Stop {
  id: string;
  travelFromPrevious: RecommendedMode;
  options: Option[];
}

export interface DayPlan {
  day: number;
  title: string;
  blurb: string;
  images: string[];
  mapContext: string;
  stops: Stop[];
  lunch: Option[];
  dinner: Option[];
}

export const trip = {
  title: "Calgary",
  subtitle: "4 Days — Food, Hikes, Architecture & Scenery",
  heroImage: "https://images.unsplash.com/photo-1667316543034-7ec99d160a12",
  hotel: "Sheraton Cavalier Calgary Hotel",
  hotelMapContext: "Calgary, Alberta",
  coffeeImage: "https://images.unsplash.com/photo-1485808191679-5f86510681a2",
  notes: [
    {
      icon: "📅",
      title: "Reservations",
      body: "Sauvage, Satsuki, and Ten Foot Henry are all popular enough to warrant booking 2–4 weeks out.",
    },
    {
      icon: "🚗",
      title: "Driving",
      body: "Both Banff and Canmore are best reached by car; renting one for the Rockies days is recommended.",
    },
    {
      icon: "🧭",
      title: "Travel-mode badges",
      body: "General guidance based on typical distances, not measured directions for your exact hotel room — double check on the map before you head out.",
    },
  ],
  coffeeShops: [
    {
      id: "coffee-haifa-cafe",
      name: "Haifa Cafe",
      description:
        "A cozy, book-lined cafe known for rich matcha and Middle Eastern-inspired pastries and light bites.",
    },
    {
      id: "coffee-congress",
      name: "Congress Coffee Company",
      description:
        "A neighborhood roastery with a relaxed, welcoming atmosphere and occasional live music in the evenings.",
    },
    {
      id: "coffee-xin-chao",
      name: "Xin Chao Coffee",
      description:
        "A bright, airy space serving Vietnamese-inspired coffee, including a well-loved salted coffee, alongside sticky rice and light bites.",
    },
    {
      id: "coffee-waves",
      name: "Waves Coffee House (Sunridge)",
      description: "A dependable, straightforward option for a quick coffee and pastry.",
    },
  ] satisfies Option[],
  coffeeContext: "near the Sheraton Cavalier Calgary Hotel",
  coffeeMapContext: "Calgary, Alberta",
} as const;

export const days: DayPlan[] = [
  {
    day: 1,
    title: "Downtown Calgary",
    blurb: "Towers, street art, live music, and a historic avenue — a full day in the city centre.",
    images: ["https://images.unsplash.com/photo-1606688323650-7c1e51d7959f"],
    mapContext: "Calgary, Alberta",
    stops: [
      {
        id: "day1-stop-calgary-tower",
        travelFromPrevious: "drive",
        options: [
          {
            id: "day1-stop-calgary-tower-opt",
            name: "Calgary Tower",
            tags: ["Landmark", "Views"],
            description:
              "Panoramic city views, including a glass-floor observation deck.",
          },
        ],
      },
      {
        id: "day1-stop-stephen-ave",
        travelFromPrevious: "walk",
        options: [
          {
            id: "day1-stop-stephen-ave-opt",
            name: "Stephen Avenue Walk",
            tags: ["Walkable", "Historic"],
            description:
              "A pedestrian promenade through the heart of downtown, lined with shops, cafes, and historic sandstone buildings.",
          },
        ],
      },
      {
        id: "day1-stop-wonderland",
        travelFromPrevious: "walk",
        options: [
          {
            id: "day1-stop-wonderland-opt",
            name: "Wonderland Sculpture",
            tags: ["Public art"],
            description: "A striking 12-metre wire-mesh sculpture, one of downtown's best-known public artworks.",
          },
        ],
      },
      {
        id: "day1-stop-simmons",
        travelFromPrevious: "walk",
        options: [
          {
            id: "day1-stop-simmons-opt",
            name: "Simmons Building",
            tags: ["Architecture", "Riverside"],
            description: "A beautifully restored historic riverside warehouse.",
          },
        ],
      },
      {
        id: "day1-stop-studio-bell",
        travelFromPrevious: "walk",
        options: [
          {
            id: "day1-stop-studio-bell-opt",
            name: "Studio Bell",
            tags: ["Museum", "Music"],
            description:
              "Home of the National Music Centre — five floors covering the history of Canadian music.",
          },
        ],
      },
    ],
    lunch: [
      {
        id: "day1-lunch-first-street-market",
        name: "First Street Market",
        tags: ["Food hall", "Casual", "Good for groups"],
        description:
          "A downtown food hall housing a dozen independent kitchens under one roof, spanning Korean fried chicken, noodle bars, and fresh salads. The format makes it easy for everyone to order something different while still eating together.",
      },
      {
        id: "day1-lunch-porch",
        name: "Porch",
        tags: ["Small plates", "Cocktails"],
        description:
          "A stylish, plant-filled space built for sharing. The menu leans toward small plates — hummus, skewers, calamari — paired with a well-crafted cocktail list.",
      },
    ],
    dinner: [
      {
        id: "day1-dinner-ten-foot-henry",
        audience: "solo",
        name: "Ten Foot Henry",
        tags: ["Vegetable-forward", "Counter seating", "Book ahead"],
        bookAhead: true,
        description:
          "A vegetable-forward menu built around bold, unexpected flavor combinations, served in a lively room with counter seating right in front of the open kitchen. Consistently ranked among Calgary's most inventive kitchens.",
      },
      {
        id: "day1-dinner-teatro",
        audience: "group",
        name: "Teatro Ristorante",
        tags: ["Italian", "Special occasion"],
        description:
          "Refined Italian cuisine served inside a converted 1920s bank building, with soaring ceilings and an extensive wine cellar. A polished setting suited to a celebratory group meal.",
      },
    ],
  },
  {
    day: 2,
    title: "Banff (Hikes & Scenery)",
    blurb: "Waterfalls, canyon walks, and mountain views in the heart of the Rockies.",
    images: [
      "https://images.unsplash.com/photo-1533587032585-7c78bbeef622",
      "https://images.unsplash.com/photo-1627673584068-599a852e37fc",
    ],
    mapContext: "Banff, Alberta",
    stops: [
      {
        id: "day2-stop-johnston-canyon",
        travelFromPrevious: "drive",
        options: [
          {
            id: "day2-stop-johnston-canyon-opt",
            name: "Johnston Canyon",
            tags: ["Hike", "Waterfalls"],
            duration: "~2 hrs round trip",
            description:
              "A scenic canyon walkway leading to a series of waterfalls, roughly two hours round trip.",
          },
        ],
      },
      {
        id: "day2-stop-bow-falls",
        travelFromPrevious: "drive",
        options: [
          {
            id: "day2-stop-bow-falls-opt",
            name: "Bow Falls Viewpoint",
            tags: ["Views"],
            description: "A scenic viewpoint over the Bow River falls, right by Banff townsite.",
          },
        ],
      },
      {
        id: "day2-stop-banff-avenue",
        travelFromPrevious: "walk",
        options: [
          {
            id: "day2-stop-banff-avenue-opt",
            name: "Banff Avenue",
            tags: ["Walkable", "Shopping"],
            description: "A wander down Banff's main street, lined with shops and restaurants.",
          },
        ],
      },
    ],
    lunch: [
      {
        id: "day2-lunch-farm-fire",
        name: "Farm & Fire",
        tags: ["Scratch kitchen", "Comfort food"],
        description:
          "A scratch-kitchen known for its house-made bread and hearty, comforting dishes like bison benedict and blueberry French toast.",
      },
      {
        id: "day2-lunch-fat-ox",
        name: "The Fat Ox",
        tags: ["Italian-leaning", "Small plates"],
        description:
          "Italian-leaning small plates in a relaxed, art-filled space, with standout marinated octopus and elk meatballs.",
      },
    ],
    dinner: [
      {
        id: "day2-dinner-brazen",
        audience: "solo",
        name: "Brazen",
        tags: ["Comfort food", "Modern"],
        description:
          "Elevated comfort food with a playful edge — think smoked trout donuts and an upgraded smash burger — in a clean, modern setting.",
      },
      {
        id: "day2-dinner-good-folk",
        audience: "group",
        name: "Good Folk",
        tags: ["Mountain views", "Alberta beef"],
        description:
          "A greenery-filled dining room with sweeping mountain views through floor-to-ceiling windows. The Alberta beef tenderloin and shareable flatbreads make it a strong pick for a memorable group dinner.",
      },
    ],
  },
  {
    day: 3,
    title: "Parks, Culture & Kensington",
    blurb: "Riverside parks, culture, and an afternoon in Calgary's most walkable neighborhood.",
    images: [
      "https://images.unsplash.com/photo-1760268125932-0f1231a1b8f7",
      "https://images.unsplash.com/photo-1764505878812-25a1c735fe88",
    ],
    mapContext: "Calgary, Alberta",
    stops: [
      {
        id: "day3-stop-princes-island",
        travelFromPrevious: "drive",
        options: [
          {
            id: "day3-stop-princes-island-opt",
            name: "Prince's Island Park",
            tags: ["Park", "Easy walk"],
            description: "A riverside park in the heart of downtown, ideal for an easy walk.",
          },
        ],
      },
      {
        id: "day3-stop-zoo-or-heritage",
        travelFromPrevious: "drive",
        options: [
          {
            id: "day3-stop-zoo",
            name: "Calgary Zoo",
            tags: ["Zoo"],
            description: "Wilder Institute/Calgary Zoo, one of Canada's leading zoos.",
          },
          {
            id: "day3-stop-heritage-park",
            name: "Heritage Park Calgary",
            tags: ["Living history"],
            description: "Canada's largest living-history village — an alternative to the zoo.",
          },
        ],
      },
      {
        id: "day3-stop-kensington",
        travelFromPrevious: "drive",
        options: [
          {
            id: "day3-stop-kensington-opt",
            name: "Kensington Calgary",
            tags: ["Neighborhood", "Cafes"],
            description: "A walkable neighborhood full of independent cafes and restaurants.",
          },
        ],
      },
    ],
    lunch: [
      {
        id: "day3-lunch-flexible",
        tags: ["Flexible"],
        description:
          "Grab something quick near the park, or wait and explore Kensington's cafes before the evening.",
      },
    ],
    dinner: [
      {
        id: "day3-dinner-hayden-block",
        audience: "solo",
        name: "Hayden Block Smoke & Whiskey",
        tags: ["Smokehouse", "Live music"],
        description:
          "A smokehouse turning out slow-cooked brisket, ribs, and pulled pork, with a lively atmosphere and live music on select nights.",
      },
      {
        id: "day3-dinner-satsuki",
        audience: "group",
        name: "Satsuki",
        tags: ["Omakase", "Special occasion", "Book ahead"],
        bookAhead: true,
        description:
          "An intimate omakase and kaiseki restaurant where the chef guides the table through each course, explaining the traditions behind the dishes. A memorable, shared culinary experience for a group looking to try something special.",
      },
    ],
  },
  {
    day: 4,
    title: "Canmore",
    blurb: "A quieter, more scenic alternative to Banff, built around turquoise alpine lakes.",
    images: ["https://images.unsplash.com/photo-1527095655060-4026c4af2b25"],
    mapContext: "Canmore, Alberta",
    stops: [
      {
        id: "day4-stop-grassi-lakes",
        travelFromPrevious: "drive",
        options: [
          {
            id: "day4-stop-grassi-lakes-opt",
            name: "Grassi Lakes",
            tags: ["Hike", "Alpine lakes"],
            description:
              "A quieter, more scenic alternative to Banff. Consider the Grassi Lakes trail for an easy hike to turquoise alpine lakes.",
          },
        ],
      },
    ],
    lunch: [
      {
        id: "day4-lunch-corner-pub",
        name: "The Corner Pub",
        tags: ["Czech-inspired", "Cozy"],
        description:
          "A Czech-inspired menu (schnitzel, goulash) in a cozy, unpretentious setting — a distinctive change of pace from typical pub fare.",
      },
      {
        id: "day4-lunch-apres",
        name: "Après Canmore",
        tags: ["Wood-fired pizza", "Cocktails"],
        description: "A cozy basement spot known for wood-fired pizza and a well-curated cocktail list.",
      },
    ],
    dinner: [
      {
        id: "day4-dinner-the-local",
        audience: "solo",
        name: "The Local – Eatery & Bar",
        tags: ["Pub classics", "Live music"],
        description:
          "A cozy, mountain-town gem serving elevated pub classics — fish and chips, burgers, poutine — with live music on Wednesdays.",
      },
      {
        id: "day4-dinner-sauvage",
        audience: "group",
        name: "Sauvage",
        tags: ["Tasting menu", "Foraged", "Special occasion", "Book ahead"],
        bookAhead: true,
        description:
          "A tasting menu built entirely around foraged, Canadian-sourced ingredients, with each course paired to Canadian wines. Consistently described as one of the most memorable meals in the region — ideal for a special-occasion group dinner. Limited seating, so book well in advance.",
      },
    ],
  },
];
