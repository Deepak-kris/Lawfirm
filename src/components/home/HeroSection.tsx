import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#C9A84C,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#112240,transparent_50%)]" />
      </div>

      {/* Gold accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-6">
            Trusted Legal Counsel Since 1999
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Protecting Your
            <span className="text-gold block">Rights &amp; Interests</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
            Justice &amp; Partners LLP brings over 25 years of courtroom experience to every case.
            We deliver strategic, personalised representation across corporate, civil, and family law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" variant="primary">
              Book a Free Consultation
            </Button>
            <Button href="/practice-areas" size="lg" variant="ghost">
              Our Practice Areas
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: '25+', label: 'Years of Experience' },
              { value: '2,400+', label: 'Cases Won' },
              { value: '$150M+', label: 'Recovered for Clients' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-serif text-gold font-bold">{s.value}</div>
                <div className="text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
