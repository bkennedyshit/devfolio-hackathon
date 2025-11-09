import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Skills & Tech Stack
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <Card key={category.title} className="bg-background/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <skill.icon className="h-6 w-6 text-muted-foreground" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
