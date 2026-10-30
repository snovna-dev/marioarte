
import { Service } from "../features/services/components/Service";
import { ServiceContact } from "../features/services/components/ServiceContact";
import { motion } from "motion/react";
import { staggerContainer } from "../shared/animations/variants";

export default function ServicesPage() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="services-page"
    >
      <Service/>
      <ServiceContact/>
    </motion.main>
  );
}