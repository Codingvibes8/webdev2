import { blogPosts } from '../../data/blogPosts';
import BlogPost from '../components/BlogPost';


export default function AllBlogPosts() {
    return (
        <div className="px-10 md:px-20 lg:px-32 py-8">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">All Blog Posts</h1>
            <div className="grid gap-8 md:grid-cols-2">
                {blogPosts.map((post) => (
                    <BlogPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
}

