import type { MetadataRoute } from "next";
import { projectsData } from "@/lib/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tatenopictures-web.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/photography", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/academy", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const projectRoutes = projectsData.map((project) => ({
    path: `/work/${project.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...coreRoutes, ...projectRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
