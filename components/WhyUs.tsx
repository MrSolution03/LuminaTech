
import React from 'react';
import { ADVANTAGES } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {ADVANTAGES.map((adv) => (
                <div key={adv.id} className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-600 font-bold shadow-sm mb-4">
                    ✓
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{adv.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">Pourquoi Nous ?</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Pourquoi choisir Lumina Digital ?
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed">
              Nous combinons la puissance créative d'un studio de design avec la rigueur technique d'un cabinet de conseil. 
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-xs font-bold">1</div>
                <p className="text-slate-700 font-medium">Une méthodologie Agile éprouvée pour des livraisons rapides.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-xs font-bold">2</div>
                <p className="text-slate-700 font-medium">Une veille technologique constante pour vous offrir le meilleur.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-xs font-bold">3</div>
                <p className="text-slate-700 font-medium">Un interlocuteur unique dédié à votre projet de A à Z.</p>
              </li>
            </ul>
            <div className="pt-4">
               <a href="#contact" className="inline-block px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors">
                 Vérifiez notre disponibilité
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
