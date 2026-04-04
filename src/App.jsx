import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <LanguageProvider>
            <div className="bg-slate-900 min-h-screen font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
                <LanguageSwitcher />
                <Sidebar />
                <main className="w-full">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Footer />
                </main>
            </div>
        </LanguageProvider>
    );
}

export default App;