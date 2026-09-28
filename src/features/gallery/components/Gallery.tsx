import { motion } from "motion/react";
import { GalleryCard } from "./GalleryCard";
import artworks from "../data/artworks.json";
import type { Artwork } from "../types/artwork";
import { fadeUp, staggerContainer } from "../../../shared/animations/variants";

interface GalleryProps {
  onSelect: (artwork: Artwork) => void;
}

export function Gallery({ onSelect }: GalleryProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        xl:gap-10
      "
    >
      {artworks.map((artwork) => (
        <motion.article
          key={artwork.id}
          variants={fadeUp}
          whileHover={{
            y: -8,
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[var(--border)]
            bg-code-bg
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            transition-shadow
            duration-300
            hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]
          "
        >
          {/* Detalle decorativo */}
          <div
            className="
              absolute
              left-0
              top-0
              z-10
              h-1
              w-0
              bg-background
              transition-all
              duration-500
              group-hover:w-full
            "
          />

          <GalleryCard
            artwork={artwork}
            onClick={onSelect}
          />
        </motion.article>
      ))}
    </motion.div>
  );
}