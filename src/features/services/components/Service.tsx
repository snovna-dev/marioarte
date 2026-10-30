import services from "../data/services.json";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "../../../shared/animations/variants";

export function Service() {
    return (
        <>
            <motion.section variants={fadeUp} className="services-header">
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
            </motion.section>

            <motion.section
                variants={staggerContainer}
                className="services-section"
            >
                <div className="services-container">
                <motion.div variants={fadeUp} className="services-introduction">
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
                </motion.div>

                <motion.div variants={staggerContainer} className="services-grid">
                    {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                    />
                    ))}
                </motion.div>
                </div>
            </motion.section>
        </>
    );
}