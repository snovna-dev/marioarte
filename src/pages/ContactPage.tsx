import "../styles/contact.css";
import { Contact } from "../features/contact/components/Contact";
import { Info } from "../features/contact/components/Info";
import { motion } from "motion/react";
import { staggerContainer } from "../shared/animations/variants";
import SEO from "../shared/components/SEO";

export default function ContactPage() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="contact-page"
    >
      <SEO
        title="Contacto | Encarga Arte a Mario Suarez"
        description="Contacta a Mario Suarez para solicitar retratos personalizados, obras de arte, esculturas o proyectos artísticos."
        path="/contacto"
        type="profile"
      />
      <Contact/>
      <Info/>
    </motion.main>
  );
}