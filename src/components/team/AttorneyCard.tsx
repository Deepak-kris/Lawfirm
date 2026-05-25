import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';
import type { TeamMember } from '@/types';

interface AttorneyCardProps {
  member: TeamMember;
}

export function AttorneyCard({ member }: AttorneyCardProps) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
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
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-navy-light">
            <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center">
              <span className="text-5xl font-serif text-gold">{member.name[0]}</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="font-serif text-xl text-navy group-hover:text-gold transition-colors">{member.name}</h2>
        <p className="text-gold text-sm font-semibold mt-1 mb-3">{member.title}</p>
        <div className="flex flex-wrap gap-2">
          {member.specialties.slice(0, 3).map((s) => (
            <Badge key={s} variant="outline">{s}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
