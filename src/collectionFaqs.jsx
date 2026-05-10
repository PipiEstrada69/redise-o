/**
 * FAQs de categoría alineadas con crownsportnutrition.com (PLP por familia).
 * Fuentes consultadas: /categoria-producto/barritas/, /categoria-producto/geles/,
 * /categoria-producto/isotonico/, textos de /categoria-producto/shop/crown-packs/ (sin bloque FAQ global en web).
 */
export const collectionFaqs = {
  '/barritas': {
    title: 'FAQS – Barritas Crown Sport Nutrition',
    items: [
      {
        id: 'bar-1',
        question: '¿Para qué sirven las barritas energéticas?',
        body: (
          <p>
            Las barritas energéticas aportan carbohidratos y nutrientes que ayudan a mantener la energía
            durante el ejercicio, retrasar la fatiga y favorecer la recuperación en entrenamientos y
            competiciones de resistencia. También son una opción práctica como snack saludable antes o
            después de entrenar.
          </p>
        ),
      },
      {
        id: 'bar-2',
        question: '¿Qué diferencia hay entre las distintas barritas de Crown Sport Nutrition?',
        body: (
          <ul className="faq-accordion__list">
            <li>
              Energy Bar: barrita energética clásica con carbohidratos y textura fácil de masticar, ideal
              durante el esfuerzo.
            </li>
            <li>
              Energy Gum Bar: barrita tipo gominola, muy ligera y de rápida asimilación, perfecta cuando
              buscas energía inmediata sin sensación de pesadez.
            </li>
            <li>
              HyperBar 45: aporta 45 g de carbohidratos y electrolitos, diseñada para esfuerzos prolongados
              y con sudoración elevada.
            </li>
            <li>
              Raw Bar: barrita natural a base de dátiles y frutos secos, sin azúcares añadidos, pensada como
              snack saludable o aporte energético natural.
            </li>
            <li>
              Vegan Raw Bar: versión 100% vegana de la Raw Bar, con ingredientes naturales y apta para
              quienes siguen una alimentación plant-based.
            </li>
          </ul>
        ),
      },
      {
        id: 'bar-3',
        question: '¿Cuándo debo tomar una barrita?',
        body: (
          <>
            <p>Depende del tipo:</p>
            <ul className="faq-accordion__list">
              <li>
                Durante el ejercicio: Energy Bar, Energy Gum Bar e HyperBar 45 aportan energía rápida y
                sostenida.
              </li>
              <li>
                Antes del ejercicio o como snack: Raw Bar y Vegan Raw Bar son opciones naturales y
                saciantes, perfectas como carga previa o tentempié saludable.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 'bar-4',
        question: '¿Qué diferencia hay entre tomar una barrita y un gel?',
        body: (
          <p>
            Los geles son más concentrados y de absorción muy rápida, ideales para momentos de máxima
            exigencia. Las barritas aportan carbohidratos junto con más textura y, en algunos casos, fibra
            y grasas saludables, lo que las hace más saciantes. Son útiles para esfuerzos largos,
            entrenamientos de varias horas o como complemento en la alimentación deportiva.
          </p>
        ),
      },
      {
        id: 'bar-5',
        question: '¿Son fáciles de digerir?',
        body: (
          <p>
            Sí. Las Energy Bar, Energy Gum Bar e HyperBar 45 están formuladas para ser de rápida digestión
            incluso durante la actividad física. Las Raw Bar y Vegan Raw Bar, al estar hechas con
            ingredientes naturales (dátiles, frutos secos, etc.), aportan más fibra y saciedad, siendo
            ideales fuera del momento de mayor exigencia física.
          </p>
        ),
      },
      {
        id: 'bar-6',
        question: '¿Puedo usarlas en cualquier deporte?',
        body: (
          <p>
            Sí, son aptas para deportes de resistencia como ciclismo, triatlón, running o trail running, y
            también como apoyo en deportes de equipo (fútbol, tenis, artes marciales). Las Raw Bar y Vegan
            Raw Bar, además, son una opción perfecta para quienes buscan un snack nutritivo en el día a día.
          </p>
        ),
      },
      {
        id: 'bar-7',
        question: '¿Tienen certificación antidoping?',
        body: (
          <p>
            Los productos de Crown Sport Nutrition están elaborados con los más altos estándares de
            calidad. (Consulta la ficha de cada producto/sabor para ver la disponibilidad de certificación
            Informed Sport).
          </p>
        ),
      },
    ],
  },
  '/geles': {
    title: 'FAQS – Geles Energéticos Crown Sport Nutrition',
    items: [
      {
        id: 'gel-1',
        question: '¿Para qué sirven los geles energéticos?',
        body: (
          <p>
            Los geles energéticos aportan carbohidratos de rápida asimilación que ayudan a mantener los
            niveles de glucosa en sangre durante entrenamientos y competiciones de resistencia. De esta
            forma, retrasan la fatiga, mejoran el rendimiento y facilitan la recuperación posterior.
          </p>
        ),
      },
      {
        id: 'gel-2',
        question: '¿Cuál es la diferencia entre EnergyGel, Hypergel 45 y Hypergel 30 Hydra?',
        body: (
          <ul className="faq-accordion__list">
            <li>
              EnergyGel: gel energético con carbohidratos de rápida absorción, ligero y de fácil digestión.
            </li>
            <li>
              Hypergel 45: aporta 45 g de carbohidratos en un solo gel, ideal para reducir el número de geles
              necesarios en pruebas largas.
            </li>
            <li>
              Hypergel 30 Hydra: aporta 30 g de carbohidratos y además incluye electrolitos para mejorar la
              hidratación, perfecto para climas cálidos o esfuerzos con mucha sudoración.
            </li>
          </ul>
        ),
      },
      {
        id: 'gel-3',
        question: '¿Cuándo debo tomar un gel energético?',
        body: (
          <p>
            Se recomienda tomarlos durante el ejercicio, a partir de los 45-60 minutos de actividad intensa,
            y luego repetir según la duración e intensidad del esfuerzo. La pauta más usada es entre 30 y 60
            g de carbohidratos por hora, pudiendo llegar hasta 90 g/h en deportistas entrenados.
          </p>
        ),
      },
      {
        id: 'gel-4',
        question: '¿Debo acompañar los geles con agua?',
        body: (
          <p>
            Sí, especialmente los EnergyGel y los Hypergel 45, para facilitar la absorción y evitar
            molestias digestivas. En el caso de Hypergel 30 Hydra, no es necesario acompañarlo con agua, ya
            que contiene electrolitos y está diseñado para tomarse directamente.
          </p>
        ),
      },
      {
        id: 'gel-5',
        question: '¿Qué diferencia hay entre tomar geles y bebidas isotónicas?',
        body: (
          <p>
            Ambos aportan carbohidratos, pero los geles son más concentrados y prácticos para llevar
            encima, mientras que las isotónicas aportan además hidratación. Lo ideal es combinarlos según las
            necesidades: geles para energía rápida y bebida isotónica para reponer líquidos y sales
            minerales.
          </p>
        ),
      },
      {
        id: 'gel-6',
        question: '¿Son aptos para todos los deportes?',
        body: (
          <p>
            Sí, están indicados para deportes de resistencia como ciclismo, triatlón, running o trail
            running, pero también pueden ser útiles en deportes de equipo (fútbol, tenis, artes marciales)
            cuando el esfuerzo es intenso y prolongado.
          </p>
        ),
      },
      {
        id: 'gel-7',
        question: '¿Tienen certificación antidoping?',
        body: (
          <p>
            Sí, los geles Crown Sport Nutrition cuentan con la certificación Informed Sport, lo que garantiza
            que están libres de sustancias prohibidas y son seguros para deportistas profesionales y
            amateurs.
          </p>
        ),
      },
    ],
  },
  '/isotonico': {
    title: 'FAQS – Isotónicos Crown Sport Nutrition',
    items: [
      {
        id: 'iso-1',
        question: '¿Por qué tomar bebidas isotónicas durante el ejercicio?',
        body: (
          <p>
            Aportan agua, carbohidratos y electrolitos para mantener la hidratación, retrasar la fatiga y
            sostener el rendimiento en esfuerzos prolongados y con alta sudoración.
          </p>
        ),
      },
      {
        id: 'iso-2',
        question: '¿Qué diferencia hay entre Isodrink & Energy y Hyperdrink 45?',
        body: (
          <ul className="faq-accordion__list">
            <li>
              Isodrink & Energy: isotónico premium con mezcla de carbohidratos (2:1:1), electrolitos y un
              plus de aminoácidos (BCAA y L-Glutamina), pensado para entrenamientos y competiciones de
              duración media-larga.
            </li>
            <li>
              Hyperdrink 45: bebida muy alta en hidratos de carbono (45 g por toma) para demandas
              energéticas elevadas y ultraresistencia, cuando necesitas maximizar la ingesta de CH durante el
              esfuerzo.
            </li>
          </ul>
        ),
      },
      {
        id: 'iso-3',
        question: '¿Qué son las Pro Salt Caps y cuándo usarlas?',
        body: (
          <p>
            Cápsulas de sales minerales para reponer electrolitos de forma rápida y práctica. Útiles en
            condiciones de calor, alta sudoración o pruebas de larga duración, como complemento a la
            hidratación.
          </p>
        ),
      },
      {
        id: 'iso-4',
        question: '¿Isotónico, agua o cápsulas de sales: cómo combinarlos?',
        body: (
          <p>
            El isotónico cubre líquidos + carbohidratos + electrolitos. El agua hidrata pero no repone sales
            ni energía. Las cápsulas de sales permiten ajustar electrolitos en escenarios de sudoración
            elevada o cuando prefieres beber agua y mantener la energía con otras fuentes (p.ej., bebidas
            altas en CH).
          </p>
        ),
      },
      {
        id: 'iso-5',
        question: '¿Puedo usar Hyperdrink 45 junto con isotónicos o gels?',
        body: (
          <p>
            Sí, en estrategias de larga duración puede combinarse con isotónicos o gels para alcanzar la
            ingesta de carbohidratos objetivo. Ajusta la reposición de sales con isotónico o Pro Salt Caps
            según tu sudoración y condiciones ambientales.
          </p>
        ),
      },
      {
        id: 'iso-6',
        question: '¿Son aptos para cualquier deporte?',
        body: (
          <p>
            Sí, son adecuados para ciclismo, triatlón, running, trail y deportes de equipo. Isodrink & Energy
            favorece la hidratación y el rendimiento sostenido; Hyperdrink 45 es idóneo cuando buscas alta
            disponibilidad de carbohidratos; Pro Salt Caps ayudan a mantener el equilibrio electrolítico.
          </p>
        ),
      },
      {
        id: 'iso-7',
        question: '¿Tienen certificación antidoping?',
        body: (
          <p>
            Los productos de Crown Sport Nutrition se elaboran con los más altos estándares de calidad.
            (Consulta la ficha de cada producto/sabor para ver la disponibilidad de certificación Informed
            Sport).
          </p>
        ),
      },
    ],
  },
  '/packs': {
    title: 'FAQS – Packs y ofertas Crown Sport Nutrition',
    items: [
      {
        id: 'pack-1',
        question: '¿Qué es un pack tester?',
        body: (
          <p>
            Es un pack degustación con varias unidades y referencias para probar por primera vez los
            productos Crown Sport Nutrition sin tener que comprar una caja o bote entero, a un precio
            orientado al descubrimiento (endurance, maratón, gimnasio, Hyper Energy, etc.).
          </p>
        ),
      },
      {
        id: 'pack-2',
        question: '¿Para quién están pensados los packs de resistencia?',
        body: (
          <p>
            Principalmente para atletas de resistencia (triatlón, MTB, ciclismo, trail running, maratón,
            etc.) que quieren cubrir energía, hidratación y recuperación en el antes, durante y después,
            probando referencias clave sin comprar formato grande.
          </p>
        ),
      },
      {
        id: 'pack-3',
        question: '¿Algunos packs incluyen bidón o shaker?',
        body: (
          <p>
            Sí. Por ejemplo, el PACK Endurance Tester 3.0 o los packs Hyper Energy Tester pueden elegirse
            con bidón de entrenamiento ELITE (550 ml / 750 ml) o Shaker PRO; el PACK Gym Tester incluye
            Shaker PRO. Revisa siempre la ficha del pack en la tienda oficial.
          </p>
        ),
      },
      {
        id: 'pack-4',
        question: '¿Qué diferencia hay entre PACK Endurance Tester y Megapack Endurance Tester?',
        body: (
          <p>
            Ambos están orientados a resistencia con productos estrella. El Megapack amplía el número de
            productos incluidos respecto al pack estándar, para quien quiere una degustación más completa
            antes de decidir formatos definitivos.
          </p>
        ),
      },
      {
        id: 'pack-5',
        question: '¿Qué es el PACK Hyper (1:0,8) Energy Tester?',
        body: (
          <p>
            Pack para probar la línea Hyper (1:0,8): productos altos en carbohidratos, relación glucosa/fructosa
            1:0,8 y sodio, con y sin cafeína, según el enfoque de alta ingesta de CH por hora descrito en la
            tienda.
          </p>
        ),
      },
      {
        id: 'pack-6',
        question: '¿Un pack sustituye el asesoramiento nutricional individual?',
        body: (
          <p>
            No. Los packs sirven para descubrir productos y texturas; la planificación nutricional debe
            adaptarse siempre a cada persona, objetivo y contexto deportivo.
          </p>
        ),
      },
      {
        id: 'pack-7',
        question: '¿Tienen certificación antidoping los productos de los packs?',
        body: (
          <p>
            Los productos Crown Sport Nutrition se elaboran con altos estándares de calidad; algunos packs
            destacan referencias con certificación Informed Sport (p. ej. Pack Salud Básico). Consulta la
            ficha de cada referencia incluida en el pack.
          </p>
        ),
      },
    ],
  },
}
