export type Audience = "solo" | "group";

export interface ScheduleBlock {
  id: string;
  time: string;
  description: string;
  places: string[];
  tags?: string[];
  duration?: string;
}

export interface MealOption {
  id: string;
  name?: string;
  description: string;
  audience?: Audience;
  tags?: string[];
  bookAhead?: boolean;
}

export interface DayPlan {
  day: number;
  title: string;
  mapContext: string;
  schedule: ScheduleBlock[];
  lunch: MealOption[];
  dinner: MealOption[];
}

export interface Place {
  id: string;
  name: string;
  description: string;
}

export const trip = {
  title: "Calgary Trip Itinerary",
  subtitle: "4 Days — Food, Hikes, Architecture & Scenery",
  hotel: "Sheraton Cavalier Calgary Hotel",
  hotelMapContext: "Calgary, Alberta",
  notes: [
    "Reservations recommended well in advance: Sauvage, Satsuki, and Ten Foot Henry are all popular enough to warrant booking 2–4 weeks out.",
    "Driving: Both Banff and Canmore are best reached by car; renting one for the Rockies days is recommended.",
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
  ] satisfies Place[],
  coffeeContext: "near the Sheraton Cavalier Calgary Hotel",
  coffeeMapContext: "Calgary, Alberta",
} as const;

export const days: DayPlan[] = [
  {
    day: 1,
    title: "Downtown Calgary",
    mapContext: "Calgary, Alberta",
    schedule: [
      {
        id: "day1-morning",
        time: "Morning",
        places: ["Calgary Tower"],
        tags: ["Landmark", "Views"],
        description:
          "Calgary Tower — panoramic city views, including a glass-floor observation deck.",
      },
      {
        id: "day1-midday",
        time: "Midday",
        places: ["Stephen Avenue Walk", "Wonderland Sculpture Calgary", "Simmons Building Calgary"],
        tags: ["Architecture", "Public art", "Walkable"],
        description:
          "Stephen Avenue Walk, the Wonderland Sculpture (a striking 12-metre wire-mesh installation), and the Simmons Building, a beautifully restored historic riverside warehouse.",
      },
      {
        id: "day1-afternoon",
        time: "Afternoon",
        places: ["Studio Bell"],
        tags: ["Museum", "Music"],
        description:
          "Studio Bell, home of the National Music Centre — five floors covering the history of Canadian music.",
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
    mapContext: "Banff, Alberta",
    schedule: [
      {
        id: "day2-morning",
        time: "Morning",
        places: ["Johnston Canyon"],
        tags: ["Hike", "Waterfalls"],
        duration: "~2 hrs round trip",
        description:
          "Johnston Canyon — a scenic canyon walkway leading to a series of waterfalls, roughly two hours round trip.",
      },
      {
        id: "day2-afternoon",
        time: "Afternoon",
        places: ["Bow Falls Viewpoint", "Banff Avenue"],
        tags: ["Views", "Walkable"],
        description: "Bow Falls Viewpoint and a wander down Banff Avenue.",
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
    mapContext: "Calgary, Alberta",
    schedule: [
      {
        id: "day3-morning",
        time: "Morning",
        places: ["Prince's Island Park"],
        tags: ["Park", "Easy walk"],
        description:
          "Prince's Island Park — a riverside park in the heart of downtown, ideal for an easy walk.",
      },
      {
        id: "day3-midday",
        time: "Midday",
        places: ["Calgary Zoo", "Heritage Park Calgary"],
        tags: ["Zoo", "Living history"],
        description:
          "Wilder Institute/Calgary Zoo or Heritage Park (Canada's largest living-history village), depending on preference.",
      },
      {
        id: "day3-evening",
        time: "Evening",
        places: ["Kensington Calgary"],
        tags: ["Neighborhood", "Cafes"],
        description: "Kensington, a walkable neighborhood full of independent cafes and restaurants.",
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
    mapContext: "Canmore, Alberta",
    schedule: [
      {
        id: "day4-allday",
        time: "All day",
        places: ["Grassi Lakes"],
        tags: ["Hike", "Alpine lakes"],
        description:
          "A quieter, more scenic alternative to Banff. Consider the Grassi Lakes trail for an easy hike to turquoise alpine lakes.",
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
