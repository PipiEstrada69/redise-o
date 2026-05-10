import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatEuro } from '../data'
import { getCartTotals } from '../cartUtils'

function CartDrawer({ isOpen, cartItems, onClose, onQuantityChange, onBeginCheckout }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const { subtotal, hasUnknown, subtotalLabel } = getCartTotals(cartItems)

  return (
    <div className={`drawer-layer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <button type="button" className="drawer-backdrop" onClick={onClose} aria-label="Cerrar carrito" />
      <aside className="cart-drawer" aria-label="Carrito lateral visual">
        <div className="drawer-header">
          <div>
            <p className="eyebrow">Carrito visual</p>
            <h2>{totalItems} producto(s)</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar carrito">
            <X size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-state">
            <ShoppingBag size={38} aria-hidden="true" />
            <h3>Carrito vacío</h3>
            <p>Añade productos para ver cómo funcionaría la experiencia. No hay compra real.</p>
          </div>
        ) : (
          <div className="cart-list">
            {cartItems.map((item) => {
              const lineTotal =
                item.priceValue != null && !Number.isNaN(item.priceValue)
                  ? item.priceValue * item.quantity
                  : null
              return (
                <article className="cart-item" key={`${item.id}-${item.format}-${item.flavor}`}>
                  <div className="cart-item__thumb">
                    {item.image ? (
                      <img src={item.image} alt="" decoding="async" />
                    ) : (
                      <span aria-hidden="true">·</span>
                    )}
                  </div>
                  <div className="cart-item__body">
                    <h3>{item.name}</h3>
                    <p>{item.format}</p>
                    <p>{item.flavor}</p>
                    <div className="cart-item__prices">
                      <span className="cart-item__unit">
                        {item.priceValue != null ? `${formatEuro(item.priceValue)} / u.` : 'Precio no disponible'}
                      </span>
                      {lineTotal != null && (
                        <span className="cart-item__linetotal">{formatEuro(lineTotal)}</span>
                      )}
                    </div>
                    <div className="quantity-control">
                      <button type="button" onClick={() => onQuantityChange(item, -1)} aria-label="Reducir cantidad">
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => onQuantityChange(item, 1)} aria-label="Aumentar cantidad">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        <div className="drawer-summary">
          <div className="drawer-summary__row">
            <span>Total estimado (IVA incl.)</span>
            <strong>{hasUnknown && subtotal === 0 ? '—' : subtotalLabel}</strong>
          </div>
          {hasUnknown && (
            <p className="drawer-summary__hint">Alguna línea no tiene precio numérico en el prototipo.</p>
          )}
          <button
            type="button"
            className="primary-button drawer-summary__cta"
            disabled={cartItems.length === 0}
            onClick={() => {
              if (cartItems.length > 0) onBeginCheckout?.()
            }}
          >
            Ir al checkout (demo)
          </button>
          <p>Este prototipo no procesa pagos ni recoge datos reales.</p>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
