import { getCloudinaryUrl } from "../../../shared/services/cloudinary";
import type { Service } from "../types/Service";
import { motion } from "motion/react";
import { fadeUp } from "../../../shared/animations/variants";


interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="service-card"
    >
      <div className="service-image-container">
        <img
          src={getCloudinaryUrl(service.publicId, 800)}
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

        <a href="/galeria" className="service-button" aria-label={`Ver obras de ${service.title}`}>
          Ver obras
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </motion.article>
  );
}