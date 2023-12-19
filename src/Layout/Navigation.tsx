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
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import ColorThemeSwitcher from "@/components/ColorThemeSwitcher/ColorThemeSwitcher";

const Navigation = () => {
  const theme = useColorMode();
  const router = useRouter();

  const bg = useColorModeValue("gray.100", "gray.700");

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
        <MenuButton display={"flex"} as={IconButton}>
          <CiMenuBurger size={30} />
        </MenuButton>
        <MenuList>
          <MenuItem href={"/"} as={Link}>
            Anasayfa
          </MenuItem>
          <MenuItem>
            <ColorThemeSwitcher />
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Navigation;
