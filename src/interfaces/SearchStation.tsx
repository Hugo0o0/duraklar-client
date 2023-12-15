import { SearchLine } from "./SearchLine";

export interface SearchStation {
  name: string;
  slug: string;
  lines: SearchLine[];
}
