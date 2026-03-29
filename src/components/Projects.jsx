/* ── Datos de proyectos destacados ── */
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
            className="py-20 px-4 sm:px-8 text-white"
            style={{
                background: "#060a10",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
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
                    {/* Línea decorativa */}
                    <div style={{
                        width: "48px",
                        height: "3px",
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                        margin: "20px auto 0",
                        borderRadius: "2px",
                    }} />
                </div>

                {/* ── Lista de tarjetas de proyecto ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                    {projectsData.map((project, index) => (

                        /* ── Tarjeta de proyecto individual ── */
                        <div
                            key={index}
                            className="project-card"
                            style={{
                                borderRadius: "24px",
                                overflow: "hidden",
                                border: `1px solid ${project.accent}25`,
                                background: "linear-gradient(145deg, #0f172a, #0a1122)",
                                position: "relative",
                            }}
                        >
                            {/* Grid interior: panel izquierdo (info) y derecho (descripción) */}
                            <div className="project-grid">

                                {/* ── Panel izquierdo: número, título y tecnologías ── */}
                                <div
                                    style={{
                                        padding: "32px 28px",
                                        background: `linear-gradient(160deg, ${project.accent}15 0%, transparent 60%)`,
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    {/* Número de fondo decorativo */}
                                    <span style={{
                                        position: "absolute",
                                        bottom: "-10px",
                                        left: "-8px",
                                        fontSize: "100px",
                                        fontWeight: 900,
                                        color: `${project.accent}12`,
                                        lineHeight: 1,
                                        letterSpacing: "-6px",
                                        userSelect: "none",
                                        pointerEvents: "none",
                                    }}>
                                        {project.number}
                                    </span>

                                    {/* Sección superior: etiqueta, título y subtítulo */}
                                    <div>
                                        {/* Badge de categoría */}
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
                                            marginBottom: "16px",
                                        }}>
                                            {project.tag}
                                        </span>

                                        {/* Título del proyecto */}
                                        <h3 style={{
                                            margin: "0 0 4px 0",
                                            fontSize: "22px",
                                            fontWeight: 800,
                                            color: "#f1f5f9",
                                            letterSpacing: "-0.02em",
                                        }}>
                                            {project.title}
                                        </h3>

                                        {/* Subtítulo / tipo de proyecto */}
                                        <p style={{ margin: 0, fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    {/* ── Chips de tecnologías usadas ── */}
                                    <div style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "6px",
                                        marginTop: "20px",
                                        position: "relative",
                                        zIndex: 1,
                                    }}>
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

                                {/* ── Panel derecho: descripción y enlace a GitHub ── */}
                                <div
                                    style={{
                                        padding: "32px 28px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        gap: "24px",
                                    }}
                                >
                                    {/* Línea de acento superior derecha */}
                                    <div style={{
                                        position: "absolute",
                                        top: 0,
                                        right: "28px",
                                        width: "80px",
                                        height: "2px",
                                        background: `linear-gradient(90deg, transparent, ${project.accent})`,
                                        borderRadius: "2px",
                                    }} />

                                    {/* Descripción del proyecto */}
                                    <p style={{
                                        margin: 0,
                                        fontSize: "14px",
                                        color: "#94a3b8",
                                        lineHeight: 1.8,
                                        flex: 1,
                                    }}>
                                        {project.description}
                                    </p>

                                    {/* Botón de enlace a GitHub */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            padding: "11px 20px",
                                            background: `${project.accent}18`,
                                            border: `1px solid ${project.accent}40`,
                                            borderRadius: "12px",
                                            fontSize: "13px",
                                            fontWeight: 600,
                                            color: project.accent,
                                            textDecoration: "none",
                                            width: "fit-content",
                                            letterSpacing: "0.2px",
                                        }}
                                    >
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                        Ver código en GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Estilos responsive del grid de proyectos ── */}
            <style>{`
                .project-grid {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                }
                @media (max-width: 600px) {
                    .project-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;