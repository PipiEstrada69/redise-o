import { Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { crownBrandLogoUrl, routes, shippingInfo, socialLinks } from '../data'

function Header({
  currentPath,
  navHighlightPath,
  navigate,
  cartCount,
  onCartOpen,
  onSearchOpen,
  onAccountOpen,
  mobileOpen,
  setMobileOpen,
}) {
  const goTo = (path) => {
    navigate(path)
    setMobileOpen(false)
  }

  const highlight = navHighlightPath ?? currentPath

  return (
    <header className="site-header">
      <div className="shipping-notice">
        <span>{shippingInfo[0]}</span>
        <div>
          {socialLinks.slice(0, 3).map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="top-notice">
        Prototipo académico navegable. Compras, pagos y formularios desactivados.
      </div>
      <div className="nav-shell">
        <button
          type="button"
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <button type="button" className="brand" onClick={() => goTo('/')}>
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
            <small>Rediseño académico</small>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {routes.slice(1).map((route) => (
            <button
              type="button"
              key={route.path}
              className={highlight === route.path ? 'active' : ''}
              onClick={() => goTo(route.path)}
            >
              {route.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button type="button" className="icon-button" onClick={onSearchOpen} aria-label="Abrir búsqueda">
            <Search size={20} />
          </button>
          <button type="button" className="icon-button" onClick={onAccountOpen} aria-label="Abrir cuenta">
            <UserRound size={20} />
          </button>
          <button type="button" className="cart-button" onClick={onCartOpen} aria-label="Abrir carrito visual">
            <ShoppingBag size={20} />
            <span>{cartCount}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {routes.map((route) => (
            <button
              type="button"
              key={route.path}
              className={highlight === route.path ? 'active' : ''}
              onClick={() => goTo(route.path)}
            >
              {route.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
