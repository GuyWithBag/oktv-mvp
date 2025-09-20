import type { MediaItem } from "../lib/types/MediaItem";

interface MediaItemComponentProps {
  item: MediaItem;
  isFeatured?: boolean;
}

const MediaItemComponent: React.FC<MediaItemComponentProps> = ({
  item,
  isFeatured = false,
}) => {
  const imageClasses = isFeatured
    ? "rounded-lg w-full mb-4 object-cover aspect-video max-w-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
    : "rounded-lg w-full mb-2 object-cover aspect-video transition-all duration-300 hover:scale-105 hover:brightness-105";

  const titleClasses = isFeatured
    ? "text-xl font-medium transition-colors duration-300 hover:text-blue-600"
    : "text-sm font-light transition-colors duration-300 hover:text-gray-700";

  const artistClasses = isFeatured
    ? "text-lg font-semibold text-gray-600 mt-1"
    : "text-xs font-medium text-gray-500 mt-1";

  return (
    <div
      className={`flex flex-col items-start ${
        isFeatured ? "w-full max-w-4xl cursor-pointer" : "cursor-pointer"
      }`}
    >
      <img src={item.imageUrl} alt={item.altText} className={imageClasses} />
      <div className="w-full flex flex-col">
        <span className={`${titleClasses} ${isFeatured ? "mt-2" : ""}`}>
          {item.title}
        </span>
        <span className={`${artistClasses} ${isFeatured ? "mt-1" : "mt-0.5"}`}>
          {item.artist}
        </span>
      </div>
    </div>
  );
};

export default MediaItemComponent;
