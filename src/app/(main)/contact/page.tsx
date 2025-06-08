
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const address = "241B Jubilee Town, Lahore, Pakistan";
  const phoneNumber = "+92 331 5033761";
  // Generic coordinates for Lahore for map placeholder
  const mapPlaceholderUrl = "https://placehold.co/1200x400.png"; 

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Contact Us
        </h1>
        <p className="text-xl text-muted-foreground mt-2">
          We'd love to hear from you!
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center">
              <MapPin className="h-6 w-6 mr-3 text-primary" />
              Our Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-foreground">{address}</p>
            <div className="aspect-[16/9] w-full relative rounded-md overflow-hidden border">
              <Image
                src={mapPlaceholderUrl}
                alt="Map showing Ghar Tak location in Lahore"
                layout="fill"
                objectFit="cover"
                data-ai-hint="city map Lahore"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center">
              <Phone className="h-6 w-6 mr-3 text-primary" />
              Get in Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-foreground">
              For inquiries, support, or feedback, please reach out to us:
            </p>
            <div>
              <h3 className="font-semibold">Phone:</h3>
              <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="text-primary hover:underline text-lg">
                {phoneNumber}
              </a>
            </div>
            <div>
              <h3 className="font-semibold">Email:</h3>
              <a href="mailto:info@ghartak.com" className="text-primary hover:underline text-lg">
                info@ghartak.com
              </a>
              <p className="text-sm text-muted-foreground">(Placeholder email)</p>
            </div>
             <p className="text-muted-foreground text-sm mt-4">
              Alternatively, you can visit our office during business hours.
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Placeholder for a contact form if needed in the future */}
      {/* 
      <section className="mt-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
            <CardDescription>We typically respond within 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div><Label htmlFor="name">Your Name</Label><Input id="name" /></div>
            <div><Label htmlFor="email">Your Email</Label><Input id="email" type="email" /></div>
            <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={5} /></div>
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>
      </section>
      */}
    </div>
  );
}
