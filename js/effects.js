/* ---------- WebGL background (grid + glow) ---------- */
function initShader() {
  const c = document.getElementById('shaderBg');
  const gl = c.getContext('webgl', { alpha: false, antialias: false });
  if (!gl) return; // No WebGL: just skip the animated background

  function resize() {
    c.width = innerWidth;
    c.height = innerHeight;
    gl.viewport(0, 0, c.width, c.height);
  }
  resize();
  addEventListener('resize', resize);

  // Shaders: a full-screen quad + a fragment shader with noise and grid
  const vs = `attribute vec2 aP; void main(){ gl_Position = vec4(aP,0,1); }`;
  const fs = `precision highp float; uniform vec2 uR; uniform float uT; uniform vec2 uM;
    float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
    void main(){
      vec2 uv = gl_FragCoord.xy / uR;
      vec2 ms = uM / uR;
      float gs = 40.0;
      vec2 cell = floor(uv*gs);
      vec2 f = fract(uv*gs);
      // Grid lines
      float lx = smoothstep(0.025,0.0,f.x) + smoothstep(0.975,1.0,f.x);
      float ly = smoothstep(0.025,0.0,f.y) + smoothstep(0.975,1.0,f.y);
      float grid = clamp(lx+ly, 0.0, 1.0);
      float cv = h(cell);
      // Pulsing cell dots
      float dot = smoothstep(0.55,0.7,cv)*0.1*(0.5+0.5*sin(uT*1.5+cv*6.28));
      float pulse = smoothstep(0.92,1.0,cv)*0.06*(0.5+0.5*sin(uT*2.5+cv*12.0));
      // Cursor glow + concentric ripples
      float dist = distance(uv, ms);
      float glow = exp(-dist*4.5)*0.15;
      float rip = sin(dist*25.0-uT*3.5)*exp(-dist*3.5)*0.03;
      // Vignette for depth
      vec2 vc = uv-0.5;
      float vig = clamp(1.0-dot(vc*1.4,vc*1.4), 0.0, 1.0);
      // Project palette
      vec3 bg = vec3(0.035,0.04,0.055);
      vec3 gc = vec3(0.07,0.08,0.10);
      vec3 wc = vec3(0.88,0.62,0.24);
      vec3 dc = vec3(0.15,0.17,0.22);
      vec3 col = bg;
      col += gc*grid*0.25;
      col += dc*dot;
      col += dc*pulse;
      col += wc*glow;
      col += wc*rip*0.6;
      col *= vig;
      col += h(uv*uR*0.5+uT*0.1)*0.01;
      gl_FragColor = vec4(col,1);
    }`;

  // Compile and link the program
  function cs(tp, src) {
    const s = gl.createShader(tp);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
    return s;
  }
  const vsh = cs(gl.VERTEX_SHADER, vs);
  const fsh = cs(gl.FRAGMENT_SHADER, fs);
  if (!vsh || !fsh) return;

  const pg = gl.createProgram();
  gl.attachShader(pg, vsh);
  gl.attachShader(pg, fsh);
  gl.linkProgram(pg);
  if (!gl.getProgramParameter(pg, gl.LINK_STATUS)) return;
  gl.useProgram(pg);

  // Geometry
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const aP = gl.getAttribLocation(pg, 'aP');
  gl.enableVertexAttribArray(aP);
  gl.vertexAttribPointer(aP, 2, gl.FLOAT, false, 0, 0);

  // Uniforms
  const uR = gl.getUniformLocation(pg, 'uR');
  const uT = gl.getUniformLocation(pg, 'uT');
  const uM = gl.getUniformLocation(pg, 'uM');

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = c.height - e.clientY; }, { passive: true });

  // Render loop
  (function draw(t) {
    t *= 0.001;
    gl.uniform2f(uR, c.width, c.height);
    gl.uniform1f(uT, t);
    gl.uniform2f(uM, mx, my);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(draw);
  })(0);
}

/* ---------- "Ember" particles (subtle) ---------- */
function initEmbers() {
  const c = document.getElementById('emberCanvas');
  const ctx = c.getContext('2d');

  function resize() { c.width = innerWidth; c.height = innerHeight; }
  resize();
  addEventListener('resize', resize);

  const chars = '{}[];:=>+-*/&|0123456789abcdef';

  const dust = [];
  for (let i = 0; i < 20; i++) {
    dust.push({
      x: Math.random()*innerWidth, y: Math.random()*innerHeight,
      vx: (Math.random()-0.5)*0.08, vy: -0.05 - Math.random()*0.1,
      size: 0.3 + Math.random()*0.6, alpha: 0.015 + Math.random()*0.025,
      life: 1, decay: 0.00015 + Math.random()*0.0002
    });
  }

  const embers = [];
  let throttle = 0;
  document.addEventListener('mousemove', e => {
    if (RM) return;
    throttle++;
    if (throttle % 5 !== 0) return;
    embers.push({
      x: e.clientX + (Math.random()-0.5)*8, y: e.clientY + (Math.random()-0.5)*6,
      vx: (Math.random()-0.5)*0.5, vy: -0.6 - Math.random()*1.2,
      size: 0.3 + Math.random()*0.7, alpha: 0.06 + Math.random()*0.08,
      decay: 0.005 + Math.random()*0.008,
      char: chars[Math.floor(Math.random()*chars.length)],
      isChar: Math.random() > 0.6
    });
  }, { passive: true });

  // Soft glow that follows the cursor
  let lmx = null, lmy = null;
  document.addEventListener('mousemove', e => { lmx = e.clientX; lmy = e.clientY; }, { passive: true });

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    for (let i = dust.length-1; i >= 0; i--) {
      const d = dust[i];
      d.x += d.vx; d.y += d.vy; d.life -= d.decay;
      if (d.life <= 0 || d.y < -10) { d.x = Math.random()*c.width; d.y = c.height+10; d.life = 1; }
      ctx.beginPath();
      ctx.arc(d.x, d.y, Math.max(0.2, d.size), 0, Math.PI*2);
      ctx.fillStyle = `rgba(224,159,62,${d.alpha*d.life})`;
      ctx.fill();
    }

    // Cursor embers
    for (let i = embers.length-1; i >= 0; i--) {
      const e = embers[i];
      e.x += e.vx; e.y += e.vy; e.vy *= 0.99; e.vx *= 0.995; e.alpha -= e.decay;
      if (e.alpha <= 0) { embers.splice(i, 1); continue; }
      const a = Math.min(e.alpha, 1);
      if (e.isChar) {
        ctx.fillStyle = `rgba(224,159,62,${a*0.5})`;
        ctx.font = '7px "JetBrains Mono"';
        ctx.fillText(e.char, e.x, e.y);
      } else {
        ctx.beginPath();
        ctx.arc(e.x, e.y, Math.max(0.2, e.size*a), 0, Math.PI*2);
        ctx.fillStyle = `rgba(224,159,62,${a})`;
        ctx.fill();
      }
    }

    // Cursor glow
    if (lmx !== null) {
      const gr = ctx.createRadialGradient(lmx, lmy, 0, lmx, lmy, 50);
      gr.addColorStop(0, 'rgba(224,159,62,0.012)');
      gr.addColorStop(1, 'rgba(224,159,62,0)');
      ctx.fillStyle = gr;
      ctx.fillRect(lmx-50, lmy-50, 100, 100);
    }

    requestAnimationFrame(draw);
  }

  if (!RM) draw();
}

/* ---------- Typing effect in the hero terminal ---------- */
const seqs = [
  'ls -la /home/user',
  'grep -rn "TODO" ./src/',
  'find /var/log -name "*.log"',
  'ssh -i ~/.ssh/key.pem dev@10.0.0.1',
  'tar -czf backup.tar.gz /data/',
  'ps aux | grep node | wc -l',
  'curl -s https://api.example.com/status',
  'watch -n 2 "free -h"'
];
let si = 0, ci = 0, del = false, pause = 0;
const tEl = document.getElementById('typingText');

function typeLoop() {
  // If the user prefers reduced motion, show a fixed string
  if (RM) { tEl.textContent = seqs[0]; return; }
  if (pause > 0) { pause--; requestAnimationFrame(typeLoop); return; }
  const s = seqs[si];
  if (!del) {
    // Typing
    tEl.textContent = s.slice(0, ci);
    ci++;
    if (ci > s.length) { pause = 90; del = true; }
    else { pause = 2 + Math.random()*4; }
  } else {
    // Deleting
    ci--;
    tEl.textContent = s.slice(0, ci);
    if (ci <= 0) { del = false; si = (si+1) % seqs.length; pause = 20; }
    else { pause = 1; }
  }
  requestAnimationFrame(typeLoop);
}

/* ---------- Boot the effects ---------- */
initShader();
initEmbers();
typeLoop();
