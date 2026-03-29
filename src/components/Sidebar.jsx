const Sidebar = () => {
    const navItems = [
        { id: '#inicio', label: 'Inicio' },
        { id: '#sobre-mi', label: 'Sobre Mí' },
        { id: '#skills', label: 'Skills' },
        { id: '#proyectos', label: 'Proyectos' },
    ];

    return (
        <>
            <aside className="hidden md:flex group fixed top-0 left-0 h-screen w-64 bg-slate-900/95 backdrop-blur-md border-r border-slate-800 flex-col justify-center px-8 z-50 translate-x-[-235px] hover:translate-x-0 transition-transform duration-500 ease-in-out shadow-[10px_0_30px_rgba(0,0,0,0.5)]">

                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-20 bg-blue-500/50 group-hover:bg-blue-500 rounded-l-full transition-all duration-500"></div>

                <div className="mb-12 text-left pl-2">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Matías</h2>
                    <p className="text-blue-500 font-medium text-sm">Portfolio</p>
                </div>

                <nav className="flex flex-col gap-8">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.id}
                            className="text-lg font-medium text-slate-400 hover:text-white hover:pl-3 transition-all duration-300 border-l-2 border-transparent hover:border-blue-500 pl-2"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </aside>

            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 flex justify-around p-4 z-50 pb-8">
                {navItems.map((item, index) => (
                    <a key={index} href={item.id} className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {item.label}
                    </a>
                ))}
            </nav>
        </>
    );
};

export default Sidebar;