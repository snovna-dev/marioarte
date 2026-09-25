export function About() {
    return (
        <>
            {/* Contenedor principal que reemplaza a <Container> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Grid que reemplaza a <Row> y <Col> */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                
                {/* Columna de Texto */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                    Mario Suarez
                    </h2>
                    
                    {/* Elemento decorativo sutil */}
                    <div className="w-20 h-1.5 bg-indigo-600 rounded-full"></div>
                    
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                    <p>
                        Artista plástico nacido en Pitalito, Huila en julio de 1984. Autodidacta con 21 años de experiencia en dibujo, pintura y escultura. En su obra al carboncillo se destaca el retrato; en su pintura podemos observar un universo infinito compuesto de figuras orgánicas en una danza de colores vibrantes, en una narrativa acerca de la complejidad de la mente de su propio ser. 
                    </p>
                    <p>
                        En su escultura se destaca la figura humana como elemento principal. Entre sus obras se encuentran monumentos públicos y obras en colecciones privadas.
                    </p>
                    <p className="font-medium text-gray-900">
                        Su obra se encuentra en países como Estados Unidos, México, Argentina, Panamá, España y Londres.
                    </p>
                    </div>
                </div>

                {/* Columna de Imagen */}
                <div className="relative w-full h-full flex justify-center lg:justify-end">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-lg group">
                    <img
                        alt="Retrato del artista Mario Suarez" 
                        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    {/* Overlay sutil para darle un toque más premium a la imagen */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
                    </div>
                </div>

                </div>
            </div>
        </>
    );
}