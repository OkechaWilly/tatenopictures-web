import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projectsData as projects } from '@/lib/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper to resolve related stills based on project category/slug for visual depth
function getProjectGallery(slug: string, category: string): string[] {
  if (category === 'narrative' && slug !== 'changing-the-truth') {
    return [
      '/images/films/newneighbor1.png',
      '/images/films/newneighbor2.png',
      '/images/films/newneighbor3.png',
      '/images/films/newneighbor4.png',
    ];
  }
  if (slug === 'changing-the-truth') {
    return [
      '/images/docs/ctt-doc-10.png',
      '/images/docs/ctt-doc-11.png',
      '/images/docs/ctt-doc-3.png',
      '/images/docs/ctt-doc-4.png',
    ];
  }
  if (slug === 'binyumira' || slug === 'she-love-me' || slug === 'dawn-of-nexus') {
    return [
      '/images/music/Koka-Sheloveme1.png',
      '/images/music/Koka-Sheloveme2.png',
      '/images/music/Koka-Sheloveme44.png',
      '/images/music/sda.png',
    ];
  }
  if (category === 'events' || slug === 'timeless-weddings') {
    return [
      '/images/weddings/still-01.jpeg',
      '/images/weddings/still-02.jpeg',
      '/images/weddings/still-03.jpeg',
      '/images/weddings/still-04.jpeg',
    ];
  }
  return [
    '/images/directing-still.jpg',
    '/images/cinema-still.jpg',
    '/images/photo-still.jpg',
    '/images/editing-still.jpg',
  ];
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const galleryStills = getProjectGallery(project.slug, project.category);

  return (
    <div className="bg-[#060608] min-h-screen text-[#F0EBE3] pb-24">
      
      {/* Immersive Hero Cover Still */}
      <div className="relative w-full h-[65vh] sm:h-[80vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover filter brightness-[0.6] saturate-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060608]/40 to-[#060608]" />
        
        {/* Floating Header Info */}
        <div className="absolute inset-x-0 bottom-12 page-pad">
          <div className="max-w-7xl mx-auto flex flex-col items-start gap-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A84C] hover:text-[#E2B95A] uppercase tracking-widest transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Projects
            </Link>
            
            <div className="flex items-center gap-3 mt-4">
              <span className="text-xs font-mono text-[#C9A84C] uppercase tracking-wider">
                {project.subtitle}
              </span>
              <span className="w-1 h-1 rounded-full bg-[rgba(255,255,255,0.25)]" />
              <span className="text-xs font-mono text-[#8C867F]">
                {project.year}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light tracking-tight leading-[1.05] mt-1 text-[#F0EBE3]">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="page-pad mt-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Detailed Editorial Rationale (Left Column) */}
          <div className="lg:col-span-7">
            <h2 className="label-gold mb-6">Editorial Summary</h2>
            <p className="text-lg font-serif font-light text-[#F0EBE3]/90 leading-relaxed mb-8">
              {project.description}
            </p>
            
            <div className="prose prose-invert max-w-none text-sm font-sans font-light text-[#8C867F] space-y-6 leading-relaxed">
              <p>
                Every frame in <strong className="text-[#F0EBE3]">{project.title}</strong> was meticulously constructed to serve the emotional center of the visual story. Filmed entirely on location, we utilized a combination of controlled studio setups and natural light sculpting to match the specific artistic parameters of the director&apos;s brief.
              </p>
              <p>
                From digital sensor calibration to final color grading in DaVinci Resolve, the post-production workflow remained integrated within the studio. The project represents a commitment to high-end cinematic standards, bringing rich texture and sophisticated compositions to the forefront of modern production in East Africa.
              </p>
            </div>
          </div>

          {/* Technical Specs Panel (Right Column) */}
          <div className="lg:col-span-5 bg-[#0D0C0F] border border-[rgba(201,168,76,0.1)] p-8 sm:p-10 rounded">
            <h3 className="label-gold mb-8 pb-4 border-b border-[rgba(255,255,255,0.03)]">Production Specifications</h3>
            
            <ul className="space-y-6 text-xs font-mono text-[#8C867F]">
              <li className="flex justify-between items-baseline py-1 border-b border-[rgba(255,255,255,0.02)]">
                <span className="text-[#4A4540] uppercase tracking-wider">Category</span>
                <span className="text-[#F0EBE3] uppercase">{project.category}</span>
              </li>
              <li className="flex justify-between items-baseline py-1 border-b border-[rgba(255,255,255,0.02)]">
                <span className="text-[#4A4540] uppercase tracking-wider">Release Year</span>
                <span className="text-[#F0EBE3]">{project.year}</span>
              </li>
              {project.duration && (
                <li className="flex justify-between items-baseline py-1 border-b border-[rgba(255,255,255,0.02)]">
                  <span className="text-[#4A4540] uppercase tracking-wider">Running Time</span>
                  <span className="text-[#F0EBE3]">{project.duration}</span>
                </li>
              )}
              {project.specs?.dp && (
                <li className="flex justify-between items-baseline py-1 border-b border-[rgba(255,255,255,0.02)]">
                  <span className="text-[#4A4540] uppercase tracking-wider">Cinematographer / DP</span>
                  <span className="text-[#F0EBE3]">{project.specs.dp}</span>
                </li>
              )}
              {project.specs?.format && (
                <li className="flex justify-between items-baseline py-1 border-b border-[rgba(255,255,255,0.02)]">
                  <span className="text-[#4A4540] uppercase tracking-wider">Capture System</span>
                  <span className="text-[#F0EBE3]">{project.specs.format}</span>
                </li>
              )}
              {project.specs?.lenses && (
                <li className="flex justify-between items-baseline py-1">
                  <span className="text-[#4A4540] uppercase tracking-wider">Optics Selection</span>
                  <span className="text-[#F0EBE3]">{project.specs.lenses}</span>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Selected Production Stills Gallery */}
        <div className="mt-24 border-t border-[rgba(201,168,76,0.08)] pt-16">
          <span className="label-gold mb-8 block">Production Frames / Stills</span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryStills.map((stillPath, idx) => (
              <div
                key={idx}
                className="relative h-48 sm:h-56 w-full rounded overflow-hidden border border-[rgba(255,255,255,0.03)] hover:border-[rgba(201,168,76,0.2)] transition-all duration-500 group"
              >
                <Image
                  src={stillPath}
                  alt={`Production Still ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.9]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
