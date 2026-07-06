import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import type { GenerateItineraryRequest, Itinerary } from "@/types/itinerary";

const anthropic = new Anthropic();

const itineraryTool = {
  name: "build_itinerary",
  description: "Return a structured day-by-day travel itinerary.",
  input_schema: {
    type: "object" as const,
    properties: {
      destination: { type: "string" },
      startDate: { type: "string" },
      endDate: { type: "string" },
      days: {
        type: "array",
        items: {
          type: "object",
          properties: {
            day: { type: "integer" },
            date: { type: "string" },
            summary: { type: "string" },
            activities: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  time: { type: "string" },
                  title: { type: "string" },
                  description: { type: "string" },
                  location: { type: "string" },
                },
                required: ["title"],
              },
            },
          },
          required: ["day", "activities"],
        },
      },
    },
    required: ["destination", "days"],
  },
};

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  const body: Partial<GenerateItineraryRequest> = await req.json();
  const { destination, startDate, endDate, interests, budget, notes } = body;

  if (!destination?.trim()) {
    return NextResponse.json({ error: "Destination is required." }, { status: 400 });
  }

  const prompt = [
    `Plan a customized travel itinerary for a trip to ${destination}.`,
    startDate && endDate ? `Dates: ${startDate} to ${endDate}.` : undefined,
    interests ? `Traveler interests: ${interests}.` : undefined,
    budget ? `Budget level: ${budget}.` : undefined,
    notes ? `Additional notes: ${notes}.` : undefined,
    "Break the trip into days, and for each day list activities with an approximate time, a short title, a one or two sentence description, and a location or neighborhood.",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-5",
      max_tokens: 4096,
      tools: [itineraryTool],
      tool_choice: { type: "tool", name: "build_itinerary" },
      messages: [{ role: "user", content: prompt }],
    });

    const toolUse = message.content.find(
      (block): block is Anthropic.ToolUseBlock => block.type === "tool_use"
    );

    if (!toolUse) {
      return NextResponse.json({ error: "No itinerary was generated." }, { status: 502 });
    }

    const raw = toolUse.input as {
      destination: string;
      startDate?: string;
      endDate?: string;
      days: {
        day: number;
        date?: string;
        summary?: string;
        activities: {
          time?: string;
          title: string;
          description?: string;
          location?: string;
        }[];
      }[];
    };

    const itinerary: Itinerary = {
      destination: raw.destination,
      startDate: raw.startDate ?? startDate ?? "",
      endDate: raw.endDate ?? endDate ?? "",
      days: raw.days.map((d) => ({
        id: randomUUID(),
        day: d.day,
        date: d.date ?? "",
        summary: d.summary ?? "",
        activities: d.activities.map((a) => ({
          id: randomUUID(),
          time: a.time ?? "",
          title: a.title,
          description: a.description ?? "",
          location: a.location ?? "",
        })),
      })),
    };

    return NextResponse.json(itinerary);
  } catch (err) {
    console.error("Failed to generate itinerary:", err);
    return NextResponse.json({ error: "Failed to generate itinerary." }, { status: 500 });
  }
}
