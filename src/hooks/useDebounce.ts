import { useEffect, useState } from "react";

export const useDebounce = (query: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(query);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(query);
    }, delay);
    return () => clearTimeout(handler);
  }, [query, delay]);

  return debouncedValue;
};
