import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ label, title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      {label && (
        <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className={cn('text-3xl md:text-4xl font-serif mb-4', light ? 'text-white' : 'text-navy')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-lg max-w-2xl leading-relaxed', centered && 'mx-auto', light ? 'text-gray-300' : 'text-gray-600')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
