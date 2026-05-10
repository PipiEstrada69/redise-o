import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { contactInfo, crownBrandLogoUrl, routes, socialLinks } from '../data'

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <button type="button" className="brand brand--footer" onClick={() => navigate('/')}>
            <img
              className="brand__logo"
              src={crownBrandLogoUrl}
              alt=""
              width={152}
              height={40}
              decoding="async"
            />
            <span className="brand__text">
              <strong>Crown Sport Nutrition</strong>
              <small>Propuesta de rediseño</small>
            </span>
          </button>
          <p>
            Ecommerce deportivo premium pensado para ordenar categorías, ciencia,
            producto y navegación en un prototipo académico.
          </p>
        </div>
        <div>
          <h3>Explorar</h3>
          {routes.slice(1, 6).map((route) => (
            <button type="button" key={route.path} onClick={() => navigate(route.path)}>
              {route.label}
            </button>
          ))}
        </div>
        <div>
          <h3>Contenido</h3>
          {routes.slice(6).map((route) => (
            <button type="button" key={route.path} onClick={() => navigate(route.path)}>
              {route.label}
            </button>
          ))}
        </div>
        <div>
          <h3>Referencia visual</h3>
          <p><Mail size={16} aria-hidden="true" /> {contactInfo.email}</p>
          <p><MapPin size={16} aria-hidden="true" /> {contactInfo.address}</p>
          <p><MessageCircle size={16} aria-hidden="true" /> WhatsApp {contactInfo.whatsapp}</p>
          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="academic-warning">
        Prototipo académico no oficial. Rediseño visual sin afiliación con Crown Sport Nutrition.
      </div>
    </footer>
  )
}

export default Footer
