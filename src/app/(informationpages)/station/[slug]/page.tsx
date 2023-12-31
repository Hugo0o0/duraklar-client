import { instance } from "@/api/axios";
import { StationData } from "@/interfaces/StationData";
import Station from "@/components/pages/Station";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";
import React from "react";

interface StationPageProps {
  params: { slug: "caglayan" };
  searchParams: {};
}

const page = async (props: StationPageProps) => {
  const data = await instance.get<AxiosResponse<StationData[]>>("/stations", {
    params: {
      "filters[slug][$eq]": props.params.slug,
      "populate[0]": "lines",
      "populate[1]": "transfers",
      "populate[2]": "lines.thumbnail",
      "populate[3]": "transfers.thumbnail",
    },
  });

  if (!data.data.data.length) {
    return notFound();
  }

  return <Station data={data.data.data[0]} />;
};

export default page;
