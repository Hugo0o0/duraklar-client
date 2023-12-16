"use client";
import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack, IoMdSunny } from "react-icons/io";
import { FcSearch } from "react-icons/fc";
import { CiMenuFries } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

interface ColorMode {
  [key: string]: {
    title: string;
    icon: React.ReactNode;
  };
}

const Navigation = () => {
  const theme = useColorMode();
  const router = useRouter();

  const bg = useColorModeValue("gray.100", "gray.700");

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
    <HStack
      as="nav"
      position={"fixed"}
      top={0}
      left={0}
      bgColor={bg}
      width={"100%"}
      height={"5rem"}
      zIndex={"99"}
      align={"center"}
      justify={"space-between"}
      paddingX={5}
    >
      <IoMdArrowRoundBack
        cursor={"pointer"}
        onClick={() => router.back()}
        size={30}
      />

      <Menu closeOnSelect={false}>
        <MenuButton display={"flex"} justifyContent={"center"} as={IconButton}>
          <CiMenuFries size={30} />
        </MenuButton>
        <MenuList>
          <MenuItem href={"/"} as={Link}>
            Anasayfa
          </MenuItem>
          <MenuItem onClick={theme.toggleColorMode}>
            <HStack>
              {colorMode[theme.colorMode].icon}
              <Text>{colorMode[theme.colorMode].title}</Text>
            </HStack>
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Navigation;
