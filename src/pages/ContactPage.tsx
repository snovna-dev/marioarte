import "../styles/contact.css";
import { Contact } from "../features/contact/components/Contact";
import { Info } from "../features/contact/components/Info";
import { motion } from "motion/react";
import { staggerContainer } from "../shared/animations/variants";

export default function ContactPage() {
  return (
    <motion.main
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="contact-page"
    >
      <Contact/>
      <Info/>
    </motion.main>
  );
}