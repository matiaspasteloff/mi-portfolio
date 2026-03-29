const Footer = () => {
    /* ── Año actual dinámico ── */
    const year = new Date().getFullYear();

    return (
        /* ── Pie de página con créditos ── */
        <footer className="py-8 pb-24 md:pb-8 bg-slate-900 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
                © {year} Matías Pasteloff. Todos los derechos reservados.
            </p>
        </footer>
    );
};

export default Footer;