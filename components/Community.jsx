export default function Community() {
  const images = [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold uppercase mb-2 text-gray-900">Brew-tiful Moments from Our Community</h2>
        <p className="text-gray-900 text-sm mb-12 font-medium">Follow us on Instagram @TheCoffeeCo</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative h-80 w-full rounded-lg overflow-hidden">
               <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${src}")` }}
                ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
