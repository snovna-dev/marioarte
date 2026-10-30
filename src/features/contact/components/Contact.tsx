import { motion } from "motion/react";
import { fadeUp } from "../../../shared/animations/variants";

export function Contact() {
    return (
        <>
            <motion.section
                variants={fadeUp}
                className="contact-hero"
                whileHover={{
                    y: -8,
                    transition: { duration: 0.25, ease: "easeOut" },
                }}
            >
                <div className="contact-hero-overlay" />

                <div className="contact-hero-content">
                <span className="contact-eyebrow">ARTISTA PLÁSTICO</span>

                <h1>Mario Suarez</h1>

                <p>
                    Arte, sensibilidad y expresión a través del dibujo, la pintura y
                    la escultura.
                </p>

                <a href="#contact-information" className="contact-hero-button">
                    Conocer al artista
                </a>
                </div>
            </motion.section>
        </>
    );
}