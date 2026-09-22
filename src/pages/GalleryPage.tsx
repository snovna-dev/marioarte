import { Gallery } from "../features/gallery/components/Gallery";

export function GalleryPage() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">
        Galería
      </h1>

      <Gallery onSelect={() => {}} />
    </section>
  );
}