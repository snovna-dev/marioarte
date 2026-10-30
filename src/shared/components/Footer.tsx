import packageInfo from '../../../package.json';
import '../../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <p>
          © TODOS LOS DERECHOS RESERVADOS -{' '}
          <a
            href="https://snovna.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Snovna
          </a>
        </p>
        <p>
          Mario Suarez Art Studio · Versión {packageInfo.version}
        </p>
      </div>
    </footer>
  );
}
