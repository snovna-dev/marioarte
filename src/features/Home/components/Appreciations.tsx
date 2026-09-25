import { getCloudinaryUrl } from "../../gallery/services/cloudinary";
import appreciations from "../data/appreciations.json";

export function Appreciations() {
    return (
        <>
            {/* Sección: Reconocimientos */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                Reconocimientos
                </h2>

                {/* Reconocimiento 1: imagen grande + imagen secundaria y texto */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end mb-24">
                <div className="w-full">
                    <img
                    src={getCloudinaryUrl(appreciations[0].imagenPrincipal, 900)}
                    alt={appreciations[0].titulo}
                    loading="lazy"
                    className="w-full h-[400px] lg:h-[600px] object-cover rounded-2xl shadow-xl"
                    />
                </div>
                <div className="flex flex-col space-y-6">
                    <img
                    src={getCloudinaryUrl(appreciations[0].imagenesSecundarias[0], 700)}
                    alt={`${appreciations[0].titulo} - detalle`}
                    loading="lazy"
                    className="w-full h-[250px] lg:h-[300px] object-cover rounded-2xl shadow-md"
                    />
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {appreciations[0].descripcion}
                    </p>
                    </div>
                </div>
                </div>

                {/* Reconocimiento 2: texto + galería de retratos */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 order-2 lg:order-1">
                    <p className="text-gray-700 leading-relaxed text-lg">
                    {appreciations[1].descripcion}
                    </p>
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 order-1 lg:order-2">
                    {appreciations[1].imagenesSecundarias.map((publicId, index) => (
                    <img
                        key={publicId}
                        src={getCloudinaryUrl(publicId, 500)}
                        alt={`Retrato Amway ${index + 1}`}
                        loading="lazy"
                        className="w-full h-[350px] lg:h-[500px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
                    />
                    ))}
                </div>
                </div>
            </section>
        </>
    );
}