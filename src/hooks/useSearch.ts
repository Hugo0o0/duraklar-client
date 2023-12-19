import { instance } from "@/api/axios";
import { useToast } from "@chakra-ui/react";
import { Search as SearchResults } from "@/interfaces/Search";
import { generateError } from "@/errors/generate-error";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { AxiosError } from "axios";

export const useSearch = (query?: string) => {
  const toast = useToast();
  const debouncedValue = useDebounce(query ?? "", 200);
  const [data, setData] = useState<SearchResults | null>(null);

  useEffect(() => {
    instance
      .get<SearchResults>(`${debouncedValue ? "search" : "random"}`, {
        params: {
          query,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err: AxiosError) => {
        const generatedError = generateError(err);
        if (!toast.isActive("error")) {
          toast({ ...generatedError });
        }
      });
  }, [debouncedValue]);

  return {
    data,
  };
};
