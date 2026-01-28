import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,hsl(var(--primary)/0.1),transparent_70%)]"></div>
      <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center md:px-6">
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 overflow-hidden rounded-full border-4 border-primary/20">
            <Image
              src="/images/billy_background.png"
              alt="William Kennedy"
              width={150}
              height={150}
              className="h-36 w-36 object-cover sm:h-40 sm:w-40"
              priority
            />
          </div>
          <h1 className="font-headline text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            William Kennedy
          </h1>
          <p className="mt-4 text-lg font-semibold text-primary sm:text-xl md:text-2xl">
            Entrepreneur & Developer
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Full-range creative and systems creator specializing in 3D modeling, web development, 
            content automation, and AI/ML. From AEC design to AR/VR experiences, I bring ideas to life 
            across multiple creative disciplines.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#projects">
                <ArrowDown />
                View My Work
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#contact">
                <Mail />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
