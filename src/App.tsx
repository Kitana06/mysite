import React from 'react';
import { Star, Heart, Quote, Award, ThumbsUp, Sparkles } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    text: "The most thorough cleaning I've ever had! Very gentle and professional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    text: "Makes you feel comfortable and explains everything clearly. Highly recommend!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    text: "Outstanding attention to detail and very caring approach.",
    rating: 5
  }
];

const achievements = [
  "10+ Years Experience",
  "Advanced Periodontal Care Certified",
  "Dental Hygiene Excellence Award 2023",
  "Patient Comfort Specialist"
];

const products = [
  {
    name: "Perio Protect®",
    description: "Revolutionary at-home gum treatment system that fights periodontal disease",
    category: "Gum Health"
  },
  {
    name: "COCOFLOSS",
    description: "Luxury dental floss with coconut oil - effective and enjoyable to use",
    category: "Daily Care"
  },
  {
    name: "Waterpik® Sonic-Fusion® 2.0",
    description: "Professional-grade water flosser and sonic toothbrush in one",
    category: "Professional Tools"
  },
  {
    name: "CariFree® CTx4 Gel 5000",
    description: "High-fluoride anti-cavity gel for optimal cavity protection",
    category: "Preventive Care"
  },
  {
    name: "OraWellness Bass Toothbrush",
    description: "Specialized brush designed for optimal gum stimulation and cleaning",
    category: "Daily Care"
  },
  {
    name: "Dental Herb Company® PerioPatch®",
    description: "Natural healing patch for gum tissue repair",
    category: "Gum Health"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-primary-200">
      {/* Hero Section */}
      <header className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Replace the Heart component with your logo image */}
          <img 
            src="/logo.jpg" 
            alt="Rosa Lya RDH Logo" 
            className="h-24 mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional Dental Hygiene Care
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Dedicated to providing exceptional dental care with a gentle touch
          </p>
        </div>
      </header>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Professional Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-10 h-10 text-accent-500 mx-auto mb-4" />
                <p className="text-gray-800 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-primary-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Patient Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <Quote className="w-8 h-8 text-accent-500 mb-4" />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <p className="font-medium text-gray-800">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <ThumbsUp className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gentle Care</h3>
              <p className="text-gray-600">
                Specialized in providing comfortable and anxiety-free dental care
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">
                Continuous education to provide the latest in dental hygiene care
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 text-accent-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Patient-Focused</h3>
              <p className="text-gray-600">
                Personalized care tailored to your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products Section */}
      <section className="py-16 px-4 bg-primary-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Recommended Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Sparkles className="w-8 h-8 text-accent-500 mb-4" />
                <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm rounded-full mb-4">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2024 Professional Dental Hygiene Care. All rights reserved.</p>
          <p className="text-gray-400">Contact: appointment@dentalhygiene.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;