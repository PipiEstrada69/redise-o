/**
 * Contenido de pestañas para fichas de producto (textos originales para prototipo académico).
 */

const NUTRITION_DISCLAIMER =
  'Cifras meramente ilustrativas para el rediseño en clase. No sustituyen etiquetado ni valores declarados de productos reales.'

const INGREDIENTS_DISCLAIMER =
  'Listado pedagógico simplificado. En un caso real revisarías allergenes, trazas y lotes en la etiqueta oficial.'

const TECH_DISCLAIMER =
  'Datos técnicos simulados para la maqueta. Presentación universitaria sin uso comercial.'

function seedFromSlug(slug = '') {
  return slug.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
}

function nutritionRowsSimulated(slug, family) {
  const s = seedFromSlug(slug)
  const baseKj = 1200 + (s % 400)
  const fat = 2 + (s % 8) / 10
  const sat = fat * 0.35
  const carbs = 40 + (s % 35)
  const sugars = 8 + (s % 20)
  const protein = 4 + (s % 18)
  const salt = 0.1 + (s % 80) / 100
  const fiber = family === 'Barritas' ? 2 + (s % 5) : 0.5 + (s % 3) / 10
  return [
    { label: 'Valor energético', per100: `${baseKj} kJ / ${Math.round(baseKj / 4.184)} kcal`, note: 'aprox.' },
    { label: 'Grasas', per100: `${fat.toFixed(1)} g`, note: 'de las cuales saturadas ' + sat.toFixed(1) + ' g' },
    { label: 'Hidratos de carbono', per100: `${carbs.toFixed(1)} g`, note: 'de los cuales azúcares ' + sugars.toFixed(1) + ' g' },
    { label: 'Fibra alimentaria', per100: `${fiber.toFixed(1)} g`, note: 'estimación' },
    { label: 'Proteínas', per100: `${protein.toFixed(1)} g`, note: '' },
    { label: 'Sal', per100: `${salt.toFixed(2)} g`, note: 'según variante' },
  ]
}

function technicalRowsSimulated(product) {
  const sku = `PROT-${product.slug.replace(/-/g, '').slice(0, 8).toUpperCase()}`
  return [
    { k: 'Denominación rediseño', v: product.title },
    { k: 'Categoría en la maqueta', v: `${product.category} · ${product.family}` },
    { k: 'SKU simulado', v: sku },
    { k: 'Almacenamiento (referencia)', v: 'Lugar fresco y seco, alejado de luz directa.' },
    { k: 'Uso previsto', v: 'Demostración de UX e-commerce en asignatura; sin venta.' },
  ]
}

const HYPERBAR_NARRATIVE = [
  {
    type: 'h2',
    text: 'BAR EN FORMATO GOMINOLA, PERFIL ALTO EN CARBOHIDRATOS (CONTENIDO DE CLASE)',
  },
  {
    type: 'p',
    text: 'Esta ficha ilustra cómo se presentaría una barrita masticable densa en carbohidratos dentro del rediseño: texto propio, estructura en bloques y listas revisables antes de publicar cualquier material real.',
  },
  {
    type: 'p',
    text: 'El mensaje central es doble: aportar hidratos de carbono de absorción progresiva y ofrecer una textura que se pueda consumir en marcha sin exigir demasiada saliva. El apartado simula tono deportivo-serio sin citar estudios concretos.',
  },
  {
    type: 'h3',
    text: 'IDEAS CLAVE QUE LA MAQUETA DESTACA',
  },
  {
    type: 'ul',
    items: [
      'Matriz alta en carbohidratos pensada para etapas largas de esfuerzo en el guion docente.',
      'Textura tipo goma blanda para favorecer la fracción en bocados controlados.',
      'Perfil con complemento de sodio en la narrativa (sal marina genérica en el copy ficticio).',
      'Sabor neutro en la variante base del ejercicio; otros perfiles podrían añadirse como variaciones de maqueta.',
    ],
  },
  {
    type: 'h3',
    text: '¿POR QUÉ APARECE UN BLOQUE SOBRE PROPORCIONES DE HIDRATOS?',
  },
  {
    type: 'p',
    text: 'En un comercio real aquí enlazarías con evidencia o con el departamento técnico. Para la asignatura solo mostramos la jerarquía visual: titular en mayúsculas, párrafo explicativo y lista corta que el jurado pueda seguir en móvil.',
  },
]

const ENERGY_GUM_NARRATIVE = [
  {
    type: 'h2',
    text: 'BAR GOMINOLA ENERGÉTICA — VERSIÓN DIDÁCTICA',
  },
  {
    type: 'p',
    text: 'Redacción original que imita la extensión de una pestaña «Descripción» sin copiar textos de marca alguna. Sirve para practicar ritmo de lectura, contraste y uso de negritas simuladas mediante titulares en mayúsculas.',
  },
  {
    type: 'h3',
    text: 'LISTADO DE MENSAJES QUE PODRÍAN ACOMPAÑAR AL PRODUCTO',
  },
  {
    type: 'ul',
    items: [
      'Formato blando para transportar la energía sin pausas largas.',
      'Posibilidad de combinar con bebida hipotónica en la narrativa del prototipo.',
      'Línea pensada para usuarios que ya toleran geles y buscan alternativas masticables.',
      'Opciones con o sin estimulantes descritas solo como variantes de interfaz (sin dosificar).',
    ],
  },
  {
    type: 'h3',
    text: 'TRANSPARENCIA ACADÉMICA',
  },
  {
    type: 'p',
    text: 'Todo el copy forma parte de una presentación universitaria; no habilita compra, logística ni asesoramiento nutricional.',
  },
]

const DESCRIPTION_EXTRA_BY_SLUG = {
  'hyperbar-45-108': HYPERBAR_NARRATIVE,
  'energy-gum-bar': ENERGY_GUM_NARRATIVE,
}

function genericDescriptionBlocks(product) {
  const { title, description, category, family, tags = [], slug } = product
  const tagLine = tags.length ? tags.join(', ') : 'referencia del catálogo maquetado'
  const variant = seedFromSlug(slug) % 2

  const paras = [
    {
      type: 'h2',
      text: `DESCRIPCIÓN AMPLIADA — ${title.toUpperCase()}`,
    },
    {
      type: 'p',
      text: `${description} Este apartado replica la función de una pestaña «Descripción» de tienda online, pero redactado de cero para el trabajo: explica con claridad el posicionamiento del ítem dentro de la vitrina académica.`,
    },
    {
      type: 'h3',
      text: 'PROPÓSITO EN EL CATÁLOGO DEL PROTOTIPO',
    },
    {
      type: 'p',
      text: `Se clasifica bajo «${category}» con familia «${family}». Los atributos destacados en la rejilla (${tagLine}) guían el tono de esta ficha: son guías de diseño, no reclamos comerciales.`,
    },
    {
      type: 'h3',
      text: variant === 0 ? 'LECTURA RÁPIDA PARA EL USUARIO' : 'ENFOQUE DE CONTENIDO UX',
    },
    {
      type: 'ul',
      items: [
        `Encaje: ${family} → ${category}.`,
        ...tags.slice(0, 5).map((t) => `Etiqueta visual: ${t}.`),
        'Copy original elaborado para evaluación docente; sin copiar textos de marcas reales.',
      ],
    },
    {
      type: 'h3',
      text: 'BLOQUE TIPO «CIENCIA APLICADA» (FICTICIO)',
    },
    {
      type: 'p',
      text:
        'En una tienda real este hueco conectaría con estudios o con el equipo técnico. Aquí solo mostramos cómo se distribuiría la jerarquía tipográfica: titular en mayúsculas, subtítulos y párrafos cortos para pantallas pequeñas.',
    },
  ]

  return paras
}

function genericUsageBlocks(product) {
  const { title, family } = product
  return [
    {
      type: 'p',
      text: `Modo de empleo orientativo para ${title}. Ajusta siempre a tu tutor de prácticas o a un dietista-nutricionista en contextos reales; esta versión prioriza la legibilidad en clase.`,
    },
    {
      type: 'ul',
      items: [
        ...product.usage,
        `Familia «${family}»: planifica la ingesta coherente con el resto de la sesión simulada.`,
        'Antes de competir, entrena el mismo protocolo en días de menor carga.',
      ],
    },
  ]
}

function genericIngredientsList(product) {
  const base = [
    'Matriz de carbohidratos de disolución variable (simulación)',
    'Complejo mineral simplificado (sales ordinarias en versión pedagógica)',
    'Base aromática genérica o neutra, según variante mostrada en la maqueta',
    'Antiapelmazantes o texturizantes representados como «estabilizantes habituales en la categoría»',
  ]
  return [...base, ...product.tags.slice(0, 3).map((t) => `Componente asociado al claim visual: ${t}.`)]
}

function premiumDescriptionBlocks(product) {
  const blocks = [
    { type: 'h2', text: 'BARRITA ENERGÉTICA CON AVENA Y DÁTIL — VISTA DE REDISEÑO' },
    { type: 'p', text: product.longDescription },
    { type: 'h3', text: 'BENEFICIOS QUE SE QUIEREN COMUNICAR' },
    { type: 'ul', items: product.benefits },
  ]

  blocks.push({ type: 'h3', text: 'SABORES AGRUPADOS PARA LA EXPERIENCIA' })
  for (const [group, flavors] of Object.entries(product.flavorGroups || {})) {
    blocks.push({ type: 'h4', text: group })
    blocks.push({ type: 'ul', items: flavors })
  }

  blocks.push({ type: 'h3', text: 'SODIO EN VARIANTES SALADAS (REFERENCIA DE CLASE)' })
  blocks.push({
    type: 'ul',
    items: [
      ...(product.sodiumNotes || []),
      'Las referencias dulces mantienen un perfil de sodio distinto; revisar leyenda en un producto físico.',
    ],
  })

  blocks.push({ type: 'h3', text: 'PERFILES DE USO DEPORTIVO' })
  blocks.push({ type: 'ul', items: product.profiles || [] })

  blocks.push({ type: 'h3', text: 'PREGUNTAS FRECUENTES (Simulación)' })
  for (const item of product.faq || []) {
    blocks.push({ type: 'faqItem', question: item.question, answer: item.answer })
  }

  return blocks
}

function premiumIngredientsList() {
  return [
    'Copos de avena sin gluten (proporción alta en la mezcla)',
    'Pasta de dátil como matriz energética y ligante natural',
    'Aceites vegetales seleccionados en versión pedagógica (sin aceite de palma en la narrativa)',
    'Cacao, frutas desecadas o aromatizantes según sabor representado en la maqueta',
    'Sal marina en variantes con perfil salado y reclamo de sodio',
  ]
}

function premiumNutritionRows() {
  return [
    { label: 'Valor energético', per100: '~1620 kJ / 385 kcal', note: 'orden de magnitud docente' },
    { label: 'Grasas', per100: '8,0 g', note: 'de las cuales saturadas 2,5 g (aprox.)' },
    { label: 'Hidratos de carbono', per100: '62 g', note: 'de los cuales azúcares 28 g (aprox.)' },
    { label: 'Fibra alimentaria', per100: '4,5 g', note: 'avena + fruta' },
    { label: 'Proteínas', per100: '6 g', note: '' },
    { label: 'Sal', per100: '0,45–1,10 g', note: 'rango según variante salada o dulce (ilustrativo)' },
  ]
}

function renderBlock(block, key) {
  switch (block.type) {
    case 'h2':
      return { kind: 'heading', level: 2, text: block.text, key }
    case 'h3':
      return { kind: 'heading', level: 3, text: block.text, key }
    case 'h4':
      return { kind: 'heading', level: 4, text: block.text, key }
    case 'p':
      return { kind: 'paragraph', text: block.text, key }
    case 'ul':
      return { kind: 'list', items: block.items, key }
    case 'faqItem':
      return { kind: 'faq', question: block.question, answer: block.answer, key }
    default:
      return { kind: 'paragraph', text: '', key }
  }
}

function finalizeDescription(blocks) {
  return blocks.map((b, i) => renderBlock(b, `d-${i}`)).filter((x) => x.kind !== 'paragraph' || x.text)
}

export function buildProductDetailTabs(product) {
  if (!product) return null

  if (product.isPremiumDetail) {
    return {
      description: finalizeDescription(premiumDescriptionBlocks(product)),
      usage: finalizeDescription([
        {
          type: 'p',
          text:
            'Instrucciones de uso pensadas para la demo: combinan ritmo realista con avisos de que es material académico.',
        },
        { type: 'ul', items: product.usage },
        {
          type: 'p',
          text:
            'Si llevas isotónico o geles en la misma estrategia simulada, reparte la carga digestiva y practica el mismo orden en entrenamiento.',
        },
      ]),
      nutrition: {
        disclaimer: NUTRITION_DISCLAIMER,
        rows: premiumNutritionRows(),
      },
      ingredients: {
        disclaimer: INGREDIENTS_DISCLAIMER,
        list: premiumIngredientsList(),
      },
      technical: {
        disclaimer: TECH_DISCLAIMER,
        rows: [
          { k: 'Peso declarado en maqueta', v: '60 g por unidad · caja de 12 unidades (escenario de diseño)' },
          { k: 'Textura', v: 'Barrita compacta, perfil jugoso según narrativa del briefing' },
          { k: 'Gluten', v: 'Formulación descrita como sin gluten en el contenido académico' },
          { k: 'Alergenos relevantes', v: 'Variantes con frutos secos o leche según sabor; revisar leyenda en ejemplar físico.' },
          ...technicalRowsSimulated(product).slice(1),
        ],
      },
    }
  }

  const descBlocks = DESCRIPTION_EXTRA_BY_SLUG[product.slug]
    ? [...DESCRIPTION_EXTRA_BY_SLUG[product.slug], ...genericDescriptionBlocks(product)]
    : genericDescriptionBlocks(product)
  return {
    description: finalizeDescription(descBlocks),
    usage: finalizeDescription(genericUsageBlocks(product)),
    nutrition: {
      disclaimer: NUTRITION_DISCLAIMER,
      rows: nutritionRowsSimulated(product.slug, product.family),
    },
    ingredients: {
      disclaimer: INGREDIENTS_DISCLAIMER,
      list: genericIngredientsList(product),
    },
    technical: {
      disclaimer: TECH_DISCLAIMER,
      rows: technicalRowsSimulated(product),
    },
  }
}
