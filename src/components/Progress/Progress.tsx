import { Box } from "@chakra-ui/react";
import React from "react";

const Progress = ({ value }: { value: number }) => {
  return (
    <Box
      transition={"width 500ms ease"}
      width={value}
      height={".5rem"}
      bg="black"
    ></Box>
  );
};

export default Progress;
