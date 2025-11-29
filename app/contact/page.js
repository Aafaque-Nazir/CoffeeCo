'use client';

import Footer from '@/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / Contact</p>
                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">The Coffee Co</h1>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-900">CONNECT WITH US</h2>
                        <p className="text-gray-600 text-sm mb-8">Have a question? Fill out the form, and we&apos;ll respond within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Your Number</label>
                                <input
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    value={formData.number}
                                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                                <textarea
                                    placeholder="Enter your message here"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#d97706] text-white py-3 rounded font-bold hover:bg-[#b45309] transition-colors uppercase"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* Call Us */}
                        <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                                <Phone className="w-5 h-5 text-gray-900" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                <p className="text-gray-700 text-sm">+91 88281 39973</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                                <Phone className="w-5 h-5 text-gray-900" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                <p className="text-gray-700 text-sm">022 4016 1155</p>
                            </div>
                        </div>

                        {/* Send Email */}
                        <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                                <Mail className="w-5 h-5 text-gray-900" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Send Email</h3>
                                <p className="text-gray-700 text-sm">admin@thecoffeeco.in</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 border border-gray-200">
                                <MapPin className="w-5 h-5 text-gray-900" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                                <p className="text-gray-700 text-sm">A-501-B, Jaswanti Allied Business Center, Ramchandra Lane Extn, Kanchpada, Malad West, Mumbai 400064</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
