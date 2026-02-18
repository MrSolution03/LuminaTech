import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">À propos de nous</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Une équipe passionnée par votre succès
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-xl text-slate-700 font-medium leading-relaxed">
              Fondée en 2018, Lumina Digital est née d'un constat simple : la technologie ne devrait jamais être un obstacle, mais un levier. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nous sommes un collectif de consultants, développeurs et créatifs basés au Canada, unis par la volonté d'offrir aux PME les mêmes outils que les grands groupes. Nous ne nous contentons pas de livrer du code ; nous bâtissons des partenariats durables.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-1 bg-brand-600"></div>
                <h4 className="font-bold text-lg">Vision</h4>
                <p className="text-sm text-slate-500">Devenir l'allié incontournable du numérique pour 1000 PME d'ici 2030.</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-1 bg-brand-600"></div>
                <h4 className="font-bold text-lg">Valeurs</h4>
                <p className="text-sm text-slate-500">Transparence, innovation pragmative et excellence opérationnelle.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-12 rounded-3xl border border-slate-100 relative">
             <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-600/10 rounded-full blur-xl"></div>
             <blockquote className="relative">
                <svg className="w-10 h-10 text-brand-200 mb-6" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v8H6v-8h4zm12 8h-4v-8h4v8zm-4-12L10 20v4h12v-4L18 4z" />
                </svg>
                <p className="text-2xl font-heading font-bold italic text-slate-800 leading-tight">
                  "Lumina n'est pas qu'une agence. C'est l'extension digitale de votre propre équipe."
                </p>
                <footer className="mt-6 flex items-center space-x-4">
                  <img src="https://picsum.photos/id/101/50/50" className="w-12 h-12 rounded-full" alt="CEO" />
                  <div>
                    <p className="font-bold text-slate-900">Marc Antoine</p>
                    <p className="text-sm text-slate-500 uppercase tracking-tighter">Fondateur & CEO</p>
                  </div>
                </footer>
             </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;