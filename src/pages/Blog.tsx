import React from 'react';
import { Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Sustainable Fashion",
    date: "March 1, 2024",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    excerpt: "Exploring how sustainable fashion is reshaping the industry and changing consumer habits.",
    category: "Sustainability"
  },
  {
    id: 2,
    title: "Vintage Shopping Guide",
    date: "February 25, 2024",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    excerpt: "Tips and tricks for finding the best vintage pieces and styling them in a modern way.",
    category: "Style Guide"
  },
  {
    id: 3,
    title: "Fashion Revolution Week 2024",
    date: "February 20, 2024",
    image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721",
    excerpt: "Join us in celebrating Fashion Revolution Week and learn how you can make a difference.",
    category: "Events"
  }
];

const Blog = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest trends in sustainable fashion, styling tips, and event updates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <time>{post.date}</time>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-purple-600 hover:text-purple-700 font-medium">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;