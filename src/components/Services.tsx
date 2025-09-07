const services = [
  { title: 'Video Production', description: 'High-quality corporate, promo, and event videos.' },
  { title: 'Animation', description: '2D & 3D animations to bring your ideas to life.' },
  { title: 'Live Streaming', description: 'Professional streaming for events and webinars.' },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
