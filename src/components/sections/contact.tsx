'use client';

import { useActionState, useOptimistic } from 'react';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { socialLinks } from '@/lib/data';

function SubmitButton() {
  const { pending } = useOptimistic();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? <Loader2 className="animate-spin" /> : <Send />}
      Send Message
    </Button>
  );
}

export default function ContactSection() {
  const initialState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Have a project in mind, want to collaborate, or just say hi? Drop me a line.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-lg">
          <Card className="bg-background/50">
            <form action={dispatch} ref={formRef}>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" />
                  {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." />
                  {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-6">
                <SubmitButton />
                <div className="flex w-full flex-col items-center gap-4">
                  <p className="text-sm text-muted-foreground">Or connect with me on social media:</p>
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
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
