import { LineData } from "./LineData";

export interface StationData {
  attributes: {
    name: string;
    lines?: {
      data: LineData[];
    };
    transfers?: {
      data: LineData[];
    };
    slug: string;
  };
}
