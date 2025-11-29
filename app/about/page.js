'use client';

import Footer from '@/components/Footer';
import LogoRow from '@/components/LogoRow';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Header */}
            <div className="bg-black text-white h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 text-[200px] font-bold whitespace-nowrap select-none flex items-center justify-center pointer-events-none">
                    ABOUT
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">About Us</h1>
                    <div className="flex items-center justify-center space-x-3 text-sm font-medium tracking-widest uppercase text-[#d97706]">
                        <span>Home</span>
                        <span className="w-1 h-1 bg-[#d97706] rounded-full"></span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>

            {/* Who We Are */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image Grid */}
                        <div className="relative">
                            <div className="flex gap-4">
                                <div className="w-1/2 pt-12">
                                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800"
                                            alt="Coffee Brewing"
                                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=800"
                                            alt="Espresso Machine"
                                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full blur-3xl opacity-50"></div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">Who We Are?</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p>
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                </p>
                                <p>
                                    More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do - Stats */}
            <section className="bg-black text-white py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">What We Do?</h2>
                        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d97706]/50 transition-colors group">
                            <h3 className="text-7xl font-bold mb-4 group-hover:text-[#d97706] transition-colors">250+</h3>
                            <p className="text-xl font-medium mb-2">Premium Products</p>
                            <p className="text-gray-500 text-sm">Curated for excellence</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d97706]/50 transition-colors group">
                            <h3 className="text-7xl font-bold mb-4 group-hover:text-[#d97706] transition-colors">100+</h3>
                            <p className="text-xl font-medium mb-2">Global Brands</p>
                            <p className="text-gray-500 text-sm">Trusted partnerships</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d97706]/50 transition-colors group">
                            <h3 className="text-7xl font-bold mb-4 group-hover:text-[#d97706] transition-colors">300+</h3>
                            <p className="text-xl font-medium mb-2">Happy Clients</p>
                            <p className="text-gray-500 text-sm">Across the globe</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8">Our Story</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p>
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                                </p>
                            </div>
                            <button className="mt-8 px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-[#d97706] transition-colors rounded-full">
                                Read More
                            </button>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?q=80&w=1200"
                                    alt="Coffee Machines Lineup"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-[#d97706] text-white p-8 rounded-full shadow-xl">
                                <p className="text-center font-bold leading-tight">
                                    <span className="text-3xl block">15+</span>
                                    <span className="text-xs uppercase tracking-wider">Years of<br />Excellence</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logos */}
            <div className="py-12 border-y border-gray-100">
                <LogoRow />
            </div>

            {/* Gallery */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">Gallery</h2>
                        <p className="text-gray-500">A glimpse into our world of coffee</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden group relative">
                            <img
                                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800"
                                alt="Latte Art"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden group relative md:-mt-12">
                            <img
                                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800"
                                alt="Coffee Beans"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden group relative">
                            <img
                                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800"
                                alt="Coffee Brewing"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
