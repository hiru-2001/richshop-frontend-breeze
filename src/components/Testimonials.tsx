
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Designer",
    content: "The RichMobile experience has been exceptional. The quality of their products is unmatched, and their customer service is top-notch. I've been a loyal customer for years.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Software Engineer",
    content: "I was skeptical at first, but RichMobile exceeded my expectations. Their devices are not only aesthetically pleasing but also highly functional and durable.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Executive",
    content: "As someone who relies heavily on my phone for work, having a reliable device is crucial. RichMobile has provided me with exactly that - reliability, performance, and style.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our customers have to say about their experience with RichMobile.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-in-out`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 flex flex-col items-center text-center">
                    <Quote className="h-10 w-10 text-gray-300 mb-6" />
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex flex-col items-center">
                      <img
                        className="h-14 w-14 rounded-full object-cover border-2 border-gray-100"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-0 md:-left-12 flex items-center">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 md:-right-12 flex items-center">
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-gray-800' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
