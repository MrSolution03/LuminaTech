import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import above to resolve 'Cannot find namespace React' for ReactNode
  icon: React.ReactNode;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface NavLink {
  label: string;
  href: string;
}