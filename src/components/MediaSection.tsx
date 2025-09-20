import type { MediaItem } from "../lib/types/MediaItem";
import MediaItemComponent from "./MediaItemComponent";

interface MediaSectionProps {
  title: string;
  items: MediaItem[];
  statusFilter?: "popular" | "featured" | "default"; // Optional status filter
}

const MediaSection: React.FC<MediaSectionProps> = ({
  title,
  items,
  statusFilter,
}) => {
  // Filter items by status if filter is provided
  const filteredItems = statusFilter
    ? items.filter((item) => item.status === statusFilter)
    : items;

  // For featured, only take the first item after sorting
  const displayItems =
    statusFilter === "featured" ? filteredItems.slice(0, 1) : filteredItems;

  // Sort items by dateCommissioned (newest first)
  const sortedItems = displayItems.sort(
    (a, b) =>
      new Date(b.dateCommisioned).getTime() -
      new Date(a.dateCommisioned).getTime()
  );

  // Determine grid layout based on status
  const isFeatured = statusFilter === "featured";
  const gridClasses = isFeatured
    ? "grid-cols-1" // Single large item for featured
    : "grid grid-cols-2 sm:grid-cols-4 gap-4";

  return (
    <section className={`mb-10 ${isFeatured ? "mb-16" : ""}`}>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className={gridClasses}>
        {sortedItems.length === 0 ? (
          <div
            className={`col-span-full text-center py-8 ${
              isFeatured ? "text-lg" : ""
            }`}
          >
            There are no {statusFilter ? `${statusFilter} ` : ""}karaokes
            available yet!
          </div>
        ) : (
          sortedItems.map((item) => (
            <MediaItemComponent
              key={item.id}
              item={item}
              isFeatured={isFeatured}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MediaSection;
