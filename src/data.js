import {
  Atom,
  Beaker,
  BookOpen,
  Dumbbell,
  Flame,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Timer,
  Utensils,
  Zap,
} from 'lucide-react'
import { buildProductDetailTabs } from './productDetailTabs.js'
import { crownStoreListPrices } from './crownStoreListPrices.js'

export const routes = [
  { path: '/', label: 'Inicio' },
  { path: '/tienda', label: 'Tienda' },
  { path: '/barritas', label: 'Barritas' },
  { path: '/geles', label: 'Geles Energéticos' },
  { path: '/isotonico', label: 'Isotónico' },
  { path: '/packs', label: 'Packs' },
  { path: '/blog', label: 'Blog' },
  { path: '/ciencia', label: 'Ciencia' },
  { path: '/contacto', label: 'Contacto' },
]

/** PLP/catálogo: sirve para resaltar “Tienda” en la barra y comprobar contexto tienda */
export const shopNavPaths = ['/tienda', '/barritas', '/geles', '/isotonico', '/packs']

export function isShopNavContext(path) {
  return path != null && shopNavPaths.includes(path)
}

export function pathToNavLabel(path) {
  const match = routes.find((r) => r.path === path)
  return match ? match.label : 'Sección'
}

export const categories = [
  {
    title: 'Barritas',
    path: '/barritas',
    description: 'Energía práctica para entrenamientos largos y competiciones.',
    icon: Zap,
    tag: 'Energy Bar 2.0',
  },
  {
    title: 'Geles Energéticos',
    path: '/geles',
    description: 'Formato rápido para momentos de alta intensidad.',
    icon: Flame,
    tag: 'Durante el esfuerzo',
  },
  {
    title: 'Isotónico',
    path: '/isotonico',
    description: 'Hidratación y sales para sostener el rendimiento.',
    icon: Beaker,
    tag: 'Hidratación',
  },
  {
    title: 'Packs',
    path: '/packs',
    description: 'Selecciones visuales para preparar tus sesiones clave.',
    icon: PackageCheck,
    tag: 'Ahorro visual',
  },
]

/** Enlaces del menú Tienda (desplegable / acordeón); alineado con categories */
export const shopNavSubLinks = [
  { path: '/tienda', label: 'Ver todo el catálogo' },
  ...categories.map((c) => ({ path: c.path, label: c.title })),
]

/** Inicio + Blog + Ciencia + Contacto (sin rutas sueltas de categoría ni /tienda duplicado como botón plano) */
export const headerFlatNavRoutes = routes.filter((r) => !shopNavPaths.includes(r.path))

export const crownBrandLogoUrl =
  'https://crownsportnutrition.com/wp-content/uploads/2022/06/logo-CROWN-SPORT-NUTRITION1-1.png'

export const crownStoreProductImages = {
  'energy-bar': 'https://crownsportnutrition.com/wp-content/uploads/2021/05/1-8437014956214.jpg',
  'hyperbar-45-108': 'https://crownsportnutrition.com/wp-content/uploads/2023/02/1-with_badges8437022689579.jpg',
  'energy-gum-bar':
    'https://crownsportnutrition.com/wp-content/uploads/2024/04/B12.16.C_Energy_Gum_Bar_Peach_Box_Image_1.jpg',
  'pack-energy-bar-tester-12': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/3-1.jpg',
  'pack-energy-gum-bar-tester-12': 'https://crownsportnutrition.com/wp-content/uploads/2022/07/Portada.jpg',
  'hypergel-45-108': 'https://crownsportnutrition.com/wp-content/uploads/2023/02/1-8437022689661-1.jpg',
  'energy-gel': 'https://crownsportnutrition.com/wp-content/uploads/2021/05/1-8437024956341_with_badges.jpg',
  'hypergel-30-hydro': 'https://crownsportnutrition.com/wp-content/uploads/2023/02/1-8437022689609-1.jpg',
  'gel-nitratos-citrulina':
    'https://crownsportnutrition.com/wp-content/uploads/2024/05/119.1_Gel_Nitrates_600_Red_Fruits_Single_Dose_Image_1.jpg',
  'maltodextrina-pro': 'https://crownsportnutrition.com/wp-content/uploads/2026/01/1-8437028069320.jpg',
  'isodrink-energy': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/107.1_IsoDrink_Lemon_Tin_Image_1.jpg',
  'hyperdrink-90-108':
    'https://crownsportnutrition.com/wp-content/uploads/2022/05/107.4.C_HyperDrink_90_Neutral_Box_Image_1.jpg',
  'hyperdrink-45-108':
    'https://crownsportnutrition.com/wp-content/uploads/2023/05/107.5.C_HyperDrink_45_Neutral_Box_Image_1.jpg',
  'pro-salt-caps': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/1-with_badges8437014956290.jpg',
  'pack-hyper-energy-tester-20':
    'https://crownsportnutrition.com/wp-content/uploads/2023/02/PACK-Hyper-108-Energy-Tester-2.0.jpg',
  'megapack-hyper-energy-tester-20':
    'https://crownsportnutrition.com/wp-content/uploads/2023/02/MegaPack-Hyper_Energy-Tester-2.0_550_shake.jpg',
  'pack-hyper-energy-900': 'https://crownsportnutrition.com/wp-content/uploads/2023/02/PACK_Hyper_Energy_900.jpg',
  'pack-endurance-tester-30':
    'https://crownsportnutrition.com/wp-content/uploads/2020/01/PACK-Endurance-Tester-3.0.jpg',
  'megapack-endurance-tester-30':
    'https://crownsportnutrition.com/wp-content/uploads/2021/08/Megapack-Endurance-Tester-3.0-shake.jpg',
  'pack-gel-tester-12':
    'https://crownsportnutrition.com/wp-content/uploads/2021/03/PACK-Hyper-108-Energy-Tester-2.0-2.jpg',
  'pack-hypergel-45-tester-12': 'https://crownsportnutrition.com/wp-content/uploads/2024/09/Hyper_gel_45.jpg',
  'pack-maraton-tester': 'https://crownsportnutrition.com/wp-content/uploads/2023/10/Pack-Maraton-Tester.jpg',
  'pack-gym-tester': 'https://crownsportnutrition.com/wp-content/uploads/2023/11/PACK-Gym-Tester.jpg',
  'pack-salud-basico': 'https://crownsportnutrition.com/wp-content/uploads/2025/03/PACKX_Pack_Salud_Basico2.jpg',
  'hydration-recovery-pack':
    'https://crownsportnutrition.com/wp-content/uploads/2021/08/HYDRARECO_Hydration__Recovery_Pack_800-1.jpg',
  'pack-hidratacion-pro': 'https://crownsportnutrition.com/wp-content/uploads/2020/02/fres-550.jpg',
  'pack-mps-informed': 'https://crownsportnutrition.com/wp-content/uploads/2022/11/1_with_badges-2.jpg',
  'creatina-creapure-neutro': 'https://crownsportnutrition.com/wp-content/uploads/2021/09/1-8437014956078.jpg',
  'creatina-creavitalis': 'https://crownsportnutrition.com/wp-content/uploads/2025/04/1-8437028069191.jpg',
  'magnesio-caps-90': 'https://crownsportnutrition.com/wp-content/uploads/2023/10/1-8437022689272.jpg',
  'omega-3-pro-120': 'https://crownsportnutrition.com/wp-content/uploads/2023/05/1-8437022689555.jpg',
  'omega-3-athlete-90': 'https://crownsportnutrition.com/wp-content/uploads/2026/04/OMEGA-3-ATHLETE-01.jpg',
  'colageno-peptan-400': 'https://crownsportnutrition.com/wp-content/uploads/2024/12/1-8437022689005_with_badges.jpg',
  'curcumin-complex-60': 'https://crownsportnutrition.com/wp-content/uploads/2025/08/1-8437028069252.jpg',
  'vitamina-c-sequential-90': 'https://crownsportnutrition.com/wp-content/uploads/2025/02/1-8437028069115.jpg',
  'lactoferrin-200-60': 'https://crownsportnutrition.com/wp-content/uploads/2025/03/1-8437028069122.jpg',
  'l-glutamina-kyowa': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/1-8437014956368-1.jpg',
  'pre-workout-pro-st': 'https://crownsportnutrition.com/wp-content/uploads/2020/04/PREWORK_Pre-Workout_800-1.jpg',
  'caffeine-pro-caps-100':
    'https://crownsportnutrition.com/wp-content/uploads/2021/04/115_Bote_120C_Caffeine_PRO_Caps_800.jpg',
  'bcaa-ramificados': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/110.1_Bote_BCAA_Limon_800.jpg',
  'beta-alanina-lenta':
    'https://crownsportnutrition.com/wp-content/uploads/2019/10/112_Beta_Alanine_Slow_Absorption_Neutral_120_Tabs_Image_1.jpg',
  'hmb-3800': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/107_Bote_HMB_3800_800.jpg',
  'proteina-vegana': 'https://crownsportnutrition.com/wp-content/uploads/2026/04/1-RAWPROTNOEAN_with_badges.jpg',
  'recovery-3-1-pro-st':
    'https://crownsportnutrition.com/wp-content/uploads/2019/10/102_Bote_Pro_Recovery_ST_Vainilla_800.jpg',
  'recovery-3-1-plus': 'https://crownsportnutrition.com/wp-content/uploads/2024/05/2047.jpg',
  'iso-whey-hydrolyzed': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/1-8437014956047.jpg',
  'whey-protein-plus':
    'https://crownsportnutrition.com/wp-content/uploads/2020/09/104.3_Bote_Whey_PROtein_Chocolate_800.jpg',
  'all-beef-100': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/100_Bote_All_Beef_800.jpg',
  'recovery-3-1-vegan-plus':
    'https://crownsportnutrition.com/wp-content/uploads/2022/02/102.7_Vegan_Recovery_Chocolate_Tin_Image_1.jpg',
  'protein-sequential-night': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/1-8437014956115.jpg',
  'beef-whey-st': 'https://crownsportnutrition.com/wp-content/uploads/2019/11/BEEF-WHEY-ST-1.jpg',
  'bidon-pro-fly': 'https://crownsportnutrition.com/wp-content/uploads/2025/04/2186.jpg',
  'bidon-elite-entreno': 'https://crownsportnutrition.com/wp-content/uploads/2025/07/1_750.jpg',
  'soft-flask-350': 'https://crownsportnutrition.com/wp-content/uploads/2025/07/350-estrecha.jpg',
  'soft-flask-500-wide': 'https://crownsportnutrition.com/wp-content/uploads/2025/07/500-ancha.jpg',
  'soft-flask-500-narrow': 'https://crownsportnutrition.com/wp-content/uploads/2025/07/500-estrecha.jpg',
  'thermosport-bottle-1l':
    'https://crownsportnutrition.com/wp-content/uploads/2025/09/thermosport-bottle-1l-blanco-crown-sport-nutrition-1.jpg',
  'headband-pro-trail':
    'https://crownsportnutrition.com/wp-content/uploads/2023/09/XXXXX_OTSO_HeadBand_PRO_None_Black_Image_1.jpg',
  'shaker-pro-600': 'https://crownsportnutrition.com/wp-content/uploads/2019/10/01.jpg',
}

export const energyBar = {
  id: 'energy-bar-2',
  slug: 'energy-bar',
  name: 'Energy Bar 2.0',
  image: crownStoreProductImages['energy-bar'],
  subtitle: 'Barritas energéticas de avena y dátil',
  category: 'Barritas',
  price: crownStoreListPrices['energy-bar'],
  tax: 'IVA incluido',
  description:
    'Barrita energética sin gluten elaborada con avena y pasta de dátil, jugosa y fácil de masticar, pensada para ciclismo, running y deportes de resistencia.',
  longDescription:
    'La Energy Bar 2.0 combina aproximadamente un 35% de avena sin gluten con un 22% de pasta de dátil para ofrecer energía sostenida y progresiva antes, durante o después del ejercicio. Su textura más jugosa favorece la tolerancia digestiva y la convierte en un snack deportivo versátil.',
  formats: ['Barrita de 60 g', 'Caja de 12 barritas'],
  flavors: [
    'Banana y Chocolate Blanco',
    'Cacahuete Salado',
    'Chocolate Salado',
    'Doble Chocolate',
    'Frutos Rojos',
    'Yogur',
  ],
  flavorGroups: {
    Dulces: ['Doble Chocolate', 'Banana y Chocolate Blanco', 'Yogur', 'Frutos Rojos'],
    Salados: ['Chocolate Salado', 'Cacahuete Salado'],
  },
  sodiumNotes: ['Chocolate Salado: 338 mg de sodio', 'Cacahuete Salado: 241 mg de sodio'],
  benefits: [
    'Energía sostenida gracias a la avena sin gluten y pasta de dátil',
    'Textura jugosa y fácil digestión',
    'Sin gluten y sin aceite de palma',
    'Ideal para ciclismo, running, triatlón y trail running',
    'Apta para veganos excepto Banana y Chocolate Blanco',
    'Versiones saladas con aporte extra de sodio',
  ],
  profiles: [
    'Deportistas de resistencia: corredores, ciclistas, triatletas y trail runners',
    'Deportes de equipo y raqueta',
    'Actividades de montaña, MTB y ultradistancia',
    'Personas activas que buscan un snack deportivo sin gluten',
  ],
  usage: [
    'Con bebida isotónica: 1 barrita cada 90 minutos',
    'Sin bebida isotónica: 1 barrita cada 60 minutos',
    'Ejercicio superior a 3 horas: 1 barrita cada 30-60 minutos',
    'También puede usarse como snack preentrenamiento o entre comidas',
  ],
  faq: [
    {
      question: '¿Qué cambia en Energy Bar 2.0?',
      answer:
        'Incorpora pasta de dátil y una matriz de avena sin gluten para mejorar jugosidad, digestibilidad y energía progresiva.',
    },
    {
      question: '¿Es apta para personas celíacas?',
      answer: 'Sí, se presenta como una barrita energética sin gluten.',
    },
    {
      question: '¿Es vegana?',
      answer:
        'Todas las versiones son veganas excepto Banana y Chocolate Blanco, que es apta para vegetarianos.',
    },
  ],
  recommendedTitles: [
    'Energy Gum Bar',
    'Geles Energéticos (Energy Gel)',
    'PACK Endurance Tester 3.0',
    'Bebida isotónica (Isodrink & Energy)',
  ],
}

export const productFamilies = [
  'Energía durante el ejercicio',
  'Hidratación',
  'Barritas',
  'Packs tester',
  'Suplementación',
  'Proteínas y recuperación',
  'Accesorios',
]

const visualProductsRaw = [
  {
    title: 'Energy Bar 2.0',
    slug: 'energy-bar',
    path: '/producto/energy-bar',
    category: 'Barritas',
    collectionPath: '/barritas',
    family: 'Barritas',
    price: '2,49 €',
    badge: 'Producto destacado',
    tags: ['Sin gluten', 'Avena + dátil', 'Resistencia'],
    featured: false,
    description: 'Avena + dátil para energía sostenida en resistencia.',
  },
  {
    title: 'HyperBar 45 (1:0,8)',
    slug: 'hyperbar-45-108',
    path: '/producto/hyperbar-45-108',
    category: 'Barritas',
    collectionPath: '/barritas',
    family: 'Barritas',
    price: 'IVA incluido',
    badge: 'Alta en hidratos',
    tags: ['45 g CH', '1:0,8', 'Con sodio'],
    featured: false,
    description: 'Barrita tipo gominola alta en carbohidratos para resistencia.',
  },
  {
    title: 'Energy Gum Bar',
    slug: 'energy-gum-bar',
    path: '/producto/energy-gum-bar',
    category: 'Barritas',
    collectionPath: '/barritas',
    family: 'Barritas',
    price: 'IVA incluido',
    badge: 'Gominola',
    tags: ['Vegano', 'Electrolitos', 'Cafeína opcional'],
    featured: false,
    description: 'Barrita energética de gominola para uso durante el esfuerzo.',
  },
  {
    title: 'Pack Energy Bar 2.0 Tester (x12)',
    slug: 'pack-energy-bar-tester-12',
    path: '/producto/pack-energy-bar-tester-12',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Tester barritas',
    tags: ['12 unidades', 'Todos los sabores', 'Sin gluten'],
    featured: false,
    description: 'Pack degustación con Energy Bar 2.0 para probar sabores dulces y salados.',
  },
  {
    title: 'Pack Energy GUM Bar Tester x12',
    slug: 'pack-energy-gum-bar-tester-12',
    path: '/producto/pack-energy-gum-bar-tester-12',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Tester gum',
    tags: ['12 unidades', 'Gominola', 'Energía'],
    featured: false,
    description: 'Pack de barritas de gominola para encontrar el formato favorito.',
  },
  {
    title: 'HyperGel 45 (1:0,8)',
    slug: 'hypergel-45-108',
    path: '/producto/hypergel-45-108',
    category: 'Geles Energéticos',
    collectionPath: '/geles',
    family: 'Energía durante el ejercicio',
    price: 'IVA incluido',
    badge: '45 g hidratos',
    tags: ['Informed Sport', '45 g CH', '1:0,8'],
    featured: true,
    description: 'Gel alto en carbohidratos para sesiones y competiciones largas.',
  },
  {
    title: 'Geles Energéticos (Energy Gel)',
    slug: 'energy-gel',
    path: '/producto/energy-gel',
    category: 'Geles Energéticos',
    collectionPath: '/geles',
    family: 'Energía durante el ejercicio',
    price: 'IVA incluido',
    badge: 'Clásico',
    tags: ['BCAA', 'Sales', 'Cafeína opcional'],
    featured: false,
    description: 'Formato rápido y práctico para aportar energía durante el ejercicio.',
  },
  {
    title: 'HyperGel 30 (1:0,8) Hydro',
    slug: 'hypergel-30-hydro',
    path: '/producto/hypergel-30-hydro',
    category: 'Geles Energéticos',
    collectionPath: '/geles',
    family: 'Energía durante el ejercicio',
    price: 'IVA incluido',
    badge: 'Hydro',
    tags: ['30 g CH', 'Textura líquida', 'Running'],
    featured: false,
    description: 'Gel hidro para una toma más fluida en momentos de alta intensidad.',
  },
  {
    title: 'Gel de Nitratos y Citrulina',
    slug: 'gel-nitratos-citrulina',
    path: '/producto/gel-nitratos-citrulina',
    category: 'Geles Energéticos',
    collectionPath: '/geles',
    family: 'Energía durante el ejercicio',
    price: 'IVA incluido',
    badge: 'Nitratos',
    tags: ['Citrulina', 'Resistencia', 'Informed Sport'],
    featured: false,
    description: 'Shot gel con nitratos y citrulina para apoyar el rendimiento en resistencia.',
  },
  {
    title: 'Maltodextrina PRO',
    slug: 'maltodextrina-pro',
    path: '/producto/maltodextrina-pro',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Energía durante el ejercicio',
    price: '24,95 €',
    badge: 'Energía pura',
    tags: ['Sin sabor', 'Informed Sport', 'Digestibilidad'],
    featured: false,
    description: 'Maltodextrina pura para aportar energía rápida en entrenamientos exigentes.',
  },
  {
    title: 'Bebida isotónica (Isodrink & Energy)',
    slug: 'isodrink-energy',
    path: '/producto/isodrink-energy',
    category: 'Isotónico',
    collectionPath: '/isotonico',
    family: 'Hidratación',
    price: 'IVA incluido',
    badge: 'Hidratación',
    tags: ['Informed Sport', 'BCAA', 'Sales'],
    featured: true,
    description: 'Bebida isotónica para hidratación, energía y sales minerales.',
  },
  {
    title: 'HyperDrink 90 (1:0,8)',
    slug: 'hyperdrink-90-108',
    path: '/producto/hyperdrink-90-108',
    category: 'Isotónico',
    collectionPath: '/isotonico',
    family: 'Hidratación',
    price: 'IVA incluido',
    badge: 'Muy alta en hidratos',
    tags: ['90 g CH', '1:0,8', 'Informed Sport'],
    featured: false,
    description: 'Bebida muy alta en carbohidratos para estrategias de resistencia.',
  },
  {
    title: 'HyperDrink 45 (1:0,8)',
    slug: 'hyperdrink-45-108',
    path: '/producto/hyperdrink-45-108',
    category: 'Isotónico',
    collectionPath: '/isotonico',
    family: 'Hidratación',
    price: 'IVA incluido',
    badge: 'Alta en hidratos',
    tags: ['45 g CH', 'Sodio', '1:0,8'],
    featured: false,
    description: 'Bebida isotónica alta en carbohidratos para sostener el esfuerzo.',
  },
  {
    title: 'PRO Salt Caps',
    slug: 'pro-salt-caps',
    path: '/producto/pro-salt-caps',
    category: 'Hidratación',
    collectionPath: '/tienda',
    family: 'Hidratación',
    price: '24,95 €',
    badge: 'Electrolitos',
    tags: ['310 mg sodio', 'Informed Sport', 'Cápsulas'],
    featured: false,
    description: 'Cápsulas de sales para reponer electrolitos durante el ejercicio.',
  },
  {
    title: 'PACK Hyper Energy Tester 2.0',
    slug: 'pack-hyper-energy-tester-20',
    path: '/producto/pack-hyper-energy-tester-20',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Tester',
    tags: ['Hyper', '9 unidades', 'Resistencia'],
    featured: false,
    description: 'Selección visual para probar la gama Hyper Energy.',
  },
  {
    title: 'MegaPack Hyper Energy Tester 2.0',
    slug: 'megapack-hyper-energy-tester-20',
    path: '/producto/megapack-hyper-energy-tester-20',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'MegaPack',
    tags: ['18 productos', 'Hyper', 'Tester'],
    featured: false,
    description: 'Pack ampliado para comparar formatos de nutrición en resistencia.',
  },
  {
    title: 'PACK Hyper Energy 900 (1:0,8)',
    slug: 'pack-hyper-energy-900',
    path: '/producto/pack-hyper-energy-900',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: '900 g',
    tags: ['900 g CH', '1:0,8', 'Hyper'],
    featured: false,
    description: 'Pack orientado a preparar cargas energéticas de larga duración.',
  },
  {
    title: 'PACK Endurance Tester 3.0',
    slug: 'pack-endurance-tester-30',
    path: '/producto/pack-endurance-tester-30',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Endurance',
    tags: ['14 productos', 'Antes/durante/después', 'Tester'],
    featured: false,
    description: 'Pack degustación para cubrir energía, hidratación y recuperación en resistencia.',
  },
  {
    title: 'Megapack Endurance Tester 3.0',
    slug: 'megapack-endurance-tester-30',
    path: '/producto/megapack-endurance-tester-30',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Mega endurance',
    tags: ['23 productos', 'Resistencia', 'Tester'],
    featured: false,
    description: 'Pack ampliado con productos clave para atletas de resistencia.',
  },
  {
    title: 'PACK GEL TESTER (x12 Gel energético)',
    slug: 'pack-gel-tester-12',
    path: '/producto/pack-gel-tester-12',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Gel tester',
    tags: ['12 geles', 'Sabores variados', 'Vegano'],
    featured: false,
    description: 'Pack de degustación con geles energéticos de distintos sabores.',
  },
  {
    title: 'PACK HyperGel 45 Tester (x12 unidades)',
    slug: 'pack-hypergel-45-tester-12',
    path: '/producto/pack-hypergel-45-tester-12',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'HyperGel tester',
    tags: ['12 unidades', '45 g CH', 'Con/sin cafeína'],
    featured: false,
    description: 'Pack para probar la gama completa de geles HyperGel 45.',
  },
  {
    title: 'Pack Maratón Tester',
    slug: 'pack-maraton-tester',
    path: '/producto/pack-maraton-tester',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Maratón',
    tags: ['13 productos', 'Running', 'Tester'],
    featured: false,
    description: 'Pack degustación orientado a cubrir necesidades antes, durante y después de un maratón.',
  },
  {
    title: 'PACK Gym Tester',
    slug: 'pack-gym-tester',
    path: '/producto/pack-gym-tester',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Gym',
    tags: ['14 productos', 'Shaker', 'Tester'],
    featured: false,
    description: 'Pack degustación para entusiastas del gimnasio.',
  },
  {
    title: 'Pack Salud Básico',
    slug: 'pack-salud-basico',
    path: '/producto/pack-salud-basico',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Salud',
    tags: ['Magnesio', 'Colágeno', 'Creatina'],
    featured: false,
    description: 'Pack orientado a salud muscular, articular y recuperación.',
  },
  {
    title: 'Hydration & Recovery Pack',
    slug: 'hydration-recovery-pack',
    path: '/producto/hydration-recovery-pack',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: '36,16 €',
    badge: 'Recovery',
    tags: ['Hidratación', 'Recuperación', 'Tester'],
    featured: false,
    description: 'Pack degustación para probar isotónicos y recuperadores.',
  },
  {
    title: 'Pack Hidratación PRO',
    slug: 'pack-hidratacion-pro',
    path: '/producto/pack-hidratacion-pro',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: 'IVA incluido',
    badge: 'Hidratación',
    tags: ['Isodrink', 'Salt Caps', 'Bidón'],
    featured: false,
    description: 'Pack con bebida isotónica, cápsulas de sales y bidón de entrenamiento.',
  },
  {
    title: 'PACK M.P.S. INFORMED',
    slug: 'pack-mps-informed',
    path: '/producto/pack-mps-informed',
    category: 'Packs',
    collectionPath: '/packs',
    family: 'Packs tester',
    price: '70,99 €',
    badge: 'MPS',
    tags: ['Whey', 'Creatina', 'Informed Sport'],
    featured: false,
    description: 'Pack orientado a estimular la síntesis proteica muscular.',
  },
  {
    title: 'Creatina Monohidrato (Creapure) - Sabor Neutro',
    slug: 'creatina-creapure-neutro',
    path: '/producto/creatina-creapure-neutro',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: 'IVA incluido',
    badge: 'Fuerza',
    tags: ['Creapure', 'Informed Sport', 'Neutro'],
    featured: true,
    description: 'Creatina monohidrato neutra para rendimiento y entrenamiento.',
  },
  {
    title: 'Creatine Monohydrate Creavitalis',
    slug: 'creatina-creavitalis',
    path: '/producto/creatina-creavitalis',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: 'IVA incluido',
    badge: 'Creavitalis',
    tags: ['Creatina', 'Alta solubilidad', 'Rendimiento'],
    featured: false,
    description: 'Creatina monohidrato ultrafina para potenciar rendimiento y salud muscular.',
  },
  {
    title: 'Magnesio Cápsulas deporte (90 caps)',
    slug: 'magnesio-caps-90',
    path: '/producto/magnesio-caps-90',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '19,95 €',
    badge: 'Cápsulas',
    tags: ['Informed Sport', 'Vegano', 'Sin alérgenos'],
    featured: true,
    description: 'Magnesio en cápsulas orientado al deportista de alto rendimiento.',
  },
  {
    title: 'Omega-3 Athlete (90 Softgels)',
    slug: 'omega-3-athlete-90',
    path: '/producto/omega-3-athlete-90',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '49,90 €',
    badge: 'Salud',
    tags: ['Solutex', 'IFOS', 'Informed Sport'],
    featured: false,
    description: 'Omega-3 para completar una estrategia de salud deportiva.',
  },
  {
    title: 'Omega-3 PRO (120 Perlas)',
    slug: 'omega-3-pro-120',
    path: '/producto/omega-3-pro-120',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '34,95 €',
    badge: 'PRO',
    tags: ['DHA', 'TG', 'Informed Sport'],
    featured: false,
    description: 'Formato avanzado de omega-3 para deportistas exigentes.',
  },
  {
    title: 'Colágeno hidrolizado RAW Peptan (400 g)',
    slug: 'colageno-peptan-400',
    path: '/producto/colageno-peptan-400',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '34,95 €',
    badge: 'RAW',
    tags: ['Peptan', 'Sin edulcorantes', 'Informed Sport'],
    featured: false,
    description: 'Colágeno hidrolizado sin edulcorantes para soporte estructural.',
  },
  {
    title: 'Curcumin COMPLEX (60 caps)',
    slug: 'curcumin-complex-60',
    path: '/producto/curcumin-complex-60',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '22,40 €',
    badge: 'Complex',
    tags: ['Curcumina', 'Jengibre', 'Vegano'],
    featured: false,
    description: 'Complejo de curcumina dentro de la gama de salud deportiva.',
  },
  {
    title: 'VITAMINA C SEQUENTIAL (90 Caps)',
    slug: 'vitamina-c-sequential-90',
    path: '/producto/vitamina-c-sequential-90',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '29,95 €',
    badge: 'Vitaminas',
    tags: ['Liberación sostenida', 'Vegano', 'Informed Sport'],
    featured: false,
    description: 'Vitamina C en cápsulas con enfoque de apoyo diario.',
  },
  {
    title: 'Lactoferrin 200 (Natraferrin) - 60 Cápsulas',
    slug: 'lactoferrin-200-60',
    path: '/producto/lactoferrin-200-60',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '49,95 €',
    badge: 'Cápsulas',
    tags: ['Natraferrin', 'Informed Sport', '60 caps'],
    featured: false,
    description: 'Lactoferrina en cápsulas como parte de la línea de salud.',
  },
  {
    title: 'L-Glutamina Kyowa',
    slug: 'l-glutamina-kyowa',
    path: '/producto/l-glutamina-kyowa',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '24,95 €',
    badge: 'Recuperación',
    tags: ['Kyowa', 'Vegano', 'Informed Sport'],
    featured: false,
    description: 'Glutamina enfocada a recuperación, inmunidad y rendimiento.',
  },
  {
    title: 'Pre Workout PRO ST',
    slug: 'pre-workout-pro-st',
    path: '/producto/pre-workout-pro-st',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: 'IVA incluido',
    badge: 'Pre-entreno',
    tags: ['Scientific Tested', 'Cafeína', 'Informed Sport'],
    featured: false,
    description: 'Pre-entreno concentrado para potenciar fuerza y resistencia.',
  },
  {
    title: 'Cápsulas de cafeína (CAFFEINE PRO CAPS 100MG)',
    slug: 'caffeine-pro-caps-100',
    path: '/producto/caffeine-pro-caps-100',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '24,95 €',
    badge: 'Cafeína',
    tags: ['100 mg', '120 caps', 'Vegano'],
    featured: false,
    description: 'Cápsulas pequeñas de cafeína anhidra con certificación antidoping.',
  },
  {
    title: 'BCAA Aminoácidos ramificados',
    slug: 'bcaa-ramificados',
    path: '/producto/bcaa-ramificados',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '24,50 €',
    badge: 'BCAA',
    tags: ['2:1:1', 'Polvo', 'Instantáneo'],
    featured: false,
    description: 'Aminoácidos ramificados en polvo con buena disolución.',
  },
  {
    title: 'Beta Alanina de Absorción Lenta',
    slug: 'beta-alanina-lenta',
    path: '/producto/beta-alanina-lenta',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '29,94 €',
    badge: 'Beta alanina',
    tags: ['120 comprimidos', 'Informed Sport', 'Fuerza'],
    featured: false,
    description: 'Beta-alanina de liberación lenta para fuerza y resistencia.',
  },
  {
    title: 'HMB 3800',
    slug: 'hmb-3800',
    path: '/producto/hmb-3800',
    category: 'Suplementación',
    collectionPath: '/tienda',
    family: 'Suplementación',
    price: '29,95 €',
    badge: 'HMB',
    tags: ['120 caps', 'Recuperación', 'Masa muscular'],
    featured: false,
    description: 'HMB-Ca para recuperación, protección muscular y rendimiento.',
  },
  {
    title: 'Proteína Vegana',
    slug: 'proteina-vegana',
    path: '/producto/proteina-vegana',
    category: 'Proteínas',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: '39,99 €',
    badge: 'Vegana',
    tags: ['Sin gluten', 'Sin lactosa', 'Informed Sport'],
    featured: false,
    description: 'Proteína vegana de alto rendimiento con perfil completo de aminoácidos.',
  },
  {
    title: '3:1 PRO Recovery ST',
    slug: 'recovery-3-1-pro-st',
    path: '/producto/recovery-3-1-pro-st',
    category: 'Recuperación',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: 'IVA incluido',
    badge: 'Recovery ST',
    tags: ['3:1', 'Glutamina', 'Informed Sport'],
    featured: false,
    description: 'Recuperador con carbohidratos, proteína y glutamina extra.',
  },
  {
    title: 'Recuperador muscular 3:1 Recovery+',
    slug: 'recovery-3-1-plus',
    path: '/producto/recovery-3-1-plus',
    category: 'Recuperación',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: 'IVA incluido',
    badge: 'Recovery+',
    tags: ['Whey', 'Leucina', 'Resistencia'],
    featured: false,
    description: 'Recuperador muscular y energético con carbohidratos y proteína aislada.',
  },
  {
    title: 'Iso Whey Hydrolyzed',
    slug: 'iso-whey-hydrolyzed',
    path: '/producto/iso-whey-hydrolyzed',
    category: 'Proteínas',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: 'IVA incluido',
    badge: 'Whey',
    tags: ['Optipep', 'Hidrolizada', 'Rápida absorción'],
    featured: false,
    description: 'Proteína aislada e hidrolizada de whey premium.',
  },
  {
    title: 'Proteína de suero de leche - WHEY PROTEIN+',
    slug: 'whey-protein-plus',
    path: '/producto/whey-protein-plus',
    category: 'Proteínas',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: 'IVA incluido',
    badge: 'Whey+',
    tags: ['Leucina', 'Glutamina', 'Informed Sport'],
    featured: false,
    description: 'Proteína de suero enriquecida con leucina y glutamina.',
  },
  {
    title: '100% All Beef',
    slug: 'all-beef-100',
    path: '/producto/all-beef-100',
    category: 'Proteínas',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: '56,95 €',
    badge: 'All Beef',
    tags: ['Sabor vainilla', '20 tomas', 'Sin alérgenos'],
    featured: false,
    description: 'Concentrado de carne de vacuno con respaldo científico.',
  },
  {
    title: '3:1 Vegan Recovery+',
    slug: 'recovery-3-1-vegan-plus',
    path: '/producto/recovery-3-1-vegan-plus',
    category: 'Recuperación',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: '29,95 €',
    badge: 'Vegano',
    tags: ['3:1', 'Chocolate', '750 g'],
    featured: false,
    description: 'Recuperador vegano con carbohidratos, proteína de guisante y aminoácidos.',
  },
  {
    title: 'Proteína secuencial & Night Protein',
    slug: 'protein-sequential-night',
    path: '/producto/protein-sequential-night',
    category: 'Proteínas',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: 'IVA incluido',
    badge: 'Night',
    tags: ['Absorción gradual', 'Post entreno', 'Noche'],
    featured: false,
    description: 'Proteína premium con diferentes velocidades de absorción.',
  },
  {
    title: 'Beef & Whey ST',
    slug: 'beef-whey-st',
    path: '/producto/beef-whey-st',
    category: 'Proteínas',
    collectionPath: '/tienda',
    family: 'Proteínas y recuperación',
    price: '62,95 €',
    badge: 'ST',
    tags: ['All Beef', 'Whey', 'Estudio científico'],
    featured: false,
    description: 'Mezcla proteica premium con proteína de carne y whey hidrolizada.',
  },
  {
    title: 'Bidón de competición PRO FLY',
    slug: 'bidon-pro-fly',
    path: '/producto/bidon-pro-fly',
    category: 'Accesorios',
    collectionPath: '/tienda',
    family: 'Accesorios',
    price: '12,90 €',
    badge: 'Bidón',
    tags: ['550/750 ml', 'Ligero', 'ELITE'],
    featured: false,
    description: 'Bidón deportivo ligero para competición y ciclismo.',
  },
  {
    title: 'Bidón de Entrenamiento ELITE',
    slug: 'bidon-elite-entreno',
    path: '/producto/bidon-elite-entreno',
    category: 'Accesorios',
    collectionPath: '/tienda',
    family: 'Accesorios',
    price: '7,99 €',
    badge: 'Entreno',
    tags: ['ELITE', 'Resistente', 'Alto caudal'],
    featured: false,
    description: 'Bidón versátil para entrenamiento diario y outdoor.',
  },
  {
    title: 'Soft Flask PRO 350 ml',
    slug: 'soft-flask-350',
    path: '/producto/soft-flask-350',
    category: 'Accesorios',
    collectionPath: '/tienda',
    family: 'Accesorios',
    price: '15,90 €',
    badge: 'Flask',
    tags: ['350 ml', 'Trail', 'Ultraligero'],
    featured: false,
    description: 'Soft flask compacto para running y trail de corta o media distancia.',
  },
  {
    title: 'Soft Flask PRO 500 ml boca ancha',
    slug: 'soft-flask-500-wide',
    path: '/producto/soft-flask-500-wide',
    category: 'Accesorios',
    collectionPath: '/tienda',
    family: 'Accesorios',
    price: '19,90 €',
    badge: 'Flask',
    tags: ['500 ml', 'Boca ancha', 'Ultra'],
    featured: false,
    description: 'Flask de 500 ml con boca ancha para carga rápida de bebida o geles.',
  },
  {
    title: 'Soft Flask PRO 500 ml boca estrecha',
    slug: 'soft-flask-500-narrow',
    path: '/producto/soft-flask-500-narrow',
    category: 'Accesorios',
    collectionPath: '/tienda',
    family: 'Accesorios',
    price: '17,90 €',
    badge: 'Flask',
    tags: ['500 ml', 'Boca estrecha', 'Trail'],
    featured: false,
    description: 'Flask cilíndrico de gran capacidad para mochila, chaleco o cinturón.',
  },
  {
    title: 'ThermoSPORT Bottle 1 L',
    slug: 'thermosport-bottle-1l',
    path: '/producto/thermosport-bottle-1l',
    category: 'Accesorios',
    collectionPath: '/tienda',
    family: 'Accesorios',
    price: '39,90 €',
    badge: 'Térmica',
    tags: ['1 L', 'Acero inoxidable', 'Frío/calor'],
    featured: false,
    description: 'Botella térmica deportiva de acero inoxidable para entrenamientos exigentes.',
  },
  {
    title: 'Headband PRO Trailrunning',
    slug: 'headband-pro-trail',
    path: '/producto/headband-pro-trail',
    category: 'Accesorios',
    collectionPath: '/tienda',
    family: 'Accesorios',
    price: '9,99 €',
    badge: 'Trail',
    tags: ['Transpirable', 'UE', 'Running'],
    featured: false,
    description: 'Cinta deportiva transpirable para trail running y entrenamiento.',
  },
  {
    title: 'SHAKER PRO 600 ML',
    slug: 'shaker-pro-600',
    path: '/producto/shaker-pro-600',
    category: 'Accesorios',
    collectionPath: '/tienda',
    family: 'Accesorios',
    price: '7,95 €',
    badge: 'Shaker',
    tags: ['600 ml', 'Libre BPA', 'Mezclador'],
    featured: false,
    description: 'Shaker resistente para mezclar suplementos de forma rápida y homogénea.',
  },
]

export const shopGoals = [
  { id: 'durante-esfuerzo', label: 'Durante el esfuerzo' },
  { id: 'hidratacion', label: 'Hidratación' },
  { id: 'recuperacion', label: 'Recuperación / base' },
  { id: 'snack-solido', label: 'Snack sólido' },
  { id: 'packs', label: 'Packs / probar' },
]

export function parsePriceEuro(priceStr) {
  if (!priceStr || typeof priceStr !== 'string') return null
  const compact = priceStr.replace(/[\s\u00A0\u202F]/g, '')
  const decimal = compact.match(/(\d+)[,.](\d{1,2})/)
  if (decimal) return parseFloat(`${decimal[1]}.${decimal[2]}`)
  const whole = compact.match(/(\d+)(?=€)/)
  if (whole) return parseFloat(whole[1], 10)
  return null
}

export function formatEuro(amount) {
  if (amount == null || Number.isNaN(amount)) return '—'
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount)
}

function inferProductGoals(product) {
  const goals = new Set()
  const { family, collectionPath } = product
  if (family === 'Energía durante el ejercicio' || collectionPath === '/geles') {
    goals.add('durante-esfuerzo')
  }
  if (family === 'Hidratación' || collectionPath === '/isotonico') {
    goals.add('hidratacion')
  }
  if (family === 'Barritas' || collectionPath === '/barritas') {
    goals.add('snack-solido')
    goals.add('durante-esfuerzo')
  }
  if (family === 'Packs tester' || collectionPath === '/packs') {
    goals.add('packs')
  }
  if (family === 'Suplementación') {
    goals.add('recuperacion')
  }
  if (family === 'Proteínas y recuperación') {
    goals.add('recuperacion')
  }
  return [...goals]
}

function enrichVisualProduct(product) {
  const image = crownStoreProductImages[product.slug] ?? null
  const price = crownStoreListPrices[product.slug] ?? product.price
  return {
    ...product,
    price,
    image,
    imageAlt: image ? `${product.title} — imagen de referencia crownsportnutrition.com` : null,
    priceValue: parsePriceEuro(price),
    goals: inferProductGoals(product),
  }
}

export const visualProducts = visualProductsRaw.map(enrichVisualProduct)

const productDetailOverrides = {
  'hypergel-45-108': {
    formats: ['Monodosis 80 g (visual)', 'Caja 12 unidades (visual)'],
    flavors: ['Cola con cafeína', 'Cola sin cafeína', 'Frutos rojos', 'Piña (visual)'],
  },
  'energy-gel': {
    formats: ['Gel 40 g (visual)', 'Caja múltiple (visual)'],
    flavors: ['Cítrico', 'Cola', 'Neutro', 'Frutas (visual)'],
  },
  'hypergel-30-hydro': {
    formats: ['Gel hydro (visual)', 'Caja (visual)'],
    flavors: ['Lima', 'Maracuyá', 'Neutro (visual)'],
  },
  'gel-nitratos-citrulina': {
    formats: ['Monodosis (visual)', 'Pack 6 (visual)'],
    flavors: ['Cítrico intenso', 'Fruta roja (visual)'],
  },
  'isodrink-energy': {
    formats: ['Bote 800 g (visual)', 'Sticks monodosis (visual)'],
    flavors: ['Limón', 'Naranja', 'Frutos rojos (visual)'],
  },
  'hyperdrink-90-108': {
    formats: ['800 g (visual)', 'Stick (visual)'],
    flavors: ['Cítrico', 'Neutro (visual)'],
  },
  'hyperdrink-45-108': {
    formats: ['800 g (visual)', 'Stick (visual)'],
    flavors: ['Limón', 'Naranja (visual)'],
  },
  'maltodextrina-pro': {
    formats: ['1 kg (visual)', 'Bolsa 3 kg (visual)'],
    flavors: ['Neutro'],
  },
  'creatina-creapure-neutro': {
    formats: ['300 g (visual)', '500 g (visual)'],
    flavors: ['Neutro'],
  },
  'proteina-vegana': {
    formats: ['750 g (visual)', '2 kg (visual)'],
    flavors: ['Vainilla', 'Chocolate', 'Cookies (visual)'],
  },
  'whey-protein-plus': {
    formats: ['900 g (visual)', '2 kg (visual)'],
    flavors: ['Chocolate', 'Vainilla', 'Cookies (visual)'],
  },
  'iso-whey-hydrolyzed': {
    formats: ['800 g (visual)', '2 kg (visual)'],
    flavors: ['Chocolate', 'Vainilla', 'Neutro (visual)'],
  },
}

function relatedSlugsFor(card) {
  const sameCollection = visualProducts.filter(
    (p) => p.slug !== card.slug && p.collectionPath === card.collectionPath,
  )
  const sameFamily = visualProducts.filter(
    (p) => p.slug !== card.slug && p.family === card.family,
  )
  const combined = [...sameCollection, ...sameFamily]
  const unique = [...new Map(combined.map((p) => [p.slug, p])).values()]
  const pool = unique.length ? unique : visualProducts.filter((p) => p.slug !== card.slug)
  return pool.slice(0, 4).map((p) => p.slug)
}

export function getProductForPage(slug) {
  const card = visualProducts.find((p) => p.slug === slug)
  if (!card) return null

  if (slug === energyBar.slug) {
    const relatedSlugs = energyBar.recommendedTitles
      .map((t) => visualProducts.find((p) => p.title === t)?.slug)
      .filter(Boolean)
    const base = {
      ...card,
      id: energyBar.id,
      slug: energyBar.slug,
      path: `/producto/${energyBar.slug}`,
      name: energyBar.name,
      title: energyBar.name,
      image: energyBar.image ?? card.image,
      imageAlt: card.imageAlt,
      category: energyBar.category,
      price: energyBar.price,
      tax: energyBar.tax,
      subtitle: energyBar.subtitle,
      description: energyBar.description,
      longDescription: energyBar.longDescription,
      formats: energyBar.formats,
      flavors: energyBar.flavors,
      flavorGroups: energyBar.flavorGroups,
      sodiumNotes: energyBar.sodiumNotes,
      benefits: energyBar.benefits,
      profiles: energyBar.profiles,
      usage: energyBar.usage,
      faq: energyBar.faq,
      certifications: ['Sin gluten (referencia de ficha)', 'Informed Sport (gama)'],
      relatedSlugs,
      isPremiumDetail: true,
    }
    return { ...base, detailTabs: buildProductDetailTabs(base) }
  }

  const override = productDetailOverrides[slug] || {}
  const relatedSlugs = relatedSlugsFor(card)
  const informed =
    card.tags?.some((t) => /Informed/i.test(t)) || /Informed/i.test(card.badge || '')

  const base = {
    ...card,
    id: card.slug,
    name: card.title,
    image: card.image,
    imageAlt: card.imageAlt,
    tax: 'IVA incluido',
    subtitle: card.badge,
    description: card.description,
    longDescription: `${card.description} Contenido ampliado con fines académicos para simular una ficha ecommerce completa; no sustituye información legal ni etiquetado oficial.`,
    formats: ['Formato único (visual)'],
    flavors: null,
    benefits: [
      `Enfoque de uso: ${card.family}.`,
      ...(card.tags || []).slice(0, 4).map((t) => `Destaca: ${t}.`),
    ],
    usage: [
      'Ajustar volumen e ingesta según duración, intensidad y tolerancia individual.',
      'Validar en entrenamiento antes de competición.',
      'Prototipo académico: no prescribe pautas nutricionales reales.',
    ],
    certifications: informed ? ['Informed Sport (referencia de catálogo)'] : [],
    relatedSlugs,
    ...override,
  }
  return { ...base, detailTabs: buildProductDetailTabs(base) }
}

export const trustItems = [
  { label: 'Enfoque científico', icon: Atom },
  { label: 'Nutrición deportiva', icon: Dumbbell },
  { label: 'Compra desactivada', icon: ShieldCheck },
]

export const contentBlocks = [
  {
    path: '/blog',
    title: 'Blog',
    eyebrow: 'Contenido deportivo',
    icon: BookOpen,
    copy: 'Artículos visuales sobre planificación, alimentación en carrera y preparación para pruebas de resistencia.',
  },
  {
    path: '/ciencia',
    title: 'Ciencia',
    eyebrow: 'Base técnica',
    icon: Atom,
    copy: 'Una sección para explicar ingredientes, tolerancia digestiva, timing de ingesta y estrategia energética.',
  },
  {
    path: '/contacto',
    title: 'Contacto',
    eyebrow: 'Sin datos reales',
    icon: Sparkles,
    copy: 'Formulario visual no funcional creado solo para representar la experiencia de contacto del rediseño.',
  },
]

export const sportHighlights = [
  { title: 'Antes', text: 'Prepara formatos y sabores según la duración.', icon: Timer },
  { title: 'Durante', text: 'Consulta dosis de energía de manera directa.', icon: Zap },
  { title: 'Después', text: 'Revisa recomendaciones sin distracciones.', icon: Utensils },
]

export const scienceCards = [
  {
    title: 'Ciencia aplicada al deporte real',
    text: 'Formulaciones desarrolladas con literatura científica, estudios propios y colaboración con universidades, médicos, nutricionistas y deportistas.',
    metric: '15 publicaciones',
  },
  {
    title: 'Certificación Informed Sport',
    text: 'Comunicación visible sobre control antidopaje, seguridad para deportistas y análisis por lote en productos certificados.',
    metric: '21+ productos',
  },
  {
    title: 'Formulaciones premium',
    text: 'Materias primas seleccionadas, procesos certificados y enfoque en digestibilidad, eficacia y tolerancia gastrointestinal.',
    metric: 'IFS / GMP',
  },
]

export const reasonCards = [
  {
    title: 'Ciencia',
    text: 'Investigación aplicada, publicaciones y transferencia directa al rendimiento deportivo.',
  },
  {
    title: 'Calidad',
    text: 'Materias primas de alta pureza, productos gluten free y línea RAW sin edulcorantes.',
  },
  {
    title: 'Informed Sport',
    text: 'Control antidopaje para reducir riesgos en deportistas sometidos a controles.',
  },
  {
    title: 'Transparencia',
    text: 'Información nutricional, fichas técnicas, estudios y certificados presentados de forma clara.',
  },
]

export const reviewItems = [
  { source: 'Google', score: '4,9 / 5', detail: 'Basado en 212 reseñas' },
  { source: 'Amazon', score: '4,5 / 5', detail: 'Opiniones de clientes' },
]

export const blogPosts = [
  {
    title: 'Beta-alanina y rendimiento deportivo',
    category: 'Suplementación',
    excerpt: 'Resumen visual sobre para qué sirve, cuándo usarla y cómo encaja en fuerza y resistencia.',
  },
  {
    title: 'Omega-3 en mujeres deportistas',
    category: 'Nutrición',
    excerpt: 'Contenido divulgativo sobre EPA, DHA, recuperación y salud en etapas de alta carga.',
  },
  {
    title: 'La ciencia del hierro',
    category: 'Ciencia',
    excerpt: 'Artículo orientado a explicar el papel del hierro en salud, transporte de oxígeno y rendimiento.',
  },
  {
    title: 'Errores que reducen el rendimiento',
    category: 'Entrenamiento',
    excerpt: 'Guía visual sobre pequeños fallos de nutrición, hidratación y planificación que afectan en carrera.',
  },
  {
    title: 'Agujetas y recuperación muscular',
    category: 'Recuperación',
    excerpt: 'Explicación sencilla del dolor muscular tardío y estrategias para volver a entrenar mejor.',
  },
  {
    title: 'Nutrición y sueño',
    category: 'Nutrición',
    excerpt: 'Relación entre descanso, salud metabólica y rendimiento deportivo en periodos de entrenamiento.',
  },
  {
    title: 'Hidratos durante el ejercicio',
    category: 'Producto',
    excerpt: 'Por qué los carbohidratos importan en resistencia y cómo elegir geles, bebidas o barritas.',
  },
  {
    title: 'Novedades en suplementación Crown',
    category: 'Producto',
    excerpt: 'Módulo editorial para presentar lanzamientos y explicar su base científica de forma clara.',
  },
]

export const libraryTopics = [
  {
    title: 'Proteínas y recuperación',
    metric: 'Síntesis muscular',
    text: 'Evidencias sobre recuperación, proteínas de distintas fuentes y estrategias post ejercicio.',
  },
  {
    title: 'Cafeína',
    metric: 'Rendimiento',
    text: 'Contenido científico sobre dosis, timing, tolerancia y uso en competición.',
  },
  {
    title: 'Hidratos de carbono',
    metric: '1:0,8',
    text: 'Bases de la combinación glucosa/fructosa, oxidación exógena y tolerancia digestiva.',
  },
  {
    title: 'Recuperación',
    metric: '3:1',
    text: 'Recursos sobre reposición de glucógeno, proteína, electrolitos y fatiga.',
  },
  {
    title: 'Salud articular',
    metric: 'Colágeno',
    text: 'Material sobre tejido conectivo, vitamina C, colágeno hidrolizado y prevención.',
  },
  {
    title: 'Omega-3',
    metric: 'EPA / DHA',
    text: 'Evidencias sobre inflamación, recuperación muscular y salud cardiovascular.',
  },
]

export const crownClubBenefits = [
  'Comunidad profesional para médicos, nutricionistas, entrenadores y prescriptores',
  'Recursos para recomendar productos con criterio científico',
  'Soporte personalizado y comunicación directa con la marca',
  'Ventajas visuales tipo descuentos, materiales y prioridad de atención',
]

export const contactInfo = {
  email: 'info@crownsportnutrition.com',
  whatsapp: '+34 613 000 417',
  address: 'C/Raposal, 23, 26580 Arnedo (La Rioja), España',
  company: 'Meatprot S.L.',
  note: 'Datos públicos usados como referencia visual. Este prototipo no envía mensajes ni recoge datos reales.',
}

export const shippingInfo = [
  'Envío gratis a partir de 25€',
  'Entrega 24/48h en Península',
  'Soporte por WhatsApp y email',
  'Pago seguro mostrado solo como etiqueta visual',
]

export const socialLinks = [
  { label: 'Instagram', url: 'https://www.instagram.com/crownsportnutrition/' },
  { label: 'Strava', url: 'https://www.strava.com/clubs/528705' },
  { label: 'X', url: 'https://x.com/crownsportnutri' },
  { label: 'Facebook', url: 'https://www.facebook.com/crownsportnutrition' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/crownsportnutrition' },
]
