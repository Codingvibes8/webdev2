import BlogPost from '../components/BlogPost';
import Layout from '@/components/Layout';
import { BlogPost as BlogPostType } from '@/types/blog';

async function getPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    return res.json();
}

export default async function AllBlogPosts() {
    const posts = await getPosts();

    return (
        <Layout>
            <h1 className="text-4xl font-bold mb-8 text-gray-800">All Blog Posts</h1>
            <div className="grid gap-8 md:grid-cols-2">
                {posts.map((post: BlogPostType) => (
                    <BlogPost key={post.id} post={post} />
                ))}
            </div>
        </Layout>
    );
}
