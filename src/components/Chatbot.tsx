import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PLANS, MARKET_DATA, NO_MEAL_FORM_URL } from '../constants';

// Construct System Instruction dynamically to keep it up-to-date with constants
const getSystemInstruction = () => {
  const plansText = PLANS.map(p => `- ${p.name} (${p.type}): ₹${p.price}${p.type === 'subscription' ? '/month' : '/meal'}. Best for: ${p.bestFor}.`).join('\n');
  
  return `
You are "Chef Riya", the friendly and knowledgeable head chef/assistant of Bhuk Foods. 
Tone: Warm, motherly, helpful, and professional. You can speak English and Bengali.

Context about Bhuk Foods:
- We are India's First Kitchen Substitution Service (replacing groceries, maids, and cooking).
- Service Areas: Agarpara, Sodepur, Belgharia (Kolkata).
- USP: FSSAI Certified, We NEVER reuse oil (healthiest option), Home-style taste.
- Contact: +91 75959 23777.

Our Plans:
${plansText}

Policies:
- Refund/Pause: Users can pause meals by filling the "No Meal Day" form 24 hours in advance to get a refund/credit.
- No Meal Form Link: ${NO_MEAL_FORM_URL}

Your Goal:
Help users choose a plan, explain why we are better than maids (no holidays, reliable), or explain our hygiene.
Keep answers concise (under 100 words).
`;
};

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Namaskar! I am Chef Riya. How can I help you replace your kitchen duties today? 🍲"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setIsLoading(true);

    // Add User Message
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userText }]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat: Chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: getSystemInstruction(),
          temperature: 0.7,
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      // Stream the response
      const resultStream = await chat.sendMessageStream({ message: userText });
      
      let fullResponse = "";
      const botMsgId = (Date.now() + 1).toString();

      // Add placeholder for bot message
      setMessages(prev => [...prev, { id: botMsgId, role: 'model', text: "" }]);

      for await (const chunk of resultStream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullResponse += c.text;
          setMessages(prev => 
            prev.map(msg => 
              msg.id === botMsgId ? { ...msg, text: fullResponse } : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "I'm having a little trouble checking the stove right now. Please try again in a moment! 🍳" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`bg-white dark:bg-slate-900 w-[320px] md:w-[380px] h-[500px] rounded-2xl shadow-2xl border border-orange-200 dark:border-slate-700 overflow-hidden mb-4 transition-all duration-300 origin-bottom-right pointer-events-auto flex flex-col ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none hidden'
        }`}
      >
        {/* Header */}
        <div className="bg-[#D32F2F] p-4 flex items-center justify-between text-white shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=200&auto=format&fit=crop" 
                alt="Chef Riya"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-sm">Chef Riya</h3>
              <p className="text-xs text-red-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950 scroll-smooth">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-slate-800 text-white rounded-br-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                <div className="flex gap-1.5 items-center h-5">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="flex gap-2 items-center bg-slate-100 dark:bg-slate-800 rounded-full px-2 py-1 border border-transparent focus-within:border-orange-200 dark:focus-within:border-slate-600 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about plans, prices..."
              className="flex-1 bg-transparent text-slate-900 dark:text-white px-3 py-2 text-sm focus:outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#D32F2F] hover:bg-[#b71c1c] disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full shadow-sm transition-all transform hover:scale-105 active:scale-95 flex-shrink-0"
            >
              <svg className="w-5 h-5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="text-[10px] text-center text-slate-400 mt-2">
            AI can make mistakes. Please check important info.
          </div>
        </div>
      </div>

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-[#D32F2F] hover:bg-[#b71c1c] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 border-4 border-white dark:border-slate-800 relative group z-50"
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {!isOpen ? (
          <>
             <div className="w-full h-full rounded-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=200&auto=format&fit=crop" 
                  alt="Chef"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
             </div>
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
              </span>
          </>
        ) : (
          <svg className="w-8 h-8 transform transition-transform duration-300 rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;