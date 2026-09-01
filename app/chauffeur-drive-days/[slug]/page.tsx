import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PrivateTourDetailView from "../../../components/sections/private-tour-detail/PrivateTourDetailView";
import { API_BASE } from "../../../lib/api";

type ExperiencePhoto = {
  id: number;
  experience?: number;
  cover_photos: string;
  order: number;
  is_featured?: boolean;
};

type ExperienceStop = {
  id: number;
  title: string;
  short_description?: string;
  highlight?: string;
  image?: string;
  order: number;
  estimated_time?: string;
  stop_type?: string;
};

type Experience = {
  id: number;
  title?: string;
  slug?: string;
  short_description?: string;
  highlight?: string;
  location?: string;
  duration?: string;
  tags?: string[];
  price_from?: string;
  price_to?: string;
  currency?: string;
  body?: string;
  cover_photos?: ExperiencePhoto[];
  stops?: ExperienceStop[];
  meta_title?: string;
  meta_description?: string;
};

type ExperienceListItem = {
  experience: Experience;
};

type ExperienceDetailResponse = {
  experience: Experience;
};

type RelatedTour = {
  title: string;
  description?: string;
  image?: string;
  href: string;
  price?: string;
};

type CarPhoto = {
  id: number;
  cover_photos: string;
  is_featured?: boolean;
  order?: number;
};

type Car = {
  id: number;
  title?: string;
  slug?: string;
  short_description?: string;
  highlight?: string;
  body?: string;
  number_of_seats?: number;
  price?: string | number;
  price_from?: string | number;
  price_to?: string | number;
  currency?: string;
  cover_photos?: CarPhoto[];
  images?: CarPhoto[];
};

type CarsApiItem = {
  car: Car;
};

type TourVehicle = {
  title: string;
  image?: string;
  seats?: number;
  description?: string;
  price?: string;
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://sigmachauffeur.vip";

function truncateText(text?: string, maxLength = 140) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

async function getAllExperiences(): Promise<ExperienceListItem[]> {
  try {
    const response = await fetch(`${API_BASE}/api/experiences/all/`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    return response.json();
  } catch {
    return [];
  }
}

async function getAllVehicles(): Promise<CarsApiItem[]> {
  try {
    const response = await fetch(`${API_BASE}/api/cars-for-hire/all/`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    const data = await response.json();
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.results)) return data.results;
    return [];
  } catch {
    return [];
  }
}

async function getExperienceIdBySlug(slug: string) {
  const data = await getAllExperiences();
  const lower = slug.toLowerCase();
  const match = data.find(
    (item) => item?.experience?.slug?.toLowerCase() === lower
  );
  return match?.experience?.id || null;
}

async function getExperienceDetails(
  id: number
): Promise<ExperienceDetailResponse | Experience> {
  const response = await fetch(`${API_BASE}/api/experiences/${id}/details/`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch experience details");
  }
  return response.json();
}

function normalizeExperience(
  data: ExperienceDetailResponse | Experience
): Experience {
  return (data as ExperienceDetailResponse)?.experience || (data as Experience);
}

function isBrowserRenderable(url?: string): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();
  return (
    !lower.endsWith(".heic") &&
    !lower.endsWith(".heif") &&
    !lower.endsWith(".tiff")
  );
}

function getPrimaryImage(experience: Experience) {
  const sorted = [...(experience.cover_photos || [])]
    .sort((a, b) => a.order - b.order)
    .filter((p) => isBrowserRenderable(p.cover_photos));

  return (
    sorted.find((photo) => photo.is_featured)?.cover_photos ||
    sorted[0]?.cover_photos ||
    ""
  );
}

function getPageTitle(experience: Experience) {
  return (
    experience.meta_title ||
    `${experience.title || "Chauffeur Drive Day"} | Sigma VIP`
  );
}

function getPageDescription(experience: Experience) {
  return (
    experience.meta_description ||
    experience.short_description ||
    experience.highlight ||
    "Private chauffeur drive days in Cape Town with Sigma VIP."
  );
}

function mapRelatedTours(
  allExperiences: ExperienceListItem[],
  currentSlug: string
): RelatedTour[] {
  return allExperiences
    .map((item) => item.experience)
    .filter((tour) => tour.slug && tour.slug !== currentSlug)
    .map((tour) => ({
      title: tour.title || "Chauffeur Drive Day",
      description:
        tour.short_description ||
        tour.highlight ||
        "Discover another private chauffeur drive day in Cape Town.",
      image:
        [...(tour.cover_photos || [])]
          .sort((a, b) => a.order - b.order)
          .filter((p) => isBrowserRenderable(p.cover_photos))[0]
          ?.cover_photos || "",
      href: `/chauffeur-drive-days/${tour.slug}`,
    }));
}

function mapVehicles(items: CarsApiItem[]): TourVehicle[] {
  return items
    .map((item) => item?.car || item)
    .filter((car) => car?.title)
    .map((car) => {
      const imageArray = car.cover_photos || car.images || [];
      const sortedImages = [...imageArray].sort(
        (a, b) => (a.order || 0) - (b.order || 0)
      );

      const featuredPhoto =
        sortedImages.find((photo) => photo?.is_featured)?.cover_photos ||
        sortedImages[0]?.cover_photos ||
        "";

      const description =
        car.short_description ||
        car.highlight ||
        truncateText(car.body, 120) ||
        "A premium chauffeur-driven vehicle suitable for private touring in Cape Town.";

      return {
        title: car.title || "Vehicle",
        image: featuredPhoto,
        seats: car.number_of_seats,
        description,
      };
    });
}

export async function generateStaticParams() {
  const experiences = await getAllExperiences();
  return experiences
    .map((item) => item?.experience?.slug?.toLowerCase())
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experienceId = await getExperienceIdBySlug(slug);

  if (!experienceId) {
    return {
      title: "Chauffeur Drive Day | Sigma VIP",
      description: "Private chauffeur drive days in Cape Town",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
        },
      },
    };
  }

  const raw = await getExperienceDetails(experienceId);
  const experience = normalizeExperience(raw);

  const title = getPageTitle(experience);
  const description = getPageDescription(experience);
  const image = getPrimaryImage(experience);
  const canonicalUrl = `${SITE_URL}/chauffeur-drive-days/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Sigma VIP",
      type: "website",
      images: image
        ? [
            {
              url: image,
              alt: experience.title || "Private chauffeur drive day Cape Town",
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function ChauffeurDriveDayPage({ params }: PageProps) {
  const { slug } = await params;

  const [allExperiences, allVehicles, experienceId] = await Promise.all([
    getAllExperiences(),
    getAllVehicles(),
    getExperienceIdBySlug(slug),
  ]);

  if (!experienceId) {
    notFound();
  }

  const raw = await getExperienceDetails(experienceId);
  const experience = normalizeExperience(raw);

  if (!experience) {
    notFound();
  }

  const relatedTours = mapRelatedTours(allExperiences, slug);
  const vehicles = mapVehicles(allVehicles);

  const primaryImage = getPrimaryImage(experience);
  const canonicalUrl = `${SITE_URL}/chauffeur-drive-days/${slug}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does the ${experience.title || "chauffeur drive day"} usually take?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The ${experience.title || "chauffeur drive day"} usually runs for a full day, depending on the route, your pace, and any custom stops you would like to include.`,
        },
      },
      {
        "@type": "Question",
        name: `Is the ${experience.title || "chauffeur drive day"} a private experience?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. This is a private experience designed around your schedule, comfort, and travel preferences.",
        },
      },
      {
        "@type": "Question",
        name: `Can the ${experience.title || "chauffeur drive day"} itinerary be customised?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can tailor the route, timing, and stops to create a more personalised Cape Town experience.",
        },
      },
      {
        "@type": "Question",
        name: `Does the ${experience.title || "chauffeur drive day"} include chauffeur transport?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Your experience includes premium private chauffeur transport throughout the day for a seamless and comfortable journey.",
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
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
        name: "Chauffeur Drive Days",
        item: `${SITE_URL}/chauffeur-drive-days`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: experience.title || "Chauffeur Drive Day",
        item: canonicalUrl,
      },
    ],
  };

  const tourJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: experience.title || "Chauffeur Drive Day",
    description: getPageDescription(experience),
    image: primaryImage ? [primaryImage] : [],
    url: canonicalUrl,
    provider: {
      "@type": "Organization",
      name: "Sigma VIP",
      url: SITE_URL,
    },
    touristType: "Luxury Travelers",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />

      <PrivateTourDetailView
        experience={experience}
        relatedTours={relatedTours}
        vehicles={vehicles}
      />
    </>
  );
}
