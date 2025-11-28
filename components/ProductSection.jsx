import Link from 'next/link';
import { Star, ShoppingBag } from 'lucide-react';

export default function ProductSection() {
  const products = [
    { id: 1, name: 'Gaggia Espresso Evolution', brand: 'Gaggia', rating: 4.5, reviews: 234, price: '₹26,489', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=400' },
    { id: 2, name: 'Jura E8 Chrome', brand: 'Jura', rating: 4.8, reviews: 156, price: '₹45,999', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=400' },
    { id: 3, name: 'Saeco Lirika Stainless Steel', brand: 'Saeco', rating: 4.6, reviews: 189, price: '₹32,999', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400' },
    { id: 4, name: 'Gaggia Classic Pro', brand: 'Gaggia', rating:4.7, reviews: 145, price: '₹38,499', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=400' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
             <h2 className="text-3xl font-bold uppercase text-gray-900 tracking-wide mb-2">Our Bestselling Coffee Products</h2>
             <p className="text-gray-500">Curated selection of premium coffee machines</p>
          </div>
          <Link href="/products" className="text-[#d97706] font-bold hover:underline uppercase tracking-wider text-sm mt-4 md:mt-0">View All Products</Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-transparent hover:border-gray-100">
                <div className="relative h-64 bg-gray-50 p-6 flex items-center justify-center">
                  <div 
                    className="w-full h-full bg-contain bg-no-repeat bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url("${product.image}")` }}
                  ></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white p-2 rounded-full shadow-md text-gray-900 hover:text-[#d97706]">
                        <ShoppingBag className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#d97706] font-bold uppercase mb-2 tracking-wide">{product.brand}</p>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight min-h-[3rem]">{product.name}</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">({product.reviews} Reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900">{product.price}</p>
                    <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#d97706] transition-colors uppercase tracking-wide">
                        Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
