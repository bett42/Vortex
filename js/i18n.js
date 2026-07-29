let lang = 'es';

// reduced-motion by preference
const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const i18n = {
  /* ----------------------- SPANISH ----------------------- */
  es: {
    'site.title': 'Vortex - Domina la Terminal',
    'nav.home': 'Inicio', 'nav.commands': 'Comandos', 'nav.types': 'Tipos',
    'nav.blog': 'Blog', 'nav.projects': 'Proyectos', 'nav.about': 'Acerca de',

    'hero.pre': 'Guía interactiva de terminal',
    'hero.subtitle': 'Domina la terminal de Linux con tarjetas interactivas, ejemplos reales y una experiencia diseñada para quienes aman la línea de comandos.',
    'hero.cta': 'Explorar Comandos',

    'home.stat1': 'Comandos', 'home.stat2': 'Categorías', 'home.stat3': 'Proyectos',

    'commands.title': 'Comandos Esenciales',
    'commands.subtitle': 'Filtra por categoría o busca cualquier comando.',
    'commands.search': 'Buscar comando...',
    'commands.showing': 'Mostrando', 'commands.of': 'de',
    'commands.noResults': 'No se encontraron comandos con ese filtro.',

    'types.title': 'Tipos de Comandos',
    'types.subtitle': 'Los comandos de Linux se organizan en categorías según su función principal. Haz clic en cualquier recuadro para filtrar comandos.',
    'types.filter_hint': 'Filtrar comandos de esta categoría',

    'blog.title': 'Blog Técnico',
    'blog.subtitle': 'Artículos en profundidad sobre comandos, flujos de trabajo y el ecosistema Linux. Publicación mensual.',
    'blog.read': 'Leer artículo',

    'projects.title': 'Proyectos que Usan la Terminal',
    'projects.subtitle': 'Proyectos reales que usan los comandos de Vortex internamente. Ejemplos vivos de cómo construir herramientas útiles con la línea de comandos.',
    'projects.stars': 'estrellas',
    'projects.uses': 'usa:',

    'about.title': 'Acerca de Vortex',
    'about.subtitle': 'Un proyecto educativo, abierto y construido con pasión por la línea de comandos.',
    'about.p1': 'Vortex nació como un proyecto educativo, creado por un estudiante universitario apasionado por Linux y la línea de comandos. La premisa es simple: aprender la terminal no debería ser aburrido ni estar esparcido en decenas de tutoriales desconectados.',
    'about.p2': 'Aquí encontrarás una guía interactiva con comandos esenciales organizados por categorías reales de uso, artículos (aproximadamente) mensuales que profundizan en temas actuales del ecosistema Linux, y una selección de proyectos open source modernos que están reemplazando a las herramientas clásicas.',
    'about.p3': 'El código está disponible en GitHub, comentado y estructurado para que cualquiera pueda estudiarlo, modificarlo y aprender de él. Si te interesa la terminal, los sistemas operativos o el software libre, eres bienvenido a explorar.',
    'about.card1.title': 'Educativo', 'about.card1.desc': 'Cada comando y artículo busca enseñar el porqué, no solo el cómo.',
    'about.card2.title': 'Open Source', 'about.card2.desc': 'Código abierto en GitHub, libre para estudiar y modificar.',
    'about.card3.title': 'Hecho con pasión', 'about.card3.desc': 'Un proyecto personal de quien ama la terminal de Linux.',
    'about.repo': 'Ver en GitHub',

    'footer.tagline': 'Aprende. Ejecuta. Domina.',
    'footer.copy': '2026 Vortex. Proyecto Educativo.',

    'filter.all': 'Todos',
    'toast.lang': 'Idioma cambiado a Español',
    'cat.files': 'Archivos', 'cat.text': 'Texto', 'cat.network': 'Red', 'cat.system': 'Sistema', 'cat.process': 'Procesos',

    'type.files.title': 'Gestión de Archivos',
    'type.files.desc': 'Navega, crea, copia, mueve y elimina archivos y directorios en el sistema de archivos.',
    'type.text.title': 'Procesamiento de Texto',
    'type.text.desc': 'Busca, transforma, filtra y analiza contenido de archivos de texto con herramientas poderosas.',
    'type.network.title': 'Herramientas de Red',
    'type.network.desc': 'Conéctate a servidores remotos, transfiere datos y diagnostica problemas de red.',
    'type.system.title': 'Administración del Sistema',
    'type.system.desc': 'Monitorea recursos, gestiona servicios y obtén información del sistema operativo.',
    'type.process.title': 'Gestión de Procesos',
    'type.process.desc': 'Controla la ejecución de programas, gestiona sesiones de terminal y prioridades.'
  },

  /* ----------------------- ENGLISH ----------------------- */
  en: {
    'site.title': 'Vortex - Master the Terminal',
    'nav.home': 'Home', 'nav.commands': 'Commands', 'nav.types': 'Types',
    'nav.blog': 'Blog', 'nav.projects': 'Projects', 'nav.about': 'About',

    'hero.pre': 'Interactive terminal guide',
    'hero.subtitle': 'Master the Linux terminal with interactive cards, real examples, and an experience designed for those who love the command line.',
    'hero.cta': 'Explore Commands',

    'home.stat1': 'Commands', 'home.stat2': 'Categories', 'home.stat3': 'Projects',

    'commands.title': 'Essential Commands',
    'commands.subtitle': 'Filter by category or search for any command.',
    'commands.search': 'Search command...',
    'commands.showing': 'Showing', 'commands.of': 'of',
    'commands.noResults': 'No commands found with that filter.',

    'types.title': 'Command Types',
    'types.subtitle': 'Linux commands are organized into categories based on their primary function. Click any box to filter commands.',
    'types.filter_hint': 'Filter commands in this category',

    'blog.title': 'Technical Blog',
    'blog.subtitle': 'In-depth articles about commands, workflows, and the Linux ecosystem. Monthly publication.',
    'blog.read': 'Read article',

    'projects.title': 'Projects That Use the Terminal',
    'projects.subtitle': 'Real projects that use Vortex\'s commands internally. Living examples of how to build useful tools with the command line.',
    'projects.stars': 'stars',
    'projects.uses': 'uses:',

    'about.title': 'About Vortex',
    'about.subtitle': 'An educational, open project built with passion for the command line.',
    'about.p1': 'Vortex started as an educational project, created by a university student passionate about Linux and the command line. The premise is simple: learning the terminal shouldn\'t be boring or scattered across dozens of disconnected tutorials.',
    'about.p2': 'Here you\'ll find an interactive guide with essential commands organized by real-world use categories, approximately monthly articles that dive into current Linux ecosystem topics, and a selection of modern open source projects that are replacing the classic tools.',
    'about.p3': 'The code is available on GitHub, commented and structured so anyone can study it, modify it, and learn from it. If you\'re interested in the terminal, operating systems, or free software, you\'re welcome to explore.',
    'about.card1.title': 'Educational', 'about.card1.desc': 'Every command and article aims to teach the why, not just the how.',
    'about.card2.title': 'Open Source', 'about.card2.desc': 'Open code on GitHub, free to study and modify.',
    'about.card3.title': 'Made with passion', 'about.card3.desc': 'A personal project by someone who loves the Linux terminal.',
    'about.repo': 'View on GitHub',

    'footer.tagline': 'Learn. Execute. Master.',
    'footer.copy': '2026 Vortex. Educational Project.',

    'filter.all': 'All',
    'toast.lang': 'Language switched to English',
    'cat.files': 'Files', 'cat.text': 'Text', 'cat.network': 'Network', 'cat.system': 'System', 'cat.process': 'Processes',

    'type.files.title': 'File Management',
    'type.files.desc': 'Navigate, create, copy, move, and delete files and directories in the file system.',
    'type.text.title': 'Text Processing',
    'type.text.desc': 'Search, transform, filter, and analyze text file content with powerful tools.',
    'type.network.title': 'Network Tools',
    'type.network.desc': 'Connect to remote servers, transfer data, and diagnose network issues.',
    'type.system.title': 'System Administration',
    'type.system.desc': 'Monitor resources, manage services, and get operating system information.',
    'type.process.title': 'Process Management',
    'type.process.desc': 'Control program execution, manage terminal sessions, and priorities.'
  }
};

/* Return the translation for a key (or the key itself if missing) */
function t(k) { return i18n[lang][k] || k; }

/* Update every [data-i18n] element on the page to the active language */
function applyTranslations() {
  document.title = t('site.title');
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (i18n[lang][k]) el.textContent = i18n[lang][k];
  });
  
  const si = document.getElementById('cmdSearch');
  if (si) si.placeholder = t('commands.search');
  // Highlight the active lang
  document.getElementById('btnEs').classList.toggle('active', lang === 'es');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');
}

/* Switch the language and refresh every dynamic view */
function setLang(l) {
  if (l === lang) return;
  lang = l;
  applyTranslations();
  renderFilters();
  filterCommands();
  renderTypes();
  renderBlog();
  renderProjects();
  showToast(t('toast.lang'));
}
