import artworks from "../data/artworks.json";
import type { Artwork } from "../types/artwork";
import { GalleryCard } from "./GalleryCard";

interface GalleryProps {
  onSelect: (artwork: Artwork) => void;
}

export function Gallery({ onSelect }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {artworks.map((artwork) => (
        <GalleryCard
          key={artwork.id}
          artwork={artwork}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}