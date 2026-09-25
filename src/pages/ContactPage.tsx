import "../styles/contact.css";
import { Contact } from "../features/contact/components/Contact";
import { Info } from "../features/contact/components/Info";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Contact/>
      <Info/>
    </main>
  );
}