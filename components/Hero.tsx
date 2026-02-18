
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-blue-50">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-widest">
            <span className="flex h-2 w-2 rounded-full bg-brand-600 mr-2"></span>
            Agence de Transformation Numérique
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
            Accélérez votre <br />
            <span className="text-brand-600">Croissance Digitale</span>
          </h1>
          
          <div className="space-y-4 max-w-xl">
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Nous sommes Lumina Digital. Nous accompagnons les entreprises ambitieuses dans leur mue technologique.
            </p>
            <p className="text-lg text-slate-500 italic">
              "Notre mission : transformer vos idées en solutions numériques performantes qui boostent votre rentabilité."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#home" className="px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 text-center">
              Découvrir nos solutions
            </a>
            <a href="#home" className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:border-brand-600 hover:text-brand-600 transition-all text-center">
              Qui sommes-nous ?
            </a>
          </div>

          <div className="pt-6 flex items-center space-x-6 text-slate-400">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/id/${i+20}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
              ))}
            </div>
            <p className="text-sm font-medium italic">+250 clients nous font confiance</p>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-brand-600 rounded-3xl rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition-transform"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Digital Transformation" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-brand-600 font-bold text-2xl">98%</p>
                  <p className="text-xs text-slate-600 uppercase font-bold tracking-tighter">Satisfaction Client</p>
                </div>
                <div className="h-10 w-px bg-slate-200"></div>
                <div>
                  <p className="text-brand-600 font-bold text-2xl">+45%</p>
                  <p className="text-xs text-slate-600 uppercase font-bold tracking-tighter">ROI Moyen</p>
                </div>
                <div className="h-10 w-px bg-slate-200"></div>
                <div>
                  <p className="text-brand-600 font-bold text-2xl">24/7</p>
                  <p className="text-xs text-slate-600 uppercase font-bold tracking-tighter">Support Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
