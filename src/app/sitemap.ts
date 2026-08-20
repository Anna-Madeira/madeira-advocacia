import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/sobre",
    "/contato",
    "/areas-atuacao/direito-familia",
    "/areas-atuacao/direito-civel",
    "/areas-atuacao/direito-trabalho",
    "/politica-privacidade",
    "/termos-de-uso",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
