'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Navbar />

            {/* Hero Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Home / Cart</p>
                    <h1 className="text-5xl font-bold uppercase tracking-wide">Shopping Cart</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">
                {cart.length === 0 ? (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8">Looks like you haven&apos;t added any coffee essentials yet.</p>
                        <Link href="/products" className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-[#d97706] transition-colors">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-8">
                            {cart.map((item) => (
                                <div key={item.id} className="flex gap-6 p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                                    <div className="w-32 h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.brand}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="flex items-center space-x-4 bg-gray-50 rounded-full px-4 py-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="font-bold w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <p className="text-xl font-bold text-[#d97706]">{item.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 p-8 rounded-3xl sticky top-32">
                                <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal</span>
                                        <span className="font-bold text-black">₹{cartTotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-bold">Free</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Tax (18%)</span>
                                        <span className="font-bold text-black">₹{(cartTotal * 0.18).toLocaleString()}</span>
                                    </div>
                                    <div className="h-px bg-gray-200 my-4"></div>
                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span>₹{(cartTotal * 1.18).toLocaleString()}</span>
                                    </div>
                                </div>
                                <Link href="/checkout" className="w-full flex items-center justify-center space-x-2 bg-black text-white py-4 rounded-xl font-bold hover:bg-[#d97706] transition-colors">
                                    <span>Proceed to Checkout</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    Secure Checkout - 256-bit SSL Encryption
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
