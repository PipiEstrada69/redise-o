import { useEffect, useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { categories, visualProducts } from '../data'
import { filterProducts } from '../searchUtils'

function SearchModal({ isOpen, onClose, navigate }) {
  const [query, setQuery] = useState('')

  const handleClose = () => {
    setQuery('')
    onClose()
  }

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setQuery('')
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const filtered = useMemo(() => filterProducts(visualProducts, query), [query])

  const featuredShortcuts = useMemo(
    () => visualProducts.filter((p) => p.featured).slice(0, 8),
    [],
  )

  if (!isOpen) return null

  const goTo = (path) => {
    navigate(path)
    setQuery('')
    onClose()
  }

  const showShortcuts = query.trim() === ''
  const resultCount = filtered.length

  return (
    <div className="modal-layer" role="dialog" aria-modal="true" aria-labelledby="search-title">
      <button type="button" className="modal-backdrop" onClick={handleClose} aria-label="Cerrar búsqueda" />
      <section className="modal-card">
        <div className="drawer-header">
          <div>
            <p className="eyebrow">Búsqueda</p>
            <h2 id="search-title">Encuentra producto rápido</h2>
          </div>
          <button type="button" className="icon-button" onClick={handleClose} aria-label="Cerrar búsqueda">
            <X size={20} />
          </button>
        </div>
        <label className="search-field">
          <Search size={20} aria-hidden="true" />
          <input
            type="search"
            placeholder="Nombre, categoría, etiqueta…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            autoFocus
          />
        </label>
        <p className="search-results-count" aria-live="polite">
          {showShortcuts
            ? 'Atajos y destacados. Escribe para filtrar el catálogo.'
            : `${resultCount} resultado(s) · prototipo académico`}
        </p>

        {showShortcuts ? (
          <>
            <p className="search-section-label">Categorías</p>
            <div className="quick-results quick-results--chips">
              {categories.map((c) => (
                <button type="button" key={c.path} className="chip-button" onClick={() => goTo(c.path)}>
                  {c.title}
                </button>
              ))}
            </div>
            {featuredShortcuts.length > 0 && (
              <>
                <p className="search-section-label">Destacados en el prototipo</p>
                <div className="quick-results quick-results--scroll">
                  {featuredShortcuts.map((product) => (
                    <button
                      type="button"
                      key={product.slug}
                      className="search-result-btn"
                      onClick={() => goTo(product.path)}
                    >
                      {product.image && (
                        <img
                          className="search-result-btn__thumb"
                          src={product.image}
                          alt=""
                          width={48}
                          height={48}
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      <span className="search-result-btn__text">
                        <span>{product.family || product.category}</span>
                        <strong>{product.title}</strong>
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="quick-results quick-results--scroll">
            {resultCount === 0 ? (
              <p className="search-empty">Prueba otra palabra o navega por categoría.</p>
            ) : (
              filtered.map((product) => (
                <button
                  type="button"
                  key={product.slug}
                  className="search-result-btn"
                  onClick={() => goTo(product.path)}
                >
                  {product.image && (
                    <img
                      className="search-result-btn__thumb"
                      src={product.image}
                      alt=""
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <span className="search-result-btn__text">
                    <span>{product.family || product.category}</span>
                    <strong>{product.title}</strong>
                  </span>
                </button>
              ))
            )}
          </div>
        )}
      </section>
    </div>
  )
}

export default SearchModal
