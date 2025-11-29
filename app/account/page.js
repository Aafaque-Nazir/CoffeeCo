'use client';

import Footer from '@/components/Footer';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { useOrders } from '@/context/OrderContext';

export default function AccountPage() {
    const { orders } = useOrders();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-100 text-green-700';
            case 'Processing': return 'bg-blue-100 text-blue-700';
            case 'Shipped': return 'bg-purple-100 text-purple-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / Account</p>
                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">My Profile</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-2xl p-6 sticky top-32">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                    <User className="w-8 h-8 text-gray-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold">John Doe</h3>
                                    <p className="text-xs text-gray-500">john.doe@example.com</p>
                                </div>
                            </div>
                            <nav className="space-y-2">
                                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-black text-white rounded-xl font-medium transition-colors">
                                    <User className="w-5 h-5" />
                                    <span>Profile Details</span>
                                </button>
                                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
                                    <Package className="w-5 h-5" />
                                    <span>Orders</span>
                                </button>
                                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
                                    <Heart className="w-5 h-5" />
                                    <span>Wishlist</span>
                                </button>
                                <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-xl font-medium transition-colors">
                                    <Settings className="w-5 h-5" />
                                    <span>Settings</span>
                                </button>
                                <div className="h-px bg-gray-200 my-4"></div>
                                <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors">
                                    <LogOut className="w-5 h-5" />
                                    <span>Sign Out</span>
                                </button>
                            </nav>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white border border-gray-100 rounded-2xl p-8 mb-8">
                            <h2 className="text-2xl font-bold mb-8 uppercase">Personal Information</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        defaultValue="John"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        defaultValue="Doe"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue="john.doe@example.com"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        defaultValue="+1 234 567 890"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <button type="button" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-[#d97706] transition-colors uppercase tracking-wider">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold mb-8 uppercase">Order History</h2>
                            {orders.length === 0 ? (
                                <div className="text-center py-12">
                                    <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                    <p className="text-gray-500">No orders yet</p>
                                    <p className="text-sm text-gray-400 mt-2">Start shopping to see your orders here!</p>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {orders.map((order) => (
                                        <div key={order.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                                            <div className="flex items-start space-x-6 mb-4 md:mb-0 flex-1">
                                                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-gray-300 flex-shrink-0">
                                                    <Package className="w-8 h-8" />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-bold text-lg mb-1">{order.id}</p>
                                                    <p className="text-xs text-gray-500 mb-2">Placed on {formatDate(order.date)}</p>
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        {order.items.slice(0, 3).map((item, idx) => (
                                                            <span key={idx} className="text-xs bg-white px-2 py-1 rounded border border-gray-200">
                                                                {item.name} x{item.quantity}
                                                            </span>
                                                        ))}
                                                        {order.items.length > 3 && (
                                                            <span className="text-xs text-gray-500">
                                                                +{order.items.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full uppercase ${getStatusColor(order.status)}`}>
                                                            {order.status}
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            Payment: {order.paymentMethod}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-left md:text-right">
                                                <p className="font-bold text-xl mb-1">₹{order.total.toLocaleString()}</p>
                                                <p className="text-xs text-gray-500">{order.items.reduce((sum, item) => sum + item.quantity, 0)} items</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}