import type { Metadata } from 'next';
import { practiceAreas } from '@/data/practiceAreas';
import { PracticeAreaCard } from '@/components/practice-areas/PracticeAreaCard';
import { CtaSection } from '@/components/home/CtaSection';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: 'Justice & Partners LLP offers expert legal services in corporate law, civil litigation, real estate, family law, intellectual property, employment law, estate planning, and criminal defense.',
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">Legal Services</span>
          <h1 className="text-5xl font-serif text-white mb-6">Practice Areas</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            We offer comprehensive legal services across eight core practice areas. Whatever your legal challenge, our experienced attorneys are ready to help.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Need Legal Advice in Any of These Areas?"
        subtitle="Our attorneys are ready to evaluate your situation and guide you through the best course of action. The first consultation is free."
      />
    </>
  );
}
