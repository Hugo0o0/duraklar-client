import { Search as SearchResults } from "@/interfaces/Search";
import { useDebounce } from "./useDebounce";
import { AxiosError } from "axios";
import useSWR from "swr";

export const useSearch = (query?: string) => {
  const debouncedSearch = useDebounce(query || "", 300);
  const { data, error } = useSWR<SearchResults, AxiosError>(
    debouncedSearch ? `/search?query=${debouncedSearch}` : "/random"
  );

  if (error) {
    return {
      data: null,
    };
  }

  return {
    data,
  };
};
