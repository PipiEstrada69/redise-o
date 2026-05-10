import { ArrowRight } from 'lucide-react'

function CategoryCard({ category, navigate }) {
  const Icon = category.icon

  return (
    <article className="category-card">
      <div className="category-card__icon">
        <Icon size={24} aria-hidden="true" />
      </div>
      <span>{category.tag}</span>
      <h3>{category.title}</h3>
      <p>{category.description}</p>
      <button type="button" className="text-link" onClick={() => navigate(category.path)}>
        Ver categoría <ArrowRight size={16} aria-hidden="true" />
      </button>
    </article>
  )
}

export default CategoryCard
