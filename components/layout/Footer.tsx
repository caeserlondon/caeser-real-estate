'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { footerNavItems } from '@/lib/homepage-data';
import { RollLink } from '@/components/ui/RollLink';

export function Footer() {
  return (
    <footer className="bg-neutral-950 pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center text-gold font-serif text-2xl">
                C
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl leading-none tracking-widest text-white">CAESER</span>
                <span className="text-[0.6rem] tracking-[0.3em] text-neutral-400 uppercase">Real Estate</span>
              </div>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-md mb-8">
              Specializing in the sale and acquisition of the finest properties in Prime Central London. A legacy of trust, discretion, and exceptional results.
            </p>
            <div className="flex gap-4">
              <a href="mailto:caeseribrahim@gmail.com" aria-label="Email" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold hover:shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
              <a href="https://caeser-ibrahim.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold hover:shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" /></svg>
              </a>
              <a href="https://github.com/caeserlondon" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold hover:shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/caeser-ibrahim/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold hover:shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              {footerNavItems.map((item) => (
                <li key={item}>
                  <RollLink href={`/#${item.toLowerCase()}`} className="text-neutral-500 uppercase tracking-wider text-[11px]">
                    {item}
                  </RollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-neutral-500 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-gold" />
                <span>+44 078 6883 3113</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-500 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-gold" />
                <span>caeserlondon@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-500 text-sm">
                <MapPin className="w-4 h-4 mt-1 shrink-0 text-gold" />
                <span>123 Caeser Place,<br />London, W1J 1AC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Caeser Real Estate. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <RollLink href="#" className="text-neutral-600 text-[10px] uppercase tracking-widest">Privacy Policy</RollLink>
            <RollLink href="#" className="text-neutral-600 text-[10px] uppercase tracking-widest">Terms of Use</RollLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
