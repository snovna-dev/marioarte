import type { Artwork } from "../types/artwork";


interface GalleryCardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

export function GalleryCard({
  artwork,
  onClick,
}: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(artwork)}
      className="group overflow-hidden rounded-xl"
    >
      <img
        src={getCloudinaryUrl(artwork.publicId, 800)}
        alt={artwork.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="p-3 text-left">
        <h3 className="font-medium">
          {artwork.title}
        </h3>

        <p className="text-sm text-gray-500">
          {artwork.technique}
        </p>
      </div>
    </button>
  );
}