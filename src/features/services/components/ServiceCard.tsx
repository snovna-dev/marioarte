import type { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
  onViewMore?: (service: Service) => void;
}

export default function ServiceCard({
  service,
  onViewMore,
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-image-container">
        <img
          src={service.image}
          alt={service.title}
          className="service-image"
          loading="lazy"
        />

        <div className="service-image-overlay" />

        <span className="service-category">{service.category}</span>
      </div>

      <div className="service-content">
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <button
          type="button"
          className="service-button"
          onClick={() => onViewMore?.(service)}
        >
          Ver obras
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}