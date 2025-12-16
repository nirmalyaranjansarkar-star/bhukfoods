import React from 'react';
import { SUBSCRIPTION_FORM_URL, FREE_RESOURCES_FORM_URL } from '../constants';

const Admin: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold">Bhuk Foods Owner Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Manage your business and website from here.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 p-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="text-xl">📊</span> Live Orders & Leads
            </h2>
          </div>
          <div className="p-6 grid md:grid-cols-2 gap-6">
            <div className="border border-orange-100 rounded-xl p-6 bg-[#FFF8E1] hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2 text-slate-900">Subscription Orders</h3>
              <a href={SUBSCRIPTION_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-[#D32F2F] text-white font-bold py-2 rounded-lg hover:bg-[#b71c1c] transition-colors">Open Order Sheet ↗</a>
            </div>
            
            <div className="border border-blue-100 rounded-xl p-6 bg-blue-50 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-2 text-slate-900">Lead Generation</h3>
              <a href={FREE_RESOURCES_FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors">Open Leads Sheet ↗</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;