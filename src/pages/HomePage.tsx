import { useState } from 'react';
import { GalleryModal } from '../shared/components/GalleryModal';

// ---------------------------------------------------------------------------
// Cloudinary
// ---------------------------------------------------------------------------
// Define VITE_CLOUDINARY_CLOUD_NAME en tu archivo .env (raíz del proyecto):
//   VITE_CLOUDINARY_CLOUD_NAME=tu_cloud_name
//
// Si ya tienes un helper de Cloudinary en el proyecto (p. ej. en
// src/shared/lib/cloudinary.ts), elimina este bloque y usa ese en su lugar.

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string;

interface CloudinaryImageOptions {
  width?: number;
  quality?: 'auto' | number;
  format?: 'auto' | 'jpg' | 'png' | 'webp';
}

/**
 * Construye la URL de una imagen alojada en Cloudinary a partir de su public_id.
 */
function getCloudinaryUrl(publicId: string, options: CloudinaryImageOptions = {}): string {
  const { width, quality = 'auto', format = 'auto' } = options;

  const transformations = [
    'f_' + format,
    'q_' + quality,
    width ? `w_${width}` : null,
    'c_fill',
  ]
    .filter(Boolean)
    .join(',');

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId}`;
}

// ---------------------------------------------------------------------------
// Datos
// ---------------------------------------------------------------------------
// Reemplaza cada publicId por el que corresponda en tu Cloudinary Media Library.

interface Reconocimiento {
  id: string;
  titulo: string;
  descripcion: string;
  imagenPrincipal: string;
  imagenesSecundarias: string[];
}

const RECONOCIMIENTOS: Reconocimiento[] = [
  {
    id: 'martinez-pinky',
    titulo: 'Sra. Martínez & Pinky',
    descripcion:
      'Al conocer a la Sra. Martínez en un centro comercial, ella es la cabeza de una función en la cual ayuda a perritos en estado de abandono y callejeros; ese fue un evento organizado por la alcaldía de Ibagué. Fue la última rendición de cuentas del entonces alcalde Guillermo Alfonso Jaramillo. Ese dibujo fue un retrato de su mascota Pinky y fue un obsequio en agradecimiento por su labor en cuanto a la creación de espacios para nuestras mascotas en la ciudad.',
    imagenPrincipal: 'portafolio/reconocimientos/img_1',
    imagenesSecundarias: ['portafolio/reconocimientos/img_2'],
  },
  {
    id: 'amway',
    titulo: 'Amway',
    descripcion:
      'Al participar del negocio de Amway me di a conocer como artista y asistí a muchos eventos en los cuales mi boleto de entrada fueron los retratos de los oradores de cada evento. En este caso, los oradores de ese evento fueron Jerónimo Vásquez (Diamante de Amway) y Eliana Chacón (Esmeralda de Amway), ambos de Colombia. De esta forma mis obras viajaron a Sur, Centro y Norteamérica.',
    imagenPrincipal: '',
    imagenesSecundarias: [
      'portafolio/amway/img_3',
      'portafolio/amway/img_4',
      'portafolio/amway/img_5',
    ],
  },
];

interface Servicio {
  id: 'esculturas' | 'retratos';
  titulo: string;
  imagenFondo: string;
}

const SERVICIOS: Servicio[] = [
  { id: 'esculturas', titulo: 'Esculturas', imagenFondo: 'portafolio/servicios/bg_1' },
  { id: 'retratos', titulo: 'Retratos', imagenFondo: 'portafolio/servicios/bg_2' },
];

// ---------------------------------------------------------------------------
// Componente
// ---------------------------------------------------------------------------

export function HomePage() {
  const [modalAbierto, setModalAbierto] = useState<Servicio['id'] | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Título Principal / Hero */}
      <header className="bg-white shadow-sm py-16 sm:py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
          Escultor, pintor y <span className="text-indigo-600">amante del arte</span>
        </h1>
        <div className="mt-4 w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
      </header>

      {/* Sección: Reconocimientos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Reconocimientos
        </h2>

        {/* Reconocimiento 1: imagen grande + imagen secundaria y texto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-24">
          <div className="w-full">
            <img
              src={getCloudinaryUrl(RECONOCIMIENTOS[0].imagenPrincipal, { width: 900 })}
              alt={RECONOCIMIENTOS[0].titulo}
              loading="lazy"
              className="w-full h-[400px] lg:h-[600px] object-cover rounded-2xl shadow-xl"
            />
          </div>
          <div className="flex flex-col space-y-6">
            <img
              src={getCloudinaryUrl(RECONOCIMIENTOS[0].imagenesSecundarias[0], { width: 700 })}
              alt={`${RECONOCIMIENTOS[0].titulo} - detalle`}
              loading="lazy"
              className="w-full h-[250px] lg:h-[300px] object-cover rounded-2xl shadow-md"
            />
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg">
                {RECONOCIMIENTOS[0].descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* Reconocimiento 2: texto + galería de retratos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 order-2 lg:order-1">
            <p className="text-gray-700 leading-relaxed text-lg">
              {RECONOCIMIENTOS[1].descripcion}
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 order-1 lg:order-2">
            {RECONOCIMIENTOS[1].imagenesSecundarias.map((publicId, index) => (
              <img
                key={publicId}
                src={getCloudinaryUrl(publicId, { width: 500 })}
                alt={`Retrato Amway ${index + 1}`}
                loading="lazy"
                className="w-full h-[350px] lg:h-[500px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Servicios */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SERVICIOS.map((servicio) => (
              <div key={servicio.id} className="group relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="md:h-[28rem]">
                  <img
                    src={getCloudinaryUrl(servicio.imagenFondo, { width: 800 })}
                    alt={`Servicio de ${servicio.titulo}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start">
                  <h3 className="text-3xl font-bold text-white mb-4">{servicio.titulo}</h3>
                  <button
                    type="button"
                    onClick={() => setModalAbierto(servicio.id)}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300 backdrop-blur-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal único, controlado por el servicio seleccionado */}
      {modalAbierto && (
        <GalleryModal
          show={Boolean(modalAbierto)}
          onClose={() => setModalAbierto(null)}
          src={getCloudinaryUrl(
            SERVICIOS.find((s) => s.id === modalAbierto)?.imagenFondo ?? '',
            { width: 1200 }
          )}
          alt={modalAbierto === 'esculturas' ? 'Escultura en bronce' : 'Retrato'}
        />
      )}
    </div>
  );
}
