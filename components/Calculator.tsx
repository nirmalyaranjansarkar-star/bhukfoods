import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { trackEvent, GTM_EVENTS } from '../services/analytics';

interface CalculatorProps {
  lang: Language;
}

const Calculator: React.FC<CalculatorProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  
  const [householdSize, setHouseholdSize] = useState(2);
  const [eatingOutWeekly, setEatingOutWeekly] = useState(1000);
  const [cookingHours, setCookingHours] = useState(14);
  const [maidSalary, setMaidSalary] = useState(2500);
  const [showBreakdown, setShowBreakdown] = useState(false);
  
  const [savings, setSavings] = useState(0);
  const [bhukCost, setBhukCost] = useState(0);
  const [currentCost, setCurrentCost] = useState(0);

  // Constants based on user prompt
  const BHUK_PER_PERSON = 3500; 
  const LPG_COST = 850; 
  const MAID_BONUS_YEARLY = 5600;
  const ELECTRICITY_COST = 400; // Fridge
  const HOURLY_VALUE = 100; 
  
  // Grocery per person (approx)
  const GROCERY_PER_PERSON = 2500;

  useEffect(() => {
    // 1. Calculate Groceries
    const totalGroc = GROCERY_PER_PERSON * householdSize;

    // 2. Eating Out
    const monthlyEatingOut = eatingOutWeekly * 4;

    // 3. Maid Costs
    const maidBonusMonthly = maidSalary > 0 ? Math.round(MAID_BONUS_YEARLY / 12) : 0;
    
    // 4. Time Value
    const monthlyCookingValue = cookingHours * 4 * HOURLY_VALUE;

    // Total Current Cost
    const totalCurrent = totalGroc + monthlyEatingOut + monthlyCookingValue + LPG_COST + ELECTRICITY_COST + maidSalary + maidBonusMonthly;
    
    // Bhuk Cost
    const totalBhuk = BHUK_PER_PERSON * householdSize;
    
    setCurrentCost(totalCurrent);
    setBhukCost(totalBhuk);
    setSavings(totalCurrent - totalBhuk);
  }, [householdSize, eatingOutWeekly, cookingHours, maidSalary]);

  const handleInteract = () => {
    trackEvent(GTM_EVENTS.CALCULATOR_USE, { savings });
  };

  return (
    <div id="calculator" className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden relative border border-slate-800 transition-all duration-500 hover:shadow-2xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#fe0467] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#fe0467]">{t.calc_title}</h2>
          <p className="text-slate-300 text-sm">{t.calc_desc}</p>
          
          <div className="space-y-5">
            {/* Inputs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">{t.label_household}</label>
                <span className="font-bold">{householdSize} People</span>
              </div>
              <input 
                type="range" min="1" max="6" step="1" 
                value={householdSize} 
                onChange={(e) => setHouseholdSize(Number(e.target.value))}
                onMouseUp={handleInteract}
                className="w-full accent-[#D32F2F] h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">{t.label_eating_out}</label>
                <span className="font-bold">₹{eatingOutWeekly}</span>
              </div>
              <input 
                type="range" min="0" max="5000" step="200" 
                value={eatingOutWeekly} 
                onChange={(e) => setEatingOutWeekly(Number(e.target.value))}
                onMouseUp={handleInteract}
                className="w-full accent-[#D32F2F] h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">Maid Salary</label>
                <span className="font-bold">₹{maidSalary}</span>
              </div>
              <input 
                type="range" min="0" max="8000" step="100" 
                value={maidSalary} 
                onChange={(e) => setMaidSalary(Number(e.target.value))}
                onMouseUp={handleInteract}
                className="w-full accent-[#D32F2F] h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wide text-slate-400">{t.label_cooking_time}</label>
                <span className="font-bold">{cookingHours} hrs/week</span>
              </div>
              <input 
                type="range" min="0" max="40" step="1" 
                value={cookingHours} 
                onChange={(e) => setCookingHours(Number(e.target.value))}
                onMouseUp={handleInteract}
                className="w-full accent-[#D32F2F] h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer hover:bg-slate-600 transition-colors"
              />
              <div className="text-[10px] text-slate-500 mt-1">*Includes shopping, prep, cooking & cleaning time</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-slate-600 hover:-translate-y-1">
            <div className="text-sm text-slate-400 mb-2">{t.result_savings}</div>
            <div className={`text-4xl md:text-5xl font-bold mb-2 transition-all duration-500 ${savings > 0 ? 'text-[#388E3C] scale-100' : 'text-red-400 scale-100'}`}>
              {savings > 0 ? '+' : ''}₹{savings.toLocaleString()}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="block text-slate-500">Current Spend</span>
                <span className="text-white font-mono text-lg">₹{currentCost.toLocaleString()}</span>
              </div>
              <div>
                <span className="block text-slate-500">Bhuk (Office Plan)</span>
                <span className="text-[#D32F2F] font-mono text-lg">₹{bhukCost.toLocaleString()}</span>
              </div>
            </div>
            
            <button 
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="mt-6 w-full py-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white border border-slate-600 rounded hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {showBreakdown ? 'Hide Details' : 'See Cost Breakdown'} 
              <span className={`transform transition-transform duration-300 ${showBreakdown ? 'rotate-180' : 'group-hover:translate-y-1'}`}>▼</span>
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Breakdown Section */}
      <div className={`mt-0 overflow-hidden transition-all duration-500 ease-in-out ${showBreakdown ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
         <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-4 text-sm hover:bg-slate-800/80 transition-colors duration-300">
            <h3 className="text-[#fe0467] font-bold mb-4 uppercase text-xs tracking-widest border-b border-slate-700 pb-2">Monthly Cost Breakdown</h3>
            
            <div className="grid grid-cols-12 gap-2 mb-2 font-bold text-slate-400 text-xs uppercase px-2">
               <div className="col-span-6">Item</div>
               <div className="col-span-3 text-right">Your Home</div>
               <div className="col-span-3 text-right text-[#D32F2F]">Bhuk</div>
            </div>
            
            <div className="space-y-1">
               <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                  <div className="col-span-6 text-slate-300">Groceries (Raw Material)</div>
                  <div className="col-span-3 text-right font-mono">₹{(GROCERY_PER_PERSON * householdSize).toLocaleString()}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500">-</div>
               </div>

               <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                  <div className="col-span-6 text-slate-300">Eating Out / Snacks</div>
                  <div className="col-span-3 text-right font-mono">₹{(eatingOutWeekly * 4).toLocaleString()}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500">-</div>
               </div>

               <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                  <div className="col-span-6 text-slate-300">LPG Cylinder (Fuel)</div>
                  <div className="col-span-3 text-right font-mono">₹{LPG_COST}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500">-</div>
               </div>
               
               {maidSalary > 0 && (
                 <>
                  <div className="grid grid-cols-12 gap-2 p-2 border-b border-slate-700/30 hover:bg-slate-700/20 transition-colors">
                      <div className="col-span-6 text-slate-300">Maid Salary</div>
                      <div className="col-span-3 text-right font-mono">₹{maidSalary.toLocaleString()}</div>
                      <div className="col-span-3 text-right font-mono text-slate-500">-</div>
                  </div>
                 </>
               )}

               <div className="grid grid-cols-12 gap-2 p-2 bg-yellow-900/10 rounded hover:bg-yellow-900/20 transition-colors">
                  <div className="col-span-6 text-yellow-500/80">
                     Time Value (@₹{HOURLY_VALUE}/hr)
                  </div>
                  <div className="col-span-3 text-right font-mono text-yellow-500">₹{(cookingHours * 4 * HOURLY_VALUE).toLocaleString()}</div>
                  <div className="col-span-3 text-right font-mono text-slate-500">-</div>
               </div>

               {/* Totals */}
               <div className="grid grid-cols-12 gap-2 pt-4 font-bold text-lg border-t border-slate-600 mt-2">
                  <div className="col-span-6 text-white">Total Monthly</div>
                  <div className="col-span-3 text-right font-mono">₹{currentCost.toLocaleString()}</div>
                  <div className="col-span-3 text-right font-mono text-[#D32F2F]">₹{bhukCost.toLocaleString()}</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Calculator;