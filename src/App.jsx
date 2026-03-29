import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        /* ── Contenedor raíz de la app ── */
        <div className="bg-slate-900 min-h-screen font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden">

            {/* Barra de navegación lateral / inferior */}
            <Sidebar />

            {/* Contenido principal — pb-20 en mobile compensa la nav inferior fija */}
            <main className="w-full pb-20 md:pb-0">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Footer />
            </main>
        </div>
    );
}

export default App;