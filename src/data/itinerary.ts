export type Audience = "solo" | "group";

export interface ScheduleBlock {
  time: string;
  description: string;
  places: string[];
}

export interface MealOption {
  name?: string;
  description: string;
  audience?: Audience;
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
  name: string;
  description: string;
}

export const trip = {
  title: "Calgary Trip Itinerary",
  subtitle: "4 Days — Food, Hikes, Architecture & Scenery",
  notes: [
    "Reservations recommended well in advance: Sauvage, Satsuki, and Ten Foot Henry are all popular enough to warrant booking 2–4 weeks out.",
    "Driving: Both Banff and Canmore are best reached by car; renting one for the Rockies days is recommended.",
  ],
  coffeeShops: [
    {
      name: "Haifa Cafe",
      description:
        "A cozy, book-lined cafe known for rich matcha and Middle Eastern-inspired pastries and light bites.",
    },
    {
      name: "Congress Coffee Company",
      description:
        "A neighborhood roastery with a relaxed, welcoming atmosphere and occasional live music in the evenings.",
    },
    {
      name: "Xin Chao Coffee",
      description:
        "A bright, airy space serving Vietnamese-inspired coffee, including a well-loved salted coffee, alongside sticky rice and light bites.",
    },
    {
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
        time: "Morning",
        places: ["Calgary Tower"],
        description:
          "Calgary Tower — panoramic city views, including a glass-floor observation deck.",
      },
      {
        time: "Midday",
        places: ["Stephen Avenue Walk", "Wonderland Sculpture Calgary", "Simmons Building Calgary"],
        description:
          "Stephen Avenue Walk, the Wonderland Sculpture (a striking 12-metre wire-mesh installation), and the Simmons Building, a beautifully restored historic riverside warehouse.",
      },
      {
        time: "Afternoon",
        places: ["Studio Bell"],
        description:
          "Studio Bell, home of the National Music Centre — five floors covering the history of Canadian music.",
      },
    ],
    lunch: [
      {
        name: "First Street Market",
        description:
          "A downtown food hall housing a dozen independent kitchens under one roof, spanning Korean fried chicken, noodle bars, and fresh salads. The format makes it easy for everyone to order something different while still eating together.",
      },
      {
        name: "Porch",
        description:
          "A stylish, plant-filled space built for sharing. The menu leans toward small plates — hummus, skewers, calamari — paired with a well-crafted cocktail list.",
      },
    ],
    dinner: [
      {
        audience: "solo",
        name: "Ten Foot Henry",
        description:
          "A vegetable-forward menu built around bold, unexpected flavor combinations, served in a lively room with counter seating right in front of the open kitchen. Consistently ranked among Calgary's most inventive kitchens.",
      },
      {
        audience: "group",
        name: "Teatro Ristorante",
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
        time: "Morning",
        places: ["Johnston Canyon"],
        description:
          "Johnston Canyon — a scenic canyon walkway leading to a series of waterfalls, roughly two hours round trip.",
      },
      {
        time: "Afternoon",
        places: ["Bow Falls Viewpoint", "Banff Avenue"],
        description: "Bow Falls Viewpoint and a wander down Banff Avenue.",
      },
    ],
    lunch: [
      {
        name: "Farm & Fire",
        description:
          "A scratch-kitchen known for its house-made bread and hearty, comforting dishes like bison benedict and blueberry French toast.",
      },
      {
        name: "The Fat Ox",
        description:
          "Italian-leaning small plates in a relaxed, art-filled space, with standout marinated octopus and elk meatballs.",
      },
    ],
    dinner: [
      {
        audience: "solo",
        name: "Brazen",
        description:
          "Elevated comfort food with a playful edge — think smoked trout donuts and an upgraded smash burger — in a clean, modern setting.",
      },
      {
        audience: "group",
        name: "Good Folk",
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
        time: "Morning",
        places: ["Prince's Island Park"],
        description:
          "Prince's Island Park — a riverside park in the heart of downtown, ideal for an easy walk.",
      },
      {
        time: "Midday",
        places: ["Calgary Zoo", "Heritage Park Calgary"],
        description:
          "Wilder Institute/Calgary Zoo or Heritage Park (Canada's largest living-history village), depending on preference.",
      },
      {
        time: "Evening",
        places: ["Kensington Calgary"],
        description: "Kensington, a walkable neighborhood full of independent cafes and restaurants.",
      },
    ],
    lunch: [
      {
        description:
          "Grab something quick near the park, or wait and explore Kensington's cafes before the evening.",
      },
    ],
    dinner: [
      {
        audience: "solo",
        name: "Hayden Block Smoke & Whiskey",
        description:
          "A smokehouse turning out slow-cooked brisket, ribs, and pulled pork, with a lively atmosphere and live music on select nights.",
      },
      {
        audience: "group",
        name: "Satsuki",
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
        time: "All day",
        places: ["Grassi Lakes"],
        description:
          "A quieter, more scenic alternative to Banff. Consider the Grassi Lakes trail for an easy hike to turquoise alpine lakes.",
      },
    ],
    lunch: [
      {
        name: "The Corner Pub",
        description:
          "A Czech-inspired menu (schnitzel, goulash) in a cozy, unpretentious setting — a distinctive change of pace from typical pub fare.",
      },
      {
        name: "Après Canmore",
        description: "A cozy basement spot known for wood-fired pizza and a well-curated cocktail list.",
      },
    ],
    dinner: [
      {
        audience: "solo",
        name: "The Local – Eatery & Bar",
        description:
          "A cozy, mountain-town gem serving elevated pub classics — fish and chips, burgers, poutine — with live music on Wednesdays.",
      },
      {
        audience: "group",
        name: "Sauvage",
        description:
          "A tasting menu built entirely around foraged, Canadian-sourced ingredients, with each course paired to Canadian wines. Consistently described as one of the most memorable meals in the region — ideal for a special-occasion group dinner. Limited seating, so book well in advance.",
      },
    ],
  },
];
