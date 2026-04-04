import { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
    const canvasRef = useRef(null);
    const { t } = useLanguage();

    useEffect(() => {
        // ... (todo el código del canvas sin cambios) ...
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        resize();
        window.addEventListener("resize", resize);
        const particles = [];
        class Particle {
            constructor(x, y, color) {
                this.x = x; this.y = y; this.color = color;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 4 + 1;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed - 2;
                this.alpha = 1;
                this.decay = Math.random() * 0.015 + 0.008;
                this.size = Math.random() * 3 + 1;
                this.gravity = 0.08;
            }
            update() { this.vx *= 0.98; this.vy += this.gravity; this.x += this.vx; this.y += this.vy; this.alpha -= this.decay; }
            draw() { ctx.save(); ctx.globalAlpha = this.alpha; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.shadowBlur = 8; ctx.shadowColor = this.color; ctx.fill(); ctx.restore(); }
        }
        const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#f59e0b", "#fbbf24", "#fde68a", "#a78bfa", "#c4b5fd", "#34d399", "#6ee7b7", "#f87171", "#fca5a5", "#ffffff"];
        const burst = (x, y) => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            for (let i = 0; i < Math.floor(Math.random() * 40) + 30; i++) particles.push(new Particle(x, y, color));
        };
        let animId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = particles.length - 1; i >= 0; i--) { particles[i].update(); particles[i].draw(); if (particles[i].alpha <= 0) particles.splice(i, 1); }
            animId = requestAnimationFrame(animate);
        };
        animate();
        const launchSide = () => {
            const side = Math.random() < 0.5 ? "left" : "right";
            const w = canvas.width, h = canvas.height;
            const x = side === "left" ? Math.random() * w * 0.18 + 10 : w - Math.random() * w * 0.18 - 10;
            const y = Math.random() * h * 0.7 + h * 0.05;
            burst(x, y);
        };
        setTimeout(() => launchSide(), 300); setTimeout(() => launchSide(), 600);
        setTimeout(() => launchSide(), 900); setTimeout(() => launchSide(), 1200);
        const interval = setInterval(() => { launchSide(); if (Math.random() < 0.4) setTimeout(() => launchSide(), 250); }, 900);
        return () => { cancelAnimationFrame(animId); clearInterval(interval); window.removeEventListener("resize", resize); };
    }, []);

    return (
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-slate-900 text-white relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2, animation: "heroZoomIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards", opacity: 0, transform: "scale(0.75)" }}>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                    Matías{" "}
                    <span className="text-blue-500" style={{ textShadow: "0 0 30px rgba(59,130,246,0.5)" }}>Pasteloff</span>
                </h1>
                <h2 className="text-xl md:text-3xl font-semibold text-slate-300 mb-6">{t.hero.subtitle}</h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed mx-auto text-center">{t.hero.description}</p>
                <div className="flex gap-4 justify-center">
                    <a href="https://github.com/matiaspasteloff" target="_blank" rel="noreferrer"
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-all duration-300">
                        {t.hero.viewGitHub}
                    </a>
                    <a href="mailto:matiaspasteloff@gmail.com"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium shadow-lg shadow-blue-500/30 transition-all duration-300">
                        {t.hero.contact}
                    </a>
                </div>
            </div>
            <style>{`@keyframes heroZoomIn { 0% { opacity: 0; transform: scale(0.75); } 60% { opacity: 1; transform: scale(1.03); } 100% { opacity: 1; transform: scale(1); } }`}</style>
        </section>
    );
};

export default Hero;