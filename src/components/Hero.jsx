import { useEffect, useRef } from "react";

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        /* ── Canvas setup ── */
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        /* ── Clase partícula ── */
        const particles = [];

        class Particle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 4 + 1;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed - 2;
                this.alpha = 1;
                this.decay = Math.random() * 0.015 + 0.008;
                this.size = Math.random() * 3 + 1;
                this.gravity = 0.08;
            }
            update() {
                this.vx *= 0.98;
                this.vy += this.gravity;
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= this.decay;
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = this.color;
                ctx.fill();
                ctx.restore();
            }
        }

        /* ── Paleta de colores ── */
        const colors = [
            "#3b82f6", "#60a5fa", "#93c5fd",
            "#f59e0b", "#fbbf24", "#fde68a",
            "#a78bfa", "#c4b5fd",
            "#34d399", "#6ee7b7",
            "#f87171", "#fca5a5",
            "#ffffff",
        ];

        /* ── Explosión de partículas ── */
        const burst = (x, y) => {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const count = Math.floor(Math.random() * 40) + 30;
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(x, y, color));
            }
        };

        /* ── Loop de animación ── */
        let animId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = particles.length - 1; i >= 0; i--) {
                particles[i].update();
                particles[i].draw();
                if (particles[i].alpha <= 0) particles.splice(i, 1);
            }
            animId = requestAnimationFrame(animate);
        };
        animate();

        /* ── Lanzador lateral de fuegos artificiales ── */
        const launchSide = () => {
            const side = Math.random() < 0.5 ? "left" : "right";
            const w = canvas.width;
            const h = canvas.height;
            let x, y;
            if (side === "left") {
                x = Math.random() * w * 0.18 + 10;
            } else {
                x = w - Math.random() * w * 0.18 - 10;
            }
            y = Math.random() * h * 0.7 + h * 0.05;
            burst(x, y);
        };

        /* ── Ráfaga inicial ── */
        setTimeout(() => launchSide(), 300);
        setTimeout(() => launchSide(), 600);
        setTimeout(() => launchSide(), 900);
        setTimeout(() => launchSide(), 1200);

        /* ── Intervalo periódico ── */
        const interval = setInterval(() => {
            launchSide();
            if (Math.random() < 0.4) setTimeout(() => launchSide(), 250);
        }, 900);

        return () => {
            cancelAnimationFrame(animId);
            clearInterval(interval);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <section
            id="inicio"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-slate-900 text-white relative overflow-hidden"
        >
            {/* Canvas de fuegos artificiales */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: 0 }}
            />

            {/* Glow radial de fondo */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)",
                    zIndex: 1,
                }}
            />

            {/* Contenido principal con animación de entrada */}
            <div
                className="relative w-full max-w-3xl mx-auto"
                style={{
                    zIndex: 2,
                    animation: "heroZoomIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                    opacity: 0,
                    transform: "scale(0.75)",
                }}
            >
                {/* Título principal */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                    Matías{" "}
                    <span
                        className="text-blue-500"
                        style={{ textShadow: "0 0 30px rgba(59,130,246,0.5)" }}
                    >
                        Pasteloff
                    </span>
                </h1>

                {/* Subtítulo de rol */}
                <h2 className="text-base sm:text-xl md:text-3xl font-semibold text-slate-300 mb-6 leading-snug">
                    Full Stack Developer | Estudiante de Ingeniería en Informática
                </h2>

                {/* Descripción breve */}
                <p className="text-sm sm:text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed mx-auto">
                    Cuento con una trayectoria de 6 años programando, con foco actual en Java, Python y SQL.
                    Busco aplicar mi capacidad de resolución de problemas en el desarrollo de software y aportar valor a los proyectos.
                </p>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <a
                        href="https://github.com/matiaspasteloff"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-all duration-300 text-center"
                    >
                        Ver GitHub
                    </a>
                    <a
                        href="mailto:matiaspasteloff@gmail.com"
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium shadow-lg shadow-blue-500/30 transition-all duration-300 text-center"
                    >
                        Contactar
                    </a>
                </div>
            </div>

            {/* Keyframes de animación de entrada */}
            <style>{`
                @keyframes heroZoomIn {
                    0%   { opacity: 0; transform: scale(0.75); }
                    60%  { opacity: 1; transform: scale(1.03); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
};

export default Hero;