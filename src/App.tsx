import React from "react";
import MediaSection from "./components/MediaSection";
import Navbar from "./components/Navbar";
import { mockMediaItems } from "./lib/mockData";

const App: React.FC = () => {
  return (
    <div className="bg-black text-white p-6 md:p-12 min-h-screen w-full">
      <Navbar />
      <MediaSection
        title="Featured"
        items={mockMediaItems}
        statusFilter="featured"
      />
      <MediaSection
        title="Popular"
        items={mockMediaItems}
        statusFilter="popular"
      />
      <MediaSection title="New Uploads" items={mockMediaItems} />
    </div>
  );
};

export default App;
