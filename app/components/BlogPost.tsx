import Link from 'next/link';
import { BlogPost } from '@/types/blog';

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white shadow rounded-lg overflow-hidden transition-shadow hover:shadow-md">
      <div className="p-6 bg-blue-50">
        <h2 className="text-2xl font-semibold mb-4">
          <Link href={`/blog/${post.slug}`} className="text-gray-700 hover:text-blue-800 transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-800">
          <span>{post.author}</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        </div>
        <div className="mt-4">
          <Link href={`/blog/${post.slug}`} className="text-gray-800 hover:text-blue-800 transition-colors">
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

