import React, { useState } from 'react';
import { Language } from '../types';
import { PLANS, TRANSLATIONS, SUBSCRIPTION_FORM_URL } from '../constants';
import { trackEvent, GTM_EVENTS } from '../services/analytics';

interface PlansProps {
  lang: Language;
}

const Plans: React.FC<PlansProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [filter, setFilter] = useState<'all' | 'student' | 'professional' | 'senior'>('all');

  const handleSubscribe = (planId: string) => {
    trackEvent(GTM_EVENTS.SUBSCRIBE_CLICK, { plan_id: planId });
    window.open(SUBSCRIPTION_FORM_URL, '_blank');
  };

  // Filter logic
  const subscriptionPlans = PLANS.filter(plan => {
    if (plan.type !== 'subscription') return false;
    if (filter !== 'all' && plan.id !== filter) return false;
    return true;
  });

  const oneTimePlans = PLANS.filter(plan => plan.type === 'onetime');

  return (
    <div className="py-12">
      <div className="text-center mb-10 animate-on-scroll">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">{t.plans_title}</h2>
        
        {/* Filters for Subscriptions */}
        <div className="inline-flex bg-white dark:bg-slate-800 p-1 rounded-lg border border-orange-200 dark:border-slate-700 animate-on-scroll delay-100">
            {['all', 'student', 'professional', 'senior'].map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f as any);
                  trackEvent(GTM_EVENTS.PLAN_VIEW, { filter: f });
                }}
                className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-all duration-300 ${
                  filter === f ? 'bg-[#FFF8E1] dark:bg-slate-900 text-[#D32F2F] shadow-sm font-bold scale-105' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700'
                }`}
              >
                {f}
              </button>
            ))}
        </div>
      </div>

      {/* Subscription Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 border-b border-orange-100 dark:border-slate-800 pb-12">
        {subscriptionPlans.map((plan, idx) => (
          <div 
            key={plan.id} 
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-orange-100 dark:border-slate-800 hover:shadow-2xl hover:border-orange-200 dark:hover:border-slate-700 transition-all duration-300 flex flex-col hover:-translate-y-2 animate-on-scroll group"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="h-48 overflow-hidden relative">
               <img 
                 src={plan.image} 
                 alt={lang === 'bn' ? `Bhuk Foods - ${plan.nameBn}` : `Bhuk Foods - ${plan.name} Meal Plan`} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 loading="lazy"
               />
               
               {plan.id === 'professional' && (
                 <div className="absolute top-4 left-4 bg-[#fe0467] text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md backdrop-blur-sm bg-opacity-90 z-10 animate-pulse">
                   {lang === 'bn' ? 'বেস্ট সেলার' : 'Best Seller'}
                 </div>
               )}

               <div className="absolute top-4 right-4 bg-[#388E3C] text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md backdrop-blur-sm bg-opacity-90">
                 {lang === 'bn' ? plan.bestForBn : plan.bestFor}
               </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {lang === 'bn' ? plan.nameBn : plan.name}
              </h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold text-[#D32F2F]">₹{plan.price}</span>
                <span className="text-slate-500 dark:text-slate-400 ml-2 text-sm">/ month</span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {(lang === 'bn' ? plan.featuresBn : plan.features).map((feat, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300 text-sm">
                    <svg className="w-5 h-5 text-[#388E3C] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feat}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleSubscribe(plan.id)}
                className="w-full font-bold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-95 bg-[#D32F2F] hover:bg-[#b71c1c] text-white"
              >
                {t.hero_cta}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* One-Time / Trial Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{lang === 'bn' ? 'গেস্ট মিল এবং ট্রায়াল' : 'Guest Meals & Trials'}</h3>
            <p className="text-slate-600 dark:text-slate-300">{lang === 'bn' ? 'সাবস্ক্রিপশন নেওয়ার আগে স্বাদ পরীক্ষা করতে চান?' : 'Want to taste before you subscribe? Order a single meal.'}</p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 justify-center">
            {oneTimePlans.map((plan, idx) => (
            <div 
                key={plan.id} 
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border-2 border-slate-100 dark:border-slate-800 hover:border-[#D32F2F] dark:hover:border-[#D32F2F] transition-all duration-300 flex flex-col md:flex-row animate-on-scroll group"
            >
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                    <img 
                        src={plan.image} 
                        alt={plan.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                     <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                        {lang === 'bn' ? 'ট্রায়াল' : 'Trial'}
                     </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{lang === 'bn' ? plan.nameBn : plan.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{lang === 'bn' ? 'দুপুর বা রাতের খাবার' : 'Available for Lunch or Dinner'}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-bold text-[#D32F2F]">₹{plan.price}</span>
                            <div className="text-xs text-slate-400">/ meal</div>
                        </div>
                    </div>
                    
                    <div className="my-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                        <div className="grid grid-cols-2 gap-2">
                             {(lang === 'bn' ? plan.featuresBn : plan.features).map((feat, i) => (
                                 <div key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                                     <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                     {feat}
                                 </div>
                             ))}
                        </div>
                    </div>

                    <button 
                        onClick={() => handleSubscribe(plan.id)}
                        className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
                    >
                        {lang === 'bn' ? 'অর্ডার করুন' : 'Order Single Meal'}
                    </button>
                </div>
            </div>
            ))}
        </div>
      </div>
      
      <div className="text-center mt-8 text-sm text-slate-500 dark:text-slate-400 animate-on-scroll">
        * {lang === 'bn' ? 'ডেলিভারি চার্জ অতিরিক্ত হতে পারে (দূরত্বের উপর নির্ভরশীল)' : 'Delivery charges may apply based on distance.'}
      </div>
    </div>
  );
};

export default Plans;