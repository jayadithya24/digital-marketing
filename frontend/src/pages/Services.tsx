import { Search, Share2, Mail, BarChart, PenTool, ShoppingCart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility and ranking on search engines to drive organic traffic.',
      features: [
        'Keyword research and strategy',
        'On-page and technical SEO',
        'Link building and outreach',
        'Local SEO optimization',
        'SEO audits and reporting',
      ],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build and engage your audience across all major social media platforms.',
      features: [
        'Social media strategy development',
        'Content creation and curation',
        'Community management',
        'Paid social advertising',
        'Analytics and reporting',
      ],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Create targeted email campaigns that convert subscribers into loyal customers.',
      features: [
        'Email campaign strategy',
        'List building and segmentation',
        'Template design and copywriting',
        'A/B testing and optimization',
        'Marketing automation',
      ],
    },
    {
      icon: BarChart,
      title: 'Pay-Per-Click Advertising',
      description: 'Drive immediate results with strategic paid advertising campaigns.',
      features: [
        'Google Ads management',
        'Display and video advertising',
        'Remarketing campaigns',
        'Budget optimization',
        'Conversion tracking and reporting',
      ],
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Engage your audience with compelling, high-quality content that drives action.',
      features: [
        'Content strategy and planning',
        'Blog and article writing',
        'Infographics and visual content',
        'Video content creation',
        'Content distribution',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Marketing',
      description: 'Maximize your online store\'s revenue with specialized e-commerce strategies.',
      features: [
        'Product feed optimization',
        'Shopping ads management',
        'Conversion rate optimization',
        'Customer retention strategies',
        'Analytics and insights',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Custom Solutions for Your Business
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every business is unique, and so are its marketing needs. We don't believe in one-size-fits-all solutions.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team works closely with you to understand your goals, challenges, and target audience, then creates a customized strategy that delivers real results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Tailored strategies for your industry</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Flexible packages to fit any budget</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Transparent reporting and communication</span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Custom solutions"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
