import type { Metadata } from "next";
import AirportTransfersPage from "../../components/sections/private-jet-transfer/PrivateJetTransferPage";
import { privateJetFaqItems } from "../../components/sections/private-jet-transfer/faqData";
import { API_BASE } from "../../lib/api";

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
    const res = await fetch(`${API_BASE}/api/cars-for-hire/all/`, {
      next: { revalidate: 3600 },
    });
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
            "Premium chauffeur-driven vehicle for private airport transfers in Cape Town.",
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
    "Private Airport Transfers Cape Town | Chauffeur Pickup & FBO Service | Sigma VIP",
  description:
    "Private airport transfers at Cape Town International. Real-time flight tracking, meet-and-greet, and FBO ramp coordination for private jet arrivals. Mercedes S-Class, BMW X5, V-Class. Available 24 hours.",

  alternates: {
    canonical: `${SITE_URL}/private-airport-transfers-cape-town`,
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
      "Private Airport Transfers Cape Town | Chauffeur Pickup & FBO Service | Sigma VIP",
    description:
      "Private airport transfers at Cape Town International. Flight tracking, meet-and-greet, and FBO coordination for private jets. Mercedes S-Class, BMW X5, V-Class.",
    url: `${SITE_URL}/private-airport-transfers-cape-town`,
    siteName: "Sigma VIP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 520,
        height: 520,
        alt: "Sigma VIP private airport transfers Cape Town",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Private Airport Transfers Cape Town | Sigma VIP",
    description:
      "Private airport transfers with real-time flight tracking and professional chauffeur service at Cape Town International.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default async function PrivateAirportTransfersRoute() {
  const vehicles = await getVehicles();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Airport Transfer Service",
        name: "Sigma VIP Private Airport Transfers Cape Town",
        description:
          "Private airport transfers at Cape Town International Airport. Real-time flight tracking, meet-and-greet service, FBO ramp coordination for private jet arrivals, and luxury chauffeur vehicles. Available 24 hours, seven days.",
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
          serviceUrl: `${SITE_URL}/private-airport-transfers-cape-town`,
          servicePhone: "+27 71 108 1227",
        },
        hoursAvailable: {
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
            name: "Private Airport Transfers",
            item: `${SITE_URL}/private-airport-transfers-cape-town`,
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
