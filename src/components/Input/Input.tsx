import { defineStyleConfig } from "@chakra-ui/react";
export const Input = defineStyleConfig({
  variants: {
    "fixed-background": {
      field: {
        bg: "gray.100",
      },
    },
  },
  defaultProps: {
    variant: "fixed-background",
  },
});
