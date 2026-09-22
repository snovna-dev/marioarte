import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/contact.css";

interface ContactPageProps {
  logo?: string;
}

export default function ContactPage({ logo }: ContactPageProps) {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay" />

        <div className="contact-hero-content">
          <span className="contact-eyebrow">ARTISTA PLÁSTICO</span>

          <h1>Mario Suarez</h1>

          <p>
            Arte, sensibilidad y expresión a través del dibujo, la pintura y
            la escultura.
          </p>

          <a href="#contact-information" className="contact-hero-button">
            Conocer al artista
          </a>
        </div>
      </section>

      <section id="contact-information" className="contact-section">
        <div className="contact-container">
          <div className="artist-card">
            <div className="artist-card-header">
              <div className="artist-logo-wrapper">
                {logo ? (
                  <img
                    src={logo}
                    alt="Logo MarioArte"
                    className="artist-logo"
                  />
                ) : (
                  <div className="artist-logo-placeholder">M</div>
                )}
              </div>

              <div>
                <span className="artist-label">MARIOARTE</span>
                <h2>Mario Suarez</h2>
                <p>Artista plástico</p>
              </div>
            </div>

            <div className="artist-contact-list">
              <a
                href="mailto:marioesculturas@yahoo.es"
                className="artist-contact-item"
              >
                <span className="contact-icon">
                  <FaEnvelope />
                </span>

                <span>
                  <small>Correo electrónico</small>
                  marioesculturas@yahoo.es
                </span>
              </a>

              <a
                href="https://wa.me/573197189616"
                target="_blank"
                rel="noopener noreferrer"
                className="artist-contact-item"
              >
                <span className="contact-icon">
                  <FaWhatsapp />
                </span>

                <span>
                  <small>WhatsApp</small>
                  +57 319 718 9616
                </span>
              </a>

              <div className="artist-contact-item">
                <span className="contact-icon">
                  <FaMapMarkerAlt />
                </span>

                <span>
                  <small>Origen</small>
                  Pitalito, Huila - Colombia
                </span>
              </div>
            </div>

            <div className="social-section">
              <span>Sígueme en redes sociales</span>

              <div className="social-links">
                <a
                  href="https://wa.me/573197189616"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="social-link whatsapp"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://www.facebook.com/Artvid.arteypublicidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-link facebook"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/mario.suarez_art.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-link instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="artist-biography">
            <span className="section-eyebrow">SOBRE EL ARTISTA</span>

            <h2>
              Mario
              <span> Suarez</span>
            </h2>

            <div className="biography-line" />

            <p>
              Artista plástico nacido en Pitalito, Huila, en julio de 1984,
              autodidacta con más de 21 años de experiencia en dibujo, pintura
              y escultura.
            </p>

            <p>
              En su obra al carboncillo se destaca el retrato. En su pintura
              podemos observar un universo infinito compuesto de figuras
              orgánicas en una danza de colores vibrantes, desarrollando una
              narrativa acerca de la complejidad de la mente y de su propio
              ser.
            </p>

            <p>
              En su escultura se destaca la figura humana como elemento
              principal. Entre sus obras se encuentran monumentos públicos y
              piezas pertenecientes a colecciones privadas.
            </p>

            <p>
              Su obra se encuentra en países como Estados Unidos, México,
              Argentina, Panamá, España y Londres.
            </p>

            <div className="artist-stats">
              <div>
                <strong>21+</strong>
                <span>Años de experiencia</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Disciplinas artísticas</span>
              </div>

              <div>
                <strong>6+</strong>
                <span>Países con obras</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}