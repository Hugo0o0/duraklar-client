"use client";

import { useScroll } from "@/hooks/useScroll";
import { LineData } from "@/interfaces/LineData";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import Link from "next/link";

const Line = ({ data }: { data: LineData }) => {
  const scroll = useScroll();

  return (
    <Stack
      position={{
        base: scroll === 0 ? "relative" : "absolute",
        md: "relative",
      }}
      align={"center"}
      padding={{ base: scroll === 0 ? 5 : 0, md: 5 }}
      minHeight={"100vh"}
      zIndex={{ base: scroll === 0 ? "auto" : 999, md: "auto" }}
      width={{ base: scroll === 0 ? "auto" : "100%", md: "auto" }}
      transition={"all 0.2s ease"}
    >
      <Card
        transition={"all 0.2s ease"}
        mt={"5rem"}
        w={{ base: scroll === 0 ? "auto" : "100%", md: "50%" }}
      >
        <CardHeader
          top={-2}
          position={{ base: "static", md: "sticky" }}
          zIndex={{ base: "auto", md: "sticky" }}
        >
          <HStack divider={<StackDivider />}>
            <Avatar
              name={data.attributes.type}
              src={data.attributes.thumbnail.data.attributes.url}
            />
            <Heading size="md">{data.attributes.name}</Heading>
          </HStack>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {data.attributes.first_route?.data.map((station, i) => (
              <Stack
                key={nanoid()}
                as={Link}
                href={`/station/${station.attributes.slug}`}
                spacing={2}
                height={"100%"}
              >
                <Heading size="sm">{station.attributes.name}</Heading>
                <HStack display={"flex"} divider={<StackDivider />}>
                  {station.attributes.transfers?.data.map(
                    (line, i) =>
                      line.attributes.code !== data.attributes.code && (
                        <Avatar
                          size={"xs"}
                          key={nanoid()}
                          src={line.attributes.thumbnail.data.attributes.url}
                        />
                      )
                  )}
                </HStack>
              </Stack>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default Line;
