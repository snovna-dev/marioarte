import { getCloudinaryUrl } from "../../../shared/services/cloudinary";
import appreciations from "../data/appreciations.json";

export function Appreciations() {
  const martinez = appreciations.find(
    (item) => item.id === "martinez-pinky"
  );

  const amway = appreciations.find(
    (item) => item.id === "amway"
  );

  if (!martinez || !amway) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
        Reconocimientos
      </h2>

      {/* Reconocimiento 1 */}
      <div className="mb-24 grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-12">

        <div className="w-full">
          <img
            src={getCloudinaryUrl(martinez.images[0].publicId, 600)}
            alt={martinez.images[0].alt}
            loading="lazy"
            className="h-[400px] w-full rounded-2xl object-cover shadow-xl lg:h-[600px]"
          />
        </div>

        <div className="flex flex-col space-y-6">

          <img
            src={getCloudinaryUrl(martinez.images[1].publicId, 700)}
            alt={martinez.images[1].alt}
            loading="lazy"
            className="h-[250px] w-full rounded-2xl object-cover shadow-md lg:h-[300px]"
          />

          <div className="rounded-2xl border border-border bg-bg p-6 shadow-sm md:p-8">
            <p className="text-lg leading-relaxed text-text">
              {martinez.descripcion}
            </p>
          </div>

        </div>
      </div>

      {/* Reconocimiento 2 */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">

        <div className="order-2 rounded-2xl border border-border bg-bg p-6 shadow-sm lg:order-1 lg:col-span-5 md:p-8">
          <p className="text-lg leading-relaxed text-text">
            {amway.descripcion}
          </p>
        </div>

        <div className="order-1 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:order-2 lg:col-span-7">

          {amway.images.map((image, index) => (
            <img
              key={image.publicId}
              src={getCloudinaryUrl(image.publicId, 500)}
              alt={image.alt}
              loading="lazy"
              className="h-[350px] w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-[1.02] lg:h-[500px]"
            />
          ))}

        </div>

      </div>
    </section>
  );
}