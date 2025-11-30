'use client';

import Footer from '@/components/Footer';
import { Coffee, Users, FileText, TrendingUp, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function ConsultationPage() {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        goals: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Consultation request:', formData);
        alert('Thank you! We will be in touch to discuss your coffee business goals.');
    };

    const services = [
        {
            title: 'Cafe Setup & Design',
            desc: 'From workflow optimization to equipment selection, we help you build a cafe that looks great and operates efficiently.',
            icon: <Coffee className="w-8 h-8 text-[#d97706]" />
        },
        {
            title: 'Menu Engineering',
            desc: 'Create a profitable menu with signature drinks, proper pricing strategies, and seasonal specials that keep customers coming back.',
            icon: <FileText className="w-8 h-8 text-[#d97706]" />
        },
        {
            title: 'Staff Training',
            desc: 'Comprehensive barista training covering espresso technique, milk texturing, latte art, and customer service excellence.',
            icon: <Users className="w-8 h-8 text-[#d97706]" />
        },
        {
            title: 'Business Strategy',
            desc: 'Market analysis, supplier sourcing, and operational systems to ensure your coffee business is built for long-term growth.',
            icon: <TrendingUp className="w-8 h-8 text-[#d97706]" />
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000')] bg-cover bg-center opacity-30"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <p className="text-[#d97706] text-sm uppercase tracking-widest mb-4 font-bold">Start Your Journey</p>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Coffee Consultation</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Turn your passion for coffee into a thriving business with expert guidance from industry veterans.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service, idx) => (
                            <div key={idx} className="flex items-start space-x-6 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Story / Quote */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="mb-8">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-[#d97706] text-2xl">★</span>
                        ))}
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mb-8">
                        "The Coffee Co team transformed our vague idea into a bustling cafe that's now the heart of our neighborhood. Their guidance on equipment and training was invaluable."
                    </blockquote>
                    <cite className="not-italic">
                        <span className="block font-bold text-lg">Sarah Jenkins</span>
                        <span className="text-gray-400">Owner, The Daily Grind</span>
                    </cite>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold uppercase mb-4 text-gray-900">Let's Talk Business</h2>
                        <p className="text-gray-600">Tell us about your project and how we can help.</p>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d97706] transition-colors"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Business Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d97706] transition-colors"
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d97706] transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Your Goals / Vision</label>
                                <textarea
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d97706] transition-colors"
                                    placeholder="I want to open a specialty coffee shop in..."
                                    value={formData.goals}
                                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-[#d97706] transition-colors uppercase tracking-widest">
                                Request Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
