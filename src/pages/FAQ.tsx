import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Dress it Easy?",
    answer: "Dress it Easy is a community-driven association dedicated to promoting sustainable fashion through second-hand clothing events, educational workshops, and collaborative initiatives."
  },
  {
    question: "How can I participate in your events?",
    answer: "You can participate either as a visitor or a seller. Check our Events page for upcoming events and register through our online form. Each event has specific guidelines that will be shared upon registration."
  },
  {
    question: "What types of items can I sell at your events?",
    answer: "We accept clean, gently used clothing, accessories, and shoes. All items must be in good condition. Luxury and designer items must come with authentication certificates when applicable."
  },
  {
    question: "How do I become a member?",
    answer: "While formal membership isn't required to participate in our events, you can join our community by subscribing to our newsletter and following us on social media for updates and exclusive content."
  },
  {
    question: "Do you offer refunds for event registrations?",
    answer: "Yes, we offer full refunds for cancellations made at least 7 days before the event. For later cancellations, please contact us directly to discuss your situation."
  },
  {
    question: "Can I volunteer at your events?",
    answer: "Absolutely! We're always looking for volunteers who share our passion for sustainable fashion. Please contact us through our Contact page to learn more about volunteer opportunities."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about Dress it Easy and our events.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;