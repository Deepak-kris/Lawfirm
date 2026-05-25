import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { PostCard } from '@/components/blog/PostCard';

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description: 'Legal insights, news, and practical guidance from the attorneys at Justice & Partners LLP.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4">Legal Insights</span>
          <h1 className="text-5xl font-serif text-white mb-6">Blog &amp; Insights</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Practical legal guidance and timely commentary from our attorneys — written for clients, not lawyers.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-24">No articles published yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
