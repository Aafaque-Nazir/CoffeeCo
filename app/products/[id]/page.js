'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Star, Share2, Heart, Scale, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailPage() {
    const [activeTab, setActiveTab] = useState('description');
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: 'Lorem Ipsum is simply dummy text?', a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { q: 'Lorem Ipsum is simply dummy text?', a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { q: 'Lorem Ipsum is simply dummy text?', a: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-black text-white py-8">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest">Home / Products / Gaggia Espresso Evolution</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="relative h-[500px] w-full bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=1200"
                                alt="Product"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div className="flex space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="relative h-24 w-24 bg-gray-100 rounded cursor-pointer hover:border-2 hover:border-[#d97706] transition-all">
                                    <Image
                                        src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=200"
                                        alt="Thumbnail"
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <span className="text-xs text-gray-500 uppercase">Gaggia</span>
                        <h1 className="text-3xl font-bold mb-2 uppercase mt-1">Gaggia Espresso Evolution</h1>
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="text-3xl font-bold text-[#d97706]">₹26,489</span>
                            <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <span className="text-sm text-gray-500">(12 Reviews)</span>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                        </p>

                        <div className="flex space-x-4 mb-8">
                            <button className="flex-1 bg-[#d97706] text-white font-bold py-3 rounded hover:bg-[#b45309] transition-colors uppercase">
                                Add to Cart
                            </button>
                            <button className="flex-1 border border-gray-300 text-gray-700 font-bold py-3 rounded hover:bg-gray-50 transition-colors uppercase">
                                Compare
                            </button>
                        </div>

                        <div className="flex space-x-6 text-sm text-gray-500 border-t border-gray-100 pt-6">
                            <button className="flex items-center space-x-2 hover:text-[#d97706]">
                                <Share2 className="w-4 h-4" /> <span>Share</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-[#d97706]">
                                <Heart className="w-4 h-4" /> <span>Add to Wishlist</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-[#d97706]">
                                <Scale className="w-4 h-4" /> <span>Add to Compare</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <div className="flex space-x-8">
                        {['description', 'highlights', 'specifications', 'reviews'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 text-sm font-bold uppercase border-b-2 ${activeTab === tab
                                        ? 'border-[#d97706] text-[#d97706]'
                                        : 'border-transparent text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="font-bold mb-4 uppercase">Description</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4 uppercase">Technical Specification</h3>
                        <div className="space-y-2 text-sm">
                            {[
                                ['Dimensions', 'Lorem Ipsum'],
                                ['Weight', 'Lorem Ipsum'],
                                ['Power Supply', 'Lorem Ipsum'],
                                ['Color', 'Red']
                            ].map(([label, value], i) => (
                                <div key={i} className="flex justify-between border-b border-gray-100 py-2">
                                    <span className="text-gray-500">{label}</span>
                                    <span className="font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* User Reviews */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold uppercase mb-6">User Reviews</h3>
                    <div className="space-y-6">
                        {[1, 2].map((i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <p className="font-bold">John Doe</p>
                                        <div className="flex text-yellow-400 mt-1">
                                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">2 days ago</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-16">
                    <h3 className="text-xl font-bold uppercase mb-6">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                                >
                                    <span className="font-medium">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                {openFaq === i && (
                                    <div className="px-4 pb-4 text-gray-600 text-sm">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Related Products */}
                <div>
                    <h3 className="text-xl font-bold uppercase mb-6">Related Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-4">
                                <div className="relative h-40 bg-gray-100 rounded mb-4"></div>
                                <p className="text-xs text-gray-500 uppercase mb-1">Brand</p>
                                <p className="font-bold mb-2">Product Name</p>
                                <p className="text-lg font-bold text-[#d97706]">₹29,999</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
