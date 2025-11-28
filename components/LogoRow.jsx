import Image from 'next/image';

export default function LogoRow() {
  // Using placeholder text for logos as I don't have the actual logo assets
  const logos = [
    { name: 'Logoipsum', color: 'text-red-500' },
    { name: 'Logoipsum', color: 'text-blue-500' },
    { name: 'Logoipsum', color: 'text-orange-500' },
    { name: 'Logoipsum', color: 'text-indigo-500' },
    { name: 'Logoipsum', color: 'text-green-500' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className={`flex items-center space-x-2 font-bold text-xl ${logo.color}`}>
              <div className="w-6 h-6 rounded-full bg-current opacity-50"></div>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
