const projectsData = [
    {
        number: "01",
        title: "Rolgar 2",
        subtitle: "Motor de Videojuego RPG",
        tech: ["Java", "POO Avanzada", "Patrones de Diseño"],
        description:
            "Motor de juego desarrollado desde cero sin librerías externas. Implementación de Patrones de Diseño, técnica Raycasting para renderizado 3D y sistema de colisiones propio.",
        link: "https://github.com/matiaspasteloff/TP-ROLGAR-II",
        accent: "#3b82f6",
        tag: "Game Engine",
    },
    {
        number: "02",
        title: "Ludoteca",
        subtitle: "E-commerce de Juegos",
        tech: ["Python", "Flask", "MVC", "Jinja2"],
        description:
            "Arquitectura Backend MVC utilizando Flask, gestionando rutas y controladores. Diseño de modelos de datos y templates dinámicos para el catálogo de juegos y la gestión de usuarios.",
        link: "https://github.com/matiaspasteloff/Ludoteca",
        accent: "#8b5cf6",
        tag: "E-commerce",
    },
];

const Projects = () => {
    return (
        <section
            id="proyectos"
            style={{
                padding: "96px 32px",
                background: "#060a10",
                color: "white",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
        >
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "72px" }}>
                    <p style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        color: "#3b82f6",
                        marginBottom: "12px",
                    }}>
                        Experiencia
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
                        Proyectos Destacados
                    </h2>
                    <div style={{
                        width: "48px",
                        height: "3px",
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                        margin: "20px auto 0",
                        borderRadius: "2px",
                    }} />
                </div>

                {/* Projects */}
                <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 2fr",
                                borderRadius: "24px",
                                overflow: "hidden",
                                border: `1px solid ${project.accent}25`,
                                background: "linear-gradient(145deg, #0f172a, #0a1122)",
                                position: "relative",
                            }}
                        >
                            {/* Left panel */}
                            <div
                                style={{
                                    padding: "40px 32px",
                                    background: `linear-gradient(160deg, ${project.accent}15 0%, transparent 60%)`,
                                    borderRight: `1px solid ${project.accent}20`,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Big number watermark */}
                                <span style={{
                                    position: "absolute",
                                    bottom: "-10px",
                                    left: "-8px",
                                    fontSize: "120px",
                                    fontWeight: 900,
                                    color: `${project.accent}12`,
                                    lineHeight: 1,
                                    letterSpacing: "-6px",
                                    userSelect: "none",
                                    pointerEvents: "none",
                                }}>
                                    {project.number}
                                </span>

                                <div>
                                    {/* Tag badge */}
                                    <span style={{
                                        display: "inline-block",
                                        padding: "4px 12px",
                                        background: `${project.accent}20`,
                                        border: `1px solid ${project.accent}40`,
                                        borderRadius: "999px",
                                        fontSize: "11px",
                                        fontWeight: 700,
                                        color: project.accent,
                                        letterSpacing: "1.5px",
                                        textTransform: "uppercase",
                                        marginBottom: "20px",
                                    }}>
                                        {project.tag}
                                    </span>

                                    <h3 style={{
                                        margin: "0 0 4px 0",
                                        fontSize: "26px",
                                        fontWeight: 800,
                                        color: "#f1f5f9",
                                        letterSpacing: "-0.02em",
                                    }}>
                                        {project.title}
                                    </h3>
                                    <p style={{
                                        margin: 0,
                                        fontSize: "14px",
                                        color: "#64748b",
                                        fontWeight: 500,
                                    }}>
                                        {project.subtitle}
                                    </p>
                                </div>

                                {/* Tech chips */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "24px", position: "relative", zIndex: 1 }}>
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                padding: "4px 10px",
                                                background: "#1e293b",
                                                border: "1px solid #334155",
                                                borderRadius: "6px",
                                                fontSize: "11px",
                                                fontWeight: 600,
                                                color: "#94a3b8",
                                                letterSpacing: "0.3px",
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right panel */}
                            <div
                                style={{
                                    padding: "40px 36px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    gap: "28px",
                                }}
                            >
                                {/* Top accent line */}
                                <div style={{
                                    position: "absolute",
                                    top: 0,
                                    right: "36px",
                                    width: "80px",
                                    height: "2px",
                                    background: `linear-gradient(90deg, transparent, ${project.accent})`,
                                    borderRadius: "2px",
                                }} />

                                <p style={{
                                    margin: 0,
                                    fontSize: "15px",
                                    color: "#94a3b8",
                                    lineHeight: 1.8,
                                    flex: 1,
                                }}>
                                    {project.description}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        padding: "12px 24px",
                                        background: `${project.accent}18`,
                                        border: `1px solid ${project.accent}40`,
                                        borderRadius: "12px",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        color: project.accent,
                                        textDecoration: "none",
                                        width: "fit-content",
                                        letterSpacing: "0.2px",
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    Ver código en GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;