import { About } from "../features/about/components/About";
import { motion } from "motion/react";
import { staggerContainer } from "../shared/animations/variants";
import SEO from "../shared/components/SEO";

export function AboutPage() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="w-full min-h-screen flex items-center bg-gray-50 py-16 md:py-24"
    >
      <SEO
        title="Sobre Mario Suarez | Artista Plástico Colombiano"
        description="Conoce la trayectoria de Mario Suarez, artista plástico colombiano con obras en escultura, dibujo, pintura y retrato de personajes."
        path="/sobre-mi"
        type="profile"
      />
      <About/>
    </motion.div>
  );
}