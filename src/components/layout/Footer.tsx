import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold rounded flex items-center justify-center">
                <span className="font-serif font-bold text-navy text-lg">J</span>
              </div>
              <div>
                <div className="font-serif text-white text-lg leading-tight">Justice & Partners</div>
                <div className="text-gold-light text-xs tracking-widest uppercase">Law Firm</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Trusted legal counsel for over 25 years. We combine decades of courtroom experience with a commitment to personalised, results-driven service.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="LinkedIn" className="p-2 text-gray-400 hover:text-gold rounded transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter / X" className="p-2 text-gray-400 hover:text-gold rounded transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 text-gray-400 hover:text-gold rounded transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Practice Areas', href: '/practice-areas' },
                { label: 'Our Team', href: '/team' },
                { label: 'Case Results', href: '/case-results' },
                { label: 'Blog / Insights', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-gray-400 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-gray-400">123 Legal Avenue, Suite 800<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+15550001234" className="text-gray-400 hover:text-gold transition-colors">
                  +1 (555) 000-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@justicepartners.com" className="text-gray-400 hover:text-gold transition-colors">
                  info@justicepartners.com
                </a>
              </li>
            </ul>
            <div className="mt-6 text-xs text-gray-500">
              Mon – Fri: 8:30 am – 6:00 pm<br />
              24/7 Emergency line available
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-light flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {year} Justice & Partners LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
