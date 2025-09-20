// In your types/MediaItem.ts
interface MediaItem {
  id: string;
  imageUrl: string;
  altText: string;
  title: string;
  artist: string; // Added artist field
  dateCommisioned: Date;
  datePublished: Date;
  status: "popular" | "featured" | "default";
}

export type { MediaItem };
