import { mockStores, mockServiceProviders } from '@/lib/mock-data';
import StoreCard from '@/components/shared/StoreCard';
import ServiceCard from '@/components/shared/ServiceCard';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  // Filter for favorited items (mocked)
  const favoriteStores = mockStores.filter(store => store.isFavorite);
  // Assuming we add an isFavorite to ServiceProvider or manage it elsewhere
  const favoriteServices = mockServiceProviders.filter((_, index) => index % 2 === 0); // Mocking some favorites

  return (
    <div className="space-y-12">
      <section>
        <div className="flex items-center mb-8">
          <Heart className="h-8 w-8 text-destructive mr-3" />
          <h1 className="text-3xl font-bold font-headline">Your Favorites</h1>
        </div>

        {favoriteStores.length === 0 && favoriteServices.length === 0 && (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Favorites Yet</h2>
            <p className="text-muted-foreground">Start exploring and mark items you love with the heart icon!</p>
          </div>
        )}

        {favoriteStores.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold font-headline mb-6">Favorite Stores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteStores.map(store => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          </div>
        )}

        {favoriteServices.length > 0 && (
           <div>
            <h2 className="text-2xl font-semibold font-headline mb-6">Favorite Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteServices.map(service => (
                <ServiceCard key={service.id} serviceProvider={service} isFavorite={true} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
