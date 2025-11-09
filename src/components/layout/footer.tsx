import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="#home" className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="text-primary" />
            <span>DevFolio</span>
          </Link>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DevFolio. All rights reserved. Built for DevOne Hackathon 2025.
        </div>
      </div>
    </footer>
  );
}
