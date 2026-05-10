function Breadcrumbs({ items, navigate }) {
  if (!items?.length) return null

  return (
    <nav className="breadcrumbs" aria-label="Migas de pan">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="breadcrumbs__item">
              {!isLast && item.path != null ? (
                <button type="button" className="breadcrumbs__link" onClick={() => navigate(item.path)}>
                  {item.label}
                </button>
              ) : (
                <span className={isLast ? 'breadcrumbs__current' : undefined} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
