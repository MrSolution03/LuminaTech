import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#home' },
    { label: 'About', href: '#home' },
    { label: 'Contact', href: '#home' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform duration-300">
            L
          </div>
          <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900">
            Lumina<span className="text-brand-600">Digital</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-slate-600 hover:text-brand-600 font-semibold transition-colors text-sm uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#home" 
            className="bg-brand-600 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 active:scale-95"
          >
            Let's Talk
          </a>
        </nav>

        <button 
          className="lg:hidden p-2 text-slate-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6 flex flex-col items-center text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-xl font-bold text-slate-800 hover:text-brand-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#home" 
                className="w-full bg-brand-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-brand-100"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main className="flex-grow">
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-blue-50 pt-20">
          {/* Decorative blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-100/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[100px] -z-10"></div>

          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-ping"></span>
                <span>Digital Transformation Agency</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                Accelerate Your <br />
                <span className="text-brand-600">Digital Growth</span>
              </h1>
              
              <div className="space-y-6 max-w-xl">
                <p className="text-2xl text-slate-600 leading-relaxed font-medium">
                  We are Lumina Digital. We empower ambitious businesses to thrive in the digital age, based in Winnipeg.
                </p>
                
                {/* Contact Info Block */}
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center space-x-3 text-slate-600 font-bold">
                    <Mail className="w-5 h-5 text-brand-600" />
                    <span>contact@luminadigital.ca</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 font-bold">
                    <Phone className="w-5 h-5 text-brand-600" />
                    <span>+1 (204) 951-6067</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-600 font-bold sm:col-span-2">
                    <MapPin className="w-5 h-5 text-brand-600" />
                    <span>Winnipeg, MB, Canada</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="px-10 py-5 bg-brand-600 text-white rounded-2xl font-black text-xl hover:bg-brand-700 transition-all shadow-2xl shadow-brand-200 text-center active:scale-95 flex items-center justify-center group">
                  Get Started
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center space-x-4">
                  <a href="#" className="p-4 bg-white rounded-2xl text-slate-400 hover:text-brand-600 hover:shadow-lg transition-all border border-slate-100">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-4 bg-white rounded-2xl text-slate-400 hover:text-brand-600 hover:shadow-lg transition-all border border-slate-100">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="pt-10 flex items-center space-x-8">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${i+20}/80/80`} className="w-14 h-14 rounded-full border-4 border-white shadow-lg" alt="Client" />
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest italic">+250 satisfied clients</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: 'spring' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-600 rounded-[3rem] rotate-6 scale-105 opacity-10"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]">
                <img 
                  src="https://picsum.photos/1200/1600?grayscale" 
                  alt="Digital Transformation" 
                  className="w-full h-auto object-cover hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-brand-600 font-black text-3xl">98%</p>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Satisfaction</p>
                    </div>
                    <div className="border-x border-slate-200">
                      <p className="text-brand-600 font-black text-3xl">+45%</p>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Avg ROI</p>
                    </div>
                    <div>
                      <p className="text-brand-600 font-black text-3xl">24/7</p>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-10 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-black text-lg">L</div>
            <span className="font-heading font-black text-xl text-slate-900 tracking-tighter">LuminaDigital</span>
          </div>
          <p className="text-slate-500 font-bold">
            © {new Date().getFullYear()} Lumina Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
            <a href="#" className="hover:text-brand-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-600 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;


