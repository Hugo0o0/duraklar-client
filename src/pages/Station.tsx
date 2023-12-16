"use client";
import { StationData } from "@/interfaces/StationData";
import {
  Stack,
  Avatar,
  Button,
  Heading,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import Link from "next/link";

const Station = ({ data: { data } }: { data: StationData }) => {
  return (
    <Stack spacing={5} p={3} minH={"100vh"}>
      <Tabs mt={"5rem"} colorScheme="gray" variant={"soft-rounded"}>
        <TabList>
          <Tab>Hatlar</Tab>
          {data[0].attributes.transfers?.data.length !== 0 && (
            <Tab>Aktarma Hatları</Tab>
          )}
        </TabList>

        <TabPanels>
          <TabPanel>
            <HStack
              justify={{ base: "center", md: "initial" }}
              flexWrap={"wrap"}
            >
              {data[0].attributes.lines?.data.map((line) => (
                <Card
                  w={"20rem"}
                  height={"12rem"}
                  align={"center"}
                  size={"sm"}
                  variant={"filled"}
                >
                  <CardHeader>
                    <Avatar
                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}${line.attributes.thumbnail.data.attributes.url}`}
                      name="Tramvay"
                    />
                  </CardHeader>
                  <CardBody>
                    <Heading size="sm">{line.attributes.name}</Heading>
                  </CardBody>
                  <CardFooter>
                    <Button as={Link} href={`/line/${line.attributes.code}`}>
                      Durakları Görüntüle
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </HStack>
          </TabPanel>

          <TabPanel>
            <HStack
              justify={{ base: "center", md: "initial" }}
              flexWrap={"wrap"}
            >
              {data[0].attributes.transfers?.data.map((line) => (
                <Card
                  w={"20rem"}
                  height={"12rem"}
                  align={"center"}
                  size={"sm"}
                  variant={"filled"}
                >
                  <CardHeader>
                    <Avatar
                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}${line.attributes.thumbnail.data.attributes.url}`}
                      name="Tramvay"
                    />
                  </CardHeader>
                  <CardBody>
                    <Heading size="sm">{line.attributes.name}</Heading>
                  </CardBody>
                  <CardFooter>
                    <Button as={Link} href={`/line/${line.attributes.code}`}>
                      Durakları Görüntüle
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Station;
