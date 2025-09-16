import type { MediaItem } from "../lib/types/MediaItem";

const MediaItemComponent: React.FC<{ item: MediaItem }> = ({ item }) => {
  return (
    <div className="flex flex-col items-start">
      <img
        src={item.imageUrl}
        alt={item.altText}
        className="rounded-lg w-full mb-2 object-cover aspect-video"
      />
      <span className="text-sm font-light">{item.title}</span>
    </div>
  );
};

export default MediaItemComponent;
