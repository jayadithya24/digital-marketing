import { useState } from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'SEO', 'Social Media', 'E-commerce', 'Content Marketing'];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Tech Startup Growth Campaign',
      category: 'SEO',
      description: 'Comprehensive SEO strategy for a SaaS company targeting enterprise clients.',
      results: '300% increase in organic traffic, 150% boost in qualified leads',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Fashion Brand Social Expansion',
      category: 'Social Media',
      description: 'Multi-platform social media campaign for emerging fashion brand.',
      results: '500K+ new followers, 250% increase in engagement rate',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'E-commerce Revenue Optimization',
      category: 'E-commerce',
      description: 'Complete e-commerce marketing overhaul for online retailer.',
      results: '180% increase in revenue, 65% improvement in conversion rate',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'B2B Content Strategy',
      category: 'Content Marketing',
      description: 'Thought leadership content program for B2B software company.',
      results: 'Established industry authority, 200% increase in demo requests',
      image: 'https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'Local Business SEO Success',
      category: 'SEO',
      description: 'Local SEO campaign for multi-location service business.',
      results: 'Top 3 rankings for 50+ keywords, 400% increase in local leads',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'Luxury Brand Social Presence',
      category: 'Social Media',
      description: 'Premium social media strategy for luxury lifestyle brand.',
      results: '1M+ reach, 35% increase in brand awareness',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped our clients succeed.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-start gap-2 mb-4 p-3 bg-green-50 rounded-lg">
                    <TrendingUp className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-green-800 font-medium">{item.results}</p>
                  </div>
                  <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    View Case Study
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create remarkable results for your business together
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
