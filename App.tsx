import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Stories from './pages/Stories';
import Agarpara from './pages/Agarpara';
import Sodepur from './pages/Sodepur';
import Belgharia from './pages/Belgharia';
import Kolkata from './pages/Kolkata';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import Privacy from './pages/Privacy';
import BhukLogo from './components/BhukLogo';
import { Language } from './types';
import { TRANSLATIONS, POLICY_URLS } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('bhuk_lang');
    if (saved) return saved as Language;
    return navigator.language.startsWith('bn') ? 'bn' : 'en';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem('bhuk_theme');
      if (stored === 'dark' || stored === 'light') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('bhuk_theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'bn' : 'en';
    setLang(newLang);
    localStorage.setItem('bhuk_lang', newLang);
  };

  const t = TRANSLATIONS[lang];

  const NavLink: React.FC<{ to?: string; href?: string; children: React.ReactNode }> = ({ to, href, children }) => {
    const className = "hidden md:block text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#D32F2F] dark:hover:text-[#D32F2F] transition-colors relative group py-2";
    if (to) return <Link to={to} className={className}>{children}</Link>;
    return <a href={href} className={className}>{children}</a>;
  };

  const PolicyLink: React.FC<{ url: string; children: React.ReactNode; className?: string }> = ({ url, children, className }) => {
    if (url.startsWith('http')) {
      return <a href={url} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
    }
    return <Link to={url} className={className}>{children}</Link>;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-slate-900 dark:text-slate-100 bg-[#FFF8E1] dark:bg-slate-950 min-h-screen transition-colors duration-300">
        
        <nav className="fixed top-0 w-full z-50 transition-all duration-300">
          <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-orange-100/50 dark:border-slate-800 shadow-sm transition-colors duration-300"></div>
          
          <div className="container mx-auto px-4 h-20 flex items-center justify-between relative z-10">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="transform group-hover:rotate-3 transition-transform">
                <BhukLogo className="w-10 h-10" />
              </div>
              <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                <span className="text-[#D32F2F]">Bhuk</span>Foods
              </div>
            </Link>
            
            <div className="flex items-center gap-4 md:gap-6">
              <NavLink to="/">{t.nav_home}</NavLink>
              <NavLink to="/stories">{t.nav_stories}</NavLink>
              <NavLink href="/#plans">{t.nav_plans}</NavLink>
              <NavLink href="/#calculator">{t.nav_calc}</NavLink>
              
              <div className="relative group hidden md:block">
                <button className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#D32F2F] dark:hover:text-[#D32F2F] transition-colors flex items-center gap-1 py-2">
                  {t.nav_policies}
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-orange-100 dark:border-slate-700 overflow-hidden hidden group-hover:block animate-on-scroll is-visible p-1">
                  <PolicyLink url={POLICY_URLS.terms} className="block px-4 py-2 text-sm rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">{t.policy_terms}</PolicyLink>
                  <PolicyLink url={POLICY_URLS.refund} className="block px-4 py-2 text-sm rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">{t.policy_refund}</PolicyLink>
                  <PolicyLink url={POLICY_URLS.privacy} className="block px-4 py-2 text-sm rounded-lg hover:bg-orange-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">{t.policy_privacy}</PolicyLink>
                  <Link to="/admin" className="block px-4 py-2 text-xs rounded-lg text-slate400 hover:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 border-t border-slate-100 dark:border-slate-700 mt-1">Owner Login</Link>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleTheme}
                  className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-2 rounded-full border border-slate-200 dark:border-slate-700 transition-all hover:border-[#D32F2F] dark:hover:border-[#D32F2F] flex items-center justify-center shadow-sm w-9 h-9"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === 'light' ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  )}
                </button>

                <button 
                  onClick={toggleLang}
                  className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 pl-3 pr-4 py-2 rounded-full text-sm font-bold border border-slate-200 dark:border-slate-700 transition-all hover:border-[#D32F2F] flex items-center gap-2 shadow-sm"
                >
                  <span className="text-xs uppercase text-slate-400">Lang</span>
                  {lang === 'en' ? 'বাংলা' : 'English'}
                </button>
              </div>

              <a 
                href="/#plans" 
                className="hidden md:block bg-[#D32F2F] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#b71c1c] transition-all shadow-lg shadow-red-200 dark:shadow-red-900/50 hover:shadow-red-300 transform hover:-translate-y-0.5"
              >
                Subscribe
              </a>
            </div>
          </div>
        </nav>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/stories" element={<Stories lang={lang} />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/agarpara" element={<Agarpara />} />
            <Route path="/sodepur" element={<Sodepur />} />
            <Route path="/belgharia" element={<Belgharia />} />
            <Route path="/kolkata" element={<Kolkata />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
           <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-4 gap-8 mb-8">
               <div className="col-span-1 md:col-span-2">
                 <div className="text-2xl font-bold text-white mb-1"><span className="text-[#D32F2F]">Bhuk</span>Foods</div>
                 <div className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-4 opacity-80">{t.tagline}</div>
                 <p className="max-w-xs text-sm leading-relaxed">India's First Kitchen Substitution Service. Replacing groceries, maids, and cooking with healthy, home-style deliveries.</p>
               </div>
               <div>
                 <h4 className="text-white font-bold mb-4">Locations</h4>
                 <ul className="space-y-2 text-sm">
                   <li><Link to="/agarpara" className="hover:text-[#D32F2F]">Agarpara</Link></li>
                   <li><Link to="/sodepur" className="hover:text-[#D32F2F]">Sodepur</Link></li>
                   <li><Link to="/belgharia" className="hover:text-[#D32F2F]">Belgharia</Link></li>
                 </ul>
               </div>
             </div>
             <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>{t.footer_copy} • v1.1 Live</p>
                <div className="mt-2 md:mt-0 flex gap-4">
                  <span>Made with ❤️ in Kolkata</span>
                </div>
             </div>
           </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;