
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-brand-600 font-bold uppercase tracking-widest text-sm">Témoignages</h2>
          <h3 className="text-4xl font-extrabold text-slate-900">Ils nous ont fait confiance</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 relative">
              <div className="absolute top-12 right-12 opacity-5 text-brand-600">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 16.6569 11.6739 18 10.017 18H7.01704C6.46475 18 6.01704 18.4477 6.01704 19V21M14.017 21H17.017C18.6739 21 20.017 19.6569 20.017 18V21H14.017Z" />
                </svg>
              </div>
              <p className="text-xl text-slate-700 italic leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full border-2 border-brand-100" />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-brand-600 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
          <p className="font-black text-2xl tracking-tighter">TECHCORP</p>
          <p className="font-black text-2xl tracking-tighter italic">FINANCE_PLUS</p>
          <p className="font-black text-2xl tracking-tighter">GLOBAL_NET</p>
          <p className="font-black text-2xl tracking-tighter italic">SMART_BUILD</p>
          <p className="font-black text-2xl tracking-tighter">LUXURY_APP</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
