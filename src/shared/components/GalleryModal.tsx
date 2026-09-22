import { useEffect } from 'react';

interface GalleryModalProps {
  show: boolean;
  onClose: () => void;
  src: string;
  alt?: string;
}

export function GalleryModal({ show, onClose, src, alt = 'Obra de arte' }: GalleryModalProps) {
  // Cierra con la tecla Escape y bloquea el scroll del body mientras el modal está abierto
  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    // Overlay: Fondo oscuro semi-transparente que cubre toda la pantalla
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Contenedor de la imagen (detiene el clic para que no cierre el modal si tocas la foto) */}
      <div
        className="relative max-w-5xl w-full flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar (Ubicado en la esquina superior derecha) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-12 md:-top-4 text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
          aria-label="Cerrar galería"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Imagen */}
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
        />
      </div>
    </div>
  );
}
