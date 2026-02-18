import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                L
              </div>
              <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
                LuminaDigital
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Votre partenaire de confiance pour naviguer dans l'ère du numérique. Performance, innovation et succès.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors text-white">
                <span className="sr-only">LinkedIn</span>
                in
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors text-white">
                <span className="sr-only">Twitter</span>
                X
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors text-white">
                <span className="sr-only">Facebook</span>
                f
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">Liens Rapides</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-brand-400 transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-brand-400 transition-colors">À Propos</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Nos Services</a></li>
              <li><a href="#why-us" className="hover:text-brand-400 transition-colors">Pourquoi Nous</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">Légal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">CGV / CGU</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Rue de la Montagne, Montréal, QC H3G 1Z1, Canada</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (514) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@luminadigital.ca</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lumina Digital. Tous droits réservés. Créé avec passion pour le futur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;