import { useState } from "react";
import { Gallery } from "../features/gallery/components/Gallery";
import { motion } from "motion/react";
import type { Artwork } from "../features/gallery/types/artwork";
import { ArtworkModal } from "../features/gallery/components/ArtworkModal";

export function GalleryPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-h)]">
      <section className="container mx-auto px-6 py-20 md:py-28">
        {/* Encabezado */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-[var(--primary)]"
          >
            Mario Arte
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            Galería
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeInOut",
            }}
            className="mx-auto mt-6 h-1 rounded-full bg-[var(--primary)]"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--text)]/70 md:text-lg"
          >
            Una selección de retratos, dibujos y obras realizadas
            artesanalmente, donde cada pieza representa una exploración
            personal de la expresión y el detalle.
          </motion.p>
        </div>

        {/* Galería */}
        <Gallery onSelect={setSelectedArtwork} />
      </section>
      {selectedArtwork && (
        <div>
          <ArtworkModal
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
          />
        </div>
      )}
    </main>
  );
}