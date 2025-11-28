import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Features() {
  const brands = [
    { name: 'Gaggia', desc: 'Coffee Machines & Accessories', color: 'bg-red-600' },
    { name: 'Jura', desc: 'Automatic Machines & Accessories', color: 'bg-red-500' },
    { name: 'Saeco', desc: 'Manual Machines & Accessories', color: 'bg-black' },
    { name: 'Magister', desc: 'Coffee Machines & Accessories', color: 'bg-blue-500' },
  ];

  const categories = [
    'Espresso Machines',
    'Manual Coffee Machines',
    'Automatic Coffee Machines',
    'Semi - Automatic Coffee Machines',
    'Automatic Coffee Maker',
    'Coffee Machines for Cafe',
    'Filter Coffee Maker',
  ];

  const usage = [
    { title: 'Home', desc: 'Automatic, Semi Auto - Matic, Manual' },
    { title: 'Offices', desc: 'Automatic, Semi Auto - Matic, Manual' },
    { title: 'Specialty Cafe', desc: 'Fully Manual with Superior Control' },
    { title: 'Hotels & Restaurants', desc: 'Machines Built for Higher Output' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Image Card */}
          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop")' }}
            ></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs font-medium uppercase mb-1">New Launch</p>
              <h3 className="text-xl font-bold leading-tight">Gaggia Espresso Machine</h3>
              <ArrowRight className="w-5 h-5 mt-2" />
            </div>
          </div>

          {/* Shop by Brands */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-[#d97706] font-bold mb-6 text-sm uppercase">Shop by Brands</h3>
            <div className="space-y-6">
              {brands.map((brand, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full ${brand.color} flex-shrink-0`}></div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{brand.name}</p>
                    <p className="text-xs text-gray-600">{brand.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="#" className="mt-8 block w-full text-center bg-[#d97706] text-white py-2 rounded text-sm font-medium hover:bg-[#b45309] transition-colors">
              Explore All Our Brands
            </Link>
          </div>

          {/* Shop by Category */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-[#d97706] font-bold mb-6 text-sm uppercase">Shop by Category</h3>
            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-sm text-gray-900 hover:text-[#d97706] transition-colors font-medium">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop by Usage */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-[#d97706] font-bold mb-6 text-sm uppercase">Shop by Usage</h3>
            <div className="space-y-6">
              {usage.map((item, idx) => (
                <div key={idx}>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {['Uravu Filter Coffee Powder', 'Ray&apos;s Hot Chocolate', 'Coffee Blends'].map((item, idx) => (
            <div key={idx} className="bg-black text-white p-4 rounded flex items-center justify-between cursor-pointer hover:bg-gray-900 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded"></div>
                <span className="font-medium">{item}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
