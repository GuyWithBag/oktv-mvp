import type { MediaItem } from "../lib/types/MediaItem";
import MediaItemComponent from "./MediaItemComponent";

interface MediaSectionProps {
  title: string;
  items: MediaItem[];
}

const MediaSection: React.FC<MediaSectionProps> = ({ title, items }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <MediaItemComponent key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
