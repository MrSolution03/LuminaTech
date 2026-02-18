
import React from 'react';
import { Service, Advantage, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#home' },
  { label: 'À Propos', href: '#home' },
  { label: 'Services', href: '#home' },
  { label: 'Pourquoi Nous', href: '#home' },
  { label: 'Témoignages', href: '#home' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Stratégie Digitale',
    description: 'Nous élaborons des feuilles de route claires pour aligner votre technologie sur vos objectifs commerciaux.',
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 's2',
    title: 'Développement Web & App',
    description: 'Des solutions sur mesure, performantes et évolutives pour offrir une expérience utilisateur exceptionnelle.',
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 's3',
    title: 'Marketing & SEO',
    description: 'Maximisez votre visibilité et convertissez vos prospects grâce à des campagnes ciblées et performantes.',
    icon: (
      <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 'a1',
    title: 'Expertise Technique',
    description: 'Une équipe de développeurs et consultants seniors à votre service.',
  },
  {
    id: 'a2',
    title: 'Approche Centrée Client',
    description: 'Vos besoins sont au cœur de notre processus de création.',
  },
  {
    id: 'a3',
    title: 'Innovation Continue',
    description: 'Nous utilisons les technologies les plus modernes du marché.',
  },
  {
    id: 'a4',
    title: 'Résultats Mesurables',
    description: 'Nous nous engageons sur des indicateurs de performance clairs.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sophie Martin',
    role: 'CEO, TechVentures',
    content: 'Lumina Digital a transformé notre vision en une réalité numérique époustouflante. Notre chiffre d\'affaires en ligne a bondi de 40% en 6 mois.',
    avatar: 'https://picsum.photos/id/64/100/100',
  },
  {
    id: 't2',
    name: 'Julien Durand',
    role: 'Directeur Marketing, BricoPro',
    content: 'Une équipe réactive, créative et extrêmement compétente. Ils ont su comprendre nos enjeux métier complexes dès le premier jour.',
    avatar: 'https://picsum.photos/id/65/100/100',
  },
];
