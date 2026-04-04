import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="py-8 bg-slate-900 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-sm">
                © {year} Matías Pasteloff. {t.footer.rights}
            </p>
        </footer>
    );
};

export default Footer;