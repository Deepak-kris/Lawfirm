import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Justice & Partners LLP to schedule a free consultation. Reach us by phone, email, or through our online form.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</span>
          <h1 className="text-5xl font-serif text-white mb-6">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
            Ready to discuss your legal matter? Reach out for a free, confidential consultation. We respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info */}
            <aside className="space-y-8">
              <div>
                <h2 className="text-xs font-semibold text-gold tracking-widest uppercase mb-6">Our Office</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm mb-0.5">Address</div>
                      <address className="not-italic text-gray-600 text-sm leading-relaxed">
                        123 Legal Avenue, Suite 800<br />
                        New York, NY 10001
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm mb-0.5">Phone</div>
                      <a href="tel:+15550001234" className="text-gray-600 text-sm hover:text-gold transition-colors">
                        +1 (555) 000-1234
                      </a>
                      <div className="text-gray-400 text-xs mt-1">24/7 emergency line available</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm mb-0.5">Email</div>
                      <a href="mailto:info@justicepartners.com" className="text-gray-600 text-sm hover:text-gold transition-colors">
                        info@justicepartners.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm mb-0.5">Office Hours</div>
                      <div className="text-gray-600 text-sm leading-relaxed">
                        Monday – Friday: 8:30 am – 6:00 pm<br />
                        Saturday: By appointment
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map embed placeholder */}
              <div className="rounded-xl overflow-hidden border border-gray-200 h-48 bg-navy-light flex items-center justify-center">
                <div className="text-center text-gray-400 text-sm px-4">
                  <MapPin size={28} className="mx-auto mb-2 text-gold/40" />
                  123 Legal Avenue, Suite 800<br />New York, NY 10001
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-serif text-navy mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Fields marked with <span className="text-red-500">*</span> are required.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
