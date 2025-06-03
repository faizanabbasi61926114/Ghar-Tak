
'use client';

import { useState, useEffect } from 'react';
import type { Location } from '@/lib/types';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function LocationDisplay() {
  const [location, setLocation] = useState<Location | null>(null);
  const [displayAddress, setDisplayAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchLocation = () => {
    setLoading(true);
    setError(null);
    
    // Simulate fetching location and reverse geocoding
    setTimeout(() => {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by your browser.');
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // In a real app, you'd use a reverse geocoding service here
          // For now, we'll use a mock society name
          const mockSocietyName = "DHA Phase 6, Karachi"; 
          setLocation({ lat: latitude, lng: longitude, address: mockSocietyName });
          setDisplayAddress(mockSocietyName);
          setLoading(false);
        },
        (err) => {
          setError(`Error getting location: ${err.message}. Using default.`);
          // Fallback to a default mock society name if geolocation fails
          const defaultSocietyName = "Gulberg III, Lahore";
          setLocation({ lat: 31.5204, lng: 74.3587, address: defaultSocietyName}); // Default to Lahore if geolocation fails
          setDisplayAddress(defaultSocietyName);
          setLoading(false);
        }
      );
    }, 500); // Simulate network delay for geocoding
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
      {error && !displayAddress && ( // Only show primary error if no address is displayed
        <div className="flex items-center space-x-2">
          <span className="text-destructive">{error}</span>
          <Button variant="outline" size="sm" onClick={fetchLocation}>Try Again</Button>
        </div>
      )}
      {displayAddress && (
        <div className="flex items-center space-x-2">
          <span>Location: {displayAddress}</span>
           <Button variant="ghost" size="sm" onClick={fetchLocation} className="text-primary hover:text-primary/80">Refresh</Button>
        </div>
      )}
       {!displayAddress && !error && !loading && ( // Should ideally not happen if fetchLocation always sets a displayAddress
         <div className="flex items-center space-x-2">
            <span>Could not determine location.</span>
            <Button variant="outline" size="sm" onClick={fetchLocation}>Detect Location</Button>
         </div>
       )}
    </div>
  );
}
