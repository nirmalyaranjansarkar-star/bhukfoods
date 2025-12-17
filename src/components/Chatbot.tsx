import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PLANS, MARKET_DATA } from '../constants';

// System instruction to give the AI context about the business
const SYSTEM_INSTRUCTION = `
You are "Chef Riya", the friendly and knowledgeable head chef of Bhuk Foods. 
You speak in a warm, motherly, and helpful tone. You can speak English and Bengali (Bungal).

Context about Bhuk Foods:
- We are India's First Kitchen Substitution Service (not just a tiffin service).
- Locations: Agarpara, Sodepur, Belgharia.
- Philosophy: We replace grocery shopping, maids, and cooking. We NEVER reuse oil (healthiest option).
- Plans:
  1. Guest Meal: ₹75/meal (Trial).
  2. Student Saver: ₹2800/month (Lunch+Dinner+Bfast).
  3. Office Ready: ₹3500/month (Chicken/Fish alternate days).
  4. Senior Lite: ₹3000/month (Low oil/spice).
- Contact: +91 75959 23777.
- Refund Policy: "No Meal Day" form available for refunds if notified 24hrs in advance.

Your Goal:
Help users choose a plan, explain why we are better than maids (no holidays, reliable), or explain our hygiene (FSSAI certified).
Keep answers concise (under 100 words) unless asked for a recipe.
If asked about prices, use the data provided above.
`;

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
          systemInstruction: SYSTEM_INSTRUCTION,
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
        className={`bg-white dark:bg-slate-900 w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-orange-200 dark:border-slate-700 overflow-hidden mb-4 transition-all duration-300 origin-bottom-right pointer-events-auto flex flex-col ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none hidden'
        }`}
      >
        {/* Header */}
        <div className="bg-[#D32F2F] p-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white">
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
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
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
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-none px-4 py-3">
                <div className="flex gap-1">
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
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about plans, prices..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#D32F2F] transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#D32F2F] hover:bg-[#b71c1c] disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="text-[10px] text-center text-slate-400 mt-2">
            AI can make mistakes. Check important info.
          </div>
        </div>
      </div>

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-[#D32F2F] hover:bg-[#b71c1c] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 border-4 border-white dark:border-slate-800 relative group"
        aria-label="Open Chat"
      >
        {!isOpen ? (
          <>
             <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=200&auto=format&fit=crop" 
                alt="Chef"
                className="w-full h-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
              </span>
          </>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Chatbot;