import type { Metadata } from 'next';
import { caseResults } from '@/data/caseResults';
import { CaseResultCard } from '@/components/case-results/CaseResultCard';
import { CtaSection } from '@/components/home/CtaSection';

export const metadata: Metadata = {
  title: 'Case Results',
  description: 'Notable case outcomes achieved by Justice & Partners LLP attorneys across personal injury, commercial litigation, intellectual property, family law, and criminal defense.',
};

export default function CaseResultsPage() {
  const highlighted = caseResults.filter((r) => r.highlight);
  const rest = caseResults.filter((r) => !r.highlight);

  return (
    <>
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">Track Record</span>
          <h1 className="text-5xl font-serif text-white mb-6">Case Results</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            The following are selected results our attorneys have achieved for clients. Past results do not guarantee future outcomes.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-6 py-4 mb-12 text-sm text-amber-800">
            <strong>Disclaimer:</strong> Each case is unique. The results shown below represent selected outcomes and are not a guarantee or prediction of results in any future matter. Client names and identifying details have been omitted to protect confidentiality.
          </div>

          {/* Highlighted results */}
          {highlighted.length > 0 && (
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-gold tracking-widest uppercase mb-6">Notable Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlighted.map((r) => (
                  <CaseResultCard key={r.id} result={r} />
                ))}
              </div>
            </div>
          )}

          {/* All results */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-6">Additional Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((r) => (
                <CaseResultCard key={r.id} result={r} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Let Our Results Speak for Themselves"
        subtitle="Our track record demonstrates our commitment to winning. Contact us today to discuss your legal matter."
      />
    </>
  );
}
