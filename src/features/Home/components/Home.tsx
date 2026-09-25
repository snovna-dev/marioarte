export function Home() {
    return (
        <>
            {/* Título Principal / Hero */}
            <header className="bg-white shadow-sm py-16 sm:py-24 text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                Escultor, pintor y <span className="text-indigo-600">amante del arte</span>
                </h1>
                <div className="mt-4 w-24 h-1.5 bg-indigo-600 mx-auto rounded-full" />
            </header>
        </>
    );
}