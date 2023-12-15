import { instance } from "@/api/axios";
import { StationPageData } from "@/interfaces/StationPageData";
import { notFound } from "next/navigation";
import React from "react";

interface StationPageProps {
  params: { slug: "caglayan" };
  searchParams: {};
}

const page = async (props: StationPageProps) => {
  const {
    data: { data },
  } = await instance.get<StationPageData>("/stations", {
    params: {
      "filters[slug][$eq]": props.params.slug,
      populate: "*",
    },
  });

  if (!data.length) {
    return notFound();
  }

  return <div>page station</div>;
};

export default page;
