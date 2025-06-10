
'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Camera } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

interface SearchInputProps {
  initialQuery?: string;
  placeholder?: string;
  className?: string;
}

export default function SearchInput({ 
  initialQuery = '', 
  placeholder = "Search for anything...",
  className 
}: SearchInputProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleImageSearchClick = () => {
    toast({
      title: "Image Search",
      description: "Image search functionality is coming soon!",
    });
    // In a real implementation, this would trigger an image picker
    // or camera access, then send the image to an AI flow.
  };

  return (
    <form onSubmit={handleSearch} className={`flex w-full items-center space-x-2 ${className}`}>
      <Input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow h-11 text-base"
      />
      <Button type="button" variant="outline" size="icon" onClick={handleImageSearchClick} className="h-11 w-11 flex-shrink-0">
        <Camera className="h-5 w-5" />
        <span className="sr-only">Search by image</span>
      </Button>
      <Button type="submit" size="lg" className="h-11">
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </form>
  );
}
