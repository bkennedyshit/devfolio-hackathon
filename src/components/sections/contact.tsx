'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { socialLinks } from '@/lib/data';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mojwqpvb';

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {status === 'success' ? (
                  <div className="flex flex-col items-center gap-4 py-8 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                    <p className="text-lg font-medium">Thanks for reaching out!</p>
                    <p className="text-muted-foreground">I'll get back to you soon.</p>
                    <Button type="button" variant="outline" onClick={() => setStatus('idle')}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="Your message..." required />
                    </div>
                    {status === 'error' && (
                      <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
                    )}
                  </>
                )}
              </CardContent>
              {status !== 'success' && (
                <CardFooter className="flex flex-col items-start gap-6">
                  <Button type="submit" disabled={status === 'submitting'}>
                    {status === 'submitting' ? <Loader2 className="animate-spin" /> : <Send />}
                    Send Message
                  </Button>
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
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
