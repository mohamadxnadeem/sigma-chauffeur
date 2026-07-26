import type { Metadata } from "next";
import AirportTransfersPage from "../../components/sections/private-jet-transfer/PrivateJetTransferPage";
import { privateJetFaqItems } from "../../components/sections/private-jet-transfer/faqData";

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
  return !lower.endsWith(".heic") && !lower.endsWith(".heif") && !lower.endsWith(".tiff");
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
            "Premium chauffeur-driven vehicle for airport transfers in Cape Town.",
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
    "Airport Transfers Cape Town | Private Chauffeur Pickup and FBO Transfers | Sigma VIP",
  description:
    "Private airport transfers at Cape Town International. Flight tracking from the moment you depart, meet-and-greet service, and FBO ramp coordination for private jets. Available 24 hours, seven days.",

  alternates: {
    canonical: `${SITE_URL}/airport-transfers-cape-town`,
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
      "Airport Transfers Cape Town | Private Chauffeur Pickup and FBO Transfers | Sigma VIP",
    description:
      "Private airport transfers in Cape Town. Flight tracking, meet-and-greet, luxury vehicles, and FBO coordination for arrivals and departures.",
    url: `${SITE_URL}/airport-transfers-cape-town`,
    siteName: "Sigma VIP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 520,
        height: 520,
        alt: "Sigma VIP airport transfers Cape Town",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Airport Transfers Cape Town | Sigma VIP",
    description:
      "Private airport transfers with real-time flight tracking and professional chauffeur service in Cape Town.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default async function AirportTransfersRoute() {
  const vehicles = await getVehicles();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Airport Transfer Service",
        name: "Sigma VIP Airport Transfers Cape Town",
        description:
          "Premium airport transfers at Cape Town International Airport. Includes flight tracking, meet-and-greet, private jet FBO coordination, vehicle staging, and luxury chauffeur service. Available 24/7.",
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
          serviceUrl: `${SITE_URL}/airport-transfers-cape-town`,
          servicePhone: "+27 71 108 1227",
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
        mainEntity: privateJetFaqItems.map((item) => ({
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
            name: "Airport Transfers",
            item: `${SITE_URL}/airport-transfers-cape-town`,
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
      <AirportTransfersPage vehicles={vehicles} />
    </>
  );
}
