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
  Code,
  Cpu,
  Bot,
  Cloud,
  Cog,
} from 'lucide-react';

export const projects = [
  {
    id: 'project-1',
    title: 'NEPA AI',
    description: 'AI-powered platform designed to introduce users to artificial intelligence. Streamlined interface for exploring AI capabilities and getting started with intelligent automation.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'React', 'Tailwind CSS'],
    imageUrlId: 'project-1',
    primaryUrl: 'https://nepa-ai.com/agents/',
    primaryLabel: 'Live Demo',
  },
  {
    id: 'project-2',
    title: 'Mycelium',
    description: 'AI That Prevents $500K+ Construction Conflicts. Upload your project schedule and detect conflicts before trades arrive on site. Save millions in delays, rework, and coordination costs.',
    tech: ['Next.js', 'AI/ML', 'TypeScript', 'Construction Tech', 'Automation'],
    imageUrlId: 'project-2',
    primaryUrl: 'https://nepa-ai.com/agents/',
    primaryLabel: 'View Webpage',
  },
  {
    id: 'project-3',
    title: 'Sky Racer',
    description: 'Fly Through The City! An interactive browser-based game where you dodge obstacles, collect rings, and rack up points. Built with engaging gameplay mechanics and smooth controls.',
    tech: ['JavaScript', 'HTML5 Canvas', 'Game Development', 'Web Animation'],
    imageUrlId: 'project-3',
    primaryUrl: 'https://github.com/bkennedyshit/Reddit_Plane_Submission',
    primaryLabel: 'View Code',
    secondaryUrl: 'https://www.reddit.com/r/sky_racer_game_dev/',
    secondaryLabel: 'Play Game',
  },
  {
    id: 'project-4',
    title: 'GitHub',
    description: 'Check out my full collection of projects, contributions, and open source work. From web apps to AI experiments, game development to automation tools.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'C++', 'C#', 'Rust'],
    imageUrlId: 'project-4',
    primaryUrl: 'https://github.com/bkennedyshit',
    primaryLabel: 'View GitHub',
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
      { name: 'Python', icon: Code },
      { name: 'C++', icon: Cpu },
      { name: 'C#', icon: FileCode },
      { name: 'Rust', icon: Cog },
      { name: '.NET', icon: SquareStack },
      { name: 'Full Stack', icon: Database },
    ],
  },
  {
    title: 'AI & Cloud',
    skills: [
      { name: 'AI/ML', icon: Bot },
      { name: 'Automation', icon: GitBranch },
      { name: 'Azure', icon: Cloud },
      { name: 'AWS', icon: Cloud },
      { name: 'OpenAI', icon: Bot },
      { name: 'Content AI', icon: Bot },
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
      { name: 'Systems Design', icon: Server },
      { name: 'Music Production', icon: Atom },
      { name: 'Video Editing', icon: SquareStack },
    ],
  },
];

export const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/bkennedyshit' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/billykennedybmx/' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/billykennedybmx' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/billy_kennedy_bmx/' },
];
