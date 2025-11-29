'use client';

import Footer from '@/components/Footer';
import { Wrench, Package, Hammer, Droplet } from 'lucide-react';
import { useState } from 'react';

export default function ServicePage() {
    const [openFaq, setOpenFaq] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        date: '',
        machineType: '',
        brand: '',
        serviceType: '',
        model: '',
        address: '',
        issue: ''
    });

    const faqs = [
        { q: 'Lorem ipsum is simply dummy text?', a: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text.' },
        { q: 'Lorem ipsum is simply dummy text?', a: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.' },
        { q: 'Lorem ipsum is simply dummy text?', a: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.' },
        { q: 'Lorem ipsum is simply dummy text?', a: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.' },
        { q: 'Lorem ipsum is simply dummy text?', a: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.' },
    ];

    const services = [
        { icon: Wrench, title: 'Repair', desc: 'Expert diagnosis and repair for all types of coffee machines.' },
        { icon: Package, title: 'Maintenance', desc: 'Regular servicing to ensure optimal performance.' },
        { icon: Hammer, title: 'Installation', desc: 'Professional setup and configuration of new machines.' },
        { icon: Droplet, title: 'Cleaning', desc: 'Deep cleaning and sanitization services.' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / Service & Maintenance</p>
                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">The Coffee Co</h1>
                </div>
            </div>

            {/* Service Booking Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 uppercase">Schedule a Service</h2>
                        <p className="text-gray-600 text-sm mb-8">Book your service appointment with our certified technicians.</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Number</label>
                                    <input
                                        type="tel"
                                        placeholder="Enter your mobile number"
                                        className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Machine Type</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706] text-gray-500">
                                        <option>Manual</option>
                                        <option>Automatic</option>
                                        <option>Semi-Automatic</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Select Brand</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706] text-gray-500">
                                        <option>Select machine brand</option>
                                        <option>Gaggia</option>
                                        <option>Jura</option>
                                        <option>Saeco</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Service Type</label>
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706] text-gray-500">
                                        <option>Regular Maintenance</option>
                                        <option>Repair</option>
                                        <option>Installation</option>
                                        <option>Cleaning</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Machine Model</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your machine model"
                                        className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Address</label>
                                <textarea
                                    placeholder="Enter your address here"
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-2">Issue</label>
                                <textarea
                                    placeholder="Describe the issue you're experiencing"
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#d97706]"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#d97706] text-white py-3 rounded font-bold hover:bg-[#b45309] transition-colors uppercase"
                            >
                                Schedule Service
                            </button>
                        </form>
                    </div>

                    {/* Why Choose Us + Image */}
                    <div className="space-y-8">
                        {/* Coffee Machine Image */}
                        <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden bg-black">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200")' }}
                            ></div>
                        </div>

                        {/* Why Choose Us */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-gray-900">Why Choose Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-[#d97706] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Certified Technicians</h4>
                                        <p className="text-gray-600 text-xs">Our team is certified and experienced with all major brands.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-[#d97706] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Same-Day Service</h4>
                                        <p className="text-gray-600 text-xs">Quick response times and same-day service availability.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-[#d97706] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">Warranty Coverage</h4>
                                        <p className="text-gray-600 text-xs">All repairs are backed by our service warranty.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h3>
                            <div className="space-y-3">
                                {faqs.map((faq, i) => (
                                    <div key={i} className={`rounded-lg overflow-hidden ${openFaq === i ? 'bg-[#d97706]' : 'bg-gray-100'}`}>
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className={`w-full flex items-center justify-between p-4 text-left ${openFaq === i ? 'text-white' : 'text-gray-900'}`}
                                        >
                                            <span className="font-medium text-sm">{faq.q}</span>
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${openFaq === i ? 'border-white' : 'border-gray-400'}`}>
                                                <span className="text-xs">{openFaq === i ? '−' : '⊕'}</span>
                                            </div>
                                        </button>
                                        {openFaq === i && (
                                            <div className="px-4 pb-4 text-white text-xs">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Services */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-center mb-3 text-gray-900 uppercase">Our Services</h2>
                    <p className="text-gray-600 text-center text-sm mb-12 max-w-2xl mx-auto">
                        Comprehensive coffee machine services to keep your equipment running perfectly.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <service.icon className="w-8 h-8 text-[#d97706]" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
