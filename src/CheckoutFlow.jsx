import {
  Building2,
  CheckCircle2,
  CreditCard,
  MapPin,
  Package,
  ShieldCheck,
  Smartphone,
  Truck,
} from 'lucide-react'
import Breadcrumbs from './components/Breadcrumbs'
import { formatEuro } from './data'
import { getCartTotals } from './cartUtils'

function CheckoutSteps({ current }) {
  const steps = [
    { id: 'resumen', label: 'Resumen' },
    { id: 'envio', label: 'Envío' },
    { id: 'pago', label: 'Pago' },
    { id: 'confirmacion', label: 'Confirmación' },
  ]
  const idx = steps.findIndex((s) => s.id === current)
  return (
    <ol className="checkout-steps" aria-label="Pasos del checkout simulado">
      {steps.map((step, i) => (
        <li
          key={step.id}
          className={`checkout-steps__item${i === idx ? ' is-current' : ''}${i < idx ? ' is-done' : ''}${i > idx ? ' is-todo' : ''}`}
        >
          <span className="checkout-steps__num">{i + 1}</span>
          <span>{step.label}</span>
        </li>
      ))}
    </ol>
  )
}

function CartLinesReadOnly({ cartItems }) {
  return (
    <ul className="checkout-lines">
      {cartItems.map((item) => (
        <li key={`${item.id}-${item.format}-${item.flavor}`} className="checkout-lines__row">
      <div className="checkout-lines__main">
            <strong>{item.name}</strong>
            <span className="checkout-lines__meta">
              {item.format} · {item.flavor}
            </span>
          </div>
          <span className="checkout-lines__qty">×{item.quantity}</span>
          <span className="checkout-lines__price">
            {item.priceValue != null && !Number.isNaN(item.priceValue)
              ? formatEuro(item.priceValue * item.quantity)
              : '—'}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function CheckoutEmpty({ navigate }) {
  return (
    <section className="section checkout-page">
      <div className="checkout-inner">
        <Breadcrumbs
          items={[{ label: 'Inicio', path: '/' }, { label: 'Checkout' }]}
          navigate={navigate}
        />
        <div className="checkout-card">
          <h1>Carrito vacío</h1>
          <p>No hay productos para finalizar. Añade referencias desde la tienda para recorrer el checkout de demostración.</p>
          <button type="button" className="primary-button" onClick={() => navigate('/tienda')}>
            Ir a la tienda
          </button>
        </div>
      </div>
    </section>
  )
}

export function CheckoutSummaryPage({ navigate, cartItems }) {
  const { subtotal, hasUnknown, subtotalLabel } = getCartTotals(cartItems)

  return (
    <section className="section checkout-page">
      <div className="checkout-inner">
        <Breadcrumbs
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Checkout', path: '/checkout' },
            { label: 'Resumen' },
          ]}
          navigate={navigate}
        />
        <CheckoutSteps current="resumen" />
        <div className="checkout-card">
          <div className="checkout-card__head">
            <Package size={22} aria-hidden="true" />
            <div>
              <p className="eyebrow">Paso 1</p>
              <h1>Resumen del pedido</h1>
              <p className="checkout-note">Vista de demostración. Los importes reflejan precios del prototipo cuando están disponibles.</p>
            </div>
          </div>
          <CartLinesReadOnly cartItems={cartItems} />
          <div className="checkout-totals">
            <div className="checkout-totals__row">
              <span>Subtotal estimado (IVA incl.)</span>
              <strong>{hasUnknown && subtotal === 0 ? '—' : subtotalLabel}</strong>
            </div>
            {hasUnknown && (
              <p className="checkout-note checkout-note--warn">
                Alguna línea no tiene precio numérico en el prototipo; el total puede estar incompleto.
              </p>
            )}
            <div className="checkout-totals__row checkout-totals__row--muted">
              <span>Envío</span>
              <span>Según dirección (simulado)</span>
            </div>
          </div>
          <div className="checkout-actions">
            <button type="button" className="secondary-button" onClick={() => navigate('/tienda')}>
              Seguir comprando
            </button>
            <button type="button" className="primary-button" onClick={() => navigate('/checkout/envio')}>
              Continuar a envío
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CheckoutShippingPage({ navigate, cartItems }) {
  const { subtotal, hasUnknown, subtotalLabel } = getCartTotals(cartItems)

  return (
    <section className="section checkout-page">
      <div className="checkout-inner">
        <Breadcrumbs
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Checkout', path: '/checkout' },
            { label: 'Envío' },
          ]}
          navigate={navigate}
        />
        <CheckoutSteps current="envio" />
        <div className="checkout-card">
          <div className="checkout-card__head">
            <Truck size={22} aria-hidden="true" />
            <div>
              <p className="eyebrow">Paso 2</p>
              <h1>Datos de envío</h1>
              <p className="checkout-note">
                Formulario no funcional: no se valida ni envía información. Sirve solo para la presentación del flujo.
              </p>
            </div>
          </div>
          <form className="visual-form checkout-form" onSubmit={(e) => e.preventDefault()}>
            <div className="checkout-form__grid">
              <label>
                Nombre y apellidos
                <input name="name" autoComplete="off" placeholder="Nombre completo" />
              </label>
              <label>
                Teléfono
                <input name="phone" autoComplete="off" placeholder="+34 600 000 000" />
              </label>
              <label className="checkout-form__full">
                Dirección
                <input name="address" autoComplete="off" placeholder="Calle, número, piso" />
              </label>
              <label>
                Código postal
                <input name="postal" autoComplete="off" placeholder="28001" />
              </label>
              <label>
                Localidad
                <input name="city" autoComplete="off" placeholder="Madrid" />
              </label>
              <label>
                Provincia
                <input name="region" autoComplete="off" placeholder="Madrid" />
              </label>
            </div>
            <label className="checkout-form__checkbox">
              <input type="checkbox" defaultChecked />
              Usar la misma dirección para la factura (simulado)
            </label>
            <p className="checkout-form__legal">
              <MapPin size={16} aria-hidden="true" />
              Entrega 24/48h Península (texto de referencia; no vinculante en este prototipo).
            </p>
          </form>
          <aside className="checkout-mini-summary">
            <strong>Resumen</strong>
            <CartLinesReadOnly cartItems={cartItems} />
            <div className="checkout-totals__row">
              <span>Subtotal</span>
              <strong>{hasUnknown && subtotal === 0 ? '—' : subtotalLabel}</strong>
            </div>
          </aside>
          <div className="checkout-actions">
            <button type="button" className="secondary-button" onClick={() => navigate('/checkout')}>
              Volver
            </button>
            <button type="button" className="primary-button" onClick={() => navigate('/checkout/pago')}>
              Continuar al pago
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CheckoutPaymentPage({ navigate, cartItems, onCompleteOrder }) {
  const { subtotal, hasUnknown, subtotalLabel } = getCartTotals(cartItems)

  const handleConfirm = () => {
    const totals = getCartTotals(cartItems)
    onCompleteOrder({
      items: cartItems.map((i) => ({ ...i })),
      ...totals,
    })
    navigate('/checkout/confirmacion')
  }

  return (
    <section className="section checkout-page">
      <div className="checkout-inner">
        <Breadcrumbs
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Checkout', path: '/checkout' },
            { label: 'Pago' },
          ]}
          navigate={navigate}
        />
        <CheckoutSteps current="pago" />
        <div className="checkout-card checkout-card--wide">
          <div className="checkout-card__head">
            <CreditCard size={22} aria-hidden="true" />
            <div>
              <p className="eyebrow">Paso 3</p>
              <h1>Pago</h1>
              <p className="checkout-note">
                Pasarela simulada: no se procesa ningún cobro ni se transmiten datos a un servidor de pago.
              </p>
            </div>
          </div>
          <div className="checkout-payment-layout">
            <div>
              <p className="checkout-section-title">Método</p>
              <div className="checkout-method-grid">
                <label className="checkout-method">
                  <input type="radio" name="pay-method" defaultChecked />
                  <CreditCard size={18} aria-hidden="true" />
                  Tarjeta (simulada)
                </label>
                <label className="checkout-method">
                  <input type="radio" name="pay-method" />
                  <Smartphone size={18} aria-hidden="true" />
                  Bizum / móvil (simulado)
                </label>
                <label className="checkout-method">
                  <input type="radio" name="pay-method" />
                  <Building2 size={18} aria-hidden="true" />
                  Transferencia (simulado)
                </label>
              </div>
              <p className="checkout-section-title">Datos de tarjeta (solo maqueta)</p>
              <form className="visual-form checkout-form" onSubmit={(e) => e.preventDefault()}>
                <label>
                  Nombre en la tarjeta
                  <input autoComplete="off" placeholder="Como figura en la tarjeta" />
                </label>
                <label>
                  Número de tarjeta
                  <input autoComplete="off" placeholder="0000 0000 0000 0000" />
                </label>
                <div className="checkout-form__grid checkout-form__grid--2">
                  <label>
                    Caducidad
                    <input autoComplete="off" placeholder="MM / AA" />
                  </label>
                  <label>
                    CVV
                    <input autoComplete="off" placeholder="•••" />
                  </label>
                </div>
              </form>
              <p className="checkout-secure">
                <ShieldCheck size={18} aria-hidden="true" />
                Iconografía de seguridad con fines visuales únicamente.
              </p>
            </div>
            <aside className="checkout-pay-summary">
              <strong>Total a pagar (simulado)</strong>
              <p className="checkout-pay-total">{hasUnknown && subtotal === 0 ? '—' : subtotalLabel}</p>
              <p className="checkout-note">IVA incluido donde aplique en el catálogo del prototipo.</p>
              <CartLinesReadOnly cartItems={cartItems} />
            </aside>
          </div>
          <div className="checkout-actions">
            <button type="button" className="secondary-button" onClick={() => navigate('/checkout/envio')}>
              Volver
            </button>
            <button type="button" className="primary-button" onClick={handleConfirm}>
              Confirmar pedido (simulado)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CheckoutConfirmationPage({ navigate, lastOrder }) {
  if (!lastOrder?.items?.length) {
    return (
      <section className="section checkout-page">
        <div className="checkout-inner">
          <Breadcrumbs
            items={[{ label: 'Inicio', path: '/' }, { label: 'Confirmación' }]}
            navigate={navigate}
          />
          <div className="checkout-card">
            <h1>Sin pedido reciente</h1>
            <p>Completa el paso de pago para ver la confirmación, o vuelve a la tienda.</p>
            <button type="button" className="primary-button" onClick={() => navigate('/tienda')}>
              Ir a la tienda
            </button>
          </div>
        </div>
      </section>
    )
  }

  const ref = `ORD-VIS-2026-${String(lastOrder.createdAt).slice(-6)}`

  return (
    <section className="section checkout-page">
      <div className="checkout-inner">
        <Breadcrumbs
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Checkout', path: '/checkout' },
            { label: 'Confirmación' },
          ]}
          navigate={navigate}
        />
        <CheckoutSteps current="confirmacion" />
        <div className="checkout-card checkout-card--success">
          <div className="checkout-card__head">
            <span className="checkout-success-icon" aria-hidden="true">
              <CheckCircle2 size={28} strokeWidth={1.5} />
            </span>
            <div>
              <p className="eyebrow">Paso 4</p>
              <h1>Pedido registrado (simulación)</h1>
              <p className="checkout-note">
                Este mensaje es solo visual. No se ha creado un pedido real ni se ha cobrado ningún importe.
              </p>
            </div>
          </div>
          <dl className="checkout-order-ref">
            <div>
              <dt>Referencia</dt>
              <dd>{ref}</dd>
            </div>
            <div>
              <dt>Importe estimado</dt>
              <dd>{lastOrder.hasUnknown && lastOrder.subtotal === 0 ? '—' : lastOrder.subtotalLabel}</dd>
            </div>
          </dl>
          <CartLinesReadOnly cartItems={lastOrder.items} />
          <div className="checkout-actions">
            <button type="button" className="primary-button" onClick={() => navigate('/')}>
              Volver al inicio
            </button>
            <button type="button" className="secondary-button" onClick={() => navigate('/tienda')}>
              Seguir explorando la tienda
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
