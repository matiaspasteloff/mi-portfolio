import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const langs = [
    { code: 'es', label: 'ES', full: 'Español' },
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'pt', label: 'PT', full: 'Português' },
    { code: 'zh', label: '中', full: '中文' },
];

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const current = langs.find(l => l.code === language);

    return (
        <div ref={ref} style={{ position: 'fixed', top: '14px', right: '18px', zIndex: 200 }}>
            <button
                onClick={() => setOpen(o => !o)}
                style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    padding: '5px 10px',
                    background: 'rgba(10, 17, 34, 0.75)',
                    border: '1px solid rgba(59,130,246,0.25)',
                    borderRadius: '8px',
                    color: '#94a3b8',
                    fontSize: '12px', fontWeight: 600,
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    letterSpacing: '0.3px',
                    transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; e.currentTarget.style.color = '#e2e8f0'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.25)'; e.currentTarget.style.color = '#94a3b8'; }}
            >
                {/* Globe icon */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                {current?.label}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {open && (
                <div style={{
                    position: 'absolute', top: 'calc(100% + 6px)', right: 0,
                    background: 'rgba(10, 17, 34, 0.95)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    borderRadius: '10px', overflow: 'hidden',
                    backdropFilter: 'blur(12px)',
                    minWidth: '110px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}>
                    {langs.map((lang, i) => (
                        <button
                            key={lang.code}
                            onClick={() => { setLanguage(lang.code); setOpen(false); }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '8px',
                                width: '100%', padding: '8px 12px',
                                background: language === lang.code ? 'rgba(59,130,246,0.12)' : 'transparent',
                                border: 'none',
                                borderTop: i > 0 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                color: language === lang.code ? '#60a5fa' : '#94a3b8',
                                fontSize: '13px',
                                fontWeight: language === lang.code ? 700 : 400,
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'background 0.15s, color 0.15s',
                            }}
                            onMouseEnter={e => { if (language !== lang.code) { e.currentTarget.style.background = 'rgba(59,130,246,0.06)'; e.currentTarget.style.color = '#cbd5e1'; } }}
                            onMouseLeave={e => { if (language !== lang.code) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; } }}
                        >
                            <span style={{ fontSize: '12px', fontWeight: 700, minWidth: '20px', color: language === lang.code ? '#60a5fa' : '#64748b' }}>
                                {lang.label}
                            </span>
                            {lang.full}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;