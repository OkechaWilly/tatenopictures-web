import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projectsData } from '@/lib/projects';

interface PageProps { params: Promise<{ slug: string }> }

const galleries: Record<string, string[]> = {
  'changing-the-truth': ['/images/docs/ctt-doc-10.png','/images/docs/ctt-doc-11.png','/images/docs/ctt-doc-3.png','/images/docs/ctt-doc-4.png'],
  'music-video-work': ['/images/music/Binyumira-BashySmith2.png','/images/music/Koka-Sheloveme1.png','/images/music/Koka-Sheloveme2.png','/images/music/Yona-SDA1.png'],
  'wedding-films': ['/images/weddings/still-01.jpeg','/images/weddings/still-02.jpeg','/images/weddings/still-03.jpeg','/images/weddings/still-04.jpeg','/images/weddings/still-05.jpeg'],
  'production-stories': ['/images/directing-still.jpg','/images/cinema-still.jpg','/images/editing-still.jpg'],
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);
  if (!project) notFound();
  const gallery = galleries[slug] || [project.image];

  return (
    <main className="min-h-screen bg-[var(--paper)] pb-20 pt-24 text-[var(--ink)]">
      <section className="px-5 pt-10 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <Link href="/work" className="eyebrow inline-flex items-center gap-2 hover:text-[var(--ink)]">← Back to film & video</Link>
          <div className="mt-8 grid items-end gap-8 md:grid-cols-[1fr_.65fr]">
            <div><span className="eyebrow mb-4">{project.categoryLabel}</span><h1 className="display-xl">{project.title}</h1></div>
            <p className="max-w-xl pb-2 text-sm leading-8 text-[var(--muted)] md:text-base">{project.description}</p>
          </div>
        </div>
      </section>

      <section className="px-5 pt-12 sm:px-8 lg:px-14">
        <div className="relative mx-auto aspect-[1.8] max-w-[1500px] overflow-hidden bg-[#D8D5CC]">
          <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 sm:px-8 md:grid-cols-[.65fr_1.35fr] lg:px-14">
        <div><span className="eyebrow">Project information</span></div>
        <div className="grid grid-cols-1 gap-6 border-t border-[var(--line)] pt-5 sm:grid-cols-2">
          <div><span className="text-[10px] uppercase tracking-[.14em] text-[var(--muted)]">Category</span><p className="mt-2 text-sm font-medium">{project.categoryLabel}</p></div>
          {project.role && <div><span className="text-[10px] uppercase tracking-[.14em] text-[var(--muted)]">Studio involvement</span><p className="mt-2 text-sm font-medium">{project.role}</p></div>}
          {project.client && <div><span className="text-[10px] uppercase tracking-[.14em] text-[var(--muted)]">Collaborator / client</span><p className="mt-2 text-sm font-medium">{project.client}</p></div>}
          {project.year && <div><span className="text-[10px] uppercase tracking-[.14em] text-[var(--muted)]">Year</span><p className="mt-2 text-sm font-medium">{project.year}</p></div>}
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-[1500px] border-t border-[var(--line)] pt-10">
          <div className="mb-8 flex items-end justify-between gap-5"><div><span className="eyebrow mb-3">Selected frames</span><h2 className="display-md">From the production.</h2></div><span className="text-xs text-[var(--muted)]">{gallery.length} images</span></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src,index) => <div key={src} className={`relative overflow-hidden bg-[#E4E1D8] ${index === 0 ? 'aspect-[1.15] sm:col-span-2' : 'aspect-[1.15]'}`}><Image src={src} alt={`${project.title} — production frame ${index+1}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.025]"/></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1500px] border-t border-[var(--line)] px-5 pt-10 sm:px-8 lg:px-14">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><p className="text-xl font-semibold tracking-[-.04em]">Have a project in mind?</p><Link href="/#contact" className="btn-primary w-fit">Talk to the studio ↗</Link></div>
      </section>
    </main>
  );
}
