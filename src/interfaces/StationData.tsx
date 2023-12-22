import { LineData } from "./LineData";

export interface StationData {
  id: number;
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
