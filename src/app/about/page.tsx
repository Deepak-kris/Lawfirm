import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ValuesGrid } from '@/components/about/ValuesGrid';
import { CtaSection } from '@/components/home/CtaSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Justice & Partners LLP — over 25 years of trusted legal counsel, our founding story, and the values that guide our practice.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">About Our Firm</span>
            <h1 className="text-5xl font-serif text-white mb-6">Decades of Trust, One Case at a Time</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded in 1999, Justice &amp; Partners LLP has grown from a boutique litigation practice into one of the region&apos;s most respected full-service law firms — without ever losing our commitment to personal, attentive service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading label="Our Story" title="Built on Results, Driven by Values" />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Justice &amp; Partners LLP was founded by Senior Partner Margaret T. Harrington with a single goal: to provide individuals and businesses with the same calibre of legal representation that was once available only to the largest corporations.
                </p>
                <p>
                  Over 25 years, we have grown to a team of 18 attorneys spanning eight practice areas, recovered over $150 million for our clients, and earned recognition from peers and clients alike for our commitment to excellence and integrity.
                </p>
                <p>
                  Today, we serve clients across New York, New Jersey, and Connecticut — from Fortune 500 companies navigating complex regulatory landscapes to families facing their most challenging personal circumstances.
                </p>
              </div>
            </div>
            <div className="bg-navy rounded-2xl p-10 text-white">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: '25+', label: 'Years in Practice' },
                  { value: '18', label: 'Experienced Attorneys' },
                  { value: '2,400+', label: 'Cases Successfully Resolved' },
                  { value: '$150M+', label: 'Recovered for Clients' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-4xl font-serif text-gold font-bold mb-2">{s.value}</div>
                    <div className="text-gray-300 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            subtitle="These principles guide every decision we make — in the courtroom, in negotiations, and in our relationships with clients."
            centered
          />
          <ValuesGrid />
        </div>
      </section>

      <CtaSection
        title="Let Us Handle Your Legal Matter"
        subtitle="Our experienced team is ready to assess your situation and develop a strategy tailored to your goals. Book a confidential consultation today."
      />
    </>
  );
}
