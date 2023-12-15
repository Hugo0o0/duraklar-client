"use client";
import { SearchStation } from "@/interfaces/SearchStation";
import {
  Avatar,
  HStack,
  Heading,
  Stack,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const SearchStations = ({ stations }: { stations: SearchStation[] | null }) => {
  return (
    <>
      {stations &&
        stations.map((station: any, i: number) => (
          <Link key={Math.random() * i} href={`station/${station.slug}`}>
            <HStack
              padding={"1rem"}
              {...(i !== stations.length && {
                borderTop: "1px solid #eee",
              })}
              _hover={{ bg: "gray.100" }}
            >
              <Stack spacing={3}>
                <Heading justifySelf={"start"} size={"sm"}>
                  {station.name}
                </Heading>

                <Stack spacing={3}>
                  {station.lines.map((line: any, i: number) => (
                    <HStack key={Math.random() * i}>
                      <Avatar
                        size={"sm"}
                        name={line.type}
                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}${line.thumbnail.url}`}
                      />
                      <Text>{line.name}</Text>
                    </HStack>
                  ))}
                </Stack>
              </Stack>
            </HStack>
          </Link>
        ))}
    </>
  );
};

export default SearchStations;
