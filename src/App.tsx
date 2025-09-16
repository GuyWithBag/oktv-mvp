import React from "react";
import type { MediaItem } from "./lib/types/MediaItem";
import MediaSection from "./components/MediaSection";
import Navbar from "./components/Navbar";

// --- Mock Data ---
const popularMedia: MediaItem[] = [
  {
    id: "1",
    imageUrl: "https://i.imgur.com/r6JjTq3.jpg",
    altText: "A woman singing into a microphone",
    title: "Karaoke Classics",
  },
  {
    id: "2",
    imageUrl: "https://i.imgur.com/6E2hY5M.jpg",
    altText: "A man singing into a microphone",
    title: "Pop Hits",
  },
  {
    id: "3",
    imageUrl: "https://i.imgur.com/8Q9K3aR.jpg",
    altText: "A man and woman singing together",
    title: "Duets",
  },
  {
    id: "4",
    imageUrl: "https://i.imgur.com/gK9qQ4n.jpg",
    altText: "A woman singing into a microphone",
    title: "Throwback",
  },
];

const newUploadsMedia: MediaItem[] = [
  {
    id: "5",
    imageUrl: "https://i.imgur.com/eE1kS9b.jpg",
    altText: "A woman singing into a microphone",
    title: "80s Hits",
  },
  {
    id: "6",
    imageUrl: "https://i.imgur.com/8w3zFfF.jpg",
    altText: "A woman singing into a microphone",
    title: "Party Favorites",
  },
  {
    id: "7",
    imageUrl: "https://i.imgur.com/M6X8jJg.jpg",
    altText: "A man singing into a microphone",
    title: "Rock Anthems",
  },
  {
    id: "8",
    imageUrl: "https://i.imgur.com/0v3dE8B.jpg",
    altText: "A woman singing into a microphone",
    title: "Jazz Standards",
  },
];

const App: React.FC = () => {
  return (
    <div className="bg-black text-white p-6 md:p-12 min-h-screen w-full">
      <Navbar />
      <MediaSection title="Popular" items={popularMedia} />
      <MediaSection title="New Uploads" items={newUploadsMedia} />
    </div>
  );
};

export default App;
