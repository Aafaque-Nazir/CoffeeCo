export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1511537632536-b7a48965ce4a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507133750069-bef9d5d45764?q=80&w=2068&auto=format&fit=crop"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative h-64 w-full overflow-hidden rounded-lg group">
               <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${src}")` }}
                ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
