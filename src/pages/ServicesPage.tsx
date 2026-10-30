
import { Service } from "../features/services/components/Service";
import { ServiceContact } from "../features/services/components/ServiceContact";
import { motion } from "motion/react";
import { staggerContainer } from "../shared/animations/variants";
import SEO from "../shared/components/SEO";

export default function ServicesPage() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="services-page"
    >
      <SEO
        title="Servicios de Arte | Retratos, Pintura y Esculturas"
        description="Servicios artísticos personalizados de Mario Suarez: retratos al carboncillo, pintura y escultura para colecciones, proyectos y espacios."
        path="/servicios"
      />
      <Service/>
      <ServiceContact/>
    </motion.main>
  );
}