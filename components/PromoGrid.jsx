import Link from 'next/link';

export default function PromoGrid() {
  const promos = [
    { 
      id: 1, 
      title: 'Espresso Machines',
      discount: '15% OFF', 
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600',
      link: '/products?category=espresso'
    },
    { 
      id: 2, 
      title: 'Coffee Beans',
      discount: '20% OFF', 
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=600',
      link: '/products?category=beans'
    },
    { 
      id: 3, 
      title: 'Accessories',
      discount: '10% OFF', 
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
      link: '/products?category=accessories'
    },
    { 
      id: 4, 
      title: 'Brewing Gear',
      discount: '25% OFF', 
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600',
      link: '/products?category=brewing'
    },
    { 
      id: 5, 
      title: 'Gift Sets',
      discount: '15% OFF', 
      image: 'https://images.unsplash.com/photo-1511537632536-b7a48965ce4a?q=80&w=600',
      link: '/products?category=gifts'
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {promos.map((promo) => (
            <Link key={promo.id} href={promo.link} className="relative group overflow-hidden rounded-lg h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url("${promo.image}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#d97706] text-xs font-bold px-2 py-1 rounded mb-2">
                  {promo.discount}
                </span>
                <h3 className="text-xl font-bold leading-tight mb-4">{promo.title}</h3>
                <span className="text-sm font-medium border-b border-white/50 pb-1 group-hover:border-[#d97706] group-hover:text-[#d97706] transition-all">
                  View Product
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
