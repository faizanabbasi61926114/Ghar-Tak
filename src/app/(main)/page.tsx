
import LocationDisplay from '@/components/shared/LocationDisplay';
import SearchInput from '@/components/shared/SearchInput';
import PersonalizedSuggestionsSection from '@/components/sections/PersonalizedSuggestionsSection';
import ServiceCategoriesSection from '@/components/sections/ServiceCategoriesSection';
import NearbyProvidersSection from '@/components/sections/NearbyProvidersSection';
import MapPlaceholder from '@/components/shared/MapPlaceholder';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Placeholder SVG Logo (as it's not used directly on this page anymore, consider moving or removing if not needed elsewhere)
const LogoSvg = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-8 w-8 text-primary">
    <rect x="3" y="6" width="18" height="12" rx="3" />
  </svg>
);


export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-12 bg-gradient-to-br from-primary/10 via-background to-background rounded-xl shadow-sm">
        <div className="container mx-auto px-4">
          {/* Logo text is now primarily in the header. This h1 acts as the main app title on the page. */}
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-3">
            Welcome to Ghar Tak
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Your One-Stop Local Hub. Discover and order products & services from your neighborhood, delivered right to your doorstep.
          </p>
          <div className="max-w-xl mx-auto mb-2">
            <SearchInput placeholder="What are you looking for today?" />
          </div>
          <p className="text-sm text-muted-foreground mb-8">Powered by AI for smarter results.</p>
          <div className="flex justify-center">
            <LocationDisplay />
          </div>
        </div>
      </section>
      
      <PersonalizedSuggestionsSection />
      <ServiceCategoriesSection />
      <MapPlaceholder />
      <NearbyProvidersSection />

      <section className="py-8 md:py-12 text-center bg-card border rounded-xl shadow-sm">
        <h2 className="text-3xl font-headline font-bold mb-4">Ready to Explore?</h2>
        <p className="text-muted-foreground mb-6">
          Sign up or log in to save your favorites and manage your orders.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link href="/auth/signup">Get Started</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/auth/signin">Sign In</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
