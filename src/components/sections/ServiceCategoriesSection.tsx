import Link from 'next/link';
import { mockServiceCategories } from '@/lib/mock-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ServiceCategoriesSection() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="text-3xl font-headline font-bold mb-8 text-center md:text-left">Explore Services</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {mockServiceCategories.map((category) => (
          <Link key={category.id} href={`/services/${category.id}`} className="group">
            <Card className="text-center h-full flex flex-col items-center justify-center p-4 md:p-6 transition-all hover:shadow-xl hover:border-primary transform hover:-translate-y-1">
              <CardHeader className="p-0 mb-3">
                {category.icon && <category.icon className="h-10 w-10 md:h-12 md:w-12 text-primary group-hover:text-accent transition-colors" />}
                {!category.icon && category.imageUrl && (
                   <div className="relative h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden">
                     <Image src={category.imageUrl} alt={category.name} layout="fill" objectFit="cover" data-ai-hint="service icon" />
                   </div>
                )}
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="text-md md:text-lg font-semibold group-hover:text-primary transition-colors">{category.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
