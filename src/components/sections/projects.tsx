import ProjectCard from '@/components/project-card';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A selection of my work. I'm always looking for new challenges and
            exciting projects to work on.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
