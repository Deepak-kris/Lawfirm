import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import type { BlogPost } from '@/types';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
        <h2 className="text-xl font-serif text-navy mb-3 group-hover:text-gold transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="text-gray-500">By </span>
            <Link
              href={`/team/${post.authorSlug}`}
              className="text-gold font-semibold hover:text-gold-dark transition-colors"
            >
              {post.author}
            </Link>
          </div>
          <time dateTime={post.date} className="text-gray-400">{date}</time>
        </div>
      </div>
      <div className="px-8 pb-6">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
          aria-label={`Read more: ${post.title}`}
        >
          Read article <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
