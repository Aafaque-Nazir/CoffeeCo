'use client';

import Footer from '@/components/Footer';
import { Wrench, Settings, AlertTriangle, CheckCircle, Clock, Phone } from 'lucide-react';
import { useState } from 'react';

export default function RepairPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        model: '',
        issue: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Repair request:', formData);
        alert('Thank you! We will contact you shortly to schedule your repair.');
    };

    const commonIssues = [
        { title: 'Water Leaking', desc: 'Puddles under machine or dripping from group head.', icon: <AlertTriangle className="w-6 h-6 text-[#d97706]" /> },
        { title: 'Not Heating', desc: 'Coffee is lukewarm or water not reaching temperature.', icon: <Settings className="w-6 h-6 text-[#d97706]" /> },
        { title: 'Grinder Jammed', desc: 'Beans not grinding or strange noises from grinder.', icon: <Wrench className="w-6 h-6 text-[#d97706]" /> },
        { title: 'Low Pressure', desc: 'Weak espresso flow or no crema production.', icon: <Clock className="w-6 h-6 text-[#d97706]" /> },
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="bg-black text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2000')] bg-cover bg-center opacity-30"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <p className="text-[#d97706] text-sm uppercase tracking-widest mb-4 font-bold">Expert Technicians</p>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">Machine Repair</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Fast, reliable, and professional repair services for all major coffee machine brands. We get you back to brewing in no time.
                    </p>
                </div>
            </div>

            {/* Features / Common Issues */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold uppercase mb-4 text-gray-900">Common Issues We Fix</h2>
                        <p className="text-gray-600">Don't let a broken machine ruin your morning routine.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {commonIssues.map((issue, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                    {issue.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{issue.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{issue.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold uppercase mb-6 text-gray-900">Schedule a Repair</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Fill out the form below and one of our certified technicians will get in touch with you to diagnose the issue and schedule a visit.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Certified Experts</h4>
                                        <p className="text-sm text-gray-600">Our team is trained on all major brands including Gaggia, Jura, and Saeco.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">Genuine Parts</h4>
                                        <p className="text-sm text-gray-600">We only use authentic replacement parts to ensure longevity.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <CheckCircle className="w-6 h-6 text-[#d97706] flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">90-Day Warranty</h4>
                                        <p className="text-sm text-gray-600">All our repairs come with a 90-day warranty on parts and labor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d97706] transition-colors"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d97706] transition-colors"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Machine Model</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d97706] transition-colors"
                                        placeholder="e.g. Gaggia Classic Pro"
                                        value={formData.model}
                                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Issue Description</label>
                                    <textarea
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d97706] transition-colors"
                                        placeholder="Describe the problem you're facing..."
                                        value={formData.issue}
                                        onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-[#d97706] transition-colors uppercase tracking-widest">
                                    Book Repair
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
