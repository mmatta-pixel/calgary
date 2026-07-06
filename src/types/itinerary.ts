export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
}

export interface ItineraryDay {
  id: string;
  day: number;
  date: string;
  summary: string;
  activities: Activity[];
}

export interface Itinerary {
  destination: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
}

export interface GenerateItineraryRequest {
  destination: string;
  startDate: string;
  endDate: string;
  interests: string;
  budget: string;
  notes: string;
}
