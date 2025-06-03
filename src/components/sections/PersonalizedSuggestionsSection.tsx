
'use client';

import { useEffect, useState } from 'react';
import { getPersonalizedProductRecommendations, PersonalizedProductRecommendationsInput } from '@/ai/flows/product-recommendations';
import type { AIProductRecommendation } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight, Loader2, Search } from 'lucide-react';
import Link from 'next/link';

export default function PersonalizedSuggestionsSection() {
  const [recommendations, setRecommendations] = useState<AIProductRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      setIsLoading(true);
      setError(null);
      try {
        // Mock input for the AI flow - simulating a user in Karachi with no past purchases
        const mockAIInput: PersonalizedProductRecommendationsInput = {
          userLocation: { latitude: 24.8607, longitude: 67.0011 }, // Karachi, Pakistan
          pastPurchases: [], // Empty past purchases to trigger "Search something to suggest"
          nearbyStores: [
            {
              storeName: "Imtiaz Super Market",
              products: ["Shan Masala", "Tapal Danedar", "Olpers Milk", "Fresh Vegetables", "Basmati Rice"],
            },
            {
              storeName: "Hyperstar",
              products: ["Imported Chocolates", "Electronics", "Home Appliances", "Clothing", "Bakery Items"],
            },
          ],
        };
        const result = await getPersonalizedProductRecommendations(mockAIInput);
        // Ensure result.recommendedProducts is always an array
        setRecommendations(result.recommendedProducts || []);
      } catch (e) {
        console.error("Error fetching personalized recommendations:", e);
        setError("Could not load suggestions at this time.");
        setRecommendations([]); // Ensure recommendations is an empty array on error
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecommendations();
  }, []);

  if (isLoading) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-headline font-bold mb-6 text-center md:text-left">Just For You</h2>
        <div className="flex items-center justify-center p-8 border rounded-lg bg-card min-h-[150px]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="ml-2 text-muted-foreground">Loading personalized suggestions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <h2 className="text-2xl font-headline font-bold mb-6 text-center md:text-left">Just For You</h2>
        <div className="p-8 border rounded-lg bg-destructive/10 text-destructive text-center min-h-[150px] flex flex-col items-center justify-center">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <section className="py-8 md:py-12">
        <h2 className="text-3xl font-headline font-bold mb-8 text-center md:text-left">Just For You</h2>
        <div className="text-center py-10 px-6 border rounded-lg bg-card shadow-sm min-h-[150px] flex flex-col items-center justify-center">
          <Search className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground mb-1">No suggestions right now.</p>
          <p className="text-md text-muted-foreground">Search something to suggest!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-12">
      <h2 className="text-3xl font-headline font-bold mb-8 text-center md:text-left">Just For You</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 p-4">
          {recommendations.map((productName, index) => (
            <Card key={index} className="w-64 min-w-[250px] flex-shrink-0 shadow-lg overflow-hidden">
              <CardHeader>
                <CardTitle className="text-lg font-semibold line-clamp-2 h-14">{productName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">You might like this product based on your activity and local availability.</p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/search?q=${encodeURIComponent(productName)}`}>
                    Find Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
