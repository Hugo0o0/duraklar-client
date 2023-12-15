"use client";

import BackgroundVideo from "@/components/BackgroundVideo/BackgroundVideo";
import Search from "@/components/Search/Search";
import { Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack
      overflow={"hidden"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <BackgroundVideo />

      <Search />
    </Stack>
  );
};

export default Home;
