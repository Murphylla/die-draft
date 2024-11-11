import React from 'react';
import { ArrowRight, Heart, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
            alt="Fashion Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Dress it Easy
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your sustainable fashion community bringing style and consciousness together
          </p>
          <Link
            to="/events"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-purple-600 bg-white hover:bg-purple-50 transition-colors duration-200"
          >
            Discover Our Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dress it Easy is a community-driven association dedicated to promoting sustainable fashion
            through second-hand clothing events, educational workshops, and collaborative initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="h-8 w-8 text-purple-500" />,
              title: "Sustainable Fashion",
              description: "Promoting eco-friendly fashion choices and reducing textile waste"
            },
            {
              icon: <Users className="h-8 w-8 text-purple-500" />,
              title: "Community Building",
              description: "Creating a network of fashion enthusiasts and conscious consumers"
            },
            {
              icon: <Star className="h-8 w-8 text-purple-500" />,
              title: "Quality Events",
              description: "Organizing professional second-hand fashion events and workshops"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Event */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Spring Fashion Exchange 2024
              </h2>
              <p className="text-gray-600 mb-6">
                Join us for our biggest event of the season! Discover unique pieces,
                meet fellow fashion enthusiasts, and contribute to sustainable fashion.
              </p>
              <Link
                to="/register/spring2024"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5"
                alt="Fashion Event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;