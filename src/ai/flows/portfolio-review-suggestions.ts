'use server';

/**
 * @fileOverview AI-powered portfolio review and suggestion generator.
 *
 * This file defines a Genkit flow that analyzes a user's portfolio content and provides tailored suggestions
 * for improvement, based on a specified goal (e.g., appealing to FAANG recruiters).
 *
 * - portfolioReviewSuggestions - The main function to trigger the portfolio review process.
 * - PortfolioReviewInput - The input type definition for the portfolioReviewSuggestions function.
 * - PortfolioReviewOutput - The output type definition for the portfolioReviewSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioReviewInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The content of the portfolio to be reviewed.'),
  goal: z
    .string()
    .describe(
      'The specific goal for the portfolio, e.g., \'appeal to FAANG recruiters\'.' +
        ' Used to tailor the suggestions.'
    ),
});
export type PortfolioReviewInput = z.infer<typeof PortfolioReviewInputSchema>;

const PortfolioReviewOutputSchema = z.object({
  suggestions:
    z.string()
      .describe('AI-generated suggestions for improving the portfolio content.'),
});
export type PortfolioReviewOutput = z.infer<typeof PortfolioReviewOutputSchema>;

export async function portfolioReviewSuggestions(
  input: PortfolioReviewInput
): Promise<PortfolioReviewOutput> {
  return portfolioReviewSuggestionsFlow(input);
}

const portfolioReviewPrompt = ai.definePrompt({
  name: 'portfolioReviewPrompt',
  input: {schema: PortfolioReviewInputSchema},
  output: {schema: PortfolioReviewOutputSchema},
  prompt: `You are an AI portfolio review assistant. Analyze the given portfolio content and provide suggestions tailored to the specified goal.\n\nPortfolio Content: {{{portfolioContent}}}\nGoal: {{{goal}}}\n\nSuggestions:`,
});

const portfolioReviewSuggestionsFlow = ai.defineFlow(
  {
    name: 'portfolioReviewSuggestionsFlow',
    inputSchema: PortfolioReviewInputSchema,
    outputSchema: PortfolioReviewOutputSchema,
  },
  async input => {
    const {output} = await portfolioReviewPrompt(input);
    return output!;
  }
);
