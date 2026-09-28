import { getCloudinaryVideoUrl } from "../../../shared/services/cloudinary";
import { motion } from "motion/react";

export function Home() {
  const videoUrl = getCloudinaryVideoUrl(
    "bg_1"
  );

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Video de fondo */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>

      {/* Capa oscura sobre el video */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 px-4 text-center text-white">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-4xl font-extrabold md:text-6xl"
        >
          Escultor, pintor y{" "}
          <span className="text-primary">
            amante del arte
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary"
        />

      </div>

    </section>
  );
}