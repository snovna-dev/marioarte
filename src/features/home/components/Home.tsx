import { getCloudinaryVideoUrl } from "../../../shared/services/cloudinary";

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

        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Escultor, pintor y{" "}
          <span className="text-primary">
            amante del arte
          </span>
        </h1>

        <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary" />

      </div>

    </section>
  );
}