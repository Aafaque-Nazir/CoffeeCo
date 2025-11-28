'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ProductsContent() {
    const [activeCategory, setActiveCategory] = useState('all');
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    useEffect(() => {
        if (categoryParam) {
            setActiveCategory(categoryParam);
        } else {
            setActiveCategory('all');
        }
    }, [categoryParam]);

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'machines', name: 'Coffee Machines' },
        { id: 'espresso', name: 'Espresso Machines' },
        { id: 'automatic', name: 'Automatic Machines' },
        { id: 'manual', name: 'Manual Machines' },
        { id: 'accessories', name: 'Accessories' },
    ];

    const products = [
        // Machines
        { id: 1, name: 'Gaggia Espresso Evolution', brand: 'Gaggia', type: 'Espresso Machines', category: 'espresso', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=800', price: '₹26,489' },
        { id: 2, name: 'Jura E8 Piano White', brand: 'Jura', type: 'Automatic Machines', category: 'automatic', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=800', price: '₹45,999' },
        { id: 3, name: 'Saeco Lirika Black', brand: 'Saeco', type: 'Manual Machines', category: 'manual', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800', price: '₹32,999' },
        { id: 4, name: 'Gaggia Classic Evo', brand: 'Gaggia', type: 'Espresso Machines', category: 'espresso', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=800', price: '₹38,499' },
        { id: 5, name: 'Jura S8 Chrome', brand: 'Jura', type: 'Automatic Machines', category: 'automatic', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800', price: '₹89,999' },
        { id: 6, name: 'Gaggia Anima Prestige', brand: 'Gaggia', type: 'Espresso Machines', category: 'espresso', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800', price: '₹54,999' },
        { id: 7, name: 'Saeco Royal Black', brand: 'Saeco', type: 'Manual Machines', category: 'manual', image: 'https://images.unsplash.com/photo-1511537632536-b7a48965ce4a?q=80&w=800', price: '₹42,999' },
        { id: 8, name: 'Gaggia Magenta Milk', brand: 'Gaggia', type: 'Espresso Machines', category: 'espresso', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800', price: '₹62,489' },

        // Accessories
        { id: 9, name: 'Premium Coffee Tamper', brand: 'Barista', type: 'Accessories', category: 'accessories', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800', price: '₹2,499' },
        { id: 10, name: 'Milk Frothing Pitcher', brand: 'Barista', type: 'Accessories', category: 'accessories', image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800', price: '₹1,299' },
        { id: 11, name: 'Ceramic Coffee Cups (Set of 2)', brand: 'CoffeeCo', type: 'Accessories', category: 'accessories', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800', price: '₹1,899' },
        { id: 12, name: 'Coffee Grinder Brush', brand: 'Barista', type: 'Accessories', category: 'accessories', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800', price: '₹499' },
    ];

    const filteredProducts = products.filter(p => {
        if (activeCategory === 'all') return true;
        if (activeCategory === 'machines') {
            return ['espresso', 'automatic', 'manual'].includes(p.category);
        }
        return p.category === activeCategory;
    });

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / Products</p>
                    <h1 className="text-5xl font-bold uppercase tracking-wide">
                        {activeCategory === 'all' ? 'All Products' :
                            categories.find(c => c.id === activeCategory)?.name || 'Products'}
                    </h1>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="bg-white border-b border-gray-200 sticky top-[64px] z-40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex space-x-8 overflow-x-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveCategory(cat.id);
                                    window.history.pushState({}, '', `/products?category=${cat.id}`);
                                }}
                                className={`py-4 px-2 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${activeCategory === cat.id
                                    ? 'border-[#d97706] text-[#d97706]'
                                    : 'border-transparent text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filters & Sort Bar */}
            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
                    <div className="text-gray-600">
                        Showing {filteredProducts.length} products
                    </div>
                    <div className="flex space-x-4">
                        <select className="border border-gray-300 rounded px-3 py-1 text-gray-700 text-sm focus:outline-none focus:border-[#d97706]">
                            <option>Sort By: Default</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Name: A to Z</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                        <button
                            onClick={() => setActiveCategory('all')}
                            className="mt-4 text-[#d97706] font-bold hover:underline"
                        >
                            View All Products
                        </button>
                    </div>
                )}

                {filteredProducts.length > 8 && (
                    <div className="text-center">
                        <button className="bg-[#d97706] text-white px-8 py-3 rounded text-sm font-bold hover:bg-[#b45309] transition-colors uppercase">
                            Load More Products
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
