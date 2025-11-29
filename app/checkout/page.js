'use client';

import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { useOrders } from '@/context/OrderContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const { addOrder } = useOrders();
    const router = useRouter();
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        upiId: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create order
        const order = {
            items: cart,
            total: cartTotal * 1.18,
            subtotal: cartTotal,
            tax: cartTotal * 0.18,
            paymentMethod: paymentMethod.toUpperCase(),
            shippingAddress: {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                zip: formData.zip
            }
        };

        // Add to order history
        const newOrder = addOrder(order);

        // Clear cart
        clearCart();

        // Show success and redirect
        alert(`Order ${newOrder.id} placed successfully! 🎉`);
        router.push('/account');
    };

    const paymentMethods = [
        { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
        { id: 'upi', name: 'UPI', icon: Smartphone },
        { id: 'cod', name: 'Cash on Delivery', icon: Banknote }
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Header */}
            <div className="bg-black text-white py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-[#d97706] text-xs uppercase tracking-widest mb-2">Cart / Checkout</p>
                    <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wide">Checkout</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Checkout Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 uppercase">Billing Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">ZIP Code</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                        required
                                    />
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mt-12 mb-8 uppercase">Payment Method</h2>

                            {/* Payment Method Selection */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {paymentMethods.map((method) => {
                                    const Icon = method.icon;
                                    return (
                                        <button
                                            key={method.id}
                                            type="button"
                                            onClick={() => setPaymentMethod(method.id)}
                                            className={`p-4 rounded-xl border-2 transition-all ${paymentMethod === method.id
                                                ? 'border-[#d97706] bg-[#d97706]/5'
                                                : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            <Icon className={`w-6 h-6 mx-auto mb-2 ${paymentMethod === method.id ? 'text-[#d97706]' : 'text-gray-400'}`} />
                                            <p className={`text-xs font-bold ${paymentMethod === method.id ? 'text-[#d97706]' : 'text-gray-600'}`}>
                                                {method.name}
                                            </p>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Card Payment Fields */}
                            {paymentMethod === 'card' && (
                                <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Cardholder Name</label>
                                        <input
                                            type="text"
                                            name="cardName"
                                            value={formData.cardName}
                                            onChange={handleInputChange}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                            required={paymentMethod === 'card'}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Card Number</label>
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                            required={paymentMethod === 'card'}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Expiry Date</label>
                                            <input
                                                type="text"
                                                name="expiry"
                                                value={formData.expiry}
                                                onChange={handleInputChange}
                                                placeholder="MM/YY"
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                                required={paymentMethod === 'card'}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-gray-500 mb-2">CVV</label>
                                            <input
                                                type="text"
                                                name="cvv"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                placeholder="123"
                                                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                                required={paymentMethod === 'card'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* UPI Payment Fields */}
                            {paymentMethod === 'upi' && (
                                <div className="bg-gray-50 p-6 rounded-xl">
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">UPI ID</label>
                                    <input
                                        type="text"
                                        name="upiId"
                                        value={formData.upiId}
                                        onChange={handleInputChange}
                                        placeholder="yourname@upi"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#d97706]"
                                        required={paymentMethod === 'upi'}
                                    />
                                </div>
                            )}

                            {/* COD Message */}
                            {paymentMethod === 'cod' && (
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <p className="text-sm text-green-800 font-medium">
                                        💵 Pay with cash when your order is delivered. Please keep exact change ready.
                                    </p>
                                </div>
                            )}

                            <button type="submit" className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-[#d97706] transition-colors uppercase tracking-wider mt-8">
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-gray-50 p-8 rounded-3xl h-fit sticky top-32">
                        <h2 className="text-2xl font-bold mb-8 uppercase">Your Order</h2>
                        <div className="space-y-6 mb-8">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-white rounded-lg overflow-hidden border border-gray-200">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">{item.name}</p>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="font-bold text-sm">{item.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className="h-px bg-gray-200 my-6"></div>
                        <div className="space-y-4">
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
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
