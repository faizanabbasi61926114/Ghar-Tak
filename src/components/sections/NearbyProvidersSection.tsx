import { mockStores, mockServiceProviders } from '@/lib/mock-data';
import StoreCard from '@/components/shared/StoreCard';
import ServiceCard from '@/components/shared/ServiceCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NearbyProvidersSection() {
  // In a real app, these would be filtered by user's location
  const nearbyStores = mockStores.slice(0, 3);
  const nearbyServiceProviders = mockServiceProviders.slice(0, 3);

  return (
    <section className="py-8 md:py-12">
      <Tabs defaultValue="stores" className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-headline font-bold text-center md:text-left mb-4 md:mb-0">Discover Nearby</h2>
          <TabsList>
            <TabsTrigger value="stores">Stores</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="stores">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
          {mockStores.length > 3 && (
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/stores">
                  View All Stores <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="services">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyServiceProviders.map((provider) => (
              <ServiceCard key={provider.id} serviceProvider={provider} />
            ))}
          </div>
           {mockServiceProviders.length > 3 && (
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/services">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
