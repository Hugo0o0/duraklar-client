import { fetcher } from "@/api/axios";
import useSWR from "swr";
import { useToast } from "@chakra-ui/react";
import { Search as SearchResults } from "@/interfaces/Search";

export const useSearch = (query?: string) => {
  const toast = useToast();
  const { data, error, isLoading } = useSWR<SearchResults>(
    query ? `/search?query=${query}` : "/random",
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (error) {
    toast({
      title: "Error",
      description: error?.message,
      status: "error",
      position: "top",
    });
    return {
      data: null,
      error,
      isLoading,
    };
  }

  return {
    data,
    error,
    isLoading,
  };
};
