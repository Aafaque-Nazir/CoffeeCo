import Link from 'next/link';
import Image from 'next/image';

export default function Essentials() {
  const essentials = [
    { name: 'Coffee Powder', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400' },
    { name: 'Uravu Filter Coffee Powder', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400' },
    { name: 'Ray\'s Hot Chocolate Jar', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400' },
    { name: 'Coffee Beans', image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=400' },
    { name: 'Drip Coffee', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400' },
    { name: 'Coffee Grinder', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=400' },
    { name: 'Brewing Equipments', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400' },
    { name: 'Nespresso Compatible Capsules', image: 'https://images.unsplash.com/photo-1621961048732-b884196f2066?q=80&w=400' },
    { name: 'Espresso Machine', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=400' },
    { name: 'Automatic Coffee Machine', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=400' },
    { name: 'Coffee Machine For Cafe', image: 'https://images.unsplash.com/photo-1507133750069-bef9d5d45764?q=80&w=400' },
    { name: 'Semi-Automatic Coffee Machines', image: 'https://images.unsplash.com/photo-1511537632536-b7a48965ce4a?q=80&w=400' },
    { name: 'Nespresso Compatible Machines', image: 'https://images.unsplash.com/photo-1584225064785-c62a8b43d148?q=80&w=400' },
    { name: 'Filter Coffee Maker', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=400' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center uppercase mb-16 tracking-widest text-gray-900">
          Explore Our Coffee Essentials
        </h2>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-7 gap-x-8 gap-y-12 pb-8 lg:pb-0 scrollbar-hide">
          {essentials.map((item, idx) => (
            <Link key={idx} href="/products" className="group flex flex-col items-center text-center min-w-[140px] snap-center">
              <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-gray-50">
                 <div 
                    className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${item.image}")` }}
                 ></div>
              </div>
              <p className="text-sm font-semibold text-gray-800 group-hover:text-[#d97706] transition-colors leading-tight max-w-[140px]">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
