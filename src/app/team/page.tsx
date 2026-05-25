import type { Metadata } from 'next';
import { getAllTeamMembers } from '@/lib/mdx';
import { AttorneyCard } from '@/components/team/AttorneyCard';
import { CtaSection } from '@/components/home/CtaSection';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the experienced attorneys at Justice & Partners LLP — dedicated legal professionals with decades of combined expertise across every practice area.',
};

export default function TeamPage() {
  const members = getAllTeamMembers();

  return (
    <>
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">Our Attorneys</span>
          <h1 className="text-5xl font-serif text-white mb-6">Meet Our Legal Team</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Every client receives direct access to a dedicated, experienced attorney — not a junior associate or paralegal. Meet the people who will be in your corner.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <AttorneyCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Work Directly With an Experienced Attorney"
        subtitle="Every matter at Justice & Partners is handled personally by a qualified attorney. Book your free consultation today."
      />
    </>
  );
}
