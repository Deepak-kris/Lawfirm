import type { CaseResult } from '@/types';
import { Badge } from '@/components/ui/Badge';

interface CaseResultCardProps {
  result: CaseResult;
}

export function CaseResultCard({ result }: CaseResultCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-4">
        <Badge variant={result.highlight ? 'gold' : 'outline'}>{result.type}</Badge>
        <span className="text-gray-400 text-sm shrink-0">{result.year}</span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-5">{result.summary}</p>
      <div className="pt-4 border-t border-gray-100">
        <span className="text-xs font-semibold text-gold tracking-widest uppercase">Outcome</span>
        <div className="text-navy font-serif text-lg mt-1">{result.outcome}</div>
      </div>
    </div>
  );
}
