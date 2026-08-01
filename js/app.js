/* ---------- Category filters ---------- */
let activeFilter = 'all';
const catColors = { files:'#3ec9a7', text:'#e09f3e', network:'#d4915e', system:'#e06c60', process:'#8cb369' };
const catKeys = ['files','text','network','system','process'];

/* Build the filter pills (All + one per category) */
function renderFilters() {
  const c = document.getElementById('filterPills');
  let h = `<button class="filter-pill ${activeFilter==='all'?'active':''}" onclick="setFilter('all')">${t('filter.all')}</button>`;
  catKeys.forEach(k => {
    h += `<button class="filter-pill ${activeFilter===k?'active':''}" onclick="setFilter('${k}')"><span class="pill-dot" style="background:${catColors[k]}"></span>${t('cat.'+k)}</button>`;
  });
  c.innerHTML = h;
}

/* Change the active filter and refresh the grid */
function setFilter(cat) {
  activeFilter = cat;
  renderFilters();
  filterCommands();
}

/* Filter and render command cards by search + category */
function filterCommands() {
  const q = (document.getElementById('cmdSearch')?.value || '').toLowerCase();
  const filtered = commandsData.filter(c => {
    const matchCat = activeFilter === 'all' || c.cat === activeFilter;
    const d = c[lang];
    const matchQ = !q || d.name.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q) || c.cmd.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  const grid = document.getElementById('commandsGrid');
  const count = document.getElementById('cmdCount');
  count.textContent = `${t('commands.showing')} ${filtered.length} ${t('commands.of')} ${commandsData.length}`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results"><i class="fas fa-search text-2xl mb-3 text-fg-muted/30"></i><p>${t('commands.noResults')}</p></div>`;
    return;
  }

  // Render cards (no tilt handlers; clean CSS hover only)
  grid.innerHTML = filtered.map((c, i) => {
    const d = c[lang], cl = t('cat.'+c.cat);
    return `<div class="cmd-card reveal visible" style="transition-delay:${i*30}ms">
      <div class="card-content p-4 flex flex-col gap-2">
        <div class="flex items-center justify-between"><span class="font-mono font-bold text-base text-amber">${d.name}</span><span class="cat-badge cat-${c.cat}">${cl}</span></div>
        <p class="text-fg-muted text-[12.5px] leading-relaxed" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${d.desc}</p>
        <div class="cmd-code p-2.5 text-[10.5px] text-fg/60 mt-auto">${esc(d.ex)}</div>
      </div>
    </div>`;
  }).join('');
}

/* ---------- Types / Categories ---------- */
function renderTypes() {
  document.getElementById('typesGrid').innerHTML = typesData.map((tp, i) => {
    const title = t('type.'+tp.id+'.title'), desc = t('type.'+tp.id+'.desc');
    return `<div class="type-card p-5 reveal" style="transition-delay:${i*70}ms">
      <div class="flex items-start gap-3.5 mb-3"><div class="type-icon" style="background:${tp.bg};color:${tp.color};cursor:pointer" title="${t('types.filter_hint')}" onclick="navigate('commands');setTimeout(()=>setFilter('${tp.id}'),100)"><i class="fas ${tp.icon}"></i></div><h3 class="font-display font-bold text-[15px] text-white pt-1">${title}</h3></div>
      <p class="text-fg-muted text-[13px] leading-relaxed mb-3.5">${desc}</p>
      <div class="flex flex-wrap gap-1.5">${tp.cmds.map(c => `<span class="cmd-chip" onclick="navigate('commands');setTimeout(()=>{setFilter('${tp.id}');document.getElementById('cmdSearch').value='${c}';filterCommands()},100)">${c}</span>`).join('')}</div>
    </div>`;
  }).join('');
  observeReveals();
}

/* ---------- Blog ---------- */
function renderBlog() {
  document.getElementById('blogGrid').innerHTML = blogData.map((p, i) => {
    const d = p[lang];
    // Date localized to the active language + same comment as on line 119
    const ds = new Date(p.date + 'T00:00:00').toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year:'numeric', month:'short', day:'numeric' });
    return `<div class="blog-card reveal" style="transition-delay:${i*80}ms">
      <div class="p-5 flex flex-col flex-1 gap-2.5">
        <div class="flex items-center justify-between"><span class="blog-tag ${p.tagClass}">${p.tag}</span><span class="text-fg-muted/40 text-[11px] font-mono">${ds}</span></div>
        <h3 class="font-display font-bold text-[15px] text-white leading-snug">${d.title}</h3>
        <p class="text-fg-muted text-[13px] leading-relaxed flex-1" style="display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">${d.excerpt}</p>
        <span class="read-link mt-auto pt-1" onclick="openArticle(${i})">${t('blog.read')} <i class="fas fa-arrow-right text-[10px]"></i></span>
      </div>
    </div>`;
  }).join('');
  observeReveals();
}

/* ---------- Projects ----------
   Each card shows the project, its description, the Vortex commands it
   uses internally (as clickable chips) and a GitHub link, cuz must be useful af */
function renderProjects() {
  document.getElementById('projectsGrid').innerHTML = projectsData.map((p, i) => {
    const d = p[lang];
    const usesChips = (p.uses || []).map(c =>
      `<span class="cmd-chip" onclick="navigate('commands');setTimeout(()=>{document.getElementById('cmdSearch').value='${c}';filterCommands()},80)">${c}</span>`
    ).join('');
    return `<div class="proj-card p-5 reveal" style="transition-delay:${i*60}ms">
      <div class="flex items-start justify-between mb-2.5">
        <h3 class="font-mono font-bold text-base text-amber">${p.name}</h3>
        <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="text-fg-muted/40 hover:text-amber transition" aria-label="GitHub de ${p.name}"><i class="fab fa-github"></i></a>
      </div>
      <p class="text-fg-muted text-[13px] leading-relaxed mb-3">${d.desc}</p>
      <div class="flex items-center gap-2 mb-3.5">
        <span class="text-[10px] font-mono text-fg-muted/50 uppercase tracking-wider">${t('projects.uses')}</span>
        <div class="flex flex-wrap gap-1.5">${usesChips}</div>
      </div>
      <div class="flex items-center justify-between text-[11px]">
        <div class="flex items-center gap-1.5"><span class="lang-dot" style="background:${p.langColor}"></span><span class="text-fg-muted">${p.lang}</span></div>
        <div class="flex items-center gap-1 text-fg-muted"><i class="fas fa-star text-amber/60 text-[9px]"></i><span>${p.stars}</span><span class="hidden sm:inline ml-0.5">${t('projects.stars')}</span></div>
      </div>
    </div>`;
  }).join('');
  observeReveals();
}

/* ---------- Full-article modal ---------- */
function openArticle(index) {
  const p = blogData[index];
  if (!p) return;
  const d = p[lang];
  // Parse the date as local time instead of UTC, so a YYYY-MM-DD string like '2026-07-31' doesn't render as the day before
  const ds = new Date(p.date + 'T00:00:00').toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', { year:'numeric', month:'long', day:'numeric' });
  const body = document.getElementById('articleBody');
  body.innerHTML = `
    <div class="art-meta"><span class="blog-tag ${p.tagClass}">${p.tag}</span><span>${ds}</span></div>
    <h1>${d.title}</h1>
    ${d.content}
  `;
  document.getElementById('articleOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Animate the chart bars when opening, they're kinda cool 
  requestAnimationFrame(animateCharts);
}

function closeArticle(event) {
  // Only close if called directly (no event) or the click hit the overlay
  // (not the modal content inside it).
  if (event && event.target && event.target.id !== 'articleOverlay') return;
  document.getElementById('articleOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* Animate the bar charts inside the open article */
function animateCharts() {
  document.querySelectorAll('#articleBody .bar-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0%';
    requestAnimationFrame(() => { setTimeout(() => { bar.style.width = w; }, 50); });
  });
}

/* ---------- Utility: escape HTML for code blocks ---------- */
function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------- SPA navigation ---------- */
let currentPage = 'home';
function navigate(page) {
  // Skip if we're already on the target page
  if (page === currentPage && document.getElementById('page-'+page).classList.contains('active')) return;
  currentPage = page;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');

  window.scrollTo({ top: 0, behavior: 'instant' });
  document.querySelectorAll('.nav-link[data-page]').forEach(l => l.classList.toggle('active', l.dataset.page === page));
  closeMobile();

  // Render each section on demand
  if (page === 'commands') { renderFilters(); filterCommands(); }
  if (page === 'types') renderTypes();
  if (page === 'blog') renderBlog();
  if (page === 'projects') renderProjects();
  observeReveals();
}

function closeMobile() {
  document.getElementById('mobileMenu').classList.add('hidden');
}

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
let rObs;
function observeReveals() {
  if (rObs) rObs.disconnect();
  rObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        rObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => rObs.observe(el));
}

/* ---------- Notification toast ---------- */
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2000);
}

/* ---------- Global event listeners ---------- */
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

document.getElementById('cmdSearch').addEventListener('input', filterCommands);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeArticle();
});

/* ---------- Initialization ---------- */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  renderFilters();
  filterCommands();
  renderTypes();
  renderBlog();
  renderProjects();
  // Visual effects (shader, embers, typing) are initialized in effects.js
});
