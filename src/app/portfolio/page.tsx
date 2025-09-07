import PortfolioCard from '@/components/PortfolioCard';

const portfolioItems = [
  {
    title: 'Corporate Promo Video',
    description: 'A sleek corporate promo for a leading brand.',
    imageUrl: '/portfolio/corporate1.jpg',
    videoUrl: 'https://www.youtube.com/embed/example1',
  },
  {
    title: 'Animated Explainer',
    description: '2D animation explaining product features.',
    imageUrl: '/portfolio/animation1.jpg',
    videoUrl: 'https://www.youtube.com/embed/example2',
  },
  {
    title: 'Event Coverage',
    description: 'Professional coverage of a live event.',
    imageUrl: '/portfolio/event1.jpg',
    videoUrl: 'https://www.youtube.com/embed/example3',
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
