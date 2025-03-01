
import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    category: "Smartphone",
    price: 999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    category: "Smartphone",
    price: 799,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name: "Google Pixel 6",
    category: "Smartphone",
    price: 699,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1635870880639-902e4829581e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    category: "Accessories",
    price: 129,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590658589894-79c0e51d9861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  }
];

const FeaturedProducts = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-xl">
              Explore our curated collection of premium mobile devices and accessories.
            </p>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700 group"
          >
            View all products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div 
                  className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {product.category}
                </span>
                <h3 className="mt-1 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <div className="mt-1 flex items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-900">
                    ${product.price}
                  </p>
                  <button
                    className="px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
