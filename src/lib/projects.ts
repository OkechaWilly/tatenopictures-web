// Shared project data - used by both Work component and project detail pages
export interface Project {
  slug: string;
  title: string;
  category: string; // 'narrative' | 'events' | 'stills' | 'branded'
  categoryLabel: string;
  subtitle?: string;
  image: string;
  year: string;
  client?: string;
  description: string;
  duration?: string;
  thumbnailClass?: string; // optional CSS class override for the thumbnail in the grid
  specs?: {
    format?: string;
    dp?: string;
    lenses?: string;
  };
}

export const projectsData: Project[] = [
  {
    slug: 'the-new-neighbour',
    title: 'The New Neighbour',
    category: 'narrative',
    categoryLabel: 'Cinema & Short Film',
    subtitle: 'Experimental Short Film',
    image: '/images/films/newneighbor3.png',
    year: '2024',
    description: 'An experimental short-film exploring the fragile nuances of urban relationships in Kampala.',
    duration: '18 min',
    specs: {
      format: 'Arri Alexa Mini LF',
      dp: 'Willy Okecha',
      lenses: 'Cooke Anamorphic'
    }
  },
  {
    slug: 'benja',
    title: 'Benja',
    category: 'narrative',
    categoryLabel: 'Cinema & Short Film',
    subtitle: 'Narrative Drama',
    image: '/images/films/newneighbor4.png',
    year: '2024',
    description: 'A gritty narrative following a young protagonist navigating Kampala\'s underground scene.',
    duration: '24 min',
    specs: {
      format: 'RED V-Raptor 8K',
      dp: 'Willy Okecha',
      lenses: 'Atlas Orion Anamorphics'
    }
  },
  {
    slug: 'changing-the-truth',
    title: 'Changing the Truth',
    category: 'narrative',
    categoryLabel: 'Documentary',
    subtitle: 'Documentary Film',
    image: '/images/docs/ctt-doc-11.png',
    year: '2024',
    description: 'An intimate, character-driven story documenting structural education reform.',
    duration: '30 min',
    specs: {
      format: 'Arri Amira',
      dp: 'Willy Okecha',
      lenses: 'Zeiss Super Speeds'
    }
  },
  {
    slug: 'binyumira',
    title: 'Binyumira',
    category: 'branded',
    categoryLabel: 'Music Video',
    subtitle: 'Music Video',
    image: '/images/music/Binyumira-BashySmith2.png',
    year: '2024',
    client: 'Bashy Smithe',
    description: 'Vibrant city streets come to life in this energetic Afrobeat dance celebration.',
    duration: '4:15',
    specs: {
      format: 'RED Komodo 6K',
      dp: 'Willy Okecha',
      lenses: 'DZOFilm Vespid Primes'
    }
  },
  {
    slug: 'the-peak-explorer',
    title: 'The Peak Explorer',
    category: 'branded',
    categoryLabel: 'Commercial Spot',
    subtitle: 'Brand Commercial',
    image: '/images/boat.JPG',
    year: '2024',
    client: 'Peak Outdoors',
    description: 'A high-action, rugged commercial spot highlighting durable waterproof performance gear in extreme weather.',
    specs: {
      format: 'Sony Venice 2',
      dp: 'Willy Okecha',
      lenses: 'Angenieux Optimo Zooms'
    }
  },
  {
    slug: 'she-love-me',
    title: 'She Love Me',
    category: 'branded',
    categoryLabel: 'Music Video',
    subtitle: 'Music Video',
    image: '/images/music/Koka-Sheloveme44.png',
    year: '2024',
    client: 'Bashy Smithe',
    description: 'A moody, stylized performance video focusing on choreography and dramatic lighting.',
    duration: '3:50',
    specs: {
      format: 'Arri Alexa Mini LF',
      dp: 'Willy Okecha',
      lenses: 'Cooke Anamorphic'
    }
  },
  {
    slug: 'shadows-of-the-savannah',
    title: 'Shadows of the Savannah',
    category: 'narrative',
    categoryLabel: 'Cinema & Short Film',
    subtitle: 'Cinematic Short Film',
    image: '/images/films/newneighbor2.png',
    year: '2023',
    description: 'An atmospheric visual poem capturing the ancient wilderness and native wildlife.',
    duration: '15 min',
    thumbnailClass: 'brightness-[1.4] saturate-[1.1]',
    specs: {
      format: 'Sony Venice 2',
      dp: 'Willy Okecha',
      lenses: 'Angenieux Optimo Zooms'
    }
  },
  {
    slug: 'timeless-weddings',
    title: 'Timeless Weddings',
    category: 'events',
    categoryLabel: 'Marriage Film',
    subtitle: 'Cinematic Wedding Film',
    image: '/images/weddings/still-01.jpeg',
    year: '2024',
    description: 'Fine-art coverage focusing on authentic emotions, stolen glances, and local colors.',
    duration: 'Full Coverage',
    specs: {
      format: 'Sony FX3',
      dp: 'Willy Okecha',
      lenses: 'Sony GM Primes'
    }
  },
  {
    slug: 'urban-rhythms',
    title: 'Urban Rhythms',
    category: 'narrative',
    categoryLabel: 'Documentary',
    subtitle: 'Documentary Film',
    image: '/images/docs/ctt-doc-3.png',
    year: '2023',
    description: 'A cultural exploration of the evolving contemporary music scene across African metropolises.',
    duration: '52 min',
    specs: {
      format: 'Arri Alexa Mini',
      dp: 'Willy Okecha',
      lenses: 'Sigma Cine Primes'
    }
  },
  {
    slug: 'dawn-of-nexus',
    title: 'Dawn of Nexus',
    category: 'branded',
    categoryLabel: 'Commercial Spot',
    subtitle: 'Product Launch Film',
    image: '/images/music/sda.png',
    year: '2024',
    client: 'Nexus Tech',
    description: 'Sleek, product-focused commercial showcasing next-generation mobile devices with premium lighting.',
    specs: {
      format: 'RED Komodo 6K',
      dp: 'Willy Okecha',
      lenses: 'Laowa Probe Lens'
    }
  }
];

