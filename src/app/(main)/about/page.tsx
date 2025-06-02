
import { CheckCircle, HelpCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold font-headline text-primary">
          Ghar Tak
        </h1>
        <p className="text-xl text-muted-foreground mt-2">
          Instant Delivery & Local Services at Your Doorstep
        </p>
      </header>

      <section className="mb-12 space-y-6">
        <h2 className="text-3xl font-semibold font-headline text-primary mb-4">Overview</h2>
        <p className="text-lg text-foreground leading-relaxed">
          Ghar Tak is a hyperlocal Pakistani startup revolutionizing the way people access daily essentials and professional services. Leveraging advanced geolocation and real-time availability algorithms, Ghar Tak connects users to the nearest vendors and service professionals, ensuring products and services arrive within minutes—not hours.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          Whether it's groceries, cleaning supplies, or skilled professionals like plumbers, car mechanics, cleaners, or barbers—Ghar Tak finds the closest trusted provider so your needs are fulfilled efficiently and reliably.
        </p>
        <p className="text-lg text-foreground leading-relaxed">
          Combining fast delivery principles like those seen in Blinkit and real-time service bookings inspired by platforms like Urban Company, Ghar Tak adapts the model for Pakistan’s unique market, focusing on speed, safety, affordability, and locality.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold font-headline text-primary mb-6 flex items-center">
          <CheckCircle className="h-8 w-8 mr-3 text-accent" />
          Key Features
        </h2>
        <ul className="list-none space-y-4 text-lg text-foreground">
          {[
            { title: "Real-Time Location Matching", description: "Automatically connects users to the nearest providers." },
            { title: "Dual Offerings", description: "Access both physical products and on-demand services through one seamless app." },
            { title: "5-Minute ETA Promise", description: "In selected areas." },
            { title: "Trusted Providers", description: "Verified service professionals and shop vendors with customer ratings." },
            { title: "Multi-Language UI", description: "Tailored for Urdu and English-speaking audiences." },
            { title: "Payment Options", description: "Cash on Delivery & Digital Wallet Support." },
          ].map((feature, index) => (
            <li key={index} className="flex items-start p-4 bg-card rounded-lg shadow-sm border">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-base">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-semibold font-headline text-primary mb-6 flex items-center">
          <HelpCircle className="h-8 w-8 mr-3 text-accent" />
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-8">
          {[
            {
              q: "Q1. How is Ghar Tak different from other delivery or service apps?",
              a: "Ghar Tak focuses on ultra-localized matching—prioritizing closest available service providers or product vendors to ensure fast fulfillment. We combine both product delivery and service booking into a single mobile platform."
            },
            {
              q: "Q2. What kind of services can I book?",
              a: "You can book local professionals such as: Car mechanics, Electricians, Plumbers, Hair stylists/barbers, House cleaners. More professions are added regularly."
            },
            {
              q: "Q3. How quickly can I expect a delivery or service?",
              a: "In core areas, we aim for a 5-minute arrival window by connecting you with the closest available vendor or service professional in real time."
            },
            {
              q: "Q4. How are professionals and vendors verified?",
              a: "Each vendor and service professional goes through a strict onboarding process, including identity checks, quality tests, and community ratings."
            },
            {
              q: "Q5. Is there a delivery fee?",
              a: "A minimal convenience fee may apply, depending on distance and urgency, but we aim to keep services affordable and transparent."
            },
            {
              q: "Q6. Can I reorder or rebook easily?",
              a: "Yes. Our Quick Reorder and 1-Click Rebooking features make it easy to repeat previous orders or services without starting from scratch."
            },
            {
              q: "Q7. Is Ghar Tak available outside major cities?",
              a: "We're starting in urban and semi-urban areas but expanding quickly. Location availability will be shown when you open the app."
            },
            {
              q: "Q8. Is my location data secure?",
              a: "Yes. We only use your location to provide the best local matches and never sell your data to third parties."
            }
          ].map((faq, index) => (
            <div key={index} className="p-6 bg-card rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold font-headline mb-2">{faq.q}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
