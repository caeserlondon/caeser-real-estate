'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/lib/homepage-data';
import { RollLink } from '@/components/ui/RollLink';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border border-gold rounded-full flex items-center justify-center text-gold font-serif text-xl group-hover:bg-gold group-hover:text-neutral-950 transition-colors">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg leading-none tracking-widest text-white">CAESER</span>
              <span className="text-[0.6rem] tracking-[0.3em] text-neutral-400 uppercase">Real Estate</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <RollLink key={link.name} href={link.href} className="text-xs font-bold tracking-widest uppercase text-neutral-300">
                {link.name}
              </RollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-white/10">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <RollLink key={link.name} href={link.href} className="text-sm font-bold tracking-widest uppercase text-neutral-300" onClick={() => setIsOpen(false)}>
                {link.name}
              </RollLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
