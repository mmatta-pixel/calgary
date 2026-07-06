interface TagListProps {
  tags?: string[];
}

export default function TagList({ tags }: TagListProps) {
  if (!tags?.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-forest/10 text-forest-dark"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
