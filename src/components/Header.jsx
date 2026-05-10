import { ChevronDown, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  crownBrandLogoUrl,
  headerFlatNavRoutes,
  isShopNavContext,
  shippingInfo,
  shopNavSubLinks,
  socialLinks,
} from '../data'

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
  const [mobileShopOpen, setMobileShopOpen] = useState(false)
  const [shopDropdownSuppress, setShopDropdownSuppress] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Sincronizar UI del desplegable al cambiar de ruta (el hover vuelve a abrir el menú sin depender del mouseLeave previo).
    setShopDropdownSuppress(false)
  }, [currentPath])

  const goTo = (path, { closeShopDropdown = false } = {}) => {
    navigate(path)
    setMobileOpen(false)
    setMobileShopOpen(false)
    if (closeShopDropdown) {
      setShopDropdownSuppress(true)
      if (typeof document !== 'undefined') document.activeElement?.blur()
    }
  }

  const highlight = navHighlightPath ?? currentPath
  const shopNavActive = isShopNavContext(highlight)

  const [inicioRoute, ...restFlatRoutes] = headerFlatNavRoutes

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
          <button
            type="button"
            className={highlight === inicioRoute.path ? 'active' : ''}
            onClick={() => goTo(inicioRoute.path)}
          >
            {inicioRoute.label}
          </button>

          <div
            className={`nav-dropdown${shopDropdownSuppress ? ' nav-dropdown--suppress-panel' : ''}`}
            onMouseLeave={() => setShopDropdownSuppress(false)}
          >
            <button
              type="button"
              className={`nav-dropdown__trigger ${shopNavActive ? 'active' : ''}`}
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Tienda, menú de categorías"
            >
              Tienda
              <ChevronDown size={16} strokeWidth={2.25} className="nav-dropdown__chevron" aria-hidden="true" />
            </button>
            <div className="nav-dropdown__panel" role="menu">
              {shopNavSubLinks.map((link) => (
                <button
                  key={link.path}
                  type="button"
                  role="menuitem"
                  className={`nav-dropdown__link ${currentPath === link.path ? 'is-active' : ''}`}
                  onClick={() => goTo(link.path, { closeShopDropdown: true })}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {restFlatRoutes.map((route) => (
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
          <button
            type="button"
            className={highlight === inicioRoute.path ? 'active' : ''}
            onClick={() => goTo(inicioRoute.path)}
          >
            {inicioRoute.label}
          </button>

          <div className={`mobile-nav__shop${mobileShopOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className={`mobile-nav__shop-toggle ${shopNavActive ? 'active' : ''}`}
              aria-expanded={mobileShopOpen}
              onClick={() => setMobileShopOpen((o) => !o)}
            >
              Tienda
              <ChevronDown size={18} className="mobile-nav__shop-chevron" aria-hidden="true" />
            </button>
            {mobileShopOpen && (
              <div className="mobile-nav__shop-panel">
                {shopNavSubLinks.map((link) => (
                  <button
                    key={link.path}
                    type="button"
                    className={currentPath === link.path ? 'active' : ''}
                    onClick={() => goTo(link.path)}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {restFlatRoutes.map((route) => (
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
