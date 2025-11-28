import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BrandsPage() {
    const brands = [
        { id: 'gaggia', name: 'Gaggia', desc: 'Coffee Machines & Accessories', color: 'bg-red-600' },
        { id: 'jura', name: 'Jura', desc: 'Automatic Machines & Accessories', color: 'bg-blue-600' },
        { id: 'saeco', name: 'Saeco', desc: 'Manual Machines & Accessories', color: 'bg-black' },
        { id: 'magister', name: 'Magister', desc: 'Coffee Machines & Accessories', color: 'bg-blue-500' },
        { id: 'philips', name: 'Philips', desc: 'Premium Coffee Solutions', color: 'bg-cyan-500' },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home - Brands</p>
                    <h1 className="text-4xl font-bold uppercase tracking-wide">Our Brands</h1>
                </div>
            </div>

            <div className="py-20">
                <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We partner with the finest coffee brands from around the world to bring you the best equipment and beans.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {brands.map((brand) => (
                            <Link key={brand.id} href={`/brands/${brand.id}`} className="group">
                                <div className="bg-white border-2 border-gray-100 p-8 rounded-lg hover:border-[#d97706] hover:shadow-lg transition-all">
                                    <div className={`w-20 h-20 ${brand.color} rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform`}></div>
                                    <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                                    <p className="text-sm text-gray-500">{brand.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
