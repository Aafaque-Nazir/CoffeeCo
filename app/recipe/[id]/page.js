'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Users, TrendingUp } from 'lucide-react';
import { Star } from 'lucide-react';
import { useState } from 'react';

export default function RecipeDetailPage() {
    const [activeTab, setActiveTab] = useState('instructions');

    const relatedRecipes = [
        { id: 1, name: 'Americano Coffee', time: 'Brew Time: 4 mins', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400' },
        { id: 2, name: 'French Press', time: 'Brew Time: 5 mins', difficulty: 'Medium', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400' },
        { id: 3, name: 'Chemex Method', time: 'Brew Time: 4 mins', difficulty: 'Medium', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400' },
        { id: 4, name: 'Aeropress Coffee', time: 'Brew Time: 3 mins', difficulty: 'Easy', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400' },
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header */}
            <div className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / Recipe / Perfect Pour Over Coffee</p>
                    <h1 className="text-4xl font-bold uppercase tracking-wide">The Coffee Co</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero Image */}
                <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600")' }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 flex items-end">
                        <div className="p-8 text-white">
                            <h2 className="text-4xl font-bold mb-4">PERFECT POUR OVER COFFEE</h2>
                            <p className="text-sm max-w-2xl">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-12">
                    <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-200">
                        <Clock className="w-6 h-6 mx-auto mb-2 text-[#d97706]" />
                        <p className="text-xs font-medium text-gray-700">Prep Time: 4 mins</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center border border-green-200">
                        <Clock className="w-6 h-6 mx-auto mb-2 text-green-600" />
                        <p className="text-xs font-medium text-gray-700">Brew Time: 3 mins</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                        <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                        <p className="text-xs font-medium text-gray-700">Servings: 1-2</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                        <TrendingUp className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                        <p className="text-xs font-medium text-gray-700">Difficulty: Medium</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Ingredients */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">Ingredients</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>30g freshly ground coffee (medium-fine)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>500ml filtered water (92-96°C)</span>
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold mb-4 mt-8 text-gray-900 uppercase">Equipment Needed</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <span className="mr-2">✓</span>
                                <span>Pour Over Dripper (V60/Chemex)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✓</span>
                                <span>Coffee Filter (matching size)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">✓</span>
                                <span>Gooseneck Kettle (OPTIONAL)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-900 uppercase">Instructions</h3>
                        <div className="space-y-4">
                            {[
                                { step: 1, text: 'Prepare Your Equipment: Set up your pour-over dripper on a cup and insert the filter. Rinse the filter with hot water to remove any paper taste and warm up the vessel. Discard the rinse water.' },
                                { step: 2, text: 'Measure and Grind: Add 30g of freshly ground coffee to the filter. The grind should be medium-fine, similar to table salt consistency.' },
                                { step: 3, text: 'The Bloom: Start your timer and pour about 60g of water over the coffee grounds in a spiral motion, making sure all grounds are saturated. Let it bloom for 30-45 seconds.' },
                                { step: 4, text: 'Continue Pouring: After the bloom, pour water in a slow, steady spiral motion, aiming to keep the water level consistent. Pour in stages, adding about 100g of water at a time.' },
                                { step: 5, text: 'Final Pour and Drawdown: Complete your final pour by 2:30 minutes. The entire brew time should be around 3-4 minutes. Wait for all the water to drip through before removing the dripper.' }
                            ].map((item) => (
                                <div key={item.step} className="flex items-start">
                                    <div className="w-8 h-8 bg-[#d97706] text-white rounded-full flex items-center justify-center flex-shrink-0 mr-3 font-bold text-sm">
                                        {item.step}
                                    </div>
                                    <p className="text-sm text-gray-700 pt-1">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 uppercase mb-2">Reviews and Ratings</h3>
                            <div className="flex items-center space-x-4">
                                <div className="text-3xl font-bold text-gray-900">4.8</div>
                                <div>
                                    <div className="flex text-yellow-400 mb-1">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <p className="text-xs text-gray-600">Based on 156 reviews</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <button className="px-4 py-2 border border-gray-300 rounded text-sm font-bold text-gray-900 hover:bg-gray-50">Sort All</button>
                            <button className="px-6 py-2 bg-[#d97706] text-white rounded text-sm font-bold hover:bg-[#b45309]">Add Review</button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="border-b border-gray-200 pb-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-bold text-gray-900">Jane Cooper</h4>
                                            <span className="text-xs text-gray-500">2 days ago</span>
                                        </div>
                                        <div className="flex text-yellow-400 mb-2">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                        </div>
                                        <p className="text-sm text-gray-700">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text since the 1500s. Add one teaspoon of...</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <button className="px-6 py-2 border border-gray-300 rounded text-sm font-bold text-gray-900 hover:bg-gray-50">Load More</button>
                    </div>
                </div>

                {/* Related Recipes */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-gray-900 uppercase">Related Recipes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedRecipes.map((recipe) => (
                            <div key={recipe.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-48">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url("${recipe.image}")` }}
                                    ></div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-gray-900 mb-2">{recipe.name}</h4>
                                    <p className="text-xs text-gray-600 mb-1">{recipe.time}</p>
                                    <p className="text-xs text-gray-600 mb-3">{recipe.difficulty}</p>
                                    <button className="w-full bg-[#d97706] text-white py-2 rounded text-sm font-bold hover:bg-[#b45309]">Read Full Recipe</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
