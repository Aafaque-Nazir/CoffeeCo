export default function StatsSection() {
  const stats = [
    { number: '250+', label: 'Lorem Ipsum is simp', sub: 'dummy text of the printing' },
    { number: '100+', label: 'Lorem Ipsum is simp', sub: 'dummy text of the printing' },
    { number: '300+', label: 'Lorem Ipsum is simp', sub: 'dummy text of the printing' },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="text-6xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-lg font-medium text-white mb-1">{stat.label}</p>
              <p className="text-gray-400 text-xs">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
