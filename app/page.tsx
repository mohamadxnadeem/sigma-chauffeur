import type { Metadata } from "next";
import HeroBanner from "../components/sections/HeroBanner";
import FeaturedVehicles from "../components/sections/FeaturedVehicles";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import FeaturedExperiences from "../components/sections/FeaturedExperiences";
import TestimonialsSection from "../components/sections/testimonials/TestimonialsSection";
import TestimonialsCta from "../components/sections/testimonials/TestimonialsCta";
import ChauffeurAuthoritySection from "../components/sections/ChauffeurAuthoritySection";
import PrivateServiceSection from "../components/sections/PrivateServiceSection";

const SITE_URL = "https://sigmachauffeur.vip";

export const metadata: Metadata = {
  title: "Private Chauffeur Cape Town | Full-Day & Multi-Day Hire | Sigma VIP",
  description:
    "Private full-day chauffeur hire in Cape Town. Multi-day packages, private jet FBO transfers, and bespoke itineraries. Mercedes S-Class, G-Wagon, Range Rover. All-inclusive. Arrange via WhatsApp.",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Private Chauffeur Cape Town | Full-Day & Multi-Day Hire | Sigma VIP",
    description:
      "Private full-day chauffeur hire across Cape Town and the Western Cape. Multi-day packages, private jet FBO coordination, and bespoke itineraries. One vehicle, one chauffeur, your schedule.",
    url: SITE_URL,
    siteName: "Sigma VIP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-car.jpg`,
        width: 1200,
        height: 630,
        alt: "Private chauffeur service Cape Town — Sigma VIP luxury fleet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Chauffeur Cape Town | Full-Day & Multi-Day Hire | Sigma VIP",
    description:
      "Private full-day chauffeur hire in Cape Town. Multi-day packages, private jet FBO transfers, and bespoke itineraries. Mercedes S-Class, G-Wagon, Range Rover.",
    images: [`${SITE_URL}/images/hero-car.jpg`],
  },
};

const trustItems = [
  {
    title: "Family & Multi-Vehicle Convoys",
    description:
      "Your principal vehicle, a family carrier, and a luggage vehicle dispatched together and coordinated throughout. One arrangement, one point of contact, no separate bookings to manage.",
  },
  {
    title: "Complete Discretion & Privacy",
    description:
      "Every vehicle is exclusively yours. Chauffeurs are vetted and personally briefed before each booking. NDAs available on request. No shared schedules, no other clients, no exceptions.",
  },
  {
    title: "Arabic-Speaking Chauffeurs on Request",
    description:
      "Arabic-speaking drivers available when you book. Halal-aware itinerary planning and prayer-time consideration are part of every booking that requires it, not an add-on.",
  },
  {
    title: "Private Jet FBO Coordination",
    description:
      "We liaise directly with the private terminal team at Cape Town International on ramp access, vehicle staging, and luggage handling. Your vehicle is confirmed and in position before your wheels touch down.",
  },
];

type ExperiencePhoto = {
  id: number;
  cover_photos: string;
  is_featured: boolean;
  order: number;
};

type Experience = {
  id: number;
  title: string;
  slug?: string;
  short_description?: string;
  highlight?: string;
  body?: string;
  cover_photos?: ExperiencePhoto[];
};

type ExperienceApiItem = {
  experience?: Experience;
} & Partial<Experience>;

type FeaturedExperienceItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
};

type CarPhoto = {
  cover_photos?: string;
  is_featured?: boolean;
};

type CarItem = {
  title?: string;
  slug?: string;
  short_description?: string;
  highlight?: string;
  body?: string;
  cover_photos?: CarPhoto[];
  images?: CarPhoto[];
  number_of_seats?: number;
  price?: string | number;
};

type CarsApiItem = {
  car?: CarItem;
} & Partial<CarItem>;

type FeaturedVehicleItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  seats?: number;
  price?: string;
};

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function truncateText(text: string, maxLength: number) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function formatPrice(price?: string | number) {
  if (price === undefined || price === null || price === "") return "";
  return `R${price}`;
}

function isBrowserRenderable(url?: string): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();
  return !lower.endsWith(".heic") && !lower.endsWith(".heif") && !lower.endsWith(".tiff");
}

function isFeaturedExperienceItem(
  item: FeaturedExperienceItem | null
): item is FeaturedExperienceItem {
  return item !== null;
}

function isFeaturedVehicleItem(
  item: FeaturedVehicleItem | null
): item is FeaturedVehicleItem {
  return item !== null;
}

async function getFeaturedExperiences(): Promise<FeaturedExperienceItem[]> {
  try {
    const response = await fetch(
      "https://web-production-1ab9.up.railway.app/api/experiences/all/",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch experiences");
    }

    const data: ExperienceApiItem[] = await response.json();

    const mapped: Array<FeaturedExperienceItem | null> = data.map(
      (item: ExperienceApiItem) => {
        const experience = item?.experience || item;

        if (!experience?.title) return null;

        const renderable = (experience.cover_photos || []).filter((p) =>
          isBrowserRenderable(p.cover_photos)
        );
        const featuredPhoto =
          renderable.find((photo) => photo.is_featured)?.cover_photos ||
          renderable[0]?.cover_photos ||
          "";

        const plainTextBody = stripHtml(experience.body || "");
        const description =
          experience.short_description ||
          experience.highlight ||
          truncateText(plainTextBody, 140) ||
          "Discover a premium private tour in Cape Town.";

        return {
          title: experience.title,
          description,
          href: experience.slug
            ? `/private-tours/${experience.slug}`
            : "/private-tours",
          image: featuredPhoto,
          alt: `Private ${experience.title} in Cape Town with Professional Driver`,
        };
      }
    );

    return mapped.filter(isFeaturedExperienceItem);
  } catch (error) {
    console.error("Error loading featured experiences:", error);
    return [];
  }
}

async function getFeaturedVehicles(): Promise<FeaturedVehicleItem[]> {
  try {
    const response = await fetch(
      "https://web-production-1ab9.up.railway.app/api/cars-for-hire/all/",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch cars for hire");
    }

    const data = await response.json();

    const sourceArray: CarsApiItem[] = Array.isArray(data)
      ? data
      : Array.isArray(data?.results)
      ? data.results
      : [];

    const mapped: Array<FeaturedVehicleItem | null> = sourceArray.map(
      (item: CarsApiItem) => {
        const car = item?.car || item;

        if (!car?.title) return null;

        const imageArray = (car.cover_photos || car.images || []).filter(
          (p: CarPhoto) => isBrowserRenderable(p.cover_photos)
        );

        const featuredPhoto =
          imageArray.find((photo: CarPhoto) => photo?.is_featured)
            ?.cover_photos ||
          imageArray[0]?.cover_photos ||
          "";

        const plainTextBody = stripHtml(car.body || "");
        const description =
          car.short_description ||
          car.highlight ||
          truncateText(plainTextBody, 140) ||
          "Luxury chauffeur vehicle available for private travel in Cape Town.";

        const href =
          typeof car.slug === "string" && car.slug.trim()
            ? `/chauffeur-services/${car.slug.trim()}`
            : "/#fleet";

        return {
          title: car.title,
          description,
          href,
          image: featuredPhoto,
          alt: `Luxury ${car.title} Chauffeur Service Cape Town - VIP Transport`,
          seats: car.number_of_seats,
          price: formatPrice(car.price),
        };
      }
    );

    return mapped.filter(isFeaturedVehicleItem);
  } catch (error) {
    console.error("Error loading vehicles:", error);
    return [];
  }
}

export default async function HomePage() {
  const [featuredVehicleItems, featuredExperienceItems] = await Promise.all([
    getFeaturedVehicles(),
    getFeaturedExperiences(),
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: "Sigma VIP",
        url: SITE_URL,
        telephone: "+27711081227",
        email: "info@sigmavip.co.za",
        priceRange: "RRRR",
        logo: `${SITE_URL}/images/logo.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cape Town",
          addressRegion: "Western Cape",
          addressCountry: "ZA",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "WebSite",
        name: "Sigma VIP",
        url: SITE_URL,
      },
      {
        "@type": "WebPage",
        name: "Private Chauffeur Cape Town | Full-Day & Multi-Day Hire | Sigma VIP",
        url: SITE_URL,
        description:
          "Private full-day chauffeur hire in Cape Town. Multi-day packages, private jet FBO transfers, and bespoke itineraries. Mercedes S-Class, G-Wagon, Range Rover.",
        image: [`${SITE_URL}/images/hero-car.jpg`],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is included in a full-day private chauffeur booking in Cape Town?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every booking is all-inclusive. One arrangement covers the vehicle, professional chauffeur, fuel, tolls, and parking. No meter, no surge, and nothing added on the day.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer multi-day chauffeur packages in Cape Town?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Multi-day packages are available across Cape Town and the Western Cape — covering the Cape Peninsula, Stellenbosch Winelands, Hermanus, and the Garden Route. Same vehicle and chauffeur throughout.",
            },
          },
          {
            "@type": "Question",
            name: "Do you handle private jet FBO transfers at Cape Town International?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We coordinate directly with Cape Town’s private terminal team on ramp access, vehicle staging, and luggage handling. Share your tail number via WhatsApp and we manage everything before you land.",
            },
          },
          {
            "@type": "Question",
            name: "Which vehicles are available for full-day hire?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our fleet includes the Mercedes S-Class, Mercedes G-Wagon, Range Rover Sport, BMW X5, Mercedes V-Class, Hyundai Staria, and BMW 5-Series. Choose based on party size and preference or let us recommend.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book a private chauffeur with Sigma VIP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Message us on WhatsApp at +27 71 108 1227. We respond within 30 minutes and confirm your vehicle, chauffeur, and itinerary from there.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        serviceType: "Private Chauffeur Hire",
        name: "Full-Day & Multi-Day Private Chauffeur Hire",
        provider: {
          "@type": "Organization",
          name: "Sigma VIP",
          url: SITE_URL,
        },
        areaServed: {
          "@type": "City",
          name: "Cape Town",
        },
        description:
          "Private full-day chauffeur hire and multi-day packages across Cape Town and the Western Cape. All-inclusive. Private jet FBO coordination, executive travel, and bespoke itineraries.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <HeroBanner
        eyebrow="Sigma VIP"
        title="Private Chauffeur Cape Town. Everything Arranged Before You Land."
        description="Sigma VIP coordinates your vehicles, chauffeurs, and itinerary as a single arrangement from arrival to departure. Family convoys, FBO ramp access for private jet arrivals, Arabic-speaking drivers on request, and multi-day packages across Cape Town and the Western Cape. One WhatsApp message to start."
        primaryCtaLabel="Book on WhatsApp"
        primaryCtaHref="https://wa.me/27711081227?text=Hi%2C%20I%27m%20interested%20in%20arranging%20a%20private%20chauffeur%20in%20Cape%20Town.%20Please%20can%20you%20assist%3F"
        secondaryCtaLabel="View Fleet"
        secondaryCtaHref="#fleet"
        image="/images/car.jpg"
        imageAlt="Private chauffeur service Cape Town — Sigma VIP luxury fleet"
      />

      <TestimonialsSection />

      <PrivateServiceSection />

      <div id="fleet">
        <FeaturedVehicles items={featuredVehicleItems} />
      </div>

      <TestimonialsCta />

      <WhyChooseUs
        title="The Details That Make the Difference"
        description="Private travel requires precision at every point. Here is how we structure every booking to deliver exactly that."
        items={trustItems}
      />

      <ChauffeurAuthoritySection />

      <FeaturedExperiences items={featuredExperienceItems} />
    </>
  );
}