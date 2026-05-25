import { Button } from '@/components/ui/Button';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaSection({
  title = 'Ready to Discuss Your Case?',
  subtitle = 'Schedule a free, confidential consultation with one of our experienced attorneys. We are ready to fight for your rights.',
  ctaLabel = 'Book a Free Consultation',
  ctaHref = '/contact',
}: CtaSectionProps) {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">
          Take the First Step
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 max-w-2xl mx-auto">
          {title}
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={ctaHref} size="lg" variant="primary">
            {ctaLabel}
          </Button>
          <Button href="tel:+15550001234" size="lg" variant="ghost">
            Call +1 (555) 000-1234
          </Button>
        </div>
      </div>
    </section>
  );
}
