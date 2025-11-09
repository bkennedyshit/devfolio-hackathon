import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Figma,
  Wind,
  Server,
  FileCode,
  Atom,
  GitBranch,
  Database,
  type LucideIcon,
  SquareStack,
} from 'lucide-react';

export const projects = [
  {
    id: 'project-1',
    title: 'NEPA AI',
    description: 'AI-powered platform designed to introduce users to artificial intelligence. Streamlined interface for exploring AI capabilities and getting started with intelligent automation.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'React', 'Tailwind CSS'],
    imageUrlId: 'project-1',
    githubUrl: 'https://github.com/bkennedyshit',
    liveUrl: '#',
  },
  {
    id: 'project-2',
    title: 'Mycelium',
    description: 'AI That Prevents $500K+ Construction Conflicts. Upload your project schedule and detect conflicts before trades arrive on site. Save millions in delays, rework, and coordination costs.',
    tech: ['Next.js', 'AI/ML', 'TypeScript', 'Construction Tech', 'Automation'],
    imageUrlId: 'project-2',
    githubUrl: 'https://github.com/bkennedyshit',
    liveUrl: 'https://mycelium.app',
  },
  {
    id: 'project-3',
    title: 'Sky Racer',
    description: 'Fly Through The City! An interactive browser-based game where you dodge obstacles, collect rings, and rack up points. Built with engaging gameplay mechanics and smooth controls.',
    tech: ['JavaScript', 'HTML5 Canvas', 'Game Development', 'Web Animation'],
    imageUrlId: 'project-3',
    githubUrl: 'https://github.com/bkennedyshit/Reddit_Plane_Submission',
    liveUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Portfolio Platform',
    description: 'Modern developer portfolio built for the DevOne Hackathon 2025. Showcasing projects, skills, and professional identity with clean design and smooth interactions.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Framer Motion'],
    imageUrlId: 'project-4',
    githubUrl: 'https://github.com/bkennedyshit',
    liveUrl: '#',
  },
];

type SkillCategory = {
  title: string;
  skills: {
    name: string;
    icon: LucideIcon;
  }[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Development',
    skills: [
      { name: 'React', icon: Atom },
      { name: 'Next.js', icon: SquareStack },
      { name: 'TypeScript', icon: FileCode },
      { name: 'Node.js', icon: Server },
      { name: 'Full Stack', icon: Database },
      { name: 'AI/ML', icon: Atom },
    ],
  },
  {
    title: '3D & Design',
    skills: [
      { name: '3D Modeling', icon: SquareStack },
      { name: 'CAD Design', icon: FileCode },
      { name: 'Graphic Design', icon: Figma },
      { name: 'AR/VR', icon: Atom },
      { name: 'Game Dev', icon: Server },
      { name: 'AEC/Arch', icon: Database },
    ],
  },
  {
    title: 'Creative & Systems',
    skills: [
      { name: 'Content Creation', icon: Figma },
      { name: 'Automation', icon: GitBranch },
      { name: 'Systems Design', icon: Server },
      { name: 'Music Production', icon: Atom },
    ]
  }
];

export const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/bkennedyshit' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/billykennedybmx/' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/billykennedybmx' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/billy_kennedy_bmx/' },
];
