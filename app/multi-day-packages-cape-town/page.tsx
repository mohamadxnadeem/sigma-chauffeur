import type { Metadata } from "next";
import MultiDayPage from "../../components/sections/multi-day/MultiDayPage";

const SITE_URL = "https://sigmachauffeur.vip";

type CarPhoto = {
  id: number;
  cover_photos: string;
  is_featured?: boolean;
  order?: number;
};

type Car = {
  title?: string;
  slug?: string;
  short_description?: string;
  highlight?: string;
  number_of_seats?: number;
  cover_photos?: CarPhoto[];
  images?: CarPhoto[];
};

type CarsApiItem = {
  car?: Car;
} & Partial<Car>;

function isBrowserRenderable(url?: string): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();
  return (
    !lower.endsWith(".heic") &&
    !lower.endsWith(".heif") &&
    !lower.endsWith(".tiff")
  );
}

async function getVehicles() {
  try {
    const res = await fetch(
      "https://web-production-1ab9.up.railway.app/api/cars-for-hire/all/",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data: CarsApiItem[] = await res.json();
    return data
      .map((item) => {
        const car = item?.car || item;
        if (!car?.title) return null;
        const images = (car.cover_photos || car.images || []).filter((p) =>
          isBrowserRenderable(p.cover_photos)
        );
        return {
          title: car.title,
          slug: car.slug,
          description:
            car.short_description ||
            car.highlight ||
            "Premium chauffeur-driven vehicle available for multi-day hire in Cape Town.",
          image: images[0]?.cover_photos || "",
          seats: car.number_of_seats,
        };
      })
      .filter(Boolean) as {
      title: string;
      slug?: string;
      description: string;
      image: string;
      seats?: number;
    }[];
  } catch {
    return [];
  }
}

export const metadata: Metadata = {
  title:
    "Multi-Day Chauffeur Packages Cape Town | 3, 5 & 7-Day Private Hire | Sigma VIP",
  description:
    "Multi-day chauffeur packages in Cape Town from 3 to 7 days. Same driver, same vehicle, every morning. Airport transfers, Peninsula tours, Winelands, Hermanus, and all-inclusive pricing. Book via WhatsApp.",

  alternates: {
    canonical: `${SITE_URL}/multi-day-packages-cape-town`,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Multi-Day Chauffeur Packages Cape Town | Sigma VIP",
    description:
      "3, 5, and 7-day private chauffeur packages in Cape Town. Same driver daily, airport transfers included, fully customisable itineraries. Enquire via WhatsApp.",
    url: `${SITE_URL}/multi-day-packages-cape-town`,
    siteName: "Sigma VIP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 520,
        height: 520,
        alt: "Sigma VIP multi-day chauffeur packages Cape Town",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Multi-Day Chauffeur Packages Cape Town | Sigma VIP",
    description:
      "3, 5, and 7-day private chauffeur packages. Same driver, airport transfers, custom itineraries.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

const faqItems = [
  {
    question: "What is included in a multi-day package?",
    answer:
      "Every multi-day package includes airport transfers on arrival and departure, full-day touring on scheduled itinerary days, and the same dedicated chauffeur and vehicle throughout.",
  },
  {
    question: "Do we get the same driver every day?",
    answer:
      "Yes. The same chauffeur is assigned to your package for the full duration. This is central to how multi-day packages work.",
  },
  {
    question: "Can we customise the itinerary?",
    answer:
      "Fully. The 3, 5, and 7-day programmes are starting points. You can swap destinations, add routes, adjust timing, or change the order of days.",
  },
  {
    question: "Is all-inclusive pricing available?",
    answer:
      "Yes. We provide a single all-inclusive quote covering chauffeur hire, fuel, and the agreed itinerary. One number, confirmed before you book.",
  },
  {
    question: "What vehicles are available for multi-day hire?",
    answer:
      "The full fleet is available: S-Class for executives and couples, BMW X5 and Range Rover for small groups, V-Class for groups up to six, and the Staria for groups up to eight.",
  },
  {
    question: "How far in advance do I need to book?",
    answer:
      "We recommend at least 7 days in advance. For peak season (December to March) and large groups, two to four weeks is advisable. Same-week bookings can sometimes be accommodated — WhatsApp us to check.",
  },
];

export default async function MultiDayPackagesRoute() {
  const vehicles = await getVehicles();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Multi-Day Chauffeur Package",
        name: "Sigma VIP Multi-Day Chauffeur Packages Cape Town",
        description:
          "Multi-day private chauffeur packages in Cape Town. 3, 5, and 7-day programmes including airport transfers, Cape Peninsula tours, Winelands, Hermanus, and a dedicated driver for the full duration.",
        provider: {
          "@type": "Organization",
          name: "Sigma VIP",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/images/logo.png`,
          },
          telephone: "+27 71 108 1227",
        },
        areaServed: {
          "@type": "City",
          name: "Cape Town",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}/multi-day-packages-cape-town`,
          servicePhone: "+27 71 108 1227",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Multi-Day Chauffeur Packages",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "TouristTrip",
                name: "3-Day Cape Town Highlight Package",
                description:
                  "Airport transfers, Cape Peninsula full-day tour, and city day with Table Mountain and the V&A Waterfront. Same driver and vehicle throughout.",
                touristType: "Luxury travellers, couples, first-time visitors",
                itinerary: {
                  "@type": "ItemList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Airport transfer on arrival" },
                    { "@type": "ListItem", position: 2, name: "Cape Peninsula tour (Chapman's Peak, Cape Point, Boulders Beach)" },
                    { "@type": "ListItem", position: 3, name: "City day: Table Mountain, Bo-Kaap, V&A Waterfront" },
                    { "@type": "ListItem", position: 4, name: "Airport transfer on departure" },
                  ],
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "TouristTrip",
                name: "5-Day Cape Town & Winelands Package",
                description:
                  "Everything in the 3-day package plus a full Winelands day in Stellenbosch and Franschhoek, Hermanus coastal drive, and one flexible day.",
                touristType: "Families, wine lovers, extended first visits",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "TouristTrip",
                name: "10-Day Full Cape Experience Package",
                description:
                  "The complete Cape Town programme: Peninsula, Winelands, Hermanus, Garden Route, Aquila Game Reserve, and five fully flexible days with a dedicated chauffeur.",
                touristType: "Luxury extended stays, anniversary trips, repeat visitors",
              },
            },
          ],
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
          {
            "@type": "ListItem",
            position: 2,
            name: "Multi-Day Packages Cape Town",
            item: `${SITE_URL}/multi-day-packages-cape-town`,
          },
        ],
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
      <MultiDayPage vehicles={vehicles} />
    </>
  );
}
