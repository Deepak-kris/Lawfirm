'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { navLinks } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <div className="absolute inset-0 bg-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-72 bg-navy flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-navy-light">
          <span className="font-serif text-xl text-white">Menu</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white rounded"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 px-6 py-8 space-y-1" aria-label="Mobile navigation links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block py-3 text-gray-300 hover:text-gold text-lg font-medium border-b border-navy-light/40 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full text-center bg-gold text-navy font-semibold px-6 py-3 rounded hover:bg-gold-dark transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
