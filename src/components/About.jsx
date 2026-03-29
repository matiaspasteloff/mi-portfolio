import perfilImg from '../assets/perfil.jpeg';

/* ── Datos de estadísticas ── */
const stats = [
    { value: "6", label: "Años programando" },
    { value: "3°", label: "Año en UBA" },
    { value: "2+", label: "Proyectos publicados" },
];

const About = () => {
    return (
        <section
            id="sobre-mi"
            className="py-20 px-4 sm:px-8 text-white"
            style={{
                background: "#0c1320",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                borderTop: "1px solid rgba(59,130,246,0.12)",
            }}
        >
            <div className="max-w-4xl mx-auto">

                {/* ── Encabezado de sección ── */}
                <div className="text-center mb-16">
                    <p style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        color: "#3b82f6",
                        marginBottom: "12px",
                    }}>
                        Conoceme
                    </p>
                    <h2 style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        margin: 0,
                        background: "linear-gradient(135deg, #fff 40%, #94a3b8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}>
                        Sobre Mí
                    </h2>
                    {/* Línea decorativa */}
                    <div style={{
                        width: "48px",
                        height: "3px",
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                        margin: "20px auto 0",
                        borderRadius: "2px",
                    }} />
                </div>

                {/* ── Tarjeta principal ── */}
                <div
                    className="about-card"
                    style={{
                        background: "linear-gradient(145deg, #0f172a, #0a1122)",
                        border: "1px solid rgba(59,130,246,0.15)",
                        borderRadius: "28px",
                        overflow: "hidden",
                    }}
                >
                    {/* Grid interior: columna izquierda (foto+stats) y derecha (texto) */}
                    <div className="about-grid">

                        {/* ── Columna izquierda: foto y estadísticas ── */}
                        <div
                            className="about-left"
                            style={{
                                padding: "40px 28px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "28px",
                                background: "linear-gradient(160deg, rgba(59,130,246,0.1) 0%, transparent 60%)",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Glow circular de fondo */}
                            <div style={{
                                position: "absolute",
                                top: "-40px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "200px",
                                height: "200px",
                                background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)",
                                pointerEvents: "none",
                            }} />

                            {/* ── Marco de la foto ── */}
                            <div style={{ position: "relative", zIndex: 1 }}>
                                {/* Anillo exterior degradado */}
                                <div style={{
                                    width: "160px",
                                    height: "160px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #0f172a)",
                                    padding: "3px",
                                    boxShadow: "0 0 40px rgba(59,130,246,0.25)",
                                }}>
                                    {/* Anillo interior oscuro */}
                                    <div style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "50%",
                                        background: "#0f172a",
                                        padding: "4px",
                                    }}>
                                        {/* Imagen de perfil */}
                                        <img
                                            src={perfilImg}
                                            alt="Matías Pasteloff"
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover",
                                                objectPosition: "center -20px",
                                                borderRadius: "50%",
                                                display: "block",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Indicador de disponibilidad */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "8px",
                                    right: "8px",
                                    width: "16px",
                                    height: "16px",
                                    background: "#22c55e",
                                    borderRadius: "50%",
                                    border: "3px solid #0f172a",
                                    boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                                }} />
                            </div>

                            {/* ── Nombre y rol debajo de la foto ── */}
                            <div className="text-center" style={{ zIndex: 1 }}>
                                <p style={{
                                    margin: "0 0 4px 0",
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    color: "#f1f5f9",
                                    letterSpacing: "-0.02em",
                                }}>
                                    Matías Pasteloff
                                </p>
                                <p style={{ margin: 0, fontSize: "13px", color: "#3b82f6", fontWeight: 500 }}>
                                    Full Stack Developer
                                </p>
                            </div>

                            {/* ── Estadísticas numéricas ── */}
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                width: "100%",
                                zIndex: 1,
                            }}>
                                {stats.map((stat, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            background: "rgba(30,41,59,0.8)",
                                            border: "1px solid #1e293b",
                                            borderRadius: "12px",
                                            padding: "10px 16px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
                                            {stat.label}
                                        </span>
                                        <span style={{
                                            fontSize: "20px",
                                            fontWeight: 800,
                                            color: "#3b82f6",
                                            letterSpacing: "-0.02em",
                                        }}>
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── Columna derecha: texto de presentación ── */}
                        <div
                            className="about-right"
                            style={{
                                padding: "40px 36px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "20px",
                                position: "relative",
                            }}
                        >
                            {/* Línea de acento superior */}
                            <div style={{
                                position: "absolute",
                                top: 0,
                                right: "36px",
                                width: "80px",
                                height: "2px",
                                background: "linear-gradient(90deg, transparent, #3b82f6)",
                                borderRadius: "2px",
                            }} />

                            {/* Cita destacada */}
                            <div style={{
                                borderLeft: "3px solid #3b82f6",
                                paddingLeft: "20px",
                                marginBottom: "4px",
                            }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: "16px",
                                    color: "#cbd5e1",
                                    fontStyle: "italic",
                                    lineHeight: 1.7,
                                }}>
                                    "Transformando la teoría de la ingeniería en soluciones de software eficientes y escalables."
                                </p>
                            </div>

                            {/* Párrafo de formación académica */}
                            <p style={{ margin: 0, fontSize: "15px", color: "#94a3b8", lineHeight: 1.85 }}>
                                Soy estudiante de 3º año de Ingeniería en Informática en la{" "}
                                <strong style={{ color: "#cbd5e1" }}>UBA</strong>, con una sólida formación técnica
                                base iniciada en la escuela <strong style={{ color: "#cbd5e1" }}>ORT</strong>.
                                Llevo 6 años inmerso en el mundo de la programación, construyendo una base fuerte
                                en lógica y algoritmos.
                            </p>

                            {/* Párrafo de stack actual */}
                            <p style={{ margin: 0, fontSize: "15px", color: "#94a3b8", lineHeight: 1.85 }}>
                                Actualmente, mi foco está en el desarrollo con{" "}
                                <strong style={{ color: "#3b82f6" }}>Java</strong>,{" "}
                                <strong style={{ color: "#3b82f6" }}>Python</strong> y bases de datos{" "}
                                <strong style={{ color: "#3b82f6" }}>SQL</strong>. Busco constantemente oportunidades
                                para aplicar mi capacidad analítica y de resolución de problemas en el desarrollo
                                de software.
                            </p>

                            {/* ── Botones de contacto ── */}
                            <div className="flex flex-wrap gap-3 mt-2">
                                <a
                                    href="https://github.com/matiaspasteloff"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "10px 20px",
                                        background: "rgba(59,130,246,0.12)",
                                        border: "1px solid rgba(59,130,246,0.35)",
                                        borderRadius: "10px",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        color: "#3b82f6",
                                        textDecoration: "none",
                                    }}
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                                <a
                                    href="mailto:matiaspasteloff@gmail.com"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        padding: "10px 20px",
                                        background: "rgba(139,92,246,0.12)",
                                        border: "1px solid rgba(139,92,246,0.35)",
                                        borderRadius: "10px",
                                        fontSize: "13px",
                                        fontWeight: 600,
                                        color: "#a78bfa",
                                        textDecoration: "none",
                                    }}
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    Contactar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Estilos responsive del grid ── */}
            <style>{`
                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                }
                .about-left {
                    border-right: 1px solid rgba(59,130,246,0.12);
                }
                @media (max-width: 640px) {
                    .about-grid {
                        grid-template-columns: 1fr;
                    }
                    .about-left {
                        border-right: none;
                        border-bottom: 1px solid rgba(59,130,246,0.12);
                    }
                    .about-right {
                        padding: 28px 24px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;