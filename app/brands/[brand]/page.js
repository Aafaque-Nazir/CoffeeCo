'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect } from 'react';

export default function BrandPage({ params }) {
    const [selectedMachine, setSelectedMachine] = useState('all');
    const [selectedColors, setSelectedColors] = useState([]);
    // Unwrap params for Next.js 15+ compatibility or standard usage
    const brandId = params?.brand;

    const brands = [
        { id: 'gaggia', name: 'Gaggia', color: 'bg-red-600' },
        { id: 'jura', name: 'Jura', color: 'bg-blue-600' },
        { id: 'saeco', name: 'Saeco', color: 'bg-black' },
        { id: 'magister', name: 'Magister', color: 'bg-blue-500' },
        { id: 'philips', name: 'Philips', color: 'bg-cyan-500' },
    ];

    const machineTypes = ['Manual', 'Automatic'];
    const colors = [
        { name: 'Red', value: 'red', hex: '#ef4444' },
        { name: 'Black', value: 'black', hex: '#000000' },
        { name: 'Blue', value: 'blue', hex: '#3b82f6' },
        { name: 'Orange', value: 'orange', hex: '#f97316' },
        { name: 'Gray', value: 'gray', hex: '#6b7280' },
        { name: 'White', value: 'white', hex: '#ffffff' },
        { name: 'Green', value: 'green', hex: '#22c55e' },
        { name: 'Cyan', value: 'cyan', hex: '#06b6d4' },
    ];

    const products = [
        { id: 1, name: 'Gaggia Espresso Evolution', brand: 'Gaggia', type: 'Manual Machine', color: 'red', image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=800', price: '₹26,489' },
        { id: 2, name: 'Gaggia Espresso Delux', brand: 'Gaggia', type: 'Manual Machine', color: 'blue', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=800', price: '₹28,999' },
        { id: 3, name: 'Gaggia Espresso Style', brand: 'Gaggia', type: 'Manual Machine', color: 'black', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800', price: '₹24,999' },
        { id: 4, name: 'Gaggia Classic EVO', brand: 'Gaggia', type: 'Manual Machine', color: 'orange', image: 'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=800', price: '₹38,499' },
        { id: 5, name: 'Jura E8', brand: 'Jura', type: 'Automatic', color: 'white', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800', price: '₹89,999' },
        { id: 6, name: 'Saeco Lirika', brand: 'Saeco', type: 'Automatic', color: 'black', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800', price: '₹42,999' },
        { id: 7, name: 'Magister Stilo', brand: 'Magister', type: 'Manual Machine', color: 'gray', image: 'https://images.unsplash.com/photo-1511537632536-b7a48965ce4a?q=80&w=800', price: '₹55,000' },
        { id: 8, name: 'Philips Series 2200', brand: 'Philips', type: 'Automatic', color: 'black', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800', price: '₹32,999' },
    ];

    const currentBrand = brands.find(b => b.id === brandId) || brands[0];

    const filteredProducts = products.filter(product => {
        // Filter by brand first
        if (product.brand.toLowerCase() !== currentBrand.name.toLowerCase()) return false;

        const machineMatch = selectedMachine === 'all' ||
            (selectedMachine === 'Manual' && product.type.includes('Manual')) ||
            (selectedMachine === 'Automatic' && product.type.includes('Automatic'));

        const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);

        return machineMatch && colorMatch;
    });

    const toggleColor = (color) => {
        setSelectedColors(prev =>
            prev.includes(color)
                ? prev.filter(c => c !== color)
                : [...prev, color]
        );
    };

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar />

            {/* Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / {currentBrand.name}</p>
                    <h1 className="text-5xl font-bold uppercase tracking-wide">The Coffee Co</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        {/* Brand Logo */}
                        <div className="mb-8 flex items-center space-x-4">
                            <div className={`w-16 h-16 rounded-full ${currentBrand.color} flex-shrink-0`}></div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{currentBrand.name}</h2>
                                <p className="text-xs text-gray-500 uppercase">Coffee Machines<br />& Accessories</p>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="space-y-8">
                            {/* By Machine */}
                            <div>
                                <h3 className="font-bold mb-4 uppercase text-sm text-gray-900">By Machine:</h3>
                                <div className="space-y-2">
                                    <label className="flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="machine"
                                            checked={selectedMachine === 'all'}
                                            onChange={() => setSelectedMachine('all')}
                                            className="mr-2 accent-[#d97706]"
                                        />
                                        <span className="text-sm text-gray-700">All</span>
                                    </label>
                                    {machineTypes.map(type => (
                                        <label key={type} className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="machine"
                                                checked={selectedMachine === type}
                                                onChange={() => setSelectedMachine(type)}
                                                className="mr-2 accent-[#d97706]"
                                            />
                                            <span className="text-sm text-gray-700">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* By Price */}
                            <div>
                                <h3 className="font-bold mb-4 uppercase text-sm text-gray-900">By Price:</h3>
                                <div className="flex items-center space-x-2 text-sm">
                                    <input type="text" placeholder="₹30,000" className="border border-gray-300 rounded px-2 py-1 w-24 text-gray-900 placeholder-gray-400" />
                                    <span className="text-gray-500">-</span>
                                    <input type="text" placeholder="₹150,000" className="border border-gray-300 rounded px-2 py-1 w-24 text-gray-900 placeholder-gray-400" />
                                </div>
                            </div>

                            {/* By Color */}
                            <div>
                                <h3 className="font-bold mb-4 uppercase text-sm text-gray-900">By Color:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {colors.map(color => (
                                        <button
                                            key={color.value}
                                            onClick={() => toggleColor(color.value)}
                                            className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColors.includes(color.value)
                                                ? 'border-[#d97706] scale-110'
                                                : 'border-gray-300'
                                                }`}
                                            style={{
                                                backgroundColor: color.hex,
                                                border: color.value === 'white' ? '2px solid #e5e7eb' : undefined
                                            }}
                                            title={color.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="md:col-span-3">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No products found for this selection.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
