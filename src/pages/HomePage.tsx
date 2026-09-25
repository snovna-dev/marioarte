import { Home } from '../features/Home/components/Home';
import { Appreciations } from '../features/Home/components/Appreciations';
import { Services } from '../features/Home/components/Services';

export function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Home/>
      <Appreciations/>
      <Services/>
    </div>
  );
}
