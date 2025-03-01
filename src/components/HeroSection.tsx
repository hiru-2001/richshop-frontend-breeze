
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background circles for decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-b from-blue-50 to-blue-100 opacity-60"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-gradient-to-b from-gray-50 to-gray-100 opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero content */}
          <div className={`space-y-6 ${loaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full mb-3">
                New Collection 2023
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
                Experience Premium Mobile Devices
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Discover our exclusive collection of high-end smartphones and accessories designed for the modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/products"
                className="flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-medium transition-transform hover:scale-105 active:scale-100 shadow-sm"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className={`relative ${loaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative mx-auto max-w-md lg:max-w-xl">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="bg-gradient-to-br from-gray-800 to-black aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden p-8">
                  <img
                    src="https://images.unsplash.com/photo-1565536421961-1f165e0c981e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
                    alt="Premium smartphone"
                    className="w-[85%] mx-auto object-contain h-full max-h-[500px] drop-shadow-2xl"
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-lg glass">
                <div className="flex items-center space-x-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Premium Quality</p>
                    <p className="text-xs text-gray-500">High-end devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
