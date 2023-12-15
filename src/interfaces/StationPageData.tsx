import { LinePageData } from "./LinePageData";

export interface StationPageData {
  data: [
    {
      attributes: {
        name: string;
        lines?: {
          data: LinePageData[];
        };
      };
    }
  ];
}
