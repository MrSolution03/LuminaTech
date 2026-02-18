
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-600 relative overflow-hidden">
      {/* Abstract circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Prêt à faire passer votre entreprise au niveau supérieur ?
          </h2>
          <p className="text-xl text-brand-100 font-medium">
            Contactez-nous dès aujourd'hui pour un audit gratuit de votre présence numérique. 
            Aucun engagement, juste de l'expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a href="#home" className="px-10 py-5 bg-white text-brand-600 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all active:scale-95 text-center">
              Démarrer mon projet
            </a>
            <a href="#home" className="px-10 py-5 bg-brand-700 text-white border border-brand-500 rounded-2xl font-bold text-xl hover:bg-brand-800 transition-all text-center">
              Prendre rendez-vous
            </a>
          </div>
          <p className="text-brand-200 text-sm">
            Réponse garantie en moins de 24 heures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
