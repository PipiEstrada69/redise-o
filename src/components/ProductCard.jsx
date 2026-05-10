import { ArrowRight, ShoppingBag } from 'lucide-react'

function ProductCard({ product, navigate, onAdd }) {
  const goDetail = () => navigate(product.path)

  return (
    <article className="product-card product-card--clickable" onClick={goDetail}>
      <div className="product-card__visual">
        <span className="product-card__badge">{product.badge}</span>
        {product.image ? (
          <img
            className="product-card__img"
            src={product.image}
            alt={product.imageAlt || product.title}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="bar-visual" aria-hidden="true">
            <div />
            <strong>{product.title}</strong>
          </div>
        )}
      </div>
      <div className="product-card__body">
        <p className="eyebrow">{product.category}</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        {product.tags?.length > 0 && (
          <div className="tag-row">
            {product.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        <div className="product-card__footer">
          <div>
            <strong>{product.price}</strong>
            {product.family && <small>{product.family}</small>}
          </div>
          <div className="product-card__actions">
            <button
              type="button"
              className="icon-button"
              onClick={(e) => {
                e.stopPropagation()
                onAdd(product)
              }}
              aria-label="Añadir al carrito visual"
            >
              <ShoppingBag size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="text-link"
              onClick={(e) => {
                e.stopPropagation()
                goDetail()
              }}
            >
              Ver <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
