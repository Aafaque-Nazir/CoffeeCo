import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold tracking-widest uppercase mb-6">The Coffee Co</h2>
            <p className="text-gray-400 text-sm mb-6">
              Join the Coffee Lovers&apos; Club. Get the latest tips, offers, and updates straight to your inbox.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter Email" 
                className="bg-transparent border border-gray-700 text-white px-4 py-2 text-sm w-full focus:outline-none focus:border-[#d97706]"
              />
              <button className="bg-[#d97706] text-white px-4 py-2 text-sm font-medium hover:bg-[#b45309] transition-colors">
                Sign Up
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-[#d97706] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#d97706] transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-[#d97706] transition-colors">Product</Link></li>
              <li><Link href="/brands" className="hover:text-[#d97706] transition-colors">Brands</Link></li>
              <li><Link href="/contact" className="hover:text-[#d97706] transition-colors">Cafe Cards</Link></li>
              <li><Link href="/service" className="hover:text-[#d97706] transition-colors">Service & Maintenance</Link></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-6 tracking-wide">Other Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/blogs" className="hover:text-[#d97706] transition-colors">Blogs</Link></li>
              <li><Link href="/products" className="hover:text-[#d97706] transition-colors">Shop</Link></li>
              <li><Link href="/products" className="hover:text-[#d97706] transition-colors">Category</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#d97706] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/recipe" className="hover:text-[#d97706] transition-colors">Recipe</Link></li>
              <li><Link href="/contact" className="hover:text-[#d97706] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-6 tracking-wide">Address</h3>
            <p className="text-sm text-gray-400 mb-4">
              If you want to place an order for a Coffee Co. product or need assistance setting up your own cafe, write to us:
            </p>
            <a href="mailto:admin@thecoffeeco.in" className="text-[#d97706] text-sm font-medium hover:underline">
              admin@thecoffeeco.in
            </a>
            <div className="flex space-x-4 mt-6">
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#d97706] cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#d97706] cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#d97706] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#d97706] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center md:text-left">
          <p className="text-xs text-gray-500">
            © 2024 The Coffee Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
