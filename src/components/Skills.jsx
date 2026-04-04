import { useLanguage } from '../context/LanguageContext';

const skillsData = [
    {
        icon: "⌨️",
        accent: "#3b82f6",
        items: ["Java", "Python", "SQL", "HTML5", "CSS3", "JavaScript", "C++"],
    },
    {
        icon: "⚙️",
        accent: "#8b5cf6",
        items: ["React", "Flask", "React Native", "NodeJS"],
    },
    {
        icon: "🗄️",
        accent: "#06b6d4",
        items: ["MySQL", "SQL Server"],
    },
    {
        icon: "🛠️",
        accent: "#10b981",
        items: ["GitHub", "Postman", "Eclipse", "VS Code", "Trello"],
    },
];

const Skills = () => {
    const { t } = useLanguage();

    return (
        <section
            id="skills"
            style={{
                padding: "96px 32px",
                background: "#0b101b",
                color: "white",
                borderTop: "1px solid rgba(59,130,246,0.12)",
                borderBottom: "1px solid rgba(59,130,246,0.12)",
                fontFamily: "'Segoe UI', system-ui, sans-serif",
            }}
        >
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <p style={{
                        fontSize: "12px", fontWeight: 700, letterSpacing: "4px",
                        textTransform: "uppercase", color: "#3b82f6", marginBottom: "12px",
                    }}>
                        {t.skills.tag}
                    </p>
                    <h2 style={{
                        fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800,
                        letterSpacing: "-0.03em", margin: 0,
                        background: "linear-gradient(135deg, #fff 40%, #94a3b8 100%)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                    }}>
                        {t.skills.title}
                    </h2>
                    <div style={{
                        width: "48px", height: "3px",
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                        margin: "20px auto 0", borderRadius: "2px",
                    }} />
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "24px",
                }}>
                    {skillsData.map((category, index) => (
                        <div
                            key={index}
                            style={{
                                background: "linear-gradient(145deg, #0f172a, #0d1526)",
                                border: `1px solid ${category.accent}28`,
                                borderRadius: "20px", padding: "28px",
                                position: "relative", overflow: "hidden",
                            }}
                        >
                            <div style={{
                                position: "absolute", top: 0, left: 0,
                                width: "120px", height: "120px",
                                background: `radial-gradient(circle at 0% 0%, ${category.accent}22, transparent 70%)`,
                                borderRadius: "0 0 100% 0", pointerEvents: "none",
                            }} />
                            <div style={{
                                position: "absolute", top: 0, left: "28px", right: "28px",
                                height: "2px",
                                background: `linear-gradient(90deg, ${category.accent}, transparent)`,
                                borderRadius: "0 0 2px 2px",
                            }} />

                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                                <div style={{
                                    width: "38px", height: "38px",
                                    background: `${category.accent}18`,
                                    border: `1px solid ${category.accent}40`,
                                    borderRadius: "10px", display: "flex",
                                    alignItems: "center", justifyContent: "center", fontSize: "18px",
                                }}>
                                    {category.icon}
                                </div>
                                <h3 style={{
                                    margin: 0, fontSize: "16px", fontWeight: 700,
                                    color: category.accent, letterSpacing: "-0.01em",
                                }}>
                                    {t.skills.categories[index]}
                                </h3>
                            </div>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                {category.items.map((item, i) => (
                                    <span key={i} style={{
                                        padding: "6px 14px", background: "#1e293b",
                                        border: "1px solid #334155", borderRadius: "999px",
                                        fontSize: "13px", fontWeight: 500, color: "#cbd5e1",
                                        letterSpacing: "0.01em", cursor: "default",
                                    }}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;