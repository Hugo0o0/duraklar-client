"use client";

import { fetcher } from "@/api/axios";
import { generateError } from "@/errors/generate-error";
import { theme } from "@/theme/index";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { SWRConfig } from "swr";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const toast = useToast();

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        onError: (err: AxiosError) => {
          const generatedError = generateError(err);

          if (!toast.isActive(generatedError.id!)) toast({ ...generatedError });
        },
        fetcher: fetcher,
      }}
    >
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SWRConfig>
  );
};

export default Providers;
