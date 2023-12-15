"use client";

import { theme } from "@/theme/index";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
