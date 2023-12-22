import { instance } from "@/api/axios";
import { MetadataRoute } from "next";

export const getStationSitemapData =
  async (): Promise<MetadataRoute.Sitemap> => {
    const sitemapData: MetadataRoute.Sitemap = [];

    for (let i = 1; i < 4; i++) {
      const { data } = await instance.get("/stations", {
        params: {
          "pagination[pageSize]": 100,
          "pagination[page]": i,
        },
      });

      data.data.forEach((station: any) => {
        sitemapData.push({
          url: `https://duraklar.co/station/${station.attributes.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 1,
        });
      });
    }

    return sitemapData;
  };

export const getLineSitemapData = async (): Promise<MetadataRoute.Sitemap> => {
  const { data } = await instance.get("/lines");

  return data.data.map((line: any) => ({
    url: `https://duraklar.co/code/${line.attributes.code}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
};
