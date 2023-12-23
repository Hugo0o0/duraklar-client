"use client";
import ColorThemeSwitcher from "@/components/ColorThemeSwitcher/ColorThemeSwitcher";
import Search from "@/components/Search/Search";
import { Box, Stack, useColorMode } from "@chakra-ui/react";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      overflow={"hidden"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      bgImage={`url(/bg-${colorMode}.jpg)`}
      bgPos={"center"}
      bgSize={"cover"}
    >
      <Box position={"fixed"} top={2} right={2}>
        <ColorThemeSwitcher />
      </Box>

      <Search />
    </Stack>
  );
};

export default Home;
