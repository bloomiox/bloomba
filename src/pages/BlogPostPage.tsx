import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-28 pb-20 bg-[#0d1219] min-h-screen text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/blog" className="text-blue-400 hover:underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-[#0d1219] min-h-screen text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Blog</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>

          <div className="flex items-center text-sm text-gray-400 mb-8">
            <Calendar size={16} className="mr-2" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <User size={16} className="mr-2" />
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover rounded-lg mb-8"
          />

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
