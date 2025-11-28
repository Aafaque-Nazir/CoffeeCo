import Image from 'next/image';
import Link from 'next/link';
import { Heart, BarChart2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow group">
      <div className="relative h-48 w-full mb-4">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          className="object-contain"
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs text-gray-500 uppercase">{product.brand}</p>
        <h3 className="font-bold text-gray-900 leading-tight h-10 overflow-hidden">{product.name}</h3>
        <p className="text-xs text-gray-400">{product.type}</p>
        <div className="flex justify-between items-center">
             <span className="text-lg font-bold text-[#d97706]">{product.price}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4">
          <button 
            onClick={() => addToCart(product)}
            className="bg-[#d97706] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#b45309] transition-colors uppercase"
          >
            Add to Cart
          </button>
          <div className="flex space-x-2">
             <button className="text-gray-400 hover:text-red-500 transition-colors">
               <Heart className="w-4 h-4" />
             </button>
             <button className="text-gray-400 hover:text-blue-500 transition-colors">
               <BarChart2 className="w-4 h-4" />
             </button>
          </div>
        </div>
        <div className="text-center pt-2">
             <span className="text-[10px] text-gray-400 cursor-pointer hover:text-[#d97706]">Compare</span>
        </div>
      </div>
    </div>
  );
}
