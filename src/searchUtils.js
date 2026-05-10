/**
 * Búsqueda de productos en catálogo (normalización + coincidencia).
 */

export function normalizeSearchText(text) {
  if (!text) return ''
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .trim()
}

export function productSearchHaystack(product) {
  const parts = [
    product.title,
    product.category,
    product.family,
    product.slug,
    product.badge,
    ...(product.tags || []),
    ...(product.goals || []).join(' '),
  ]
  return normalizeSearchText(parts.filter(Boolean).join(' '))
}

export function filterProducts(products, query) {
  const q = normalizeSearchText(query)
  if (!q) return products
  return products.filter((p) => productSearchHaystack(p).includes(q))
}
