import { StationData } from "./StationData";

export interface LineData {
  id: number;
  attributes: {
    name: string;
    code: string;
    type: string;
    thumbnail: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    first_route?: {
      data: StationData[];
    };
    second_route?: {
      data: StationData[];
    };
  };
}
