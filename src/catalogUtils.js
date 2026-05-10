/**
 * Ordenación de listados de catálogo (prototipo).
 */

export function sortCatalogProducts(products, sortBy) {
  const list = [...products]
  switch (sortBy) {
    case 'featured':
      return list.sort((a, b) => {
        const fs = (b.featured === true ? 1 : 0) - (a.featured === true ? 1 : 0)
        if (fs !== 0) return fs
        return a.title.localeCompare(b.title, 'es')
      })
    case 'name-asc':
      return list.sort((a, b) => a.title.localeCompare(b.title, 'es'))
    case 'price-asc':
      return list.sort((a, b) => comparePrice(a, b, 'asc'))
    case 'price-desc':
      return list.sort((a, b) => comparePrice(a, b, 'desc'))
    default:
      return list
  }
}

function comparePrice(a, b, dir) {
  const av = a.priceValue
  const bv = b.priceValue
  if (av == null && bv == null) return a.title.localeCompare(b.title, 'es')
  if (av == null) return 1
  if (bv == null) return -1
  const cmp = av - bv
  if (cmp !== 0) return dir === 'asc' ? cmp : -cmp
  return a.title.localeCompare(b.title, 'es')
}
