'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Clock, Users, ChefHat, ArrowRight } from 'lucide-react';

export default function RecipePage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Hot Coffee', 'Cold Coffee', 'Desserts', 'Cocktails'];

    const featuredRecipe = {
        title: 'The Perfect Espresso Martini',
        description: 'A sophisticated blend of espresso, vodka, and coffee liqueur. The perfect evening pick-me-up that balances rich coffee flavors with a smooth finish.',
        time: '15 mins',
        servings: '2 servings',
        difficulty: 'Medium',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200',
        tags: ['Cocktail', 'Evening', 'Popular']
    };

    const recipes = [
        {
            title: 'Classic Cappuccino',
            category: 'Hot Coffee',
            time: '10 mins',
            difficulty: 'Medium',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800',
            description: 'Rich espresso topped with equal parts steamed milk and milk foam.'
        },
        {
            title: 'Iced Vanilla Latte',
            category: 'Cold Coffee',
            time: '5 mins',
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=800',
            description: 'Smooth espresso combined with cold milk and vanilla syrup over ice.'
        },
        {
            title: 'Affogato',
            category: 'Desserts',
            time: '5 mins',
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=800',
            description: 'A scoop of vanilla gelato "drowned" with a shot of hot espresso.'
        },
        {
            title: 'Cold Brew Tonic',
            category: 'Cold Coffee',
            time: '12 hours',
            difficulty: 'Easy',
            image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800',
            description: 'Refreshing cold brew concentrate mixed with tonic water and lime.'
        },
        {
            title: 'Irish Coffee',
            category: 'Cocktails',
            time: '10 mins',
            difficulty: 'Medium',
            image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800',
            description: 'Hot coffee, Irish whiskey, and sugar, stirred and topped with cream.'
        },
        {
            title: 'Tiramisu',
            category: 'Desserts',
            time: '45 mins',
            difficulty: 'Hard',
            image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=800',
            description: 'Classic Italian dessert made with ladyfingers dipped in coffee.'
        }
    ];

    const filteredRecipes = activeCategory === 'All'
        ? recipes
        : recipes.filter(r => r.category === activeCategory);

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar />

            {/* Hero Header */}
            <div className="bg-black text-white h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 text-[200px] font-bold whitespace-nowrap select-none flex items-center justify-center pointer-events-none">
                    RECIPES
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">Brew Guide</h1>
                    <div className="flex items-center justify-center space-x-3 text-sm font-medium tracking-widest uppercase text-[#d97706]">
                        <span>Home</span>
                        <span className="w-1 h-1 bg-[#d97706] rounded-full"></span>
                        <span>Recipes</span>
                    </div>
                </div>
            </div>

            {/* Featured Recipe */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-black text-white rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 flex flex-col justify-center">
                                <div className="flex space-x-2 mb-6">
                                    {featuredRecipe.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-[#d97706] text-xs font-bold uppercase tracking-wider rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">{featuredRecipe.title}</h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {featuredRecipe.description}
                                </p>
                                <div className="flex space-x-8 mb-8 text-sm font-medium">
                                    <div className="flex items-center space-x-2">
                                        <Clock className="w-5 h-5 text-[#d97706]" />
                                        <span>{featuredRecipe.time}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Users className="w-5 h-5 text-[#d97706]" />
                                        <span>{featuredRecipe.servings}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <ChefHat className="w-5 h-5 text-[#d97706]" />
                                        <span>{featuredRecipe.difficulty}</span>
                                    </div>
                                </div>
                                <button className="self-start flex items-center space-x-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-[#d97706] hover:text-white transition-colors">
                                    <span>View Recipe</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="relative h-96 lg:h-auto">
                                <img
                                    src={featuredRecipe.image}
                                    alt={featuredRecipe.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recipe Grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeCategory === cat
                                        ? 'bg-black text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredRecipes.map((recipe, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {recipe.category}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#d97706] transition-colors">{recipe.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                                <div className="flex items-center space-x-4 text-xs font-bold uppercase text-gray-400">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{recipe.time}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <ChefHat className="w-3 h-3" />
                                        <span>{recipe.difficulty}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
