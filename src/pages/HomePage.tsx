import { Home } from '../features/home/components/Home';
import { Appreciations } from '../features/home/components/Appreciations';
import { Services } from '../features/home/components/Services';
import SEO from '../shared/components/SEO';

export function HomePage() {

  return (
    <div className="min-h-screen font-sans">
      <SEO
        title="Mario Suarez Art Studio | Pintura, Escultura y Retratos"
        description="Conoce la obra de Mario Suarez: retratos al carboncillo, pintura y escultura artística. Descubre piezas y encarga arte personalizado."
        path="/"
      />
      <Home/>
      <Appreciations/>
      <Services/>
    </div>
  );
}
