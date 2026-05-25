import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { MdxContent } from '@/components/blog/MdxContent';
import { Badge } from '@/components/ui/Badge';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return { title: 'Article Not Found' };
  }
}

export default function BlogPostPage({ params }: Props) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    notFound();
  }

  if (!post.published) notFound();

  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gold text-sm font-semibold hover:text-gold-light mb-8 transition-colors">
            <span aria-hidden>←</span> Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="gold">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <span>
              By{' '}
              <Link href={`/team/${post.authorSlug}`} className="text-gold hover:text-gold-light font-semibold transition-colors">
                {post.author}
              </Link>
            </span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{date}</time>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <MdxContent source={post.content} />
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link href="/blog" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors">
              <span aria-hidden>←</span> Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-navy mb-4">Have a Legal Question?</h2>
          <p className="text-gray-600 mb-8">Our attorneys are available for confidential consultations. Contact us today to discuss your situation.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-gold text-navy font-semibold px-8 py-4 rounded hover:bg-gold-dark transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
