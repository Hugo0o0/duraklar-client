"use client";

import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

interface ColorMode {
  [key: string]: {
    title: string;
    icon: React.ReactNode;
  };
}

const ColorThemeSwitcher = () => {
  const theme = useColorMode();

  const colorMode: ColorMode = {
    light: {
      title: "Koyu Mod",
      icon: <FaMoon />,
    },
    dark: {
      title: "Açık Mod",
      icon: <IoMdSunny />,
    },
  };

  return (
    <HStack cursor={"pointer"} w={"100%"} onClick={theme.toggleColorMode}>
      {colorMode[theme.colorMode].icon}
      <Text>{colorMode[theme.colorMode].title}</Text>
    </HStack>
  );
};

export default ColorThemeSwitcher;
