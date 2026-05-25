import Link from 'next/link';
import { Building2, Scale, Home, Heart, Lightbulb, Briefcase, FileText, Shield, type LucideIcon } from 'lucide-react';
import { practiceAreas } from '@/data/practiceAreas';
import { SectionHeading } from '@/components/ui/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Building2, Scale, Home, Heart, Lightbulb, Briefcase, FileText, Shield,
};

export function PracticeAreasSummary() {
  const featured = practiceAreas.slice(0, 6);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Our Practice Areas"
          subtitle="We offer comprehensive legal services across a wide range of practice areas, delivering expert counsel tailored to your unique situation."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((area) => {
            const Icon = iconMap[area.icon] ?? Building2;
            return (
              <Link
                key={area.id}
                href={`/practice-areas#${area.slug}`}
                className="group p-8 border border-gray-200 rounded-lg hover:border-gold hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                  <Icon size={22} className="text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-lg font-serif text-navy mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Learn more <span aria-hidden>→</span>
                </span>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
          >
            View all practice areas <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
