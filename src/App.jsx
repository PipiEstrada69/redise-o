import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Mail,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import './App.css'
import { collectionFaqs } from './collectionFaqs.jsx'
import { sortCatalogProducts } from './catalogUtils'
import Breadcrumbs from './components/Breadcrumbs'
import CategoryCard from './components/CategoryCard'
import CollectionFaqSection from './components/CollectionFaqSection'
import Layout from './components/Layout'
import ProductCard from './components/ProductCard'
import {
  blogPosts,
  categories,
  contactInfo,
  crownClubBenefits,
  crownStoreProductImages,
  energyBar,
  getProductForPage,
  libraryTopics,
  pathToNavLabel,
  productFamilies,
  reasonCards,
  reviewItems,
  scienceCards,
  shippingInfo,
  shopGoals,
  socialLinks,
  sportHighlights,
  trustItems,
  visualProducts,
} from './data'

function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname || '/' : '/',
  )
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onPopState = () => {
      const next = window.location.pathname || '/'
      setCurrentPath(next === '' ? '/' : next)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navHighlightPath = useMemo(() => {
    if (currentPath.startsWith('/producto/')) {
      const slug = currentPath.replace(/^\/producto\/?/, '').split('/')[0]
      if (!slug) return currentPath
      const p = getProductForPage(slug)
      return p?.collectionPath ?? '/tienda'
    }
    return currentPath
  }, [currentPath])

  const navigate = (path) => {
    const next = path === '' ? '/' : path
    setCurrentPath(next)
    window.history.pushState({ path: next }, '', next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (product = energyBar, options = {}) => {
    const slug = product.slug || product.id
    const image =
      product.image || (typeof slug === 'string' ? crownStoreProductImages[slug] : null) || null
    const item = {
      id: slug || product.title,
      name: product.name || product.title,
      format: options.format || 'Formato visual',
      flavor: options.flavor || 'Selección visual',
      quantity: options.quantity || 1,
      image,
    }

    setCartItems((items) => {
      const existing = items.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.format === item.format &&
          cartItem.flavor === item.flavor,
      )

      if (!existing) return [...items, item]

      return items.map((cartItem) =>
        cartItem === existing
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem,
      )
    })
    setCartOpen(true)
  }

  const changeCartQuantity = (item, delta) => {
    setCartItems((items) =>
      items
        .map((cartItem) =>
          cartItem === item
            ? { ...cartItem, quantity: Math.max(0, cartItem.quantity + delta) }
            : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    )
  }

  const renderPage = () => {
    if (currentPath === '/') {
      return (
        <>
          <Hero navigate={navigate} />
          <TrustStrip />
          <ShippingGuarantees />
          <CategoriesSection navigate={navigate} />
          <FeaturedProduct navigate={navigate} onAdd={addToCart} />
          <ProductGrid navigate={navigate} onAdd={addToCart} />
          <ScienceTrustSection />
          <CrownClubSection />
          <ReviewsStrip />
          <ReasonsSection />
          <SciencePreview navigate={navigate} />
          <CtaBand navigate={navigate} />
        </>
      )
    }

    if (currentPath.startsWith('/producto/')) {
      const slug = currentPath.replace(/^\/producto\/?/, '').split('/')[0]
      if (slug) {
        return <ProductDetailPage key={slug} slug={slug} navigate={navigate} onAdd={addToCart} />
      }
    }

    if (['/tienda', '/barritas', '/geles', '/isotonico', '/packs'].includes(currentPath)) {
      return <CollectionPage key={currentPath} path={currentPath} navigate={navigate} onAdd={addToCart} />
    }

    if (currentPath === '/blog') {
      return <BlogPage />
    }

    if (currentPath === '/ciencia') {
      return <ScienceLibraryPage />
    }

    if (currentPath === '/contacto') {
      return <ContactPage />
    }

    return <CollectionPage key="/tienda" path="/tienda" navigate={navigate} onAdd={addToCart} />
  }

  return (
    <Layout
      currentPath={currentPath}
      navHighlightPath={navHighlightPath}
      navigate={navigate}
      cartItems={cartItems}
      onQuantityChange={changeCartQuantity}
      cartOpen={cartOpen}
      setCartOpen={setCartOpen}
      searchOpen={searchOpen}
      setSearchOpen={setSearchOpen}
      accountOpen={accountOpen}
      setAccountOpen={setAccountOpen}
      mobileOpen={mobileOpen}
      setMobileOpen={setMobileOpen}
    >
      {renderPage()}
    </Layout>
  )
}

function Hero({ navigate }) {
  return (
    <section className="hero-section section">
      <div className="hero-copy">
        <p className="eyebrow">Rediseño académico de ecommerce deportivo</p>
        <h1>Nutrición deportiva más clara, rápida y preparada para cualquier pantalla.</h1>
        <p>
          Propuesta visual inspirada en Crown Sport Nutrition, con navegación ordenada,
          producto protagonista y una experiencia premium sin compras reales.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={() => navigate('/producto/energy-bar')}>
            Ver Energy Bar 2.0 <ArrowRight size={18} aria-hidden="true" />
          </button>
          <button type="button" className="secondary-button" onClick={() => navigate('/tienda')}>
            Explorar tienda
          </button>
        </div>
      </div>
      <div className="hero-product-card">
        <span>Energy Bar 2.0</span>
        <div className="hero-product-card__photo-wrap">
          <img
            className="hero-product-card__photo"
            src={energyBar.image}
            alt={`${energyBar.name} — imagen de referencia crownsportnutrition.com`}
            width={420}
            height={420}
            decoding="async"
          />
        </div>
        <div className="hero-stats">
          <div><strong>60 g</strong><span>Barrita</span></div>
          <div><strong>12</strong><span>Caja</span></div>
          <div><strong>{energyBar.price.split('·')[0].trim()}</strong><span>Desde / rango</span></div>
        </div>
      </div>
    </section>
  )
}

function TrustStrip() {
  return (
    <section className="trust-strip">
      {trustItems.map((item) => {
        const Icon = item.icon
        return (
          <div key={item.label}>
            <Icon size={20} aria-hidden="true" />
            <span>{item.label}</span>
          </div>
        )
      })}
    </section>
  )
}

function ShippingGuarantees() {
  return (
    <section className="shipping-strip" aria-label="Garantías visuales de ecommerce">
      {shippingInfo.map((item) => (
        <div key={item}>
          <CheckCircle2 size={18} aria-hidden="true" />
          <span>{item}</span>
        </div>
      ))}
    </section>
  )
}

function CategoriesSection({ navigate }) {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Categorías principales</p>
        <h2>Compra visual por objetivo deportivo</h2>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.title} category={category} navigate={navigate} />
        ))}
      </div>
    </section>
  )
}

function FeaturedProduct({ navigate, onAdd }) {
  return (
    <section className="featured-section section">
      <div>
        <p className="eyebrow">Producto destacado</p>
        <h2>{energyBar.name}</h2>
        <p>{energyBar.subtitle}</p>
        <ul className="check-list">
          {energyBar.benefits.slice(0, 4).map((benefit) => (
            <li key={benefit}><CheckCircle2 size={18} aria-hidden="true" /> {benefit}</li>
          ))}
        </ul>
        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={() => navigate('/producto/energy-bar')}>
            Ver detalle <ChevronRight size={18} aria-hidden="true" />
          </button>
          <button type="button" className="secondary-button" onClick={() => onAdd(energyBar)}>
            Añadir visualmente
          </button>
        </div>
      </div>
      <div className="nutrition-card nutrition-card--with-photo">
        <img
          className="nutrition-card__product"
          src={energyBar.image}
          alt=""
          width={280}
          height={280}
          decoding="async"
        />
        <span>{energyBar.price}</span>
        <h3>Avena + dátil</h3>
        <p>Información presentada por beneficios, uso y formato para reducir fricción antes de comprar.</p>
      </div>
    </section>
  )
}

function ProductGrid({ navigate, onAdd }) {
  const featuredProducts = visualProducts.filter((product) => product.featured)

  return (
    <section className="section muted-section">
      <div className="section-heading">
        <p className="eyebrow">Productos destacados</p>
        <h2>Selección principal de la tienda original</h2>
      </div>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} navigate={navigate} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}

function ScienceTrustSection() {
  return (
    <section className="section science-trust-section">
      <div className="section-heading">
        <p className="eyebrow">Alto rendimiento</p>
        <h2>Ciencia aplicada, seguridad y formulaciones premium</h2>
      </div>
      <div className="science-grid">
        {scienceCards.map((card) => (
          <article key={card.title}>
            <strong>{card.metric}</strong>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CrownClubSection() {
  return (
    <section className="section crown-club-section">
      <div>
        <p className="eyebrow">Crown Club</p>
        <h2>Comunidad profesional para prescriptores deportivos</h2>
        <p>
          Módulo visual inspirado en la sección Crown Club: médicos, nutricionistas,
          entrenadores y profesionales pueden consultar recursos y ventajas sin registro real.
        </p>
      </div>
      <div className="club-benefits">
        {crownClubBenefits.map((benefit) => (
          <article key={benefit}>
            <CheckCircle2 size={18} aria-hidden="true" />
            <span>{benefit}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function ReviewsStrip() {
  return (
    <section className="reviews-strip">
      {reviewItems.map((review) => (
        <article key={review.source}>
          <span>{review.source}</span>
          <strong>{review.score}</strong>
          <p>{review.detail}</p>
        </article>
      ))}
    </section>
  )
}

function ReasonsSection() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Razones</p>
        <h2>Los pilares que debe comunicar el rediseño</h2>
      </div>
      <div className="reason-grid">
        {reasonCards.map((reason) => (
          <article key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CtaBand({ navigate }) {
  return (
    <section className="section cta-grid">
      <article>
        <p className="eyebrow">Distribución</p>
        <h2>¿Quieres distribuir en tu club, tienda o centro?</h2>
        <p>CTA visual inspirado en la web original. No envía datos ni inicia una solicitud real.</p>
        <button type="button" className="primary-button" onClick={() => navigate('/contacto')}>
          Quiero colaborar
        </button>
      </article>
      <article>
        <p className="eyebrow">Contacto</p>
        <h2>Envíanos tu mensaje</h2>
        <p>Formulario simulado para mantener una experiencia navegable sin recoger información personal.</p>
        <button type="button" className="secondary-button" onClick={() => navigate('/contacto')}>
          Contactar
        </button>
      </article>
    </section>
  )
}

function SciencePreview({ navigate }) {
  return (
    <section className="section sport-section">
      <div className="section-heading">
        <p className="eyebrow">Uso en deporte</p>
        <h2>Contenido útil antes, durante y después</h2>
      </div>
      <div className="highlight-grid">
        {sportHighlights.map((item) => {
          const Icon = item.icon
          return (
            <article key={item.title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
      <button type="button" className="secondary-button" onClick={() => navigate('/ciencia')}>
        Ver ciencia aplicada
      </button>
    </section>
  )
}

function CollectionPage({ path, navigate, onAdd }) {
  const [activeFamily, setActiveFamily] = useState('Todos')
  const [activeGoal, setActiveGoal] = useState('Todos')
  const [sortBy, setSortBy] = useState('featured')

  const titles = {
    '/tienda': ['Tienda', 'Todos los productos del prototipo'],
    '/barritas': ['Barritas', 'Energía sólida para resistencia'],
    '/geles': ['Geles Energéticos', 'Energía rápida en formato visual'],
    '/isotonico': ['Isotónico', 'Hidratación clara para esfuerzos largos'],
    '/packs': ['Packs', 'Selecciones simuladas para entrenar mejor'],
  }
  const [title, subtitle] = titles[path]

  const handleFamilyChange = (family) => {
    setActiveFamily(family)
    setActiveGoal('Todos')
  }

  const baseFiltered = useMemo(() => {
    if (path === '/tienda') {
      return visualProducts.filter(
        (product) => activeFamily === 'Todos' || product.family === activeFamily,
      )
    }
    return visualProducts.filter((product) => product.collectionPath === path)
  }, [path, activeFamily])

  const visibleGoals = useMemo(() => {
    const ids = new Set()
    baseFiltered.forEach((p) => (p.goals || []).forEach((g) => ids.add(g)))
    return shopGoals.filter((g) => ids.has(g.id))
  }, [baseFiltered])

  const goalFiltered =
    activeGoal === 'Todos'
      ? baseFiltered
      : baseFiltered.filter((p) => (p.goals || []).includes(activeGoal))

  const sortedProducts = useMemo(
    () => sortCatalogProducts(goalFiltered, sortBy),
    [goalFiltered, sortBy],
  )

  const familiesToShow = productFamilies
    .map((family) => ({
      family,
      products: sortedProducts.filter((product) => product.family === family),
    }))
    .filter((group) => group.products.length > 0)

  const crumbItems =
    path === '/tienda'
      ? [{ label: 'Inicio', path: '/' }, { label: title }]
      : [
          { label: 'Inicio', path: '/' },
          { label: pathToNavLabel('/tienda'), path: '/tienda' },
          { label: title },
        ]

  return (
    <section className="section page-section">
      <Breadcrumbs items={crumbItems} navigate={navigate} />
      <div className="page-hero">
        <p className="eyebrow">Categoría</p>
        <h1>{title}</h1>
        <p>
          {subtitle}. Mostrando {sortedProducts.length} producto(s) en modo visual, sin compras reales.
        </p>
      </div>

      <div className="plp-toolbar">
        <label className="plp-sort">
          <span>Ordenar</span>
          <select
            className="plp-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Ordenar productos"
          >
            <option value="featured">Destacados primero</option>
            <option value="name-asc">Nombre A–Z</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
          </select>
        </label>
      </div>

      {path === '/tienda' && (
        <ProductFilters activeFamily={activeFamily} onChange={handleFamilyChange} />
      )}

      {visibleGoals.length > 0 && (
        <div className="goal-bar" role="group" aria-label="Filtrar por objetivo de uso">
          <span className="goal-bar__label">Objetivo</span>
          <div className="goal-bar__chips">
            <button
              type="button"
              className={activeGoal === 'Todos' ? 'goal-chip is-active' : 'goal-chip'}
              onClick={() => setActiveGoal('Todos')}
            >
              Todos
            </button>
            {visibleGoals.map((g) => (
              <button
                type="button"
                key={g.id}
                className={activeGoal === g.id ? 'goal-chip is-active' : 'goal-chip'}
                onClick={() => setActiveGoal(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {path === '/tienda' ? (
        <div className="family-list">
          {familiesToShow.map((group) => (
            <ProductFamilySection
              key={group.family}
              title={group.family}
              products={group.products}
              navigate={navigate}
              onAdd={onAdd}
            />
          ))}
        </div>
      ) : (
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.slug} product={product} navigate={navigate} onAdd={onAdd} />
          ))}
        </div>
      )}

      {collectionFaqs[path] && (
        <CollectionFaqSection
          title={collectionFaqs[path].title}
          items={collectionFaqs[path].items}
        />
      )}
    </section>
  )
}

function ProductFilters({ activeFamily, onChange }) {
  return (
    <div className="filter-bar" aria-label="Filtros visuales de familia">
      {['Todos', ...productFamilies].map((family) => (
        <button
          type="button"
          key={family}
          className={activeFamily === family ? 'selected' : ''}
          onClick={() => onChange(family)}
        >
          {family}
        </button>
      ))}
    </div>
  )
}

function ProductFamilySection({ title, products, navigate, onAdd }) {
  return (
    <section className="family-section">
      <div className="family-section__header">
        <div>
          <p className="eyebrow">Familia</p>
          <h2>{title}</h2>
        </div>
        <span>{products.length} producto(s)</span>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} navigate={navigate} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}

function ProductDetailPage({ slug, navigate, onAdd }) {
  const product = useMemo(() => getProductForPage(slug), [slug])
  const [format, setFormat] = useState(() => {
    const p = getProductForPage(slug)
    return p?.formats?.[0] || 'Formato único (visual)'
  })
  const [flavor, setFlavor] = useState(() => {
    const p = getProductForPage(slug)
    if (p?.flavors?.length) return p.flavors[0]
    return '—'
  })
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <section className="section page-section">
        <div className="page-hero">
          <p className="eyebrow">Ficha</p>
          <h1>Referencia no encontrada</h1>
          <p>Este prototipo no incluye una ficha para ese identificador.</p>
          <button type="button" className="primary-button" onClick={() => navigate('/tienda')}>
            Ir a la tienda
          </button>
        </div>
      </section>
    )
  }

  const displayTitle = product.name || product.title
  const galleryLabel = displayTitle.length > 42 ? `${displayTitle.slice(0, 40)}…` : displayTitle
  const hasFlavorOptions = Array.isArray(product.flavors) && product.flavors.length > 0
  const hasMultipleFormats = Array.isArray(product.formats) && product.formats.length > 1
  const tagChips = (product.tags || []).slice(0, 3)

  const pdpCrumbItems = [
    { label: 'Inicio', path: '/' },
    {
      label: pathToNavLabel(product.collectionPath),
      path: product.collectionPath,
    },
    { label: displayTitle },
  ]

  const handleAdd = () => {
    onAdd(
      { slug: product.slug, id: product.id, name: displayTitle, title: displayTitle },
      {
        format: product.formats?.[0] ? format : 'Formato único (visual)',
        flavor: hasFlavorOptions ? flavor : 'Producto sin variante de sabor (visual)',
        quantity,
      },
    )
  }

  return (
    <section className="section product-page">
      <Breadcrumbs items={pdpCrumbItems} navigate={navigate} />
      <div className="product-page__columns">
        <div className="product-gallery">
          <div className="large-pack">
            {product.image && (
              <img
                className="large-pack__photo"
                src={product.image}
                alt={product.imageAlt || displayTitle}
                decoding="async"
              />
            )}
            <div className="large-pack__meta">
              <span>{galleryLabel}</span>
              <strong>{product.subtitle || product.category}</strong>
              <small>{product.category} · prototipo visual</small>
            </div>
          </div>
          <div className="gallery-note">
            <ShieldCheck size={20} aria-hidden="true" />
            Producto visual. Compra real desactivada.
          </div>
          <button type="button" className="secondary-button product-back" onClick={() => navigate(product.collectionPath)}>
            ← Volver a {product.collectionPath === '/tienda' ? 'tienda' : 'categoría'}
          </button>
        </div>
        <div className="product-detail">
          <p className="eyebrow">{product.category}</p>
          <h1>{displayTitle}</h1>
          {product.subtitle && <p className="lead">{product.subtitle}</p>}

          <div className="decision-zone" aria-label="Resumen para decidir">
            <div className="decision-zone__chips">
              <span className="decision-chip">{product.category}</span>
              <span className="decision-chip">{product.family}</span>
              {tagChips.map((tag) => (
                <span key={tag} className="decision-chip decision-chip--muted">
                  {tag}
                </span>
              ))}
            </div>
            <p className="decision-zone__summary">{product.description}</p>
          </div>

          <div className="price-line">
            <strong>{product.price}</strong>
            <span>{product.tax}</span>
          </div>

          {hasMultipleFormats ? (
            <Selector title="Formato" options={product.formats} value={format} onChange={setFormat} />
          ) : (
            <div className="selector">
              <h3>Formato</h3>
              <p className="single-option-note">{product.formats?.[0] || 'Formato único (visual)'}</p>
            </div>
          )}

          {hasFlavorOptions ? (
            <Selector title="Sabor" options={product.flavors} value={flavor} onChange={setFlavor} />
          ) : (
            <div className="selector">
              <h3>Sabor / variante</h3>
              <p className="single-option-note">Sin selección de sabor en este prototipo.</p>
            </div>
          )}

          <div className="product-controls product-controls--pdp-main">
            <div className="quantity-control quantity-control--large">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Reducir cantidad">
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Aumentar cantidad">
                <Plus size={16} />
              </button>
            </div>
            <button type="button" className="primary-button" onClick={handleAdd}>
              <ShoppingBag size={18} aria-hidden="true" /> Añadir al carrito
            </button>
          </div>

          {product.certifications?.length > 0 && (
            <div className="cert-block">
              <h3>Certificaciones y notas</h3>
              <ul>
                {product.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {product.detailTabs && <ProductTabsPanel tabs={product.detailTabs} />}

          <RecommendedProducts navigate={navigate} relatedSlugs={product.relatedSlugs || []} />
        </div>
      </div>

      <div className="pdp-sticky-cta" aria-label="Añadir al carrito rápido">
        <div className="pdp-sticky-cta__inner">
          {product.image && (
            <img
              className="pdp-sticky-cta__thumb"
              src={product.image}
              alt=""
              width={48}
              height={48}
              decoding="async"
            />
          )}
          <div>
            <span className="pdp-sticky-cta__price">{product.price}</span>
            <span className="pdp-sticky-cta__qty">× {quantity}</span>
          </div>
          <button type="button" className="primary-button pdp-sticky-cta__btn" onClick={handleAdd}>
            Añadir
          </button>
        </div>
      </div>
    </section>
  )
}

function ProductTabsPanel({ tabs }) {
  const tabDefs = [
    { id: 'description', label: 'Descripción' },
    { id: 'usage', label: 'Modo de empleo' },
    { id: 'nutrition', label: 'Información nutricional' },
    { id: 'ingredients', label: 'Ingredientes' },
    { id: 'technical', label: 'Ficha técnica' },
  ]
  const [active, setActive] = useState('description')

  return (
    <div className="product-tabs" role="region" aria-label="Información detallada del producto">
      <div className="product-tabs__nav" role="tablist" aria-label="Secciones de la ficha">
        {tabDefs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            className={active === tab.id ? 'product-tabs__tab is-active' : 'product-tabs__tab'}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="product-tabs__body">
        {active === 'description' && (
          <div
            role="tabpanel"
            id="panel-description"
            aria-labelledby="tab-description"
            className="product-tabs__panel"
          >
            {tabs.description.map((node) => renderTabBlock(node))}
          </div>
        )}
        {active === 'usage' && (
          <div role="tabpanel" id="panel-usage" aria-labelledby="tab-usage" className="product-tabs__panel">
            {tabs.usage.map((node) => renderTabBlock(node))}
          </div>
        )}
        {active === 'nutrition' && (
          <div
            role="tabpanel"
            id="panel-nutrition"
            aria-labelledby="tab-nutrition"
            className="product-tabs__panel"
          >
            <p className="product-tabs__disclaimer">{tabs.nutrition.disclaimer}</p>
            <div className="table-wrap">
              <table className="nutrition-table">
                <thead>
                  <tr>
                    <th>Nutriente</th>
                    <th>Por 100 g</th>
                    <th>Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {tabs.nutrition.rows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.per100}</td>
                      <td>{row.note || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {active === 'ingredients' && (
          <div
            role="tabpanel"
            id="panel-ingredients"
            aria-labelledby="tab-ingredients"
            className="product-tabs__panel"
          >
            <p className="product-tabs__disclaimer">{tabs.ingredients.disclaimer}</p>
            <ul className="ingredients-list">
              {tabs.ingredients.list.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        )}
        {active === 'technical' && (
          <div
            role="tabpanel"
            id="panel-technical"
            aria-labelledby="tab-technical"
            className="product-tabs__panel"
          >
            <p className="product-tabs__disclaimer">{tabs.technical.disclaimer}</p>
            <dl className="technical-dl">
              {tabs.technical.rows.map((row) => (
                <div key={row.k} className="technical-dl__row">
                  <dt>{row.k}</dt>
                  <dd>{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div>
  )
}

function renderTabBlock(node) {
  switch (node.kind) {
    case 'heading': {
      if (node.level === 2) {
        return (
          <h3 key={node.key} className="product-tab-h2">
            {node.text}
          </h3>
        )
      }
      if (node.level === 3) {
        return (
          <h4 key={node.key} className="product-tab-h3">
            {node.text}
          </h4>
        )
      }
      return (
        <h5 key={node.key} className="product-tab-h4">
          {node.text}
        </h5>
      )
    }
    case 'paragraph':
      return (
        <p key={node.key} className="product-tab-p">
          {node.text}
        </p>
      )
    case 'list':
      return (
        <ul key={node.key} className="product-tab-ul">
          {node.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'faq':
      return (
        <div key={node.key} className="product-tab-faq">
          <h4 className="product-tab-faq__q">{node.question}</h4>
          <p className="product-tab-faq__a">{node.answer}</p>
        </div>
      )
    default:
      return null
  }
}

function Selector({ title, options, value, onChange }) {
  return (
    <div className="selector">
      <h3>{title}</h3>
      <div>
        {options.map((option) => (
          <button
            type="button"
            key={option}
            className={value === option ? 'selected' : ''}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function RecommendedProducts({ navigate, relatedSlugs }) {
  const recommended = relatedSlugs
    .map((s) => visualProducts.find((p) => p.slug === s))
    .filter(Boolean)

  if (recommended.length === 0) return null

  return (
    <div className="recommended-products">
      <div className="family-section__header">
        <div>
          <p className="eyebrow">También recomendado</p>
          <h2>Completa la estrategia de energía</h2>
        </div>
      </div>
      <div className="mini-product-list">
        {recommended.map((p) => (
          <button type="button" key={p.slug} className="mini-product" onClick={() => navigate(p.path)}>
            {p.image && (
              <img className="mini-product__thumb" src={p.image} alt="" width={56} height={56} decoding="async" />
            )}
            <span className="mini-product__body">
              <span>{p.category}</span>
              <strong>{p.title}</strong>
              <small>{p.price}</small>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

function BlogPage() {
  return (
    <section className="section page-section">
      <div className="page-hero">
        <p className="eyebrow">Blog</p>
        <h1>Nutrición, entrenamiento y rendimiento</h1>
        <p>
          Listado editorial visual inspirado en los temas reales del blog original.
          Los artículos no abren publicaciones ni recogen datos.
        </p>
      </div>
      <div className="chip-row">
        {['Nutrición', 'Entrenamiento', 'Recuperación', 'Ciencia', 'Producto'].map((chip) => (
          <span key={chip}>{chip}</span>
        ))}
      </div>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.title} className="blog-card">
            <span>{post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <button type="button" className="text-link">Leer artículo visual</button>
          </article>
        ))}
      </div>
    </section>
  )
}

function ScienceLibraryPage() {
  return (
    <section className="section page-section">
      <div className="page-hero">
        <p className="eyebrow">Ciencia / Biblioteca</p>
        <h1>Evidencia, certificaciones y recursos técnicos</h1>
        <p>
          La ruta mantiene el nombre académico `/ciencia`, pero se presenta como
          biblioteca visual para reflejar mejor la sección original de evidencias.
        </p>
      </div>
      <div className="science-grid science-grid--page">
        {scienceCards.map((card) => (
          <article key={card.title}>
            <strong>{card.metric}</strong>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
      <CrownClubSection />
      <div className="library-grid">
        {libraryTopics.map((topic) => (
          <article key={topic.title}>
            <span>{topic.metric}</span>
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="section page-section">
      <div className="page-hero">
        <p className="eyebrow">Contacto</p>
        <h1>Contacto visual sin envío real</h1>
        <p>{contactInfo.note}</p>
      </div>
      <div className="contact-layout">
        <aside className="contact-info-card">
          <h2>Datos públicos de referencia</h2>
          <p><Mail size={18} aria-hidden="true" /> {contactInfo.email}</p>
          <p><Sparkles size={18} aria-hidden="true" /> WhatsApp {contactInfo.whatsapp}</p>
          <p><MapPin size={18} aria-hidden="true" /> {contactInfo.company}, {contactInfo.address}</p>
          <div className="social-row">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </aside>
        <form className="visual-form">
          <label>Nombre<input placeholder="Nombre completo" /></label>
          <label>Email<input type="email" placeholder="email@ejemplo.com" /></label>
          <label>Teléfono<input placeholder="+34 000 000 000" /></label>
          <label>Asunto<input placeholder="Motivo del contacto" /></label>
          <label className="full-field">Mensaje<textarea placeholder="Escribe tu mensaje visual" rows="5" /></label>
          <button type="button" className="primary-button" disabled>Enviar desactivado</button>
          <p>Este formulario no envía ni almacena información.</p>
        </form>
      </div>
    </section>
  )
}

export default App
