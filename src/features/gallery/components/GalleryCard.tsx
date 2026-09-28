import { motion } from "motion/react";
import type { Artwork } from "../types/artwork";
import { getCloudinaryUrl } from "../../../shared/services/cloudinary";

interface GalleryCardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

export function GalleryCard({
  artwork,
  onClick,
}: GalleryCardProps) {
  const mainImage = artwork;

  return (
    <button
      type="button"
      onClick={() => onClick(artwork)}
      className="
        block
        w-full
        text-left
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--primary)]
        focus-visible:ring-offset-2
      "
    >
      {/* Imagen */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={getCloudinaryUrl(mainImage.publicId, 900)}
          alt={mainImage.alt}
          loading="lazy"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/0
            transition-colors
            duration-500
            group-hover:bg-black/20
          "
        />

        {/* Indicador */}
        <div
          className="
            absolute
            bottom-4
            right-4
            translate-y-3
            rounded-full
            bg-[var(--primary)]
            px-4
            py-2
            text-sm
            font-medium
            text-[var(--primary-foreground)]
            opacity-0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          Ver obra
        </div>
      </div>

      {/* Información */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight">
            {artwork.title}
          </h2>

          <span className="text-xs uppercase tracking-wider text-[var(--text)]/50">
            {artwork.year}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[var(--text)]/60">
          <span>{artwork.technique}</span>

          <span className="h-1 w-1 rounded-full bg-[var(--primary)]" />

          <span>{artwork.category}</span>
        </div>
      </div>
    </button>
  );
}