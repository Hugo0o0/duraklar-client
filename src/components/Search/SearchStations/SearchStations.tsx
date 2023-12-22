"use client";
import { SearchStation } from "@/interfaces/SearchStation";
import {
  Avatar,
  HStack,
  Heading,
  Stack,
  TabPanel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Link from "next/link";
import React from "react";

const SearchStations = ({ stations }: { stations: SearchStation[] | null }) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      {stations &&
        stations.map((station, i: number) => (
          <Link key={nanoid()} href={`station/${station.slug}`}>
            <HStack
              padding={"1rem"}
              {...(i !== stations.length && {
                borderTop: "1px solid gray.700",
              })}
              _hover={{ bg }}
            >
              <Stack spacing={3}>
                <Heading justifySelf={"start"} size={"sm"}>
                  {station.name}
                </Heading>

                <Stack spacing={3}>
                  {station.lines.map((line) => (
                    <HStack key={nanoid()}>
                      <Avatar
                        size={"sm"}
                        name={line.type}
                        src={line.thumbnail.url}
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
