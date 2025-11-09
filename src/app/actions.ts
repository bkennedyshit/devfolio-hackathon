'use server';

import { z } from 'zod';
import { portfolioReviewSuggestions } from '@/ai/flows/portfolio-review-suggestions';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check your input.',
      success: false,
    };
  }

  // In a real app, you would send an email or save to a database here.
  console.log('Contact form submitted:', validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}


const portfolioReviewSchema = z.object({
  portfolioContent: z.string().min(50, 'Portfolio content must be at least 50 characters.'),
  goal: z.string().min(5, 'Goal must be at least 5 characters.'),
});

export async function getPortfolioReview(prevState: any, formData: FormData) {
  const validatedFields = portfolioReviewSchema.safeParse({
    portfolioContent: formData.get('portfolioContent'),
    goal: formData.get('goal'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please fill out all fields correctly.',
      suggestions: null,
    };
  }

  try {
    const result = await portfolioReviewSuggestions(validatedFields.data);
    return {
      message: 'Analysis complete!',
      suggestions: result.suggestions,
      errors: {},
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred during analysis. Please try again.',
      suggestions: null,
      errors: {},
    };
  }
}
