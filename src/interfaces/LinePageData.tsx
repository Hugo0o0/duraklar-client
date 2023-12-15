import { StationPageData } from "./StationPageData";

export interface LinePageData {
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
      data: StationPageData[];
    };
    second_route?: {
      data: StationPageData[];
    };
  };
}
