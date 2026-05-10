import { Minus, Plus, ShoppingBag, X } from 'lucide-react'

function CartDrawer({ isOpen, cartItems, onClose, onQuantityChange }) {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

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
            {cartItems.map((item) => (
              <article className="cart-item" key={`${item.id}-${item.format}-${item.flavor}`}>
                <div className="cart-item__thumb">
                  {item.image ? (
                    <img src={item.image} alt="" decoding="async" />
                  ) : (
                    <span aria-hidden="true">·</span>
                  )}
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.format}</p>
                  <p>{item.flavor}</p>
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
            ))}
          </div>
        )}

        <div className="drawer-summary">
          <div>
            <span>Total estimado</span>
            <strong>Visual</strong>
          </div>
          <button type="button" disabled>
            Finalizar compra desactivado
          </button>
          <p>Este prototipo no procesa pagos ni recoge datos reales.</p>
        </div>
      </aside>
    </div>
  )
}

export default CartDrawer
