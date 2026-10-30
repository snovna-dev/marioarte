import { motion } from "motion/react";
import { fadeUp } from "../../../shared/animations/variants";

export function ServiceContact() {
    return (
        <motion.section
            variants={fadeUp}
            whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="services-cta"
        >
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
        </motion.section>
    );
}