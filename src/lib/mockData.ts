// mockData.ts
import type { MediaItem } from "../lib/types/MediaItem";

export const mockMediaItems: MediaItem[] = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop",
    altText: "Vibrant city skyline at night",
    title: "Urban Nights Symphony",
    artist: "Neon Pulse Collective",
    dateCommisioned: new Date("2025-08-15"),
    datePublished: new Date("2025-09-10"),
    status: "featured",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop",
    altText: "Ocean waves crashing on rocky shore",
    title: "Ocean's Eternal Dance",
    artist: "Tidal Waves Orchestra",
    dateCommisioned: new Date("2025-09-05"),
    datePublished: new Date("2025-09-18"),
    status: "popular",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
    altText: "Mountain peak under starry sky",
    title: "Starry Mountain Echoes",
    artist: "Celestial Strings",
    dateCommisioned: new Date("2025-09-10"),
    datePublished: new Date("2025-09-20"),
    status: "popular",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=200&h=150&fit=crop",
    altText: "Cozy coffee shop interior",
    title: "Morning Brew Melodies",
    artist: "Café Jazz Trio",
    dateCommisioned: new Date("2025-08-20"),
    datePublished: new Date("2025-09-05"),
    status: "default",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
    altText: "Sunset over desert dunes",
    title: "Desert Sunset Serenade",
    artist: "Sandstorm Vocalists",
    dateCommisioned: new Date("2025-09-12"),
    datePublished: new Date("2025-09-15"),
    status: "featured",
  },
  {
    id: "6",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop",
    altText: "Forest path in autumn",
    title: "Autumn Forest Whispers",
    artist: "Leaf Fall Ensemble",
    dateCommisioned: new Date("2025-08-25"),
    datePublished: new Date("2025-09-15"),
    status: "default",
  },
  {
    id: "7",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=200&h=150&fit=crop",
    altText: "City street at golden hour",
    title: "Golden Hour Streets",
    artist: "Sunset City Band",
    dateCommisioned: new Date("2025-09-08"),
    datePublished: new Date("2025-09-19"),
    status: "popular",
  },
  {
    id: "8",
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
    altText: "Snowy mountain landscape",
    title: "Winter Peak Harmony",
    artist: "Alpine Echo Choir",
    dateCommisioned: new Date("2025-08-10"),
    datePublished: new Date("2025-08-30"),
    status: "default",
  },
  {
    id: "9",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&h=150&fit=crop",
    altText: "Tropical beach paradise",
    title: "Tropical Paradise Rhythms",
    artist: "Island Breeze Quartet",
    dateCommisioned: new Date("2025-09-15"),
    datePublished: new Date("2025-09-15"),
    status: "default",
  },
  {
    id: "10",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=200&h=150&fit=crop",
    altText: "Rainy city window view",
    title: "Rainy Day Reflections",
    artist: "Stormy Skies Duo",
    dateCommisioned: new Date("2025-09-01"),
    datePublished: new Date("2025-09-12"),
    status: "popular",
  },
];
