import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'outline';
  className?: string;
}

const variants = {
  gold: 'bg-gold text-navy',
  navy: 'bg-navy text-white',
  outline: 'border border-gold text-gold',
};

export function Badge({ children, variant = 'outline', className }: BadgeProps) {
  return (
    <span className={cn('inline-block px-3 py-1 text-xs font-semibold rounded-full', variants[variant], className)}>
      {children}
    </span>
  );
}
