// src/ai/flows/product-recommendations.ts
'use server';

/**
 * @fileOverview A personalized product recommendation AI agent.
 *
 * - getPersonalizedProductRecommendations - A function that handles the product recommendation process.
 * - PersonalizedProductRecommendationsInput - The input type for the getPersonalizedProductRecommendations function.
 * - PersonalizedProductRecommendationsOutput - The return type for the getPersonalizedProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedProductRecommendationsInputSchema = z.object({
  userLocation: z
    .object({
      latitude: z.number().describe('The latitude of the user.'),
      longitude: z.number().describe('The longitude of the user.'),
    })
    .describe('The current location of the user.'),
  pastPurchases: z
    .array(z.string())
    .describe('A list of product names the user has purchased in the past.'),
  nearbyStores: z
    .array(
      z.object({
        storeName: z.string().describe('The name of the store.'),
        products: z.array(z.string()).describe('A list of product names the store sells.'),
      })
    )
    .describe('A list of nearby stores and the products they sell.'),
});
export type PersonalizedProductRecommendationsInput = z.infer<typeof PersonalizedProductRecommendationsInputSchema>;

const PersonalizedProductRecommendationsOutputSchema = z.object({
  recommendedProducts: z
    .array(z.string())
    .describe('A list of product names recommended to the user based on their location and past purchases.'),
});
export type PersonalizedProductRecommendationsOutput = z.infer<typeof PersonalizedProductRecommendationsOutputSchema>;

export async function getPersonalizedProductRecommendations(
  input: PersonalizedProductRecommendationsInput
): Promise<PersonalizedProductRecommendationsOutput> {
  return personalizedProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProductRecommendationsPrompt',
  input: {schema: PersonalizedProductRecommendationsInputSchema},
  output: {schema: PersonalizedProductRecommendationsOutputSchema},
  prompt: `You are a personal shopping assistant. You will generate a list of product recommendations based on the user's location, past purchases, and nearby stores.

User Location: Latitude: {{{userLocation.latitude}}}, Longitude: {{{userLocation.longitude}}}
Past Purchases:
{{#if pastPurchases}}
  {{#each pastPurchases}}- {{{this}}}\n  {{/each}}
{{else}}
  None
{{/if}}
Nearby Stores:
{{#if nearbyStores}}
  {{#each nearbyStores}}
- Store Name: {{{storeName}}}, Products: {{#each products}}{{{this}}}, {{/each}}\n  {{/each}}
{{else}}
  No nearby stores found.
{{/if}}


Based on this information, what products would you recommend? Return a JSON array of product names. Limit the list to 5 products.
`,
});

const personalizedProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProductRecommendationsFlow',
    inputSchema: PersonalizedProductRecommendationsInputSchema,
    outputSchema: PersonalizedProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
