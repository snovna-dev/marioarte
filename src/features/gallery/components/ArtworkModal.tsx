import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Artwork } from "../types/artwork";
import { getCloudinaryUrl } from "../../../shared/services/cloudinary";

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export function ArtworkModal({
  artwork,
  onClose,
}: ArtworkModalProps) {
  // Cerrar con Escape + bloquear scroll del body
  useEffect(() => {
    if (!artwork) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [artwork, onClose]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="artwork-modal-title"
        >
          <motion.div
            className="
              relative
              flex
              max-h-[90vh]
              w-full
              max-w-6xl
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--bg)]
              shadow-2xl
              lg:flex-row
            "
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Botón cerrar */}
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{
                scale: 1.08,
                rotate: 90,
              }}
              whileTap={{
                scale: 0.92,
              }}
              transition={{ duration: 0.2 }}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/60
                text-xl
                text-white
                backdrop-blur-sm
                transition-colors
                hover:bg-black/80
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--primary)]
              "
              aria-label="Cerrar modal"
            >
              ×
            </motion.button>

            {/* Imagen */}
            <motion.div
              className="
                flex
                min-h-[300px]
                items-center
                justify-center
                bg-black/10
                lg:w-[55%]
              "
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
            >
              <img
                src={getCloudinaryUrl(artwork.publicId, 1200)}
                alt={artwork.alt}
                className="
                  max-h-[55vh]
                  w-full
                  object-contain
                  lg:max-h-[85vh]
                "
              />
            </motion.div>

            {/* Información */}
            <motion.div
              className="
                flex
                flex-1
                flex-col
                overflow-y-auto
                p-6
                sm:p-8
                lg:w-[45%]
                lg:p-10
              "
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: "easeOut",
              }}
            >
              {/* Categoría */}
              <span
                className="
                  mb-4
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[var(--primary)]
                "
              >
                {artwork.category}
              </span>

              {/* Título */}
              <h2
                id="artwork-modal-title"
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-[var(--text-h)]
                  sm:text-4xl
                "
              >
                {artwork.title}
              </h2>

              {/* Línea decorativa */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{
                  duration: 0.5,
                  delay: 0.35,
                }}
                className="
                  my-6
                  h-1
                  rounded-full
                  bg-[var(--primary)]
                "
              />

              {/* Metadatos */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text)]/50">
                    Técnica
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--text-h)]">
                    {artwork.technique}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--text)]/50">
                    Año
                  </p>

                  <p className="mt-1 text-sm font-medium text-[var(--text-h)]">
                    {artwork.year}
                  </p>
                </div>
              </div>

              {/* Featured */}
              {artwork.featured && (
                <div className="mb-6">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[var(--primary)]/30
                      bg-[var(--primary)]/10
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-[var(--primary)]
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    Obra destacada
                  </span>
                </div>
              )}

              {/* Descripción */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text)]/50">
                  Sobre la obra
                </h3>

                <p className="text-base leading-8 text-[var(--text)]/80">
                  {artwork.description}
                </p>
              </div>

              {/* Slug / referencia */}
              <div className="mt-auto pt-8">
                <div className="border-t border-[var(--border)] pt-4">
                  <p className="text-xs text-[var(--text)]/40">
                    {artwork.slug}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}