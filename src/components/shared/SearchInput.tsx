'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

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

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
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
      <Button type="submit" size="lg" className="h-11">
        <Search className="h-5 w-5 mr-2" />
        Search
      </Button>
    </form>
  );
}
