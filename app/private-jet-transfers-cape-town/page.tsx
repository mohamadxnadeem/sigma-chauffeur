import type { Metadata } from "next";
import PrivateJetTransferPage from "../../components/sections/private-jet-transfer/PrivateJetTransferPage";
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
    const res = await fetch(
      `${API_BASE}/api/cars-for-hire/all/`,
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
            "Premium chauffeur-driven vehicle for private jet ground transport in Cape Town.",
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
    "Private Jet Transfers Cape Town | FBO Ground Transport & Ramp Coordination | Sigma VIP",
  description:
    "Private jet ground transport at Cape Town International. FBO ramp coordination, vehicle staging, and meet-and-greet from the private terminal. Chauffeur-driven S-Class, Range Rover, and V-Class. Available 24 hours.",

  alternates: {
    canonical: `${SITE_URL}/private-jet-transfers-cape-town`,
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
      "Private Jet Transfers Cape Town | FBO Ground Transport | Sigma VIP",
    description:
      "Private jet ground transport at Cape Town. Ramp access, vehicle staging, and FBO coordination for private aviation arrivals. Confirm your tail number via WhatsApp.",
    url: `${SITE_URL}/private-jet-transfers-cape-town`,
    siteName: "Sigma VIP",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/logo.png`,
        width: 520,
        height: 520,
        alt: "Sigma VIP private jet transfers Cape Town FBO ground transport",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Private Jet Transfers Cape Town | Sigma VIP",
    description:
      "FBO ramp coordination and private jet ground transport at Cape Town International. Chauffeur on the ramp when you land.",
    images: [`${SITE_URL}/images/logo.png`],
  },
};

export default async function PrivateJetTransfersRoute() {
  const vehicles = await getVehicles();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Private Jet Ground Transport",
        name: "Sigma VIP Private Jet Transfers Cape Town",
        description:
          "Private jet ground transport at Cape Town International. FBO ramp access, vehicle staging at the private terminal, luggage handling, and chauffeur-driven transfer to any Cape Town destination. Available 24 hours, seven days.",
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
          serviceUrl: `${SITE_URL}/private-jet-transfers-cape-town`,
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
            name: "Private Jet Transfers Cape Town",
            item: `${SITE_URL}/private-jet-transfers-cape-town`,
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
      <PrivateJetTransferPage vehicles={vehicles} />
    </>
  );
}
