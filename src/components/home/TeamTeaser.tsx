import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { getAllTeamMembers } from '@/lib/mdx';

export async function TeamTeaser() {
  const members = await Promise.resolve(getAllTeamMembers());
  const featured = members.filter((m) => m.featured).slice(0, 3);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Attorneys"
          title="Meet Our Legal Team"
          subtitle="Our attorneys bring decades of combined experience across every practice area. Each client receives personal attention from a dedicated attorney."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-72 bg-navy-light overflow-hidden">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-serif text-gold">{member.name[0]}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-navy group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-gold text-sm font-semibold mt-1">{member.title}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {member.specialties.slice(0, 2).map((s) => (
                    <Badge key={s} variant="outline">{s}</Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
          >
            Meet the full team <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
