
import ServiceCard from "../features/services/components/ServiceCard";
import { services, type Service } from "../features/services/data/services";
import "../styles/services.css";

interface ServicesPageProps {
  onViewService?: (service: Service) => void;
}

export default function ServicesPage({
  onViewService,
}: ServicesPageProps) {
  return (
    <main className="services-page">
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

      <section className="services-cta">
        <div className="services-cta-content">
          <span className="services-eyebrow">PROYECTOS</span>

          <h2>¿Tienes un proyecto artístico?</h2>

          <p>
            Ponte en contacto para conocer el trabajo disponible y conversar
            sobre una nueva obra.
          </p>

          <a href="/contacto" className="services-cta-button">
            Contactar
          </a>
        </div>
      </section>
    </main>
  );
}