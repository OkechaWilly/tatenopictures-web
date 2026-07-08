import { projectsData } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Extend with detailed paragraphs and gallery images for the sub-page
interface ExtendedProjectDetails {
  paragraphs: string[];
  gallery: string[];
}

const detailedProjectContent: Record<string, ExtendedProjectDetails> = {
  'the-new-neighbour': {
    paragraphs: [
      "The New Neighbour is a visual study of urban isolation, framed through the lives of adjacent apartment tenants in Kampala. Through minimal dialogue and high-contrast anamorphic lighting, the film builds a subtle sense of tension and connection.",
      "Shot over five nights in Kololo, the production utilized the Arri Alexa Mini LF paired with Cooke Anamorphic lenses to capture the warmth and textures of the city lights, emphasizing character isolation against a vast night cityscape.",
      "The film went on to premiere at regional festivals, praised for its atmospheric cinematography and evocative score. It stands as a testament to the studio's commitment to narrative-focused fine-art filmmaking."
    ],
    gallery: [
      '/images/films/newneighbor1.png',
      '/images/films/newneighbor2.png',
      '/images/films/newneighbor3.png',
      '/images/films/newneighbor4.png'
    ]
  },
  'benja': {
    paragraphs: [
      "Benja tells the visceral story of a street hustler striving to secure a better future for his family amidst Kampala's bustling, unforgiving underground economy.",
      "Utilizing a fast-paced documentary-style camera movement, Willy Okecha opted for the RED V-Raptor 8K and Atlas Orion Anamorphics. This combination provided both the grit of high-resolution sensors and the poetic aberrations of vintage glass.",
      "The project showcases dynamic color contrast, moving from cold fluorescent night markets to the warm, dust-filled daytime streets, providing a raw and authentic portrayal of contemporary metropolitan life."
    ],
    gallery: [
      '/images/films/newneighbor4.png',
      '/images/films/newneighbor3.png',
      '/images/films/newneighbor2.png',
      '/images/films/newneighbor1.png'
    ]
  },
  'changing-the-truth': {
    paragraphs: [
      "Changing the Truth is a feature-length documentary chronicling a group of dedicated teachers fighting to implement education reform in remote rural communities.",
      "Willy Okecha utilized the Arri Amira and Zeiss Super Speeds, relying heavily on natural and available light to maintain the film's observational integrity and raw emotion.",
      "By embedding with the educators for six months, the production captured intimate, unscripted struggles and triumphs that shed light on systemic educational disparities and the power of grassroots movements."
    ],
    gallery: [
      '/images/docs/ctt-doc-3.png',
      '/images/docs/ctt-doc-11.png',
      '/images/cinema-still.jpg'
    ]
  },
  'binyumira': {
    paragraphs: [
      "A high-energy, vibrant music video for Bashy Smithe's hit single Binyumira, capturing the infectious rhythm of Kampala's youth culture and street dance scene.",
      "Designed as a single continuous-feeling sequence, the video utilized the RED Komodo 6K mounted on a DJI Ronin 2, allowing for fluid, sweeping movement among the dancers.",
      "Vibrant neon grades, high contrast, and dynamic pacing make this one of the studio's standout musical productions of the year, generating over a million views online."
    ],
    gallery: [
      '/images/music/Binyumira-BashySmith1.png',
      '/images/music/Binyumira-BashySmith2.png',
      '/images/music/Binyumira-BashySmith4.png',
      '/images/music/Kawuna-BashySmithe.png'
    ]
  },
  'the-peak-explorer': {
    paragraphs: [
      "An adventurous brand film for Peak Outdoors, showcasing their new line of waterproof shells in the high-altitude, unforgiving environment of the Rwenzori Mountains.",
      "The crew faced sub-zero temperatures and heavy rain, proving the durability of the RED Komodo 6K and weather-sealed Sigma Cine Primes. The resulting footage captures water droplets bead and slide off fabric in sharp macro detail.",
      "This spot successfully positioned Peak Outdoors as a premier high-performance brand, blending high-end fashion aesthetics with extreme sports endurance."
    ],
    gallery: [
      '/images/boat.JPG',
      '/images/directing-still.jpg'
    ]
  },
  'she-love-me': {
    paragraphs: [
      "A romantic and moody visual canvas accompanying Bashy Smithe's ballad, She Love Me. The video focuses heavily on choreographed movement and dramatic shadow play.",
      "Shot entirely on a soundstage, the lighting direction utilized single source key lights and haze to sculpt the performers' silhouettes, captured on the Arri Alexa Mini LF for unmatched roll-off and organic skin tones.",
      "The editorial design focuses on slow, rhythmic cuts, allowing the lighting and performance to drive the emotional weight of the song."
    ],
    gallery: [
      '/images/music/Koka-Sheloveme1.png',
      '/images/music/Koka-Sheloveme2.png',
      '/images/music/Koka-Sheloveme3.png',
      '/images/music/Koka-Sheloveme44.png',
      '/images/music/Koka-Sheloveme5.png',
      '/images/music/Koka-Sheloveme6.png'
    ]
  },
  'shadows-of-the-savannah': {
    paragraphs: [
      "An atmospheric visual poem commissioned by wildlife foundations to capture the fragile majesty of Uganda's native wilderness and national parks.",
      "Captured on the Sony Venice 2 in 8.6K with Angenieux Optimo Zooms, the crew captured stunning low-light predator activity and expansive sunrise vistas over the savannah.",
      "The project showcases the raw power of natural preservation, reminding viewers of the ancient rhythms that exist just beyond the boundaries of our cities."
    ],
    gallery: [
      '/images/films/newneighbor2.png',
      '/images/films/newneighbor4.png',
      '/images/boat.JPG'
    ]
  },
  'timeless-weddings': {
    paragraphs: [
      "A cinematic wedding film capturing the grand union of Sarah and David. The film breaks away from traditional wedding edits, opting for a narrative-driven structure.",
      "Operating a dual Sony FX3 setup with high-speed prime lenses allowed our cinematographers to blend into the background, capturing raw, candid moments without disrupting the ceremony's flow.",
      "From emotional vows in soft cathedral light to energetic evening dances, the film stands as a timeless heirloom of high-fidelity memory craft."
    ],
    gallery: [
      '/images/weddings/still-01.jpeg',
      '/images/weddings/still-02.jpeg',
      '/images/weddings/still-03.jpeg',
      '/images/weddings/still-04.jpeg',
      '/images/weddings/still-05.jpeg'
    ]
  },
  'urban-rhythms': {
    paragraphs: [
      "An documentary film exploring the roots of contemporary urban music, highlighting the fusion of traditional folk rhythms with modern electronic beats.",
      "Featuring interviews with legendary music producers and underground artists, shot on Arri Alexa Mini to deliver warm, high-latitude interview frames.",
      "The film highlights the role of music as an oral archive, documenting how the stories of Kampala's streets are preserved through song."
    ],
    gallery: [
      '/images/docs/ctt-doc-3.png',
      '/images/docs/ctt-doc-11.png'
    ]
  },
  'dawn-of-nexus': {
    paragraphs: [
      "A futuristic, sleek product trailer for Nexus Tech's newest smartphone, highlighting the premium glass back and camera optics.",
      "Shot on a motion control rig with the RED V-Raptor 8K, our team captured precise, macro-lens sweeps of the device in a synchronized light-painting environment.",
      "The result is a luxury advertising piece that showcases tech engineering with cinematic grandeur."
    ],
    gallery: [
      '/images/music/sda.png',
      '/images/editing-still.jpg'
    ]
  }
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const details = detailedProjectContent[slug] || {
    paragraphs: [project.description],
    gallery: [project.image]
  };

  // Find next and previous projects for navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject = projectsData[currentIndex - 1] || projectsData[projectsData.length - 1];
  const nextProject = projectsData[currentIndex + 1] || projectsData[0];

  return (
    <main className="w-full bg-[#060608] min-h-screen text-[#F0EBE3] pb-24">
      {/* Dynamic Header Spacer */}
      <div className="h-24" />

      {/* Project Hero Image */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden border-b border-[rgba(201,168,76,0.1)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.45] saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent opacity-90" />
        
        {/* Project Core Meta Overlay */}
        <div className="absolute bottom-12 left-6 md:left-12 right-6 z-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-2 items-start">
            <span className="label-gold">{project.categoryLabel}</span>
            <h1 className="display-md uppercase leading-none text-[#F0EBE3] mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-[10px] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
              <span>Year: {project.year}</span>
              {project.client && <span>Client: {project.client}</span>}
              {project.duration && <span>Duration: {project.duration}</span>}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Description Paragraphs (Left) */}
        <div className="lg:col-span-8 flex flex-col gap-6 font-sans font-light text-base text-[var(--text-secondary)] leading-relaxed">
          {details.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Technical Specs Board (Right) */}
        <div className="lg:col-span-4 bg-[#0D0C0F] border border-[rgba(201,168,76,0.1)] p-8 rounded-sm">
          <h3 className="label-gold mb-6 pb-2 border-b border-[rgba(201,168,76,0.15)]">Technical Specs</h3>
          <div className="flex flex-col gap-6 font-mono text-[10px] tracking-widest text-[var(--text-secondary)] uppercase">
            <div className="flex flex-col gap-1.5">
              <span className="text-[#4A4540] text-[8px]">Director of Photography</span>
              <span className="text-[#F0EBE3] font-medium">{project.specs.dp}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#4A4540] text-[8px]">Camera Format</span>
              <span className="text-[#F0EBE3] font-medium">{project.specs.format}</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[#4A4540] text-[8px]">Lens Package</span>
              <span className="text-[#F0EBE3] font-medium">{project.specs.lenses}</span>
            </div>
          </div>
        </div>

      </section>

      {/* Project Production Gallery */}
      <section className="max-w-[1400px] mx-auto px-6 py-12">
        <span className="label-gold mb-8 block text-center">Production Stills</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.gallery.map((img, idx) => (
            <div key={idx} className="relative h-[250px] md:h-[400px] bg-neutral-900 border border-white/5 overflow-hidden group">
              <Image
                src={img}
                alt={`${project.title} Production Still ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover filter brightness-85 group-hover:brightness-95 group-hover:scale-102 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] saturate-[0.8]"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Previous / Next Project Navigation Footer */}
      <section className="max-w-[1200px] mx-auto px-6 mt-20 pt-12 border-t border-[rgba(201,168,76,0.15)] flex justify-between items-center">
        <Link 
          href={`/work/${prevProject.slug}`}
          className="group flex flex-col gap-2 text-left"
        >
          <span className="text-[8px] font-mono text-[var(--gold)] uppercase tracking-[0.25em]">← Previous Project</span>
          <span className="text-sm font-serif font-light text-[var(--text-secondary)] group-hover:text-[#F0EBE3] transition-colors">{prevProject.title}</span>
        </Link>

        <Link 
          href={`/work/${nextProject.slug}`}
          className="group flex flex-col gap-2 text-right items-end"
        >
          <span className="text-[8px] font-mono text-[var(--gold)] uppercase tracking-[0.25em]">Next Project →</span>
          <span className="text-sm font-serif font-light text-[var(--text-secondary)] group-hover:text-[#F0EBE3] transition-colors">{nextProject.title}</span>
        </Link>
      </section>
    </main>
  );
}
