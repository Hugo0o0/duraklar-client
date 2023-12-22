import {
  getLineSitemapData,
  getStationSitemapData,
} from "@/helpers/get-sitemap-data";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lineSitemapData = await getLineSitemapData();
  const stationSitemapData = await getStationSitemapData();

  return [
    {
      url: "https://duraklar.co",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 2,
    },
    ...lineSitemapData,
    ...stationSitemapData,
  ];
}
