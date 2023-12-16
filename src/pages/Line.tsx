"use client";

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
import Link from "next/link";

const Line = ({ data }: { data: LineData }) => {
  return (
    <Stack align={"center"} padding={5} minHeight={"100vh"}>
      <Card mt={"5rem"} w={{ base: "auto", md: "50%" }}>
        <CardHeader>
          <HStack divider={<StackDivider />}>
            <Avatar
              name={data.attributes.type}
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}${data.attributes.thumbnail.data.attributes.url}`}
            />
            <Heading size="md">{data.attributes.name}</Heading>
          </HStack>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {data.attributes.first_route?.data.map((station, i) => (
              <Stack
                key={Math.random() * i}
                as={Link}
                href={`/station/${station.attributes.slug}`}
                spacing={2}
                height={"100%"}
              >
                <Heading size="sm">{station.attributes.name}</Heading>
                <HStack
                  display={"flex"}
                  divider={<StackDivider />}
                  key={Math.random() * i}
                >
                  {station.attributes.lines?.data.map(
                    (line, i) =>
                      line.attributes.code !== data.attributes.code && (
                        <Avatar
                          size={"xs"}
                          key={Math.random() * i}
                          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${line.attributes.thumbnail.data.attributes.url}`}
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
