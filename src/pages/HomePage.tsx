import { Home } from '../features/home/components/Home';
import { Appreciations } from '../features/home/components/Appreciations';
import { Services } from '../features/home/components/Services';

export function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Home/>
      <Appreciations/>
      <Services/>
    </div>
  );
}
