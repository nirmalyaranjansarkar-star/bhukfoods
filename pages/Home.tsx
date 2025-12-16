import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import Calculator from '../components/Calculator';
import MarketWidget from '../components/MarketWidget';
import Plans from '../components/Plans';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import FreeResources from '../components/FreeResources';
import LeadGen from '../components/LeadGen';
import PainPoints from '../components/PainPoints';
import FoodComparison from '../components/FoodComparison';
import { trackEvent, GTM_EVENTS } from '../services/analytics';

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden transition-colors duration-500">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#FFF8E1] dark:bg-slate-950 transition-colors duration-500"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-orange-50 dark:bg-slate-900 rounded-bl-[100px] opacity-60 hidden md:block transition-colors duration-500"></div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 space-y-8 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                Serving <Link to="/agarpara" className="hover:text-[#D32F2F]">Agarpara</Link>, <Link to="/sodepur" className="hover:text-[#D32F2F]">Sodepur</Link> & <Link to="/belgharia" className="hover:text-[#D32F2F]">Belgharia</Link>
              </span>
            </div>

            <div className="text-[#D32F2F] dark:text-[#D32F2F] font-bold tracking-[0.2em] uppercase text-sm md:text-base animate-on-scroll delay-100 -mb-4 block">
              {t.tagline}
            </div>

            <h1 className={`text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] ${lang === 'bn' ? 'font-bengali' : ''}`}>
              {t.hero_headline}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              {lang === 'en' ? (
                <>
                  Stop cooking. Stop managing maids. We are your complete <strong>Kitchen Substitution Service</strong> delivering healthy, home-style meals 3 times a day.
                </>
              ) : t.hero_subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#plans" 
                onClick={() => trackEvent(GTM_EVENTS.SUBSCRIBE_CLICK, { location: 'hero' })}
                className="bg-[#D32F2F] text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-[#b71c1c] transition-all duration-300 shadow-xl shadow-red-200 dark:shadow-red-900/40 hover:shadow-red-300 transform hover:-translate-y-1"
              >
                {t.hero_cta}
              </a>
              <a 
                href="#calculator"
                className="px-8 py-4 rounded-full font-bold text-lg text-center text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-orange-200 hover:bg-orange-50 dark:hover:bg-slate-700 transition-all duration-300"
              >
                Calculate Savings
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative animate-on-scroll delay-200">
             <div className="relative z-10 transform md:rotate-2 hover:rotate-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop" 
                  alt="Healthy Bowl of Food"
                  className="rounded-[2.5rem] shadow-2xl border-8 border-white dark:border-slate-800 w-full object-cover h-[400px] md:h-[500px]"
                />
             </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 bg-white dark:bg-slate-900 animate-on-scroll relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <Calculator lang={lang} />
        </div>
      </section>

      <section id="struggles">
         <PainPoints lang={lang} />
      </section>

      <section className="animate-on-scroll bg-white dark:bg-slate-950 transition-colors duration-500">
        <FoodComparison lang={lang} />
      </section>

      <section className="container mx-auto px-4 animate-on-scroll bg-[#FFF8E1] dark:bg-slate-950 transition-colors duration-500">
        <MarketWidget lang={lang} />
        <LeadGen lang={lang} />
      </section>

      <section id="plans" className="py-20 bg-[#FFF8E1] dark:bg-slate-950 transition-colors duration-500">
        <div className="container mx-auto px-4">
          <Plans lang={lang} />
        </div>
      </section>

      <section className="container mx-auto px-4 my-8 animate-on-scroll">
        <FreeResources lang={lang} />
      </section>
      
      <section className="container mx-auto px-4 mb-16 animate-on-scroll">
        <Testimonials lang={lang} />
      </section>

      <section id="faq" className="py-16 bg-white dark:bg-slate-900 border-t border-orange-100 dark:border-slate-800 animate-on-scroll transition-colors duration-500">
         <div className="container mx-auto px-4">
            <FAQ lang={lang} />
         </div>
      </section>

      {/* Contact Footer Area */}
      <section id="contact" className="py-20 bg-slate-900 text-slate-300">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll space-y-6">
               <h3 className="text-white text-3xl font-bold">{t.footer_contact}</h3>
               <div className="space-y-4">
                 <div className="flex items-start gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-[#D32F2F]">📍</div>
                    <div>
                      <h4 className="text-white font-bold">Kitchen HQ</h4>
                      <p>Nilganj Road, <Link to="/agarpara" className="text-[#fe0467] hover:underline">Agarpara</Link>, Kolkata - 700109</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-[#D32F2F]">📞</div>
                    <div>
                      <h4 className="text-white font-bold">Call / WhatsApp</h4>
                      <p className="text-xl text-white font-mono">+91 75959 23777</p>
                    </div>
                 </div>
               </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 animate-on-scroll delay-100 shadow-xl">
               <h4 className="text-slate-900 dark:text-white font-bold mb-2 text-xl">Get a Call Back</h4>
               <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">Fill this form and we will call you within 2 hours.</p>
               <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); trackEvent(GTM_EVENTS.CONTACT_SUBMIT); alert('Thank you! We will call you shortly.'); }}>
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-3 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-[#D32F2F] focus:outline-none transition-all" required />
                  </div>
                  <div>
                    <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg p-3 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-[#D32F2F] focus:outline-none transition-all" required />
                  </div>
                  <button type="submit" className="w-full bg-[#D32F2F] text-white font-bold py-4 rounded-xl hover:bg-[#b71c1c] transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg">Request Call Back</button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;