'use client';

import Footer from '@/components/Footer';
import { Check, Shield, Zap, Droplet, Clock } from 'lucide-react';
import Link from 'next/link';

export default function MaintenancePage() {
    const plans = [
        {
            name: 'Basic Care',
            price: '₹2,499',
            period: '/visit',
            desc: 'Essential cleaning and check-up for home machines.',
            features: [
                'Group head cleaning',
                'Descaling service',
                'Gasket inspection',
                'Pressure check',
                'Grinder calibration'
            ],
            recommended: false
        },
        {
            name: 'Standard Pro',
            price: '₹4,999',
            period: '/visit',
            desc: 'Comprehensive maintenance for office and small cafe machines.',
            features: [
                'All Basic Care features',
                'Gasket replacement',
                'Water filter replacement',
                'Steam wand rebuild',
                'Temperature calibration',
                '90-day warranty'
            ],
            recommended: true
        },
        {
            name: 'Premium Commercial',
            price: '₹8,999',
            period: '/visit',
            desc: 'Full overhaul for high-volume commercial espresso machines.',
            features: [
                'All Standard Pro features',
                'Boiler inspection & flush',
                'Pump pressure adjustment',
                'Electrical safety check',
                'Emergency support priority',
                'Barista training session'
            ],
            recommended: false
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000')] bg-cover bg-center opacity-30"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <p className="text-[#d97706] text-sm uppercase tracking-widest mb-4 font-bold">Keep It Running Smoothly</p>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Maintenance Plans</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Prevent breakdowns and ensure the perfect brew every time with our comprehensive maintenance packages.
                    </p>
                </div>
            </div>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-6">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-[#d97706]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Extend Lifespan</h3>
                            <p className="text-gray-600">Regular maintenance can double the life of your expensive coffee equipment.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Droplet className="w-8 h-8 text-[#d97706]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Better Taste</h3>
                            <p className="text-gray-600">Clean machines produce cleaner, better-tasting coffee without bitter residue.</p>
                        </div>
                        <div className="p-6">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-8 h-8 text-[#d97706]" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">Prevent Downtime</h3>
                            <p className="text-gray-600">Catch issues before they become major problems that stop your business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold uppercase mb-4 text-gray-900">Choose Your Plan</h2>
                        <p className="text-gray-600">Transparent pricing with no hidden costs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, idx) => (
                            <div key={idx} className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${plan.recommended ? 'border-[#d97706] shadow-lg scale-105 z-10' : 'border-gray-100 hover:border-gray-200'}`}>
                                {plan.recommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d97706] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500 ml-1">{plan.period}</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-8">{plan.desc}</p>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-700">
                                            <Check className="w-5 h-5 text-[#d97706] mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/services/repair" className={`block w-full py-3 rounded-lg text-center font-bold text-sm uppercase tracking-wider transition-colors ${plan.recommended ? 'bg-[#d97706] text-white hover:bg-[#b45309]' : 'bg-black text-white hover:bg-gray-800'}`}>
                                    Book Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
