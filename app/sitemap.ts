import type { MetadataRoute } from "next";

const SITE_URL = "https://sigmachauffeur.vip";

type CarsApiItem = {
  car?: { slug?: string };
  slug?: string;
};

type ExperienceApiItem = {
  experience?: { slug?: string };
  slug?: string;
};

async function getVehicleSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      "https://web-production-1ab9.up.railway.app/api/cars-for-hire/all/",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data: CarsApiItem[] = await res.json();
    return data
      .map((item) => (item?.car?.slug || item?.slug || "").toLowerCase())
      .filter(Boolean);
  } catch {
    return [];
  }
}

async function getTourSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      "https://web-production-1ab9.up.railway.app/api/experiences/all/",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data: ExperienceApiItem[] = await res.json();
    return data
      .map((item) => (item?.experience?.slug || item?.slug || "").toLowerCase())
      .filter(Boolean);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [vehicleSlugs, tourSlugs] = await Promise.all([
    getVehicleSlugs(),
    getTourSlugs(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${SITE_URL}/airport-transfers-cape-town`,
      lastModified: new Date(),
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/private-jet-transfers-cape-town`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const vehicleRoutes: MetadataRoute.Sitemap = vehicleSlugs.map((slug) => ({
    url: `${SITE_URL}/chauffeur-services/${slug}`,
    lastModified: new Date(),
    priority: 0.85,
  }));

  const tourRoutes: MetadataRoute.Sitemap = tourSlugs.map((slug) => ({
    url: `${SITE_URL}/private-tours/${slug}`,
    lastModified: new Date(),
    priority: 0.85,
  }));

  return [...staticRoutes, ...vehicleRoutes, ...tourRoutes];
}
