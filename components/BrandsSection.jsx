import Link from 'next/link';
import Image from 'next/image';

export default function BrandsSection() {
  const brands = [
    { 
      name: 'Gaggia', 
      desc: 'Coffee Machines & Accessories', 
      color: 'bg-red-600',
      textColor: 'text-red-600',
      image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=400' 
    },
    { 
      name: 'Jura', 
      desc: 'Automatic Machines & Accessories', 
      color: 'bg-red-500',
      textColor: 'text-red-500',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=400' 
    },
    { 
      name: 'Saeco', 
      desc: 'Manual Machines & Accessories', 
      color: 'bg-black',
      textColor: 'text-black',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400' 
    },
    { 
      name: 'Magister', 
      desc: 'Coffee Machines & Accessories', 
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=400' 
    },
    { 
      name: 'Philips', 
      desc: 'Premium Coffee Solutions', 
      color: 'bg-cyan-500',
      textColor: 'text-cyan-500',
      image: 'https://images.unsplash.com/photo-1507133750069-bef9d5d45764?q=80&w=400' 
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold uppercase mb-10 text-center tracking-widest">Shop by Brands</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand, idx) => (
            <Link key={idx} href={`/brands/${brand.name.toLowerCase()}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6 flex flex-col items-center text-center h-full">
                <div className={`w-16 h-16 rounded-full ${brand.color} mb-4 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-110 transition-transform`}>
                  {brand.name[0]}
                </div>
                <h3 className={`font-bold text-lg mb-2 ${brand.textColor}`}>{brand.name}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">{brand.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
