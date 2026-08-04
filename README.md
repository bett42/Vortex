
<div align="center">

# Vortex - Guía Interactiva de la Terminal de Linux

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white)
![Tipo](https://img.shields.io/badge/Tipo-Proyecto%20Educativo-blue)



**Un proyecto educativo universitario de código abierto sobre Linux, sus comandos, utilidades y los proyectos reales que lo usan.**

[English version ↓](#english)

</div>

---

## Características

- **87 comandos esenciales** organizados en 5 categorías (archivos, texto, red, sistema, procesos).
- **Búsqueda y filtros en tiempo real** por categoría.
- **Artículos mensuales** (Enero 2026-Presente) con enlaces a encuestas, investigaciones, datos y gráficos de barras en CSS. Los artículos completos se abren en un modal.
- **12 proyectos open source** que usan los comandos de Vortex internamente, con enlaces a GitHub y chips clicables que indican qué comando usa cada uno.
- **Bilingüe** Español / Inglés.
- **Fondo animado** con shader WebGL + partículas sutiles.
- **Accesible**: respeta `prefers-reduced-motion` y usa HTML semántico.
- **Sin dependencias de build**: se sirve tal cual.

---

## Estructura del proyecto

```
Vortex/
├── index.html          # Estructura semántica y contenido base
├── css/
│   └── styles.css      # Estilos personalizados (sobre Tailwind CDN)
├── js/
│   ├── i18n.js         # Traducciones ES / EN
│   ├── data.js         # 87 comandos, 5 categorías y 12 proyectos
│   ├── blog.js         # Entradas del blog con artículos completos
│   ├── app.js          # Navegación SPA, render, filtros y modal de artículos
│   └── effects.js      # Fondo WebGL, partículas y efecto de escritura
└── README.md           # Este archivo
```

Cada archivo tiene una responsabilidad única (SRP):

| Archivo | Responsabilidad |
|---------|-----------------|
| `index.html` | Markup semántico, configuración de Tailwind y orden de carga de scripts |
| `css/styles.css` | Todos los estilos personalizados, agrupados en secciones  |
| `js/i18n.js` | El diccionario `i18n`, la función `t()` y `setLang()` |
| `js/data.js` | Datos puros: `commandsData`, `typesData`, `projectsData` |
| `js/blog.js` | El array `blogData` con título, resumen y cuerpo HTML bilingüe |
| `js/app.js` | Renderizado, navegación SPA, búsqueda, filtros, modal, toast, reveal |
| `js/effects.js` | Los tres efectos visuales (shader, embers, escritura) |

---

## Tecnologías

| Herramienta | Uso |
|-------------|-----|
| HTML5 semántico | Estructura |
| CSS3 + Tailwind CDN | Estilos (paleta cálida personalizada) |
| JavaScript vanilla | Lógica SPA (sin frameworks) |
| WebGL | Fondo animado |
| Font Awesome | Iconos |
| Google Fonts | JetBrains Mono + Space Grotesk |

---

<div align="center">

*Aprende. Ejecuta. Domina.*

</div>

---

<a name="english"></a>

<div align="center">

# Vortex - Interactive Guide to the Linux Terminal

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white)
![Tipo](https://img.shields.io/badge/Type-Educational%20Project-blue)



**An open-source educational project about Linux, its commands, utilities, and the real projects that use them.**

</div>

---

## Features

- **87 essential commands** organized into 5 categories (files, text, network, system, processes).
- **Live search and filters** by category.
- **Monthly blog articles** (Jan 2026-Present) with links to surveys, research, data and CSS bar charts. Full articles open in a modal.
- **12 open source projects** that use Vortex's commands internally, with GitHub links and clickable chips showing which command each one uses.
- **Bilingual** Spanish / English.
- **Animated background** with a WebGL shader + subtle particles.
- **Accessible**: respects `prefers-reduced-motion` and uses semantic HTML.
- **No build dependencies**: served as-is.

---

## Project structure

```
Vortex/
├── index.html          # Semantic structure and base content
├── css/
│   └── styles.css      # Custom styles (on top of the Tailwind CDN)
├── js/
│   ├── i18n.js         # Spanish / English translations
│   ├── data.js         # 87 commands, 5 categories and 12 projects
│   ├── blog.js         # Blog entries with full article bodies
│   ├── app.js          # SPA navigation, rendering, filters and article modal
│   └── effects.js      # WebGL background, particles and typing effect
└── README.md           # This file
```

Every file has a clear single responsibility (SRP):

| File | Responsibility |
|------|----------------|
| `index.html` | Semantic markup, Tailwind config and script loading order |
| `css/styles.css` | All custom styles are grouped into sections |
| `js/i18n.js` | The `i18n` dictionary, the `t()` helper and `setLang()` |
| `js/data.js` | Pure data: `commandsData`, `typesData`, `projectsData` |
| `js/blog.js` | The `blogData` array with bilingual title, excerpt and HTML body |
| `js/app.js` | Rendering, SPA navigation, search, filters, modal, toast, reveal |
| `js/effects.js` | The three visual effects (shader, embers, typing) |

---

## Technologies

| Tool | Purpose |
|------|---------|
| Semantic HTML5 | Structure |
| CSS3 + Tailwind CDN | Styles (custom warm palette) |
| Vanilla JavaScript | SPA logic (no frameworks) |
| WebGL | Animated background |
| Font Awesome | Icons |
| Google Fonts | JetBrains Mono + Space Grotesk |

---


<div align="center">

*Learn. Execute. Master.*

</div>