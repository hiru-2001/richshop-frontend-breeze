
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Form */}
              <div className="order-2 md:order-1 flex justify-center">
                <LoginForm />
              </div>
              
              {/* Content */}
              <div className="order-1 md:order-2">
                <div className="max-w-lg">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Welcome Back
                  </h1>
                  <p className="text-lg text-gray-600 mb-6">
                    Log in to your RichMobile account to access your order history, track current orders, and manage your profile.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Exclusive Offers",
                        description: "Get access to member-only deals and promotions.",
                      },
                      {
                        title: "Fast Checkout",
                        description: "Save your details for a quicker shopping experience.",
                      },
                      {
                        title: "Order Tracking",
                        description: "Easily track your orders and view your purchase history.",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 mt-1 text-black">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                          <p className="mt-1 text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
