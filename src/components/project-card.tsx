import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrlId: string;
  githubUrl: string;
  liveUrl: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  imageUrlId,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === imageUrlId);

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
      {image && (
        <div className="aspect-video overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <Button asChild variant="outline" className="w-full">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github />
            GitHub
          </Link>
        </Button>
        <Button asChild className="w-full">
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
