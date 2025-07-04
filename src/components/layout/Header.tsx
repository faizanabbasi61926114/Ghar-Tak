
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { UserCircle, Menu, Briefcase } from 'lucide-react'; // Added Briefcase for Provider Dashboard
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggleButton } from '@/components/shared/ThemeToggleButton';

// Placeholder SVG Logo
const LogoSvg = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 text-primary">
    <rect x="3" y="6" width="18" height="12" rx="3" />
  </svg>
);

export default function Header() {
  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/stores", label: "Stores" },
    { href: "/favorites", label: "Favorites" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center">
            <LogoSvg />
            <span className="font-bold font-headline">Ghar Tak</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Placeholder for SearchInput if it's added back via SearchInput component */}
            {/* <SearchInput placeholder="Search products or services..." /> */}
             <Input
              type="search"
              placeholder="Search products or services..."
              className="h-9 md:w-64 lg:w-96"
            />
          </div>
          <nav className="flex items-center">
            <ThemeToggleButton />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <UserCircle className="h-5 w-5" />
                  <span className="sr-only">User Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link href="/provider/dashboard" className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4" /> Provider Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/auth/signin">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/auth/signup">Sign Up</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link href="/" className="flex items-center mb-6 px-4">
                  <LogoSvg />
                  <span className="font-bold font-headline">Ghar Tak</span>
                </Link>
                <div className="flex flex-col space-y-2 px-4">
                  {navLinks.map(link => (
                    <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  ))}
                   <DropdownMenuSeparator />
                    <Link href="/profile" className="text-muted-foreground hover:text-foreground">Profile</Link>
                    <Link href="/provider/dashboard" className="text-muted-foreground hover:text-foreground flex items-center">
                       <Briefcase className="mr-2 h-4 w-4" /> Provider Dashboard
                    </Link>
                    <Link href="/auth/signin" className="text-muted-foreground hover:text-foreground">Sign In</Link>
                    <Link href="/auth/signup" className="text-muted-foreground hover:text-foreground">Sign Up</Link>

                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
