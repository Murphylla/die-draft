import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 'spring2024',
    title: 'Spring Fashion Exchange 2024',
    date: 'March 15, 2024',
    location: 'Le Marais, Paris',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5',
    description: 'Our flagship spring event featuring curated second-hand fashion.',
    type: 'seller'
  },
  {
    id: 'summer-workshop',
    title: 'Sustainable Style Workshop',
    date: 'June 5, 2024',
    location: 'Montmartre, Paris',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    description: 'Learn about sustainable fashion and styling tips from experts.',
    type: 'visitor'
  },
  {
    id: 'fall2024',
    title: 'Fall Vintage Market',
    date: 'September 20, 2024',
    location: 'Canal Saint-Martin, Paris',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
    description: 'A curated selection of vintage and second-hand fashion items.',
    type: 'seller'
  }
];

const Events = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community events and be part of the sustainable fashion movement.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                  {event.type === 'seller' ? 'Seller Event' : 'Workshop'}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Link
                  to={`/register/${event.id}`}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  Register Now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;