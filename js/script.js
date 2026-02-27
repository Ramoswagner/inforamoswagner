/* =========================
   SOMBRA DINÂMICA DA FOTO
========================= */
const profilePic = document.querySelector('.profile-pic');

document.addEventListener('mousemove', (e) => {
    const rect = profilePic.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    profilePic.style.boxShadow = `
        ${x * 0.05}px ${y * 0.05}px 40px rgba(0,0,0,0.5),
        0 15px 20px rgba(0,0,0,0.2)
    `;
});

/* =========================
   ANIMAÇÃO DE ONDAS NO HERO
========================= */
const waveContainer = document.querySelector('.wave-background');

if (waveContainer) {
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("viewBox", "0 0 1200 200");
    svg.setAttribute("preserveAspectRatio", "none");

    const waves = 3;

    for (let i = 0; i < waves; i++) {
        const wave = document.createElementNS(svgNS, "path");
        wave.setAttribute("d", `M0,100 Q300,${100 + i*10} 600,100 T1200,100 V200 H0 Z`);
        wave.setAttribute("fill", "none");
        wave.setAttribute("stroke", "white");
        wave.setAttribute("stroke-width", "1");
        wave.setAttribute("opacity", "0.3");
        wave.classList.add('waves');
        svg.appendChild(wave);
    }

    waveContainer.appendChild(svg);

    // Animação horizontal
    const animateWaves = () => {
        document.querySelectorAll('.waves').forEach((w, idx) => {
            w.style.transform = `translateX(${(-50 + (idx * 10))}%)`;
        });
        requestAnimationFrame(animateWaves);
    };
    animateWaves();
}

/* =========================
   BOTÕES INTERATIVOS
========================= */
const btns = document.querySelectorAll('.btn-primary, .btn-secondary');
btns.forEach(btn => {
    btn.addEventListener('mouseenter', () => btn.style.transform += ' scale(1.05)');
    btn.addEventListener('mouseleave', () => btn.style.transform = btn.style.transform.replace(' scale(1.05)', ''));
});