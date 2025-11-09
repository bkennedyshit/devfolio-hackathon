'use client';

import { useActionState, useOptimistic } from 'react';
import { getPortfolioReview } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Loader2, BrainCircuit } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useOptimistic();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="animate-spin" /> : <Wand2 />}
      Analyze Portfolio
    </Button>
  );
}

export default function PortfolioReviewSection() {
  const initialState = { message: null, suggestions: null, errors: {} };
  const [state, dispatch] = useActionState(getPortfolioReview, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && !state.suggestions) {
      toast({
        title: state.message.startsWith('An error') ? 'Error' : 'Notification',
        description: state.message,
        variant: state.message.startsWith('An error') ? 'destructive' : 'default',
      });
    }
    if (state.suggestions) {
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section id="review" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              AI-Powered Feedback
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Improve Your Portfolio
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Not sure if your portfolio hits the mark? Paste your portfolio's text content and specify a goal (e.g., "appeal to FAANG recruiters" or "showcase freelance capabilities") to get tailored suggestions from our AI assistant.
            </p>
          </div>
          <Card>
            <form action={dispatch} ref={formRef}>
              <CardHeader>
                <CardTitle>Portfolio Analyzer</CardTitle>
                <CardDescription>Get instant feedback to make your portfolio shine.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="portfolioContent">Portfolio Content</Label>
                  <Textarea
                    id="portfolioContent"
                    name="portfolioContent"
                    placeholder="Paste the text from your portfolio's home, about, and project pages here."
                    rows={8}
                  />
                  {state.errors?.portfolioContent && <p className="text-sm text-destructive">{state.errors.portfolioContent[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Your Goal</Label>
                  <Input
                    id="goal"
                    name="goal"
                    placeholder="e.g., Appeal to FAANG recruiters"
                  />
                  {state.errors?.goal && <p className="text-sm text-destructive">{state.errors.goal[0]}</p>}
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
        </div>
        {state.suggestions && (
          <Card className="mt-12 bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <BrainCircuit />
                AI Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none text-foreground whitespace-pre-wrap">
                {state.suggestions}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
