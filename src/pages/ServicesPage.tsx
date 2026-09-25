
import { Service } from "../features/services/components/Service";
import { ServiceContact } from "../features/services/components/ServiceContact";

export default function ServicesPage() {
  return (
    <main className="services-page">
      <Service/>
      <ServiceContact/>
    </main>
  );
}