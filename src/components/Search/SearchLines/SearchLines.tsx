import { SearchLine } from "@/interfaces/SearchLine";
import { Avatar, HStack, Heading, TabPanel } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SearchLines = ({ lines }: { lines: SearchLine[] }) => {
  return (
    <>
      {lines &&
        lines.map((line: any, i: number) => (
          <Link key={Math.random() * i} href={`line/${line.code}`}>
            <HStack
              padding={"1rem"}
              {...(i !== lines.length && {
                borderTop: "1px solid #eee",
              })}
              _hover={{ bg: "gray.100" }}
            >
              <HStack alignItems={"center"} spacing={2}>
                <Avatar
                  size={"sm"}
                  name={line.type}
                  src={`${process.env.NEXT_PUBLIC_SERVER_URL}${line.thumbnail.url}`}
                />
                <Heading size={"sm"}>{line.name}</Heading>
              </HStack>
            </HStack>
          </Link>
        ))}
    </>
  );
};

export default SearchLines;
