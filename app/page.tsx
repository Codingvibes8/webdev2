import Link from 'next/link';
import { blogPosts } from '../data/blogPosts';
import BlogPost from './components/BlogPost';


export default function Home() {
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="px-10 md:px-20 lg:px-32 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Latest Blog Posts</h1>
        <Link href="/blog" className="text-slate-700 text-2xl hover:text-blue-800 transition-colors bg-blue-300 rounded-md px-4 py-2">
          View All Posts
        </Link>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {recentPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

