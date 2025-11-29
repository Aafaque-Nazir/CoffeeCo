'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Footer from '@/components/Footer';
import { Filter, ChevronDown, Search, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

function ProductsContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    const [activeCategory, setActiveCategory] = useState('all');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (categoryParam) {
            setActiveCategory(categoryParam);
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
        { id: 1, name: 'Gaggia Espresso Evolution', brand: 'Gaggia', category: 'espresso', price: '₹26,489', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=400', rating: 4.5, reviews: 234 },
        { id: 2, name: 'Jura E8 Chrome', brand: 'Jura', category: 'automatic', price: '₹45,999', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=400', rating: 4.8, reviews: 156 },
        { id: 3, name: 'Saeco Lirika Stainless Steel', brand: 'Saeco', category: 'automatic', price: '₹32,999', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400', rating: 4.6, reviews: 189 },
        { id: 4, name: 'Gaggia Classic Pro', brand: 'Gaggia', category: 'espresso', price: '₹38,499', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=400', rating: 4.7, reviews: 145 },
        { id: 5, name: 'Flair Pro 2', brand: 'Flair', category: 'manual', price: '₹28,500', image: 'https://images.unsplash.com/photo-1511537632536-b7a48965ce4a?q=80&w=400', rating: 4.9, reviews: 89 },
        { id: 6, name: 'Timemore C2 Grinder', brand: 'Timemore', category: 'accessories', price: '₹4,500', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=400', rating: 4.8, reviews: 342 },
        { id: 7, name: 'V60 Dripper', brand: 'Hario', category: 'accessories', price: '₹1,200', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400', rating: 4.7, reviews: 567 },
        { id: 8, name: 'Chemex 6 Cup', brand: 'Chemex', category: 'accessories', price: '₹4,800', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=400', rating: 4.9, reviews: 231 },
    ];

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Shop / {categories.find(c => c.id === activeCategory)?.name}</p>
                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">Our Collection</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Filters - Desktop */}
                    <div className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-32">
                            <h3 className="font-bold text-lg mb-6 uppercase tracking-wide">Categories</h3>
                            <div className="space-y-3">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`block w-full text-left text-sm transition-colors ${activeCategory === category.id
                                            ? 'text-[#d97706] font-bold'
                                            : 'text-gray-500 hover:text-black'
                                            }`}
                                    >
                                        {category.name}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-12">
                                <h3 className="font-bold text-lg mb-6 uppercase tracking-wide">Price Range</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <input type="number" placeholder="Min" className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm" />
                                        <span className="text-gray-400">-</span>
                                        <input type="number" placeholder="Max" className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Filter & Search Bar */}
                    <div className="lg:hidden mb-8">
                        <div className="flex gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-[#d97706]"
                                />
                            </div>
                            <button
                                onClick={() => setIsFilterOpen(true)}
                                className="bg-black text-white px-4 py-3 rounded-lg flex items-center space-x-2"
                            >
                                <Filter className="w-4 h-4" />
                                <span className="text-sm font-bold">Filters</span>
                            </button>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-gray-500">No products found matching your criteria.</p>
                                <button
                                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                                    className="text-[#d97706] font-bold mt-4 hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Sheet */}
            {isFilterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)}></div>
                    <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="font-bold text-lg uppercase tracking-wide">Filters</h3>
                            <button onClick={() => setIsFilterOpen(false)}>
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-sm mb-4 uppercase text-gray-500">Categories</h4>
                                <div className="space-y-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setActiveCategory(category.id);
                                                setIsFilterOpen(false);
                                            }}
                                            className={`block w-full text-left text-sm ${activeCategory === category.id
                                                ? 'text-[#d97706] font-bold'
                                                : 'text-gray-900'
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
