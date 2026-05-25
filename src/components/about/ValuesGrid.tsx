import { Shield, Users, Star, Clock, Scale, Heart } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We hold ourselves to the highest ethical standards in every matter — from the courtroom to client communications.',
  },
  {
    icon: Users,
    title: 'Client-Centred',
    description: 'Every strategy is built around your specific goals. You work directly with a dedicated attorney, not a paralegal.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We pursue outstanding outcomes through meticulous preparation, deep expertise, and relentless advocacy.',
  },
  {
    icon: Clock,
    title: 'Responsiveness',
    description: 'We respond to client communications within 24 hours — because your legal matter is time-sensitive.',
  },
  {
    icon: Scale,
    title: 'Justice',
    description: 'We believe every client deserves vigorous, fearless representation, regardless of the size or complexity of their case.',
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'Legal matters affect real lives. We approach every case with empathy and a genuine commitment to your well-being.',
  },
];

export function ValuesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((v) => {
        const Icon = v.icon;
        return (
          <div key={v.title} className="flex gap-5">
            <div className="shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
              <Icon size={22} className="text-gold" />
            </div>
            <div>
              <h3 className="font-serif text-navy text-lg mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
