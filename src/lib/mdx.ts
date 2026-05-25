import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, TeamMember } from '@/types';

const contentDir = path.join(process.cwd(), 'content');

// ─── Blog ────────────────────────────────────────────────────────────────────

function getBlogSlugs(): string[] {
  const dir = path.join(contentDir, 'blog');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(contentDir, 'blog', `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...(data as Omit<BlogPost, 'content'>), content };
}

export function getAllPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, '')))
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ─── Team ────────────────────────────────────────────────────────────────────

function getTeamSlugs(): string[] {
  const dir = path.join(contentDir, 'team');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
}

export function getTeamMemberBySlug(slug: string): TeamMember {
  const fullPath = path.join(contentDir, 'team', `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { ...(data as Omit<TeamMember, 'bio'>), bio: content };
}

export function getAllTeamMembers(): TeamMember[] {
  return getTeamSlugs()
    .map((file) => getTeamMemberBySlug(file.replace(/\.mdx$/, '')))
    .sort((a, b) => a.order - b.order);
}
