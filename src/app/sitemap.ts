import type { MetadataRoute } from 'next';
import { getAllPosts, getAllTeamMembers } from '@/lib/mdx';
import { practiceAreas } from '@/data/practiceAreas';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://justicepartners.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/practice-areas`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/team`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/case-results`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.9 },
  ];

  const practiceAreaRoutes: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${base}/practice-areas#${area.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    blogRoutes = getAllPosts().map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.6,
    }));
  } catch {}

  let teamRoutes: MetadataRoute.Sitemap = [];
  try {
    teamRoutes = getAllTeamMembers().map((member) => ({
      url: `${base}/team/${member.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    }));
  } catch {}

  return [...staticRoutes, ...practiceAreaRoutes, ...blogRoutes, ...teamRoutes];
}
