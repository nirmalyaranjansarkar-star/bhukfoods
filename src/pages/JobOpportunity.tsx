import React from 'react';
import { JOB_APPLICATION_FORM_URL } from '../constants';

const JobOpportunity: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF8E1] dark:bg-slate-950 pt-24 pb-24 transition-colors duration-500">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-16 h-64 md:h-96 group">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070" 
            alt="Bhuk Foods Kitchen Team" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-3xl">
            <span className="bg-[#D32F2F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block tracking-wider shadow-md">
              We Are Hiring
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-bengali-support">
              Join the Bhuk Foods Family
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed text-slate-200">
              We aren't just a kitchen; we are a community. We are looking for passionate cooks, helpers, and delivery partners in Agarpara & Sodepur.
            </p>
          </div>
        </div>

        {/* Company Culture */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Our Culture: Dignity, Respect & Growth
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
            At Bhuk Foods, we believe that happy hands cook tasty food. We provide a clean, professional, and respectful working environment. No yelling, no unsafe conditions—just a team working together to feed families.
          </p>
        </div>

        {/* Roles Grid */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Open Positions</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Role 1: Cooks */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 animate-on-scroll flex flex-col">
            <div className="w-14 h-14 bg-orange-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
              👨‍🍳
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Head & Asst. Cooks</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wide">Agarpara Kitchen HQ</p>
            
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Requirements</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Expertise in Bengali Cuisine</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Experience in bulk cooking (50+ heads)</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Clean hygiene habits</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                 <p className="text-sm text-slate-500"><span className="font-bold">Shift:</span> Morning (5 AM - 2 PM)</p>
              </div>
            </div>
          </div>

          {/* Role 2: Helpers */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 animate-on-scroll delay-100 flex flex-col">
            <div className="w-14 h-14 bg-blue-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
              🥔
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Kitchen Helpers</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wide">Agarpara Kitchen HQ</p>
            
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Responsibilities</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex gap-2"><span className="text-blue-500">✓</span> Vegetable cutting & chopping</li>
                  <li className="flex gap-2"><span className="text-blue-500">✓</span> Packing meal boxes neatly</li>
                  <li className="flex gap-2"><span className="text-blue-500">✓</span> Cleaning & maintenance</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                 <p className="text-sm text-slate-500"><span className="font-bold">Req:</span> Hardworking attitude</p>
              </div>
            </div>
          </div>

          {/* Role 3: Delivery */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-orange-100 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 animate-on-scroll delay-200 flex flex-col">
            <div className="w-14 h-14 bg-green-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
              🛵
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Delivery Partners</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium uppercase tracking-wide">Sodepur - Belgharia Route</p>
            
            <div className="space-y-4 flex-1">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Requirements</h4>
                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Own Cycle or Bike/Scooty</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Local area knowledge</li>
                  <li className="flex gap-2"><span className="text-green-500">✓</span> Smartphone with GPS</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                 <p className="text-sm text-slate-500"><span className="font-bold">Benefit:</span> Fuel allowance provided</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section & CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-16 animate-on-scroll shadow-2xl relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg h-fit text-[#D32F2F] shadow-inner">💰</div>
                  <div>
                    <h4 className="font-bold text-lg">On-Time Salary</h4>
                    <p className="text-slate-400 text-sm">We pay on the 1st of every month. No delays, no excuses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg h-fit text-[#D32F2F] shadow-inner">🍲</div>
                  <div>
                    <h4 className="font-bold text-lg">Free Duty Meals</h4>
                    <p className="text-slate-400 text-sm">Staff gets healthy, fresh food during their shift.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg h-fit text-[#D32F2F] shadow-inner">📈</div>
                  <div>
                    <h4 className="font-bold text-lg">Growth Opportunity</h4>
                    <p className="text-slate-400 text-sm">As we expand to new locations, hardworking staff are promoted to Managers.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center shadow-lg">
              <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
              <p className="text-slate-300 mb-8 text-sm">
                Fill out the simple application form below. We will call you for an interview within 24 hours.
              </p>
              <a 
                href={JOB_APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-red-900/50"
              >
                Open Application Form ↗
              </a>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-slate-400 mb-1">Have questions?</p>
                <p className="text-sm font-mono">WhatsApp: <span className="text-white font-bold">+91 75959 23777</span></p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default JobOpportunity;