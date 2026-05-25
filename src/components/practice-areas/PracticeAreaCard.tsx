import { Building2, Scale, Home, Heart, Lightbulb, Briefcase, FileText, Shield, type LucideIcon } from 'lucide-react';
import type { PracticeArea } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Building2, Scale, Home, Heart, Lightbulb, Briefcase, FileText, Shield,
};

interface PracticeAreaCardProps {
  area: PracticeArea;
}

export function PracticeAreaCard({ area }: PracticeAreaCardProps) {
  const Icon = iconMap[area.icon] ?? Building2;

  return (
    <div id={area.slug} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center mb-6">
        <Icon size={26} className="text-navy" />
      </div>
      <h2 className="text-2xl font-serif text-navy mb-3">{area.title}</h2>
      <p className="text-gray-600 leading-relaxed mb-6">{area.longDescription}</p>
      <div>
        <h3 className="text-xs font-semibold text-gold tracking-widest uppercase mb-3">Key Services</h3>
        <ul className="space-y-1.5">
          {area.keyServices.map((service) => (
            <li key={service} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" aria-hidden />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
