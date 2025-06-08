
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const address = "241B Jubilee Town, Lahore, Pakistan";
  const phoneNumber = "+92 331 5033761";

  return (
    <footer className="py-6 md:px-8 md:py-0 border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3 text-primary">Ghar Tak</h3>
            <p className="text-muted-foreground">
              Instant Delivery & Local Services at Your Doorstep
            </p>
            <p className="text-muted-foreground mt-2">
              &copy; {currentYear} Ghar Tak All rights reserved
            </p>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
              <Link href="/stores" className="text-muted-foreground hover:text-primary">Stores</Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link>
              <Link href="/support" className="text-muted-foreground hover:text-primary">Support</Link>
              <Link href="/become-provider" className="text-muted-foreground hover:text-primary">Become a Provider</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-3">Contact Info</h3>
            <div className="text-muted-foreground space-y-2">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-primary" />
                <span>{address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="hover:text-primary">
                  {phoneNumber}
                </a>
              </div>
               <p className="mt-4 text-xs">Made and designed by Faizan Abbasi</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
