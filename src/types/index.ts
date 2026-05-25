export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  authorSlug: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  content: string;
}

export interface TeamMember {
  name: string;
  slug: string;
  title: string;
  specialties: string[];
  phone: string;
  email: string;
  photo: string;
  barAdmissions: string[];
  education: { degree: string; school: string; year: number }[];
  featured: boolean;
  order: number;
  bio: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  keyServices: string[];
}

export interface CaseResult {
  id: string;
  type: string;
  summary: string;
  outcome: string;
  year: number;
  highlight: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
