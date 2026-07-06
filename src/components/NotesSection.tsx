import { trip } from "@/data/itinerary";

export default function NotesSection() {
  return (
    <section className="bg-cream py-16">
      <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6">
        <h2 className="font-serif text-2xl font-semibold text-forest-dark">Notes & Tips</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {trip.notes.map((note) => (
            <div
              key={note.title}
              className="border border-border bg-card rounded-lg p-4 flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-2 font-medium text-ink">
                <span>{note.icon}</span>
                <span>{note.title}</span>
              </div>
              <p className="text-sm text-ink/75 leading-relaxed">{note.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
