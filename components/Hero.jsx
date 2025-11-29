import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black text-white flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop")' }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <h2 className="text-[#d97706] font-medium tracking-widest mb-4 uppercase text-xs">
            Coffee Machines & Brewing Gear
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-none mb-6 tracking-tight">
            THE COFFEE CO
          </h1>
          <p className="text-gray-300 text-base mb-8 max-w-lg leading-relaxed">
            Explore premium coffee machines, beans, and accessories crafted for the perfect brew. Discover the art of coffee making with our curated collection.
          </p>
          <Link 
            href="/products" 
            className="inline-block bg-[#d97706] hover:bg-[#b45309] text-white font-bold px-8 py-3 rounded text-sm uppercase tracking-wide transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
