import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CafeCollabPage() {
    const locations = [
        {
            id: 1,
            name: 'SOFITEL MUMBAI BKC',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
            images: [
                'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600',
                'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=600',
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600',
                'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600',
            ]
        },
        {
            id: 2,
            name: 'NOVOTEL AHMEDABAD',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.',
            images: [
                'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
                'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600',
                'https://images.unsplash.com/photo-1511537632536-b7a48965ce4a?q=80&w=600',
            ]
        },
        {
            id: 3,
            name: 'MARRIOTT EXECUTIVE, NAVI MUMBAI',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            images: [
                'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600',
                'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=600',
                'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=600',
                'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600',
            ]
        },
        {
            id: 4,
            name: 'COURTYARD BY MARRIOTT',
            description: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            images: [
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600',
                'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=600',
                'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600',
            ]
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / Cafe Collab</p>
                    <h1 className="text-5xl font-bold uppercase tracking-wide">The Coffee Co</h1>
                </div>
            </div>

            {/* Locations */}
            <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
                {locations.map((location, index) => (
                    <div key={location.id}>
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 uppercase">{location.name}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Images Grid */}
                            <div className={`grid grid-cols-2 gap-4 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                                {location.images.map((img, idx) => (
                                    <div key={idx} className={`relative ${idx === 0 ? 'col-span-2 h-64' : 'h-40'} rounded-lg overflow-hidden`}>
                                        <div
                                            className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-300"
                                            style={{ backgroundImage: `url("${img}")` }}
                                        ></div>
                                    </div>
                                ))}
                            </div>

                            {/* Description */}
                            <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                                <p className="text-gray-700 leading-relaxed text-sm">{location.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
