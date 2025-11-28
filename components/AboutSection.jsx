import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full">
             <div 
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop")' }}
            ></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide text-gray-900">Who We Are?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide text-gray-900">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-700 leading-relaxed">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center space-x-4">
             <div className="relative h-[300px] w-[200px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2070&auto=format&fit=crop")' }}
                ></div>
             </div>
             <div className="relative h-[300px] w-[200px] mt-12">
                <div 
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=2070&auto=format&fit=crop")' }}
                ></div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
