import { SearchLine } from "./SearchLine";
import { SearchStation } from "./SearchStation";

export interface Search {
  lines: SearchLine[];

  stations: SearchStation[];
}
