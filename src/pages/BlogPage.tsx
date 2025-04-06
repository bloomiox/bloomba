import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogPage = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Digital Transformation Trends 2024",
      excerpt: "Key trends and innovations shaping digital transformation strategies for businesses in 2024 and beyond.",
      date: "March 15, 2024",
      author: "Alex Morgan",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Technology"
    },
    {
      id: 2,
      title: "Building Resilient Software Solutions",
      excerpt: "Learn about best practices for developing robust and scalable software solutions that stand the test of time.",
      date: "March 12, 2024",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Development"
    },
    {
      id: 3,
      title: "The Impact of AI on Business Operations",
      excerpt: "Discover how artificial intelligence is revolutionizing business operations and decision-making processes.",
      date: "March 8, 2024",
      author: "Michael Bennett",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Innovation"
    },
    {
      id: 4,
      title: "Cloud Migration Best Practices",
      excerpt: "Essential strategies for successful cloud migration and optimization.",
      date: "March 7, 2024",
      author: "David Wilson",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Technology"
    },
    {
      id: 5,
      title: "Cybersecurity in the Digital Age",
      excerpt: "Protecting your business in an increasingly connected world.",
      date: "March 6, 2024",
      author: "Emma Davis",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Security"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing",
      excerpt: "How edge computing is revolutionizing data processing and analysis.",
      date: "March 5, 2024",
      author: "James Lee",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Technology"
    },
    {
      id: 7,
      title: "5G and Business Innovation",
      excerpt: "Leveraging 5G technology for business transformation and growth.",
      date: "March 4, 2024",
      author: "Sophie Chen",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Innovation"
    },
    {
      id: 8,
      title: "DevOps Evolution",
      excerpt: "Modern DevOps practices for accelerated software delivery.",
      date: "March 3, 2024",
      author: "Ryan Thompson",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Development"
    },
    {
      id: 9,
      title: "Data Analytics Strategies",
      excerpt: "Turning data into actionable business insights.",
      date: "March 2, 2024",
      author: "Lisa Wang",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Analytics"
    },
    {
      id: 10,
      title: "UX Design Trends",
      excerpt: "Creating exceptional user experiences in modern applications.",
      date: "March 1, 2024",
      author: "Mark Anderson",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Design"
    },
    {
      id: 11,
      title: "Blockchain in Enterprise",
      excerpt: "Implementing blockchain solutions for business processes.",
      date: "February 29, 2024",
      author: "Chris Martinez",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Technology"
    },
    {
      id: 12,
      title: "Remote Work Technologies",
      excerpt: "Tools and strategies for effective remote team collaboration.",
      date: "February 28, 2024",
      author: "Rachel Kim",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Workplace"
    },
    {
      id: 13,
      title: "IoT Solutions",
      excerpt: "Implementing IoT for smart business operations.",
      date: "February 27, 2024",
      author: "Tom Wilson",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Innovation"
    },
    {
      id: 14,
      title: "API-First Development",
      excerpt: "Building scalable systems with an API-first approach.",
      date: "February 26, 2024",
      author: "Nina Patel",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Development"
    },
    {
      id: 15,
      title: "Low-Code Platforms",
      excerpt: "Accelerating development with low-code solutions.",
      date: "February 25, 2024",
      author: "Mike Johnson",
      image: "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Development"
    },
    {
      id: 16,
      title: "AI in Customer Service",
      excerpt: "Enhancing customer experience with AI-powered solutions.",
      date: "February 24, 2024",
      author: "Sarah Lee",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "AI"
    },
    {
      id: 17,
      title: "Green Technology",
      excerpt: "Sustainable tech solutions for modern businesses.",
      date: "February 23, 2024",
      author: "Paul Green",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Sustainability"
    },
    {
      id: 18,
      title: "Digital Privacy",
      excerpt: "Protecting user data in the digital ecosystem.",
      date: "February 22, 2024",
      author: "Helen Brown",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      category: "Security"
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0d1219] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest News & Insights</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and news from the world of technology and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-[#121826] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-900/10 hover:border-blue-900/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors duration-300">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;