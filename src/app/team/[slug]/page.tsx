import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { getAllTeamMembers, getTeamMemberBySlug } from '@/lib/mdx';
import { MdxContent } from '@/components/blog/MdxContent';
import { Badge } from '@/components/ui/Badge';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllTeamMembers().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const member = getTeamMemberBySlug(params.slug);
    return {
      title: member.name,
      description: `${member.name}, ${member.title} at Justice & Partners LLP. Specialties: ${member.specialties.join(', ')}.`,
    };
  } catch {
    return { title: 'Attorney Not Found' };
  }
}

export default function TeamMemberPage({ params }: Props) {
  let member;
  try {
    member = getTeamMemberBySlug(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/team" className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light mb-8 transition-colors">
            <span aria-hidden>←</span> Back to Team
          </Link>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Photo */}
            <div className="relative w-48 h-48 rounded-xl overflow-hidden shrink-0 bg-navy-light">
              {member.photo ? (
                <Image src={member.photo} alt={`Photo of ${member.name}`} fill className="object-cover object-top" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-7xl font-serif text-gold">{member.name[0]}</span>
                </div>
              )}
            </div>
            {/* Info */}
            <div className="flex-1">
              <h1 className="text-4xl font-serif text-white mb-1">{member.name}</h1>
              <p className="text-gold font-semibold text-lg mb-4">{member.title}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {member.specialties.map((s) => (
                  <Badge key={s} variant="gold">{s}</Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <a href={`tel:${member.phone}`} className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                  <Phone size={14} /> {member.phone}
                </a>
                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                  <Mail size={14} /> {member.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio + credentials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2">
              <MdxContent source={member.bio} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Education */}
              <div>
                <h2 className="text-xs font-semibold text-gold tracking-widest uppercase mb-4">Education</h2>
                <ul className="space-y-3">
                  {member.education.map((e, i) => (
                    <li key={i} className="text-sm">
                      <div className="font-semibold text-navy">{e.degree}</div>
                      <div className="text-gray-600">{e.school}</div>
                      <div className="text-gray-400">{e.year}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bar Admissions */}
              <div>
                <h2 className="text-xs font-semibold text-gold tracking-widest uppercase mb-4">Bar Admissions</h2>
                <ul className="space-y-1.5">
                  {member.barAdmissions.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-navy rounded-xl p-6 text-center">
                <p className="text-white font-serif text-lg mb-4">Schedule a Consultation</p>
                <Link
                  href="/contact"
                  className="block w-full bg-gold text-navy font-semibold py-3 rounded hover:bg-gold-dark transition-colors"
                >
                  Contact {member.name.split(' ')[0]}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* JSON-LD Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: member.name,
            jobTitle: member.title,
            telephone: member.phone,
            email: member.email,
            worksFor: { '@type': 'LegalService', name: 'Justice & Partners LLP' },
          }),
        }}
      />
    </>
  );
}
