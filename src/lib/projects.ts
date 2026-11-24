export interface Project {
  slug: string;
  title: string;
  category: 'narrative' | 'branded' | 'events';
  categoryLabel: string;
  subtitle: string;
  image: string;
  year?: string;
  client?: string;
  role?: string;
  description: string;
  duration?: string;
}

export const projectsData: Project[] = [
  {
    slug: 'changing-the-truth',
    title: 'Changing the Truth',
    category: 'narrative',
    categoryLabel: 'Documentary',
    subtitle: 'Documentary · Film',
    image: '/images/docs/ctt-doc-11.png',
    role: 'Art director & producer',
    description: 'A documentary project in Tateno Pictures’ body of work. The project page brings together selected production frames and an overview of the studio’s involvement.',
  },
  {
    slug: 'music-video-work',
    title: 'Music video productions',
    category: 'branded',
    categoryLabel: 'Music video',
    subtitle: 'Music video · Selected work',
    image: '/images/music/Binyumira-BashySmith2.png',
    description: 'Selected visual work from music video productions for local artists, bringing performance, movement and visual direction together.',
  },
  {
    slug: 'wedding-films',
    title: 'Wedding films',
    category: 'events',
    categoryLabel: 'Weddings & events',
    subtitle: 'Wedding films · Selected work',
    image: '/images/weddings/still-01.jpeg',
    description: 'A selection of wedding moments and celebrations captured through moving images.',
  },
  {
    slug: 'production-stories',
    title: 'On set & in production',
    category: 'branded',
    categoryLabel: 'Production',
    subtitle: 'Behind the scenes',
    image: '/images/directing-still.jpg',
    description: 'A look at the people, preparation and practical craft behind our production work.',
  },
];
