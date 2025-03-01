
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+1 (202) 555-0188", "+1 (202) 555-0199"],
      action: { text: "Call us", href: "tel:+12025550188" }
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["support@richmobile.com", "sales@richmobile.com"],
      action: { text: "Email us", href: "mailto:support@richmobile.com" }
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit us",
      details: ["123 Tech Street", "Silicon Valley, CA 94043"],
      action: { text: "Get directions", href: "https://maps.google.com" }
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 5pm"],
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600">
                Have a question or need assistance? We're here to help. Reach out to our team through any of the channels below.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-xl p-6 flex flex-col border border-gray-100 h-full"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 mb-5 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <div className="space-y-1 mb-4 flex-grow">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  {item.action && (
                    <a 
                      href={item.action.href} 
                      className="text-sm font-medium text-gray-900 hover:text-gray-700 inline-flex items-center group"
                    >
                      {item.action.text}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Map */}
              <div className="bg-gray-200 rounded-xl overflow-hidden h-[400px] shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621244!2d-122.08441732392032!3d37.42199997198263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1682355126386!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RichMobile Location"
                />
              </div>
              
              {/* Form */}
              <div>
                <div className="max-w-lg">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below, and our team will get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our products and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How long does shipping take?",
                  answer: "Standard shipping within the United States typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery."
                },
                {
                  question: "What is your return policy?",
                  answer: "We offer a 30-day return policy for most products. Items must be returned in their original condition and packaging. Please visit our Returns page for more details."
                },
                {
                  question: "Do you offer international shipping?",
                  answer: "Yes, we ship to select countries internationally. Shipping costs and delivery times vary by location. You can view available shipping options during checkout."
                },
                {
                  question: "How can I track my order?",
                  answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can also track your order by logging into your account and viewing your order history."
                },
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-600">
                Can't find the answer you're looking for?{' '}
                <a href="mailto:support@richmobile.com" className="text-gray-900 font-medium hover:underline">
                  Contact our support team
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
