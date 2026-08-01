const blogData = [
  /* ===================== JANUARY 2026 ===================== */
  {
    tag:'stats', tagClass:'tag-regex', date:'2026-01-15',
    es:{
      title:'El Estado de Linux en 2026: Estadísticas y Tendencias',
      excerpt:'Linux ya no es solo para servidores. Repasamos su adopción real en servidores, escritorios, móviles y supercomputadoras, con datos de fuentes verificables.',
      content:`
<p><strong>Linux</strong> ya no es "el sistema operativo de los servidores": es la base invisible sobre la que se construye gran parte de internet, el móvil y la nube. En este primer artículo del año repasamos dónde está Linux hoy, con datos que puedes verificar tú mismo.</p>

<h2>1. Servidores: el reinado de Linux</h2>
<p>Según <a href="https://w3techs.com/technologies/details/os-linux" target="_blank" rel="noopener">W3Techs</a>, Linux está detrás de aproximadamente el <strong>96% de los servidores web</strong> del millón de sitios más visitados. Distribuciones como Ubuntu, Debian, CentOS/RHEL y AlmaLinux dominan el hosting y la nube pública (AWS, Google Cloud y Azure ofrecen decenas de imágenes Linux oficiales).</p>

<h2>2. Supercomputadoras: 100% Linux</h2>
<p>La lista <a href="https://www.top500.org/statistics/overtime/" target="_blank" rel="noopener">TOP500</a>, que mide las 500 supercomputadoras más potentes del planeta, lleva años mostrando un dato rotundo: <strong>todas</strong> ejecutan Linux. De no haber sido por Linux, cada fabricante usaría su propio UNIX propietario y la portabilidad sería un infierno.</p>

<h2>3. Móviles: Linux en tu bolsillo</h2>
<p>Android usa el núcleo Linux. <a href="https://gs.statcounter.com/os-market-share/mobile/worldwide" target="_blank" rel="noopener">StatCounter</a> sitúa Android en torno al <strong>70% del mercado móvil mundial</strong>. Cada vez que desbloqueas tu teléfono, hay un núcleo Linux trabajando debajo.</p>

<div class="art-chart">
  <div class="bar-row"><span class="bar-label">Servidores web</span><div class="bar-track"><div class="bar-fill" style="width:96%;background:#e09f3e"></div></div><span class="bar-val">96%</span></div>
  <div class="bar-row"><span class="bar-label">Supercomputadoras</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#e06c60"></div></div><span class="bar-val">100%</span></div>
  <div class="bar-row"><span class="bar-label">Móviles (Android)</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#3ec9a7"></div></div><span class="bar-val">70%</span></div>
  <div class="bar-row"><span class="bar-label">Escritorio</span><div class="bar-track"><div class="bar-fill" style="width:4%;background:#8cb369"></div></div><span class="bar-val">~4%</span></div>
  <div class="bar-row"><span class="bar-label">Nube pública</span><div class="bar-track"><div class="bar-fill" style="width:90%;background:#d4915e"></div></div><span class="bar-val">90%</span></div>
</div>

<h2>4. Escritorio: creciendo, despacio</h2>
<p>El escritorio sigue siendo el reto pendiente. StatCounter sitúa a Linux en torno al <strong>4%</strong> de escritorios a nivel mundial, pero crece año tras año, impulsado por Steam Deck (que usa SteamOS basado en Arch), la mejora de Wayland y herramientas como Proton para jugar.</p>

<h2>5. Desarrolladores: el favorito</h2>
<p>La <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener">Stack Overflow Developer Survey</a> muestra año tras año que Linux es uno de los sistemas operativos más amados por quienes programan. El <a href="https://github.blog/news-insights/octoverse/" target="_blank" rel="noopener">Octoverse de GitHub</a> confirma que la mayoría del código open source se escribe y prueba sobre Linux.</p>

<blockquote>Conclusión: aunque no lo veas en el escritorio, Linux ya es el sistema operativo más usado del mundo en servidores, móviles y supercomputadoras. Tu vida digital depende de él, aunque no lo sepas.</blockquote>

<p>Fuentes: <a href="https://w3techs.com/" target="_blank" rel="noopener">W3Techs</a>, <a href="https://www.top500.org/" target="_blank" rel="noopener">TOP500</a>, <a href="https://gs.statcounter.com/" target="_blank" rel="noopener">StatCounter</a>, <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener">Stack Overflow Survey</a>, <a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener">The Linux Foundation</a>.</p>`
    },
    en:{
      title:'The State of Linux in 2026: Stats and Trends',
      excerpt:'Linux is no longer just for servers. We review its real adoption across servers, desktops, mobile, and supercomputers, with verifiable data.',
      content:`
<p><strong>Linux</strong> is no longer "the server OS": it is the invisible foundation beneath much of the internet, mobile, and the cloud. In this first article of the year, we review where Linux stands today, with data you can verify yourself.</p>

<h2>1. Servers: Linux's reign</h2>
<p>According to <a href="https://w3techs.com/technologies/details/os-linux" target="_blank" rel="noopener">W3Techs</a>, Linux powers roughly <strong>96% of web servers</strong> among the top million sites. Distributions like Ubuntu, Debian, CentOS/RHEL, and AlmaLinux dominate hosting and public cloud (AWS, Google Cloud, and Azure offer dozens of official Linux images).</p>

<h2>2. Supercomputers: 100% Linux</h2>
<p>The <a href="https://www.top500.org/statistics/overtime/" target="_blank" rel="noopener">TOP500</a> list, which tracks the 500 most powerful supercomputers, for years has shown a blunt fact: <strong>all of them</strong> run Linux. Without Linux, every vendor would ship its own proprietary UNIX and portability would be a nightmare.</p>

<h2>3. Mobile: Linux in your pocket</h2>
<p>Android uses the Linux kernel. <a href="https://gs.statcounter.com/os-market-share/mobile/worldwide" target="_blank" rel="noopener">StatCounter</a> places Android at around <strong>70% of the global mobile market</strong>. Every time you unlock your phone, a Linux kernel is working underneath.</p>

<div class="art-chart">
  <div class="bar-row"><span class="bar-label">Web servers</span><div class="bar-track"><div class="bar-fill" style="width:96%;background:#e09f3e"></div></div><span class="bar-val">96%</span></div>
  <div class="bar-row"><span class="bar-label">Supercomputers</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#e06c60"></div></div><span class="bar-val">100%</span></div>
  <div class="bar-row"><span class="bar-label">Mobile (Android)</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#3ec9a7"></div></div><span class="bar-val">70%</span></div>
  <div class="bar-row"><span class="bar-label">Desktop</span><div class="bar-track"><div class="bar-fill" style="width:4%;background:#8cb369"></div></div><span class="bar-val">~4%</span></div>
  <div class="bar-row"><span class="bar-label">Public cloud</span><div class="bar-track"><div class="bar-fill" style="width:90%;background:#d4915e"></div></div><span class="bar-val">90%</span></div>
</div>

<h2>4. Desktop: growing, slowly</h2>
<p>The desktop remains the pending challenge. StatCounter places Linux around <strong>4%</strong> of desktops worldwide, but it grows year after year, boosted by the Steam Deck (running SteamOS based on Arch), the maturity of Wayland, and tools like Proton for gaming.</p>

<h2>5. Developers: the favorite</h2>
<p>The <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener">Stack Overflow Developer Survey</a> shows year after year that Linux is one of the most loved operating systems by developers. GitHub's <a href="https://github.blog/news-insights/octoverse/" target="_blank" rel="noopener">Octoverse</a> confirms that most open source code is written and tested on Linux.</p>

<blockquote>Conclusion: even if you don't see it on the desktop, Linux is already the most used operating system in the world across servers, mobile, and supercomputers. Your digital life depends on it, even if you don't know it.</blockquote>

<p>Sources: <a href="https://w3techs.com/" target="_blank" rel="noopener">W3Techs</a>, <a href="https://www.top500.org/" target="_blank" rel="noopener">TOP500</a>, <a href="https://gs.statcounter.com/" target="_blank" rel="noopener">StatCounter</a>, <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener">Stack Overflow Survey</a>, <a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener">The Linux Foundation</a>.</p>`
    }
  },

  /* ===================== FEBRUARY 2026 ===================== */
  {
    tag:'systemd', tagClass:'tag-systemd', date:'2026-02-12',
    es:{
      title:'systemd: El Gestor que Cambió Linux Para Siempre',
      excerpt:'De la controversia de los "init wars" a ser el estándar de facto. Historia, componentes y por qué systemd es hoy el corazón de casi toda distro Linux.',
      content:`
<p>Si enciendes una máquina Linux moderna, lo primero que arranca el núcleo es <strong>systemd</strong>. Es el "PID 1", el proceso del que cuelgan todos los demás. Pero no siempre fue así: durante décadas, esta tarea la cumplía SysV init, un sistema basado en scripts de shell con runlevels.</p>

<h2>¿Qué reemplazó systemd?</h2>
<p>Antes de systemd, <strong>SysV init</strong> arrancaba los servicios en secuencia ejecutando scripts en <code>/etc/init.d/</code>. Era lento (cada servicio era un script de shell), no gestionaba dependencias bien y paralelizar el arranque era casi imposible. Upstart (de Ubuntu) intentó modernizarlo, pero perdió la batalla.</p>

<h2>Origen y autor</h2>
<p>systemd fue presentado en 2010 por <strong>Lennart Poettering</strong> y Kay Sievers (Red Hat). Su objetivo: arrancar el sistema en paralelo, gestionar dependencias entre servicios y unificar la gestión de logs, red y dispositivos. Puedes leer el anuncio original en el <a href="http://0pointer.de/blog/" target="_blank" rel="noopener">blog de Poettering</a> y el código en <a href="https://github.com/systemd/systemd" target="_blank" rel="noopener">github.com/systemd/systemd</a>.</p>

<h2>La controversia: los "init wars"</h2>
<p>systemd fue (y sigue siendo) polarizante. Críticos argumentaban que violaba la filosofía UNIX de "hacer una sola cosa bien", al absorber logging, red, login y resolución DNS. El debate fue tan intenso que <a href="https://wiki.debian.org/Debate/initsystem/systemd" target="_blank" rel="noopener">Debian realizó una votación formal</a> en 2014 sobre qué init adoptar. Ganó systemd. LWN cubrió el debate en profundidad: <a href="https://lwn.net/" target="_blank" rel="noopener">lwn.net</a>.</p>

<h2>Adopción: hoy es el estándar</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">Fedora</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#e09f3e"></div></div><span class="bar-val">2011</span></div>
  <div class="bar-row"><span class="bar-label">RHEL / CentOS</span><div class="bar-track"><div class="bar-fill" style="width:90%;background:#e06c60"></div></div><span class="bar-val">2014</span></div>
  <div class="bar-row"><span class="bar-label">Debian</span><div class="bar-track"><div class="bar-fill" style="width:80%;background:#d4915e"></div></div><span class="bar-val">2015</span></div>
  <div class="bar-row"><span class="bar-label">Ubuntu</span><div class="bar-track"><div class="bar-fill" style="width:75%;background:#3ec9a7"></div></div><span class="bar-val">2015</span></div>
  <div class="bar-row"><span class="bar-label">Arch</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#8cb369"></div></div><span class="bar-val">2012</span></div>
</div>

<h2>Componentes de systemd</h2>
<p>systemd no es solo init: es una suite. Algunos componentes clave:</p>
<ul>
  <li><strong>journald</strong> - registro de logs estructurados (reemplaza a syslog en muchas distros).</li>
  <li><strong>networkd</strong> - configuración de red.</li>
  <li><strong>resolved</strong> - resolución DNS.</li>
  <li><strong>logind</strong> - gestión de sesiones de usuario.</li>
  <li><strong>timers</strong> - alternativa moderna a cron.</li>
</ul>

<h2>Comandos esenciales</h2>
<pre><code># Ver el estado de un servicio
systemctl status nginx

# Arrancar / detener / reiniciar
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx

# Habilitar al arranque
sudo systemctl enable nginx

# Ver los últimos logs del sistema
journalctl -xe

# Logs de un servicio concreto
journalctl -u nginx -f</code></pre>

<p>Más información en la <a href="https://www.freedesktop.org/wiki/Software/systemd/" target="_blank" rel="noopener">wiki oficial de systemd</a> y en las páginas del manual (<code>man systemctl</code>).</p>

<blockquote>Te guste o no, systemd llegó para quedarse. Entenderlo es entender cómo arranca un Linux moderno.</blockquote>`
    },
    en:{
      title:'systemd: The Manager That Changed Linux Forever',
      excerpt:'From the "init wars" controversy to becoming the de facto standard. History, components, and why systemd is today the heart of almost every Linux distro.',
      content:`
<p>If you boot a modern Linux machine, the first thing the kernel starts is <strong>systemd</strong>. It is "PID 1", the process from which all others hang. But it wasn't always this way: for decades, that role belonged to SysV init, a system based on shell scripts and runlevels.</p>

<h2>What did systemd replace?</h2>
<p>Before systemd, <strong>SysV init</strong> started services sequentially by running scripts in <code>/etc/init.d/</code>. It was slow (each service was a shell script), handled dependencies poorly, and parallelizing boot was nearly impossible. Upstart (from Ubuntu) tried to modernize it, but lost the battle.</p>

<h2>Origin and author</h2>
<p>systemd was introduced in 2010 by <strong>Lennart Poettering</strong> and Kay Sievers (Red Hat). Its goal: boot the system in parallel, manage dependencies between services, and unify the management of logs, network, and devices. You can read the original announcement on <a href="http://0pointer.de/blog/" target="_blank" rel="noopener">Poettering's blog</a> and the code at <a href="https://github.com/systemd/systemd" target="_blank" rel="noopener">github.com/systemd/systemd</a>.</p>

<h2>The controversy: the "init wars"</h2>
<p>systemd was (and remains) polarizing. Critics argued it violated the UNIX philosophy of "do one thing well", by absorbing logging, networking, login, and DNS resolution. The debate was so intense that <a href="https://wiki.debian.org/Debate/initsystem/systemd" target="_blank" rel="noopener">Debian held a formal vote</a> in 2014 on which init to adopt. systemd won. LWN covered the debate in depth: <a href="https://lwn.net/" target="_blank" rel="noopener">lwn.net</a>.</p>

<h2>Adoption: now the standard</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">Fedora</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#e09f3e"></div></div><span class="bar-val">2011</span></div>
  <div class="bar-row"><span class="bar-label">RHEL / CentOS</span><div class="bar-track"><div class="bar-fill" style="width:90%;background:#e06c60"></div></div><span class="bar-val">2014</span></div>
  <div class="bar-row"><span class="bar-label">Debian</span><div class="bar-track"><div class="bar-fill" style="width:80%;background:#d4915e"></div></div><span class="bar-val">2015</span></div>
  <div class="bar-row"><span class="bar-label">Ubuntu</span><div class="bar-track"><div class="bar-fill" style="width:75%;background:#3ec9a7"></div></div><span class="bar-val">2015</span></div>
  <div class="bar-row"><span class="bar-label">Arch</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#8cb369"></div></div><span class="bar-val">2012</span></div>
</div>

<h2>systemd components</h2>
<p>systemd is not just init: it is a suite. Some key components:</p>
<ul>
  <li><strong>journald</strong> - structured log recording (replaces syslog in many distros).</li>
  <li><strong>networkd</strong> - network configuration.</li>
  <li><strong>resolved</strong> - DNS resolution.</li>
  <li><strong>logind</strong> - user session management.</li>
  <li><strong>timers</strong> - a modern alternative to cron.</li>
</ul>

<h2>Essential commands</h2>
<pre><code># Check service status
systemctl status nginx

# Start / stop / restart
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx

# Enable on boot
sudo systemctl enable nginx

# Show recent system logs
journalctl -xe

# Logs for a specific service
journalctl -u nginx -f</code></pre>

<p>More info in the <a href="https://www.freedesktop.org/wiki/Software/systemd/" target="_blank" rel="noopener">official systemd wiki</a> and the manual pages (<code>man systemctl</code>).</p>

<blockquote>Like it or not, systemd is here to stay. Understanding it is understanding how a modern Linux boots.</blockquote>`
    }
  },

  /* ===================== MARCH 2026 ===================== */
  {
    tag:'filesystem', tagClass:'tag-filesystem', date:'2026-03-18',
    es:{
      title:'Btrfs, ZFS y ext4: Comparativa de Sistemas de Archivos Modernos',
      excerpt:'Snapshots, integridad de datos, copy-on-write y licencias. Analizamos los tres sistemas de archivos más relevantes de Linux y cuándo elegir cada uno.',
      content:`
<p>El sistema de archivos decide cómo se guardan, organizan y recuperan tus datos en el disco. En Linux hay muchas opciones, pero tres dominan la conversación: <strong>ext4</strong>, <strong>Btrfs</strong> y <strong>ZFS</strong>. Veamos qué ofrece cada uno.</p>

<h2>ext4: el caballo de batalla</h2>
<p><strong>ext4</strong> es el sucesor de ext3, maduro y estable desde 2008. Es el sistema de archivos por defecto en la mayoría de distribuciones. Es rápido, robusto y soporta volúmenes enormes (hasta 1 exabyte). La documentación oficial está en <a href="https://www.kernel.org/doc/html/latest/filesystems/ext4/" target="_blank" rel="noopener">kernel.org</a>.</p>
<p>Su debilidad: <strong>no tiene snapshots nativos ni integridad de datos integrada</strong>. Si necesitas esas funciones, toca mirar Btrfs o ZFS.</p>

<h2>Btrfs: el moderno del núcleo</h2>
<p><strong>Btrfs</strong> (B-tree FS) fue añadido al núcleo Linux en 2009. Ofrece <strong>copy-on-write (CoW)</strong>, snapshots instantáneos, subvolúmenes, compresión transparente y checksums de datos. Facebook (Meta) lo usa masivamente en producción. La wiki oficial es <a href="https://btrfs.wiki.kernel.org/" target="_blank" rel="noopener">btrfs.wiki.kernel.org</a>.</p>
<p>Su ventaja: todo es nativo del núcleo, sin módulos externos. Su desventaja: algunas funciones avanzadas (como RAID 5/6) aún se consideran inestables.</p>

<h2>ZFS: el titán de la integridad</h2>
<p><strong>ZFS</strong> nació en Sun Microsystems (2005) y es famoso por su integridad de datos: cada bloque tiene un checksum y se auto-repara. Ofrece snapshots, envío incremental y pools de almacenamiento. La documentación está en <a href="https://openzfs.github.io/openzfs-docs/" target="_blank" rel="noopener">openzfs.github.io</a>.</p>
<p>El problema: su licencia <strong>CDDL</strong> es incompatible con la <strong>GPL</strong> del núcleo Linux, por lo que ZFS no puede incluirse en el núcleo y debe cargarse como módulo externo (DKMS). Esto genera debate legal que <a href="https://lwn.net/" target="_blank" rel="noopener">LWN</a> ha cubierto en detalle.</p>

<h2>Comparativa rápida</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">ext4: estabilidad</span><div class="bar-track"><div class="bar-fill" style="width:98%;background:#3ec9a7"></div></div><span class="bar-val">Alta</span></div>
  <div class="bar-row"><span class="bar-label">ext4: snapshots</span><div class="bar-track"><div class="bar-fill" style="width:0%;background:#3ec9a7"></div></div><span class="bar-val">No</span></div>
  <div class="bar-row"><span class="bar-label">Btrfs: snapshots</span><div class="bar-track"><div class="bar-fill" style="width:95%;background:#e09f3e"></div></div><span class="bar-val">Sí</span></div>
  <div class="bar-row"><span class="bar-label">ZFS: integridad</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#e06c60"></div></div><span class="bar-val">Máxima</span></div>
  <div class="bar-row"><span class="bar-label">ZFS: licencia</span><div class="bar-track"><div class="bar-fill" style="width:30%;background:#e06c60"></div></div><span class="bar-val">CDDL</span></div>
</div>

<h2>¿Cuál elegir?</h2>
<ul>
  <li><strong>ext4</strong> - para un escritorio o servidor sin necesidades especiales. Rápido y sin sorpresas.</li>
  <li><strong>Btrfs</strong> - si quieres snapshots y compresión nativa en el núcleo (Fedora lo usa por defecto).</li>
  <li><strong>ZFS</strong> - para NAS, servidores de almacenamiento y datos críticos donde la integridad lo es todo (TrueNAS se basa en él).</li>
</ul>

<pre><code># Crear un sistema de archivos ext4
sudo mkfs.ext4 /dev/sdb1

# Crear un subvolumen Btrfs
sudo btrfs subvolume create /mnt/data/snap

# Crear un pool ZFS
sudo zpool create tank /dev/sdb /dev/sdc</code></pre>

<p>Para benchmarks detallados, <a href="https://www.phoronix.com/" target="_blank" rel="noopener">Phoronix</a> publica comparativas periódicas entre sistemas de archivos.</p>

<blockquote>No hay un "mejor" sistema de archivos: hay el correcto para cada caso de uso.</blockquote>`
    },
    en:{
      title:'Btrfs, ZFS, and ext4: A Comparison of Modern File Systems',
      excerpt:'Snapshots, data integrity, copy-on-write, and licenses. We analyze the three most relevant Linux file systems and when to choose each.',
      content:`
<p>The file system decides how your data is stored, organized, and retrieved on disk. Linux has many options, but three dominate the conversation: <strong>ext4</strong>, <strong>Btrfs</strong>, and <strong>ZFS</strong>. Let's see what each offers.</p>

<h2>ext4: the workhorse</h2>
<p><strong>ext4</strong> is the successor to ext3, mature and stable since 2008. It's the default file system in most distributions. It's fast, robust, and supports enormous volumes (up to 1 exabyte). Official docs are at <a href="https://www.kernel.org/doc/html/latest/filesystems/ext4/" target="_blank" rel="noopener">kernel.org</a>.</p>
<p>Its weakness: <strong>no native snapshots or built-in data integrity</strong>. If you need those, look at Btrfs or ZFS.</p>

<h2>Btrfs: the modern in-kernel one</h2>
<p><strong>Btrfs</strong> (B-tree FS) was added to the Linux kernel in 2009. It offers <strong>copy-on-write (CoW)</strong>, instant snapshots, subvolumes, transparent compression, and data checksums. Facebook (Meta) uses it massively in production. The official wiki is <a href="https://btrfs.wiki.kernel.org/" target="_blank" rel="noopener">btrfs.wiki.kernel.org</a>.</p>
<p>Its advantage: everything is native to the kernel, no external modules. Its disadvantage: some advanced features (like RAID 5/6) are still considered unstable.</p>

<h2>ZFS: the integrity titan</h2>
<p><strong>ZFS</strong> was born at Sun Microsystems (2005) and is famous for its data integrity: every block has a checksum and self-heals. It offers snapshots, incremental send, and storage pools. Documentation is at <a href="https://openzfs.github.io/openzfs-docs/" target="_blank" rel="noopener">openzfs.github.io</a>.</p>
<p>The catch: its <strong>CDDL</strong> license is incompatible with the Linux kernel's <strong>GPL</strong>, so ZFS can't be included in the kernel and must be loaded as an external module (DKMS). This generates legal debate that <a href="https://lwn.net/" target="_blank" rel="noopener">LWN</a> has covered in detail.</p>

<h2>Quick comparison</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">ext4: stability</span><div class="bar-track"><div class="bar-fill" style="width:98%;background:#3ec9a7"></div></div><span class="bar-val">High</span></div>
  <div class="bar-row"><span class="bar-label">ext4: snapshots</span><div class="bar-track"><div class="bar-fill" style="width:0%;background:#3ec9a7"></div></div><span class="bar-val">No</span></div>
  <div class="bar-row"><span class="bar-label">Btrfs: snapshots</span><div class="bar-track"><div class="bar-fill" style="width:95%;background:#e09f3e"></div></div><span class="bar-val">Yes</span></div>
  <div class="bar-row"><span class="bar-label">ZFS: integrity</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#e06c60"></div></div><span class="bar-val">Max</span></div>
  <div class="bar-row"><span class="bar-label">ZFS: license</span><div class="bar-track"><div class="bar-fill" style="width:30%;background:#e06c60"></div></div><span class="bar-val">CDDL</span></div>
</div>

<h2>Which to choose?</h2>
<ul>
  <li><strong>ext4</strong> - for a desktop or server with no special needs. Fast and predictable.</li>
  <li><strong>Btrfs</strong> - if you want snapshots and native compression in the kernel (Fedora uses it by default).</li>
  <li><strong>ZFS</strong> - for NAS, storage servers, and critical data where integrity is everything (TrueNAS is built on it).</li>
</ul>

<pre><code># Create an ext4 file system
sudo mkfs.ext4 /dev/sdb1

# Create a Btrfs subvolume
sudo btrfs subvolume create /mnt/data/snap

# Create a ZFS pool
sudo zpool create tank /dev/sdb /dev/sdc</code></pre>

<p>For detailed benchmarks, <a href="https://www.phoronix.com/" target="_blank" rel="noopener">Phoronix</a> publishes periodic comparisons between file systems.</p>

<blockquote>There's no "best" file system: there's the right one for each use case.</blockquote>`
    }
  },

  /* ===================== APRIL 2026 ===================== */
  {
    tag:'wayland', tagClass:'tag-wayland', date:'2026-04-15',
    es:{
      title:'Wayland: El Futuro del Escritorio Linux y Por Qué Reemplaza a X11',
      excerpt:'X11 cumplió 40 años. Wayland llega con mejor seguridad, menor complejidad y rendering moderno. Repasamos la transición que ya viven Fedora, Ubuntu y GNOME.',
      content:`
<p>Cada vez que mueves el ratón o abres una ventana en tu escritorio Linux, hay un "servidor gráfico" renderizando los píxeles. Durante décadas ese servidor fue <strong>X11</strong> (el X Window System). Hoy, <strong>Wayland</strong> lo está reemplazando.</p>

<h2>X11: cuatro décadas de historia</h2>
<p><strong>X11</strong> nació en 1984 en el MIT y su implementación de referencia, <strong>X.Org Server</strong>, se mantiene en <a href="https://www.x.org/" target="_blank" rel="noopener">x.org</a>. Fue revolucionario en su época: permitía ejecutar aplicaciones en una máquina y mostrarlas en otra por red. Pero acumuló décadas de código legacy: input, rendering, extensiones, redes y drivers todo mezclado.</p>

<h2>Wayland: arquitectura moderna</h2>
<p><strong>Wayland</strong> fue iniciado por Kristian Høgsberg en 2008. Su filosofía es radicalmente distinta: en lugar de un servidor monolítico, cada cliente compone sus propios buffers y un <em>compositor</em> los muestra. El protocolo es mínimo y se describe en <a href="https://wayland.freedesktop.org/" target="_blank" rel="noopener">wayland.freedesktop.org</a>.</p>
<p>Ventajas clave de Wayland:</p>
<ul>
  <li><strong>Seguridad</strong>: una aplicación no puede espiar el teclado o la pantalla de otra (en X11 sí era posible).</li>
  <li><strong>Menor latencia y tearing reducido</strong>: el compositor controla cada frame.</li>
  <li><strong>Menos código</strong>: ~80k líneas frente a más de 1 millón de X.Org.</li>
  <li><strong>HiDPI nativo</strong>: mejor escalado por pantalla.</li>
</ul>

<h2>Adopción: el escritorio ya es Wayland</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">Fedora</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#e09f3e"></div></div><span class="bar-val">Por defecto</span></div>
  <div class="bar-row"><span class="bar-label">Ubuntu</span><div class="bar-track"><div class="bar-fill" style="width:95%;background:#e06c60"></div></div><span class="bar-val">Por defecto</span></div>
  <div class="bar-row"><span class="bar-label">GNOME</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#3ec9a7"></div></div><span class="bar-val">Por defecto</span></div>
  <div class="bar-row"><span class="bar-label">KDE Plasma</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:#d4915e"></div></div><span class="bar-val">Por defecto</span></div>
  <div class="bar-row"><span class="bar-label">Arch</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#8cb369"></div></div><span class="bar-val">Opcional</span></div>
</div>

<p>Fedora fue la primera distro importante en usar Wayland por defecto (2016). Ubuntu lo siguió en 2021. <a href="https://wiki.gnome.org/Initiatives/Wayland" target="_blank" rel="noopener">GNOME</a> y <a href="https://community.kde.org/Plasma/Wayland" target="_blank" rel="noopener">KDE Plasma</a> apuestan fuerte por Wayland. El seguimiento de compatibilidad lo cubre <a href="https://www.phoronix.com/" target="_blank" rel="noopener">Phoronix</a>.</p>

<h2>¿Cómo saber si uso Wayland?</h2>
<pre><code># Variable de entorno
echo $XDG_SESSION_TYPE
# wayland  o  x11

# Comprobar el compositor activo
loginctl show-session $(loginctl | grep $USER | awk '{print $1}') -p Type</code></pre>

<h2>El problema de XWayland</h2>
<p>No todas las apps están portadas a Wayland. Para ellas existe <strong>XWayland</strong>, una capa de compatibilidad que ejecuta apps X11 dentro de una sesión Wayland. Funciona bien, pero pierde parte de las ventajas de seguridad. El objetivo a largo plazo es que cada vez más apps sean nativas Wayland.</p>

<blockquote>X11 cumplió 40 años de servicio. Wayland no es una moda: es la modernización que el escritorio Linux necesitaba.</blockquote>`
    },
    en:{
      title:'Wayland: The Future of the Linux Desktop and Why It Replaces X11',
      excerpt:'X11 turned 40. Wayland brings better security, less complexity, and modern rendering. We review the transition already underway in Fedora, Ubuntu, and GNOME.',
      content:`
<p>Every time you move your mouse or open a window on your Linux desktop, a "display server" is rendering the pixels. For decades that server was <strong>X11</strong> (the X Window System). Today, <strong>Wayland</strong> is replacing it.</p>

<h2>X11: four decades of history</h2>
<p><strong>X11</strong> was born in 1984 at MIT and its reference implementation, <strong>X.Org Server</strong>, is maintained at <a href="https://www.x.org/" target="_blank" rel="noopener">x.org</a>. It was revolutionary in its time: it let you run applications on one machine and display them on another over the network. But it accumulated decades of legacy code: input, rendering, extensions, networking, and drivers all mixed together.</p>

<h2>Wayland: modern architecture</h2>
<p><strong>Wayland</strong> was started by Kristian Høgsberg in 2008. Its philosophy is radically different: instead of a monolithic server, each client composes its own buffers and a <em>compositor</em> displays them. The protocol is minimal and described at <a href="https://wayland.freedesktop.org/" target="_blank" rel="noopener">wayland.freedesktop.org</a>.</p>
<p>Key Wayland advantages:</p>
<ul>
  <li><strong>Security</strong>: one app can't keylog or screenshot another (in X11 it was possible).</li>
  <li><strong>Lower latency and reduced tearing</strong>: the compositor controls every frame.</li>
  <li><strong>Less code</strong>: ~80k lines vs. over 1 million in X.Org.</li>
  <li><strong>Native HiDPI</strong>: better per-screen scaling.</li>
</ul>

<h2>Adoption: the desktop is already Wayland</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">Fedora</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#e09f3e"></div></div><span class="bar-val">Default</span></div>
  <div class="bar-row"><span class="bar-label">Ubuntu</span><div class="bar-track"><div class="bar-fill" style="width:95%;background:#e06c60"></div></div><span class="bar-val">Default</span></div>
  <div class="bar-row"><span class="bar-label">GNOME</span><div class="bar-track"><div class="bar-fill" style="width:100%;background:#3ec9a7"></div></div><span class="bar-val">Default</span></div>
  <div class="bar-row"><span class="bar-label">KDE Plasma</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:#d4915e"></div></div><span class="bar-val">Default</span></div>
  <div class="bar-row"><span class="bar-label">Arch</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#8cb369"></div></div><span class="bar-val">Optional</span></div>
</div>

<p>Fedora was the first major distro to use Wayland by default (2016). Ubuntu followed in 2021. <a href="https://wiki.gnome.org/Initiatives/Wayland" target="_blank" rel="noopener">GNOME</a> and <a href="https://community.kde.org/Plasma/Wayland" target="_blank" rel="noopener">KDE Plasma</a> bet heavily on Wayland. Compatibility tracking is covered by <a href="https://www.phoronix.com/" target="_blank" rel="noopener">Phoronix</a>.</p>

<h2>How to know if you're on Wayland</h2>
<pre><code># Environment variable
echo $XDG_SESSION_TYPE
# wayland  or  x11

# Check the active compositor
loginctl show-session $(loginctl | grep $USER | awk '{print $1}') -p Type</code></pre>

<h2>The XWayland problem</h2>
<p>Not all apps are ported to Wayland. For them there's <strong>XWayland</strong>, a compatibility layer that runs X11 apps inside a Wayland session. It works well, but loses some of the security advantages. The long-term goal is for more apps to become native Wayland.</p>

<blockquote>X11 served for 40 years. Wayland is not a fad: it's the modernization the Linux desktop needed.</blockquote>`
    }
  },

  /* ===================== MAY 2026 ===================== */
  {
    tag:'containers', tagClass:'tag-containers', date:'2026-05-20',
    es:{
      title:'Docker, Podman y Contenedores: Cómo Linux Cambió el Despliegue',
      excerpt:'Namespaces, cgroups y la revolución de los contenedores. Por qué Docker arrasó, qué es Podman y cómo el estándar OCI unificó todo.',
      content:`
<p>Los <strong>contenedores</strong> transformaron cómo se despliega software: en lugar de "funciona en mi máquina", ahora se empaqueta la app con todas sus dependencias y se ejecuta igual en cualquier Linux. Pero la magia no es de Docker: son dos características del núcleo Linux.</p>

<h2>Las dos raíces: namespaces y cgroups</h2>
<p>Linux ofrece dos primitivas que hacen posibles los contenedores:</p>
<ul>
  <li><strong>namespaces</strong> - aíslan procesos: cada contenedor ve su propia red, PID, montajes y usuarios. Docs: <a href="https://man7.org/linux/man-pages/man7/namespaces.7.html" target="_blank" rel="noopener">man7 namespaces</a>.</li>
  <li><strong>cgroups</strong> - limitan y miden recursos: CPU, memoria, I/O por contenedor. Docs: <a href="https://www.kernel.org/doc/Documentation/cgroup-v2.txt" target="_blank" rel="noopener">cgroup v2 (kernel.org)</a>.</li>
</ul>
<p>Estas existen desde 2002 (namespaces) y 2007 (cgroups). Docker simplemente las empaquetó de forma usable.</p>

<h2>Docker: la revolución de 2013</h2>
<p><strong>Docker</strong> lanzó en 2013 una forma sencilla de empaquetar apps en imágenes portables. Su éxito fue enorme: <a href="https://www.docker.com/" target="_blank" rel="noopener">docker.com</a>. Docker popularizó el concepto y creó un ecosistema (Docker Hub, Dockerfile, docker-compose).</p>
<pre><code># Construir una imagen
docker build -t miapp:1.0 .

# Ejecutar un contenedor
docker run -d -p 8080:80 miapp:1.0

# Ver contenedores activos
docker ps</code></pre>

<h2>El estándar OCI</h2>
<p>Para evitar el lock-in con Docker, nació la <strong>Open Container Initiative (OCI)</strong>, que define estándares para imágenes y runtimes. Hoy cualquier herramienta compatible OCI puede construir o ejecutar imágenes. Más en <a href="https://opencontainers.org/" target="_blank" rel="noopener">opencontainers.org</a>.</p>

<h2>Podman: sin demonio, sin root</h2>
<p><strong>Podman</strong> (de Red Hat) es una alternativa a Docker <em>daemonless</em>: no requiere un servicio corriendo como root, lo que mejora la seguridad. Sus comandos son casi idénticos a los de Docker (<code>podman run</code>, <code>podman build</code>). Web: <a href="https://podman.io/" target="_blank" rel="noopener">podman.io</a>.</p>
<pre><code># Podman es compatible con la CLI de Docker
alias docker=podman

# Ejecutar sin root (rootless)
podman run -d -p 8080:80 nginx</code></pre>

<h2>Adopción: los contenedores dominan</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">Producción</span><div class="bar-track"><div class="bar-fill" style="width:90%;background:#e09f3e"></div></div><span class="bar-val">90%</span></div>
  <div class="bar-row"><span class="bar-label">CI/CD</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:#3ec9a7"></div></div><span class="bar-val">85%</span></div>
  <div class="bar-row"><span class="bar-label">Microservicios</span><div class="bar-track"><div class="bar-fill" style="width:78%;background:#e06c60"></div></div><span class="bar-val">78%</span></div>
  <div class="bar-row"><span class="bar-label">Desarrollo local</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#d4915e"></div></div><span class="bar-val">70%</span></div>
</div>
<p>Según las <a href="https://www.cncf.io/reports/" target="_blank" rel="noopener">encuestas de la CNCF</a>, más del 90% de las organizaciones usan contenedores en producción. Kubernetes (que orquesta contenedores) es el estándar de facto en la nube.</p>

<h2>Contenedor vs máquina virtual</h2>
<blockquote>Una VM virtualiza hardware completo (lenta, pesada, GBs). Un contenedor comparte el núcleo del host (rápido, ligero, MBs). Por eso los contenedores ganaron: arrancan en segundos y consumen una fracción de la memoria.</blockquote>

<p>El mérito real no es de Docker ni de Podman: es del núcleo Linux, que lleva 20 años construyendo las bases. Las herramientas solo lo hicieron accesible.</p>`
    },
    en:{
      title:'Docker, Podman, and Containers: How Linux Changed Deployment',
      excerpt:'Namespaces, cgroups, and the container revolution. Why Docker took off, what Podman is, and how the OCI standard unified everything.',
      content:`
<p><strong>Containers</strong> transformed how software is deployed: instead of "works on my machine", you now package the app with all its dependencies and it runs identically on any Linux. But the magic isn't Docker's: it's two Linux kernel features.</p>

<h2>The two roots: namespaces and cgroups</h2>
<p>Linux offers two primitives that make containers possible:</p>
<ul>
  <li><strong>namespaces</strong> - isolate processes: each container sees its own network, PID, mounts, and users. Docs: <a href="https://man7.org/linux/man-pages/man7/namespaces.7.html" target="_blank" rel="noopener">man7 namespaces</a>.</li>
  <li><strong>cgroups</strong> - limit and measure resources: CPU, memory, I/O per container. Docs: <a href="https://www.kernel.org/doc/Documentation/cgroup-v2.txt" target="_blank" rel="noopener">cgroup v2 (kernel.org)</a>.</li>
</ul>
<p>These have existed since 2002 (namespaces) and 2007 (cgroups). Docker just packaged them in a usable way.</p>

<h2>Docker: the 2013 revolution</h2>
<p>In 2013, <strong>Docker</strong> launched a simple way to package apps into portable images. Its success was huge: <a href="https://www.docker.com/" target="_blank" rel="noopener">docker.com</a>. Docker popularized the concept and built an ecosystem (Docker Hub, Dockerfile, docker-compose).</p>
<pre><code># Build an image
docker build -t myapp:1.0 .

# Run a container
docker run -d -p 8080:80 myapp:1.0

# See running containers
docker ps</code></pre>

<h2>The OCI standard</h2>
<p>To avoid lock-in with Docker, the <strong>Open Container Initiative (OCI)</strong> was created, defining standards for images and runtimes. Today any OCI-compatible tool can build or run images. More at <a href="https://opencontainers.org/" target="_blank" rel="noopener">opencontainers.org</a>.</p>

<h2>Podman: daemonless, rootless</h2>
<p><strong>Podman</strong> (from Red Hat) is a Docker alternative that is <em>daemonless</em>: it doesn't require a service running as root, which improves security. Its commands are nearly identical to Docker's (<code>podman run</code>, <code>podman build</code>). Web: <a href="https://podman.io/" target="_blank" rel="noopener">podman.io</a>.</p>
<pre><code># Podman is compatible with Docker's CLI
alias docker=podman

# Run rootless
podman run -d -p 8080:80 nginx</code></pre>

<h2>Adoption: containers dominate</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">Production</span><div class="bar-track"><div class="bar-fill" style="width:90%;background:#e09f3e"></div></div><span class="bar-val">90%</span></div>
  <div class="bar-row"><span class="bar-label">CI/CD</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:#3ec9a7"></div></div><span class="bar-val">85%</span></div>
  <div class="bar-row"><span class="bar-label">Microservices</span><div class="bar-track"><div class="bar-fill" style="width:78%;background:#e06c60"></div></div><span class="bar-val">78%</span></div>
  <div class="bar-row"><span class="bar-label">Local dev</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#d4915e"></div></div><span class="bar-val">70%</span></div>
</div>
<p>According to <a href="https://www.cncf.io/reports/" target="_blank" rel="noopener">CNCF surveys</a>, over 90% of organizations use containers in production. Kubernetes (which orchestrates containers) is the de facto standard in the cloud.</p>

<h2>Container vs virtual machine</h2>
<blockquote>A VM virtualizes complete hardware (slow, heavy, GBs). A container shares the host's kernel (fast, light, MBs). That's why containers won: they boot in seconds and consume a fraction of the memory.</blockquote>

<p>The real credit isn't Docker's or Podman's: it's the Linux kernel's, which has spent 20 years building the foundations. The tools just made it accessible.</p>`
    }
  },

  /* ===================== JUNE 2026 ===================== */
  {
    tag:'rust', tagClass:'tag-rust', date:'2026-06-10',
    es:{
      title:'La Terminal Moderna: Herramientas en Rust que Reemplazan los Clásicos',
      excerpt:'ripgrep, fd, bat, eza, zoxide y más. Por qué Rust se convirtió en el lenguaje favorito para reescribir las herramientas UNIX y qué ganas con cada una.',
      content:`
<p>Las herramientas clásicas de UNIX (<code>grep</code>, <code>find</code>, <code>cat</code>, <code>ls</code>) tienen décadas de servicio. Funcionan, pero fueron escritas en C en una época muy distinta. Últimamente, una ola de reescrituras en <strong>Rust</strong> está modernizando la terminal: más rápidas, más seguras y con mejores valores por defecto.</p>

<h2>¿Por qué Rust?</h2>
<p><a href="https://www.rust-lang.org/" target="_blank" rel="noopener">Rust</a> ofrece velocidad comparable a C sin sus problemas de memoria (sin buffer overflows ni use-after-free). Además, su gestor de paquetes (cargo) facilita distribuir binarios estáticos. No es casualidad que Rust haya sido el lenguaje más amado en la <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener">Stack Overflow Survey</a> durante muchos años seguidos.</p>

<h2>El mapeo clásico → moderno</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">grep → ripgrep</span><div class="bar-track"><div class="bar-fill" style="width:95%;background:#e09f3e"></div></div><span class="bar-val">Más rápido</span></div>
  <div class="bar-row"><span class="bar-label">find → fd</span><div class="bar-track"><div class="bar-fill" style="width:90%;background:#3ec9a7"></div></div><span class="bar-val">Simple</span></div>
  <div class="bar-row"><span class="bar-label">cat → bat</span><div class="bar-track"><div class="bar-fill" style="width:88%;background:#e06c60"></div></div><span class="bar-val">Color</span></div>
  <div class="bar-row"><span class="bar-label">ls → eza</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:#d4915e"></div></div><span class="bar-val">Iconos</span></div>
  <div class="bar-row"><span class="bar-label">cd → zoxide</span><div class="bar-track"><div class="bar-fill" style="width:92%;background:#8cb369"></div></div><span class="bar-val">Inteligente</span></div>
  <div class="bar-row"><span class="bar-label">du → dust</span><div class="bar-track"><div class="bar-fill" style="width:80%;background:#e09f3e"></div></div><span class="bar-val">Visual</span></div>
</div>

<h2>Las 12 herramientas destacadas</h2>
<ul>
  <li><strong><a href="https://github.com/BurntSushi/ripgrep" target="_blank" rel="noopener">ripgrep (rg)</a></strong> - reemplaza grep. Busca en paralelo y respeta .gitignore. Suele ser 5-10× más rápido.</li>
  <li><strong><a href="https://github.com/sharkdp/fd" target="_blank" rel="noopener">fd</a></strong> - reemplaza find. Sintaxis humana: <code>fd "\\.js$"</code> en vez de <code>find . -name "*.js"</code>.</li>
  <li><strong><a href="https://github.com/sharkdp/bat" target="_blank" rel="noopener">bat</a></strong> - reemplaza cat. Añade resaltado de sintaxis y números de línea.</li>
  <li><strong><a href="https://github.com/eza-community/eza" target="_blank" rel="noopener">eza</a></strong> - reemplaza ls. Colores, iconos, vista Git y tree integrados.</li>
  <li><strong><a href="https://github.com/starship/starship" target="_blank" rel="noopener">starship</a></strong> - prompt de shell multi-lenguaje que muestra rama Git, versión de Node, Python, etc.</li>
  <li><strong><a href="https://github.com/ajeetdsouza/zoxide" target="_blank" rel="noopener">zoxide</a></strong> - reemplaza cd. Aprende tus directorios frecuentes y saltas con <code>z proj</code>.</li>
  <li><strong><a href="https://github.com/dandavison/delta" target="_blank" rel="noopener">delta</a></strong> - embellece los diffs de Git con colores y side-by-side.</li>
  <li><strong><a href="https://github.com/jesseduffield/lazygit" target="_blank" rel="noopener">lazygit</a></strong> - interfaz TUI para Git (stage, commit, rebase sin memorizar).</li>
  <li><strong><a href="https://github.com/ClementTsang/bottom" target="_blank" rel="noopener">bottom (btm)</a></strong> - monitor de sistema moderno estilo htop con gráficos.</li>
  <li><strong><a href="https://github.com/bootandy/dust" target="_blank" rel="noopener">dust</a></strong> - reemplaza du, muestra el uso de disco como árbol visual.</li>
  <li><strong><a href="https://github.com/dalance/procs" target="_blank" rel="noopener">procs</a></strong> - reemplaza ps, con tablas en color y filtros potentes.</li>
  <li><strong><a href="https://github.com/junegunn/fzf" target="_blank" rel="noopener">fzf</a></strong> - buscador difuso universal (escrito en Go, no Rust, pero imprescindible).</li>
</ul>

<h2>Instalación rápida</h2>
<pre><code># Con cargo (gestor de Rust)
cargo install ripgrep fd-find bat eza

# Con apt (Ubuntu/Debian)
sudo apt install ripgrep fd-find bat

# Con pacman (Arch)
sudo pacman -S ripgrep fd bat eza zoxide</code></pre>

<h2>¿Vale la pena migrar?</h2>
<blockquote>No tienes que abandonar las clásicas: conviven perfectamente. Pero probar ripgrep una vez y ver cómo busca en miles de archivos en milisegundos cambia tu forma de trabajar.</blockquote>

<p>Si quieres ver proyectos reales que combinan los comandos clásicos para construir herramientas útiles, visita la sección de <a href="#" onclick="navigate('projects');return false;">Proyectos</a> de este sitio. La terminal moderna existe, y en parte está escrita en Rust.</p>`
    },
    en:{
      title:'The Modern Terminal: Rust Tools That Replace the Classics',
      excerpt:'ripgrep, fd, bat, eza, zoxide and more. Why Rust became the favorite language for rewriting UNIX tools and what you gain with each.',
      content:`
<p>The classic UNIX tools (<code>grep</code>, <code>find</code>, <code>cat</code>, <code>ls</code>) have decades of service. They work, but they were written in C in a very different era. Lately, a wave of <strong>Rust</strong> rewrites has been modernizing the terminal: faster, safer, and with better defaults.</p>

<h2>Why Rust?</h2>
<p><a href="https://www.rust-lang.org/" target="_blank" rel="noopener">Rust</a> offers C-like speed without its memory problems (no buffer overflows or use-after-free). Plus, its package manager (cargo) makes distributing static binaries easy. It's no coincidence Rust has been the most loved language in the <a href="https://survey.stackoverflow.co/" target="_blank" rel="noopener">Stack Overflow Survey</a> for many years running.</p>

<h2>The classic → modern mapping</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">grep → ripgrep</span><div class="bar-track"><div class="bar-fill" style="width:95%;background:#e09f3e"></div></div><span class="bar-val">Faster</span></div>
  <div class="bar-row"><span class="bar-label">find → fd</span><div class="bar-track"><div class="bar-fill" style="width:90%;background:#3ec9a7"></div></div><span class="bar-val">Simple</span></div>
  <div class="bar-row"><span class="bar-label">cat → bat</span><div class="bar-track"><div class="bar-fill" style="width:88%;background:#e06c60"></div></div><span class="bar-val">Color</span></div>
  <div class="bar-row"><span class="bar-label">ls → eza</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:#d4915e"></div></div><span class="bar-val">Icons</span></div>
  <div class="bar-row"><span class="bar-label">cd → zoxide</span><div class="bar-track"><div class="bar-fill" style="width:92%;background:#8cb369"></div></div><span class="bar-val">Smart</span></div>
  <div class="bar-row"><span class="bar-label">du → dust</span><div class="bar-track"><div class="bar-fill" style="width:80%;background:#e09f3e"></div></div><span class="bar-val">Visual</span></div>
</div>

<h2>The 12 standout tools</h2>
<ul>
  <li><strong><a href="https://github.com/BurntSushi/ripgrep" target="_blank" rel="noopener">ripgrep (rg)</a></strong> - replaces grep. Searches in parallel and respects .gitignore. Usually 5-10× faster.</li>
  <li><strong><a href="https://github.com/sharkdp/fd" target="_blank" rel="noopener">fd</a></strong> - replaces find. Human syntax: <code>fd "\\.js$"</code> instead of <code>find . -name "*.js"</code>.</li>
  <li><strong><a href="https://github.com/sharkdp/bat" target="_blank" rel="noopener">bat</a></strong> - replaces cat. Adds syntax highlighting and line numbers.</li>
  <li><strong><a href="https://github.com/eza-community/eza" target="_blank" rel="noopener">eza</a></strong> - replaces ls. Colors, icons, Git view, and built-in tree.</li>
  <li><strong><a href="https://github.com/starship/starship" target="_blank" rel="noopener">starship</a></strong> - multi-language shell prompt showing Git branch, Node/Python versions, etc.</li>
  <li><strong><a href="https://github.com/ajeetdsouza/zoxide" target="_blank" rel="noopener">zoxide</a></strong> - replaces cd. Learns your frequent dirs and you jump with <code>z proj</code>.</li>
  <li><strong><a href="https://github.com/dandavison/delta" target="_blank" rel="noopener">delta</a></strong> - beautifies Git diffs with colors and side-by-side.</li>
  <li><strong><a href="https://github.com/jesseduffield/lazygit" target="_blank" rel="noopener">lazygit</a></strong> - TUI for Git (stage, commit, rebase without memorizing).</li>
  <li><strong><a href="https://github.com/ClementTsang/bottom" target="_blank" rel="noopener">bottom (btm)</a></strong> - modern system monitor, htop-style with graphs.</li>
  <li><strong><a href="https://github.com/bootandy/dust" target="_blank" rel="noopener">dust</a></strong> - replaces du, shows disk usage as a visual tree.</li>
  <li><strong><a href="https://github.com/dalance/procs" target="_blank" rel="noopener">procs</a></strong> - replaces ps, with colored tables and powerful filters.</li>
  <li><strong><a href="https://github.com/junegunn/fzf" target="_blank" rel="noopener">fzf</a></strong> - universal fuzzy finder (written in Go, not Rust, but indispensable).</li>
</ul>

<h2>Quick install</h2>
<pre><code># With cargo (Rust's package manager)
cargo install ripgrep fd-find bat eza

# With apt (Ubuntu/Debian)
sudo apt install ripgrep fd-find bat

# With pacman (Arch)
sudo pacman -S ripgrep fd bat eza zoxide</code></pre>

<h2>Is it worth migrating?</h2>
<blockquote>You don't have to abandon the classics: they coexist perfectly. But trying ripgrep once and seeing it search thousands of files in milliseconds changes how you work.</blockquote>

<p>If you want to see real projects that combine the classic commands to build useful tools, visit the <a href="#" onclick="navigate('projects');return false;">Projects</a> section of this site. The modern terminal exists, and it's partly written in Rust.</p>`
    }
  },

/* ===================== JULY 2026 ===================== */
{
    tag:'pipes', tagClass:'tag-pipes', date:'2026-07-15',
    es:{
      title:'La Filosofía Unix: Pipes, Redirección y el Arte de Componer Comandos',
      excerpt:'El operador | es la idea más poderosa de la terminal. Aprende cómo pipes, redirección y composición convierten comandos simples en herramientas complejas — con ejemplos reales que combinan grep, awk, sort, find y más.',
      content:`
<p>Cada comando de Linux hace una sola cosa y la hace bien. <code>ls</code> lista. <code>grep</code> busca. <code>sort</code> ordena. La magia no está en ningún comando aislado, sino en cómo los <strong>conectas</strong>. El operador <code>|</code> —el pipe— toma la salida de un comando y la alimenta como entrada del siguiente. Es la idea más poderosa de la terminal.</p>

<h2>Los operadores que conectan todo</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">| pipe</span><div class="bar-track"><div class="bar-fill" style="width:98%;background:#e09f3e"></div></div><span class="bar-val">Conecta</span></div>
  <div class="bar-row"><span class="bar-label">&gt; redirige</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:#3ec9a7"></div></div><span class="bar-val">Guarda</span></div>
  <div class="bar-row"><span class="bar-label">&gt;&gt; añade</span><div class="bar-track"><div class="bar-fill" style="width:75%;background:#d4915e"></div></div><span class="bar-val">Acumula</span></div>
  <div class="bar-row"><span class="bar-label">&lt; inyecta</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#e06c60"></div></div><span class="bar-val">Lee</span></div>
</div>

<h2>Pipes: una cinta transportadora entre programas</h2>
<p>Un pipe pasa la salida estándar (<code>stdout</code>) de un comando a la entrada estándar (<code>stdin</code>) del siguiente. Nadie imprime nada en pantalla; los datos fluyen de un proceso a otro.</p>

<pre><code># Top 10 IPs que más fallan contraseñas en el log
grep "Failed password" /var/log/auth.log | awk '{print $NF}' | sort | uniq -c | sort -rn | head</code></pre>

<p>Esa línea hace cinco cosas: filtra, extrae el último campo, ordena, cuenta duplicados y muestra el top. Ningún programa por separado sabría hacer todo eso, pero seis comandos simples encadenados lo resuelven en una línea.</p>

<h2>Redirección: guardar y leer archivos</h2>
<ul>
  <li><strong><code>&gt;</code></strong> — guarda la salida en un archivo (sobrescribe si existe).</li>
  <li><strong><code>&gt;&gt;</code></strong> — añade al final del archivo sin borrar lo anterior.</li>
  <li><strong><code>&lt;</code></strong> — alimenta un comando con el contenido de un archivo.</li>
  <li><strong><code>2&gt;</code></strong> — redirige solo los errores (<code>stderr</code>).</li>
</ul>

<pre><code># Guarda el top 10 de procesos por memoria
ps aux --sort=-%mem | head -10 &gt; top_mem.txt

# Añade la fecha al final del log
date &gt;&gt; registro.log

# Cuenta líneas de un archivo sin abrirlo en pantalla
wc -l &lt; /var/mail/usuario

# Descarta los errores de un find ruidoso
find / -name "*.conf" 2&gt; /dev/null</code></pre>

<h2>El truco de /dev/null</h2>
<p><code>/dev/null</code> es un agujero negro: lo que escribas en él desaparece. Redirigir ahí <code>stderr</code> silencia los errores; redirigir <code>stdout</code> descarta la salida normal. Esencial para scripts limpios que no escupen ruido por la terminal.</p>

<h2>tee: ver y guardar a la vez</h2>
<p><code>tee</code> divide la salida: la imprime en pantalla y la guarda en un archivo simultáneamente. Útil cuando quieres monitorear un proceso mientras lo registras.</p>

<pre><code># Compila, redirige errores a la salida y guardas todo en log
make build 2&gt;&amp;1 | tee errores.log</code></pre>

<h2>Composición real: seis comandos, una respuesta</h2>
<p>¿Qué archivos <code>.js</code> de tu proyecto tienen más comentarios "TODO" y cuántos? Una sola línea:</p>

<pre><code>find . -name "*.js" -type f -exec grep -Hc "TODO" {} + | sort -t: -k2 -rn | head -20</code></pre>

<p>Encadenaste <code>find</code>, <code>grep</code> y <code>sort</code> para responder una pregunta compleja. Esto es la <strong>filosofía Unix</strong>: herramientas pequeñas que componen.</p>

<blockquote>"Escribe programas que hagan una sola cosa y la hagan bien. Escribe programas para trabajar juntos." — Doug McIlroy, inventor del pipe</blockquote>

<p>Cada comando de la sección de <a href="#" onclick="navigate('commands');return false;">Comandos</a> está diseñado para conectarse con los demás. La terminal no es una colección de herramientas aisladas: es un lenguaje de composición. Aprender un comando nuevo no suma una habilidad — <strong>multiplica</strong> las que ya tienes.</p>`
    },
    en:{
      title:'The Unix Philosophy: Pipes, Redirection, and the Art of Composing Commands',
      excerpt:'The | operator is the most powerful idea in the terminal. Learn how pipes, redirection, and composition turn simple commands into complex tools — with real examples combining grep, awk, sort, find and more.',
      content:`
<p>Every Linux command does one thing and does it well. <code>ls</code> lists. <code>grep</code> searches. <code>sort</code> sorts. The magic isn't in any single command, but in how you <strong>connect</strong> them. The <code>|</code> operator —the pipe— takes one command's output and feeds it as the next command's input. It's the most powerful idea in the terminal.</p>

<h2>The operators that connect everything</h2>
<div class="art-chart">
  <div class="bar-row"><span class="bar-label">| pipe</span><div class="bar-track"><div class="bar-fill" style="width:98%;background:#e09f3e"></div></div><span class="bar-val">Connect</span></div>
  <div class="bar-row"><span class="bar-label">&gt; redirect</span><div class="bar-track"><div class="bar-fill" style="width:85%;background:#3ec9a7"></div></div><span class="bar-val">Save</span></div>
  <div class="bar-row"><span class="bar-label">&gt;&gt; append</span><div class="bar-track"><div class="bar-fill" style="width:75%;background:#d4915e"></div></div><span class="bar-val">Accumulate</span></div>
  <div class="bar-row"><span class="bar-label">&lt; inject</span><div class="bar-track"><div class="bar-fill" style="width:70%;background:#e06c60"></div></div><span class="bar-val">Read</span></div>
</div>

<h2>Pipes: a conveyor belt between programs</h2>
<p>A pipe passes the standard output (<code>stdout</code>) of one command to the standard input (<code>stdin</code>) of the next. Nothing prints to the screen; data flows from one process to another.</p>

<pre><code># Top 10 IPs with the most failed passwords in the log
grep "Failed password" /var/log/auth.log | awk '{print $NF}' | sort | uniq -c | sort -rn | head</code></pre>

<p>That line does five things: filters, extracts the last field, sorts, counts duplicates, and shows the top. No single program could do all of that, but six simple commands chained together solve it in one line.</p>

<h2>Redirection: saving and reading files</h2>
<ul>
  <li><strong><code>&gt;</code></strong> — saves output to a file (overwrites if it exists).</li>
  <li><strong><code>&gt;&gt;</code></strong> — appends to the end without deleting.</li>
  <li><strong><code>&lt;</code></strong> — feeds a command the contents of a file.</li>
  <li><strong><code>2&gt;</code></strong> — redirects only errors (<code>stderr</code>).</li>
</ul>

<pre><code># Save the top 10 processes by memory
ps aux --sort=-%mem | head -10 &gt; top_mem.txt

# Append the date to the log
date &gt;&gt; build.log

# Count lines of a file without printing it
wc -l &lt; /var/mail/user

# Discard errors from a noisy find
find / -name "*.conf" 2&gt; /dev/null</code></pre>

<h2>The /dev/null trick</h2>
<p><code>/dev/null</code> is a black hole: anything you write to it disappears. Redirecting <code>stderr</code> there silences errors; redirecting <code>stdout</code> discards normal output. Essential for clean scripts that don't spit noise into the terminal.</p>

<h2>tee: see it and save it at once</h2>
<p><code>tee</code> splits the output: it prints to the screen and saves to a file simultaneously. Useful when you want to monitor a process while logging it.</p>

<pre><code># Build, redirect errors to output, save everything to a log
make build 2&gt;&amp;1 | tee errors.log</code></pre>

<h2>Real composition: six commands, one answer</h2>
<p>Which <code>.js</code> files in your project have the most "TODO" comments and how many? One line:</p>

<pre><code>find . -name "*.js" -type f -exec grep -Hc "TODO" {} + | sort -t: -k2 -rn | head -20</code></pre>

<p>You chained <code>find</code>, <code>grep</code> and <code>sort</code> to answer a complex question. This is the <strong>Unix philosophy</strong>: small tools that compose.</p>

<blockquote>"Write programs that do one thing and do it well. Write programs to work together." — Doug McIlroy, inventor of the pipe</blockquote>

<p>Every command in the <a href="#" onclick="navigate('commands');return false;">Commands</a> section is designed to connect with the others. The terminal isn't a collection of isolated tools: it's a composition language. Learning a new command doesn't add one skill — it <strong>multiplies</strong> the ones you already have.</p>`
    }
  }
];
