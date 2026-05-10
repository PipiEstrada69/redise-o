function CollectionFaqSection({ title, items }) {
  if (!items?.length) return null

  return (
    <section className="collection-faq" aria-labelledby="collection-faq-heading">
      <h2 id="collection-faq-heading" className="collection-faq__title">
        {title}
      </h2>
      <div className="faq-accordion">
        {items.map((item) => (
          <details key={item.id} className="faq-accordion__item">
            <summary className="faq-accordion__summary">{item.question}</summary>
            <div className="faq-accordion__panel">{item.body}</div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default CollectionFaqSection
