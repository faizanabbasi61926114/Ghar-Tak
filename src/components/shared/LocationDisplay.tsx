'use client';

import { useState, useEffect } from 'react';
import type { Location } from '@/lib/types';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function LocationDisplay() {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchLocation = () => {
    setLoading(true);
    setError(null);
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // For simplicity, we're not doing reverse geocoding here.
        // In a real app, you'd convert lat/lng to an address.
        setLocation({ lat: latitude, lng: longitude, address: `Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}` });
        setLoading(false);
      },
      (err) => {
        setError(`Error getting location: ${err.message}`);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center space-x-2 text-sm text-muted-foreground p-2 rounded-lg bg-muted/50">
        <MapPin className="h-5 w-5 text-primary" />
        <Skeleton className="h-4 w-48" />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground p-3 rounded-lg shadow-sm border bg-card">
      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
      {error && (
        <div className="flex items-center space-x-2">
          <span className="text-destructive">{error}</span>
          <Button variant="outline" size="sm" onClick={fetchLocation}>Try Again</Button>
        </div>
      )}
      {location && !error && (
        <div className="flex items-center space-x-2">
          <span>Your location: {location.address || `Lat: ${location.lat.toFixed(2)}, Lng: ${location.lng.toFixed(2)}`}</span>
           <Button variant="ghost" size="sm" onClick={fetchLocation} className="text-primary hover:text-primary/80">Refresh</Button>
        </div>
      )}
       {!location && !error && !loading && (
         <div className="flex items-center space-x-2">
            <span>Could not determine location.</span>
            <Button variant="outline" size="sm" onClick={fetchLocation}>Detect Location</Button>
         </div>
       )}
    </div>
  );
}
