import { instance } from "@/api/axios";
import { LineData } from "@/interfaces/LineData";
import Line from "@/pages/Line";
import { AxiosResponse } from "axios";
import { notFound } from "next/navigation";

interface Props {
  params: { code: string };
  searchParams: {};
}

const page = async (props: Props) => {
  const {
    data: { data },
  } = await instance.get<AxiosResponse<LineData[]>>(`/lines`, {
    params: {
      "filters[code][$eq]": props.params.code,
      "populate[0]": "thumbnail",
      "populate[1]": "first_route.lines.thumbnail",
    },
  });

  if (!data.length) return notFound();

  return <Line data={data[0]} />;
};

export default page;
