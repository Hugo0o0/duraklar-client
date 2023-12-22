import { SearchLine } from "@/interfaces/SearchLine";
import {
  Avatar,
  HStack,
  Heading,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";

const SearchLines = ({ lines }: { lines: SearchLine[] }) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      {lines &&
        lines.map((line: any) => (
          <Link key={nanoid()} href={`line/${line.code}`}>
            <HStack padding={"1rem"} _hover={{ bg }}>
              <HStack alignItems={"center"} spacing={2}>
                <Avatar size={"sm"} name={line.type} src={line.thumbnail.url} />
                <Heading size={"sm"}>{line.name}</Heading>
              </HStack>
            </HStack>
          </Link>
        ))}
    </>
  );
};

export default SearchLines;
