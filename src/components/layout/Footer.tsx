import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} Ghar Tak. All rights reserved.
        </p>
        <nav className="flex gap-4 items-center text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-primary">About Us</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
          <Link href="/become-provider" className="hover:text-primary">Become a Provider</Link>
        </nav>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Made and designed by Faizan Abbasi.
        </p>
      </div>
    </footer>
  );
}
