import { useState } from "react";
import { getCloudinaryUrl } from "../../gallery/services/cloudinary";
import services from "../data/services.json";
import { GalleryModal } from "../../../shared/components/GalleryModal";
import type { Service } from "../types/Service";


export function Services() {
    const [modalAbierto, setModalAbierto] = useState<Service['id'] | null>(null);

    return (
        <>
            {/* Sección: Servicios */}
            <section className="bg-background py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    Servicios
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {services.map((servicio) => (
                    <div key={servicio.id} className="group relative rounded-2xl overflow-hidden shadow-2xl">
                        <div className="md:h-[28rem]">
                        <img
                            src={getCloudinaryUrl(servicio.imagenFondo, 800)}
                            alt={`Servicio de ${servicio.titulo}`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start">
                        <h3 className="text-3xl font-bold text-white mb-4">{servicio.titulo}</h3>
                        <button
                            type="button"
                            // onClick={() => setModalAbierto(servicio.id)}
                            className="text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                        >
                            Ver más
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Modal único, controlado por el servicio seleccionado */}
            {modalAbierto && (
                <GalleryModal
                show={Boolean(modalAbierto)}
                onClose={() => setModalAbierto(null)}
                src={getCloudinaryUrl(
                    services.find((s) => s.id === modalAbierto)?.imagenFondo ?? '', 1200
                )}
                alt={modalAbierto === 'esculturas' ? 'Escultura en bronce' : 'Retrato'}
                />
            )}
        </>
    );
}