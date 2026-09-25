import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
}

interface GalleryProps {
    onViewService?: (service: Service) => void;
}

export function Service({ onViewService }: GalleryProps) {
    return (
        <>
            <section className="services-header">
                <div className="services-header-content">
                <span className="services-eyebrow">MARIOARTE</span>

                <h1>
                    Servicios y
                    <span> obras</span>
                </h1>

                <p>
                    Descubre las diferentes expresiones artísticas de Mario Suarez:
                    escultura y retrato.
                </p>
                </div>
            </section>

            <section className="services-section">
                <div className="services-container">
                <div className="services-introduction">
                    <div>
                    <span className="section-eyebrow">DISCIPLINAS</span>

                    <h2>
                        Arte que
                        <span> comunica</span>
                    </h2>
                    </div>

                    <p>
                    Cada pieza nace de una búsqueda personal de expresión, explorando
                    formas, emociones, texturas y la figura humana.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onViewMore={onViewService}
                    />
                    ))}
                </div>
                </div>
            </section>
        </>
    );
}