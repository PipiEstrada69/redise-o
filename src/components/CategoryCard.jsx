import { ArrowRight } from 'lucide-react'

function CategoryCard({ category, navigate }) {
  const Icon = category.icon

  const go = () => navigate(category.path)

  return (
    <article className="category-card category-card--clickable" onClick={go}>
      <div className="category-card__icon">
        <Icon size={24} aria-hidden="true" />
      </div>
      <span>{category.tag}</span>
      <h3>{category.title}</h3>
      <p className="category-card__copy">{category.description}</p>
      <div className="category-card__footer">
        <span className="category-card__cta">
          Ver categoría <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </article>
  )
}

export default CategoryCard
