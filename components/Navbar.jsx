'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User, ShoppingCart, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const pathname = usePathname();
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navGroups = {
    shop: {
      title: "Shop",
      items: [
        { name: "Coffee Machines", href: "/products?category=machines" },
        { name: "Espresso Machines", href: "/products?category=espresso" },
        { name: "Automatic Machines", href: "/products?category=automatic" },
        { name: "Manual Machines", href: "/products?category=manual" },
        { name: "Accessories", href: "/products?category=accessories" },
      ]
    },
    services: {
      title: "Services",
      items: [
        { name: "Machine Repair", href: "/services/repair" },
        { name: "Maintenance", href: "/services/maintenance" },
        { name: "Consultation", href: "/services/consultation" },
      ]
    },
    explore: {
      title: "Explore",
      items: [
        { name: "Our Story", href: "/about" },
        { name: "Recipes", href: "/recipe" },
        { name: "Blog", href: "/blog" },
      ]
    }
  };

  const toggleMobileGroup = (key) => {
    setMobileExpanded(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 md:py-4' : 'bg-black py-4 md:py-6'
      } text-white`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter hover:text-[#d97706] transition-colors truncate mr-2">
            THE COFFEE CO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-[#d97706] transition-colors ${pathname === '/' ? 'text-[#d97706]' : ''}`}
            >
              HOME
            </Link>

            {Object.entries(navGroups).map(([key, group]) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-sm font-medium hover:text-[#d97706] transition-colors uppercase tracking-wide py-2">
                  <span>{group.title}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === key ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 w-56 bg-white text-black rounded-lg shadow-xl py-2 transition-all duration-200 origin-top-left ${activeDropdown === key ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}>
                  {group.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#d97706] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              href="/brands"
              className={`text-sm font-medium hover:text-[#d97706] transition-colors ${pathname === '/brands' ? 'text-[#d97706]' : ''}`}
            >
              BRANDS
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 flex-shrink-0">
            <button className="hover:text-[#d97706] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/account" className="hover:text-[#d97706] transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="hover:text-[#d97706] transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d97706] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden hover:text-[#d97706] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-6 py-4 space-y-4 overflow-y-auto max-h-[80vh]">
          <Link
            href="/"
            className="block text-sm font-bold hover:text-[#d97706]"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>

          {Object.entries(navGroups).map(([key, group]) => (
            <div key={key} className="space-y-2">
              <button
                onClick={() => toggleMobileGroup(key)}
                className="flex items-center justify-between w-full text-sm font-bold hover:text-[#d97706]"
              >
                <span>{group.title.toUpperCase()}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${mobileExpanded[key] ? 'rotate-90' : ''}`} />
              </button>

              <div className={`pl-4 space-y-2 border-l border-gray-800 transition-all duration-300 ${mobileExpanded[key] ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-sm text-gray-400 hover:text-[#d97706] py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            href="/brands"
            className="block text-sm font-bold hover:text-[#d97706]"
            onClick={() => setIsMenuOpen(false)}
          >
            BRANDS
          </Link>
        </div>
      </div>
    </nav>
  );
}
