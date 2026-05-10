import { formatEuro } from './data'

export function getCartTotals(cartItems) {
  let subtotal = 0
  let hasUnknown = false
  for (const item of cartItems) {
    const v = item.priceValue
    if (v == null || Number.isNaN(v)) {
      hasUnknown = true
      continue
    }
    subtotal += v * item.quantity
  }
  return { subtotal, hasUnknown, subtotalLabel: formatEuro(subtotal) }
}
