import SearchLines from "@/components/Search/SearchLines/SearchLines";
import SearchStations from "@/components/Search/SearchStations/SearchStations";
import { SearchLine } from "@/interfaces/SearchLine";
import { SearchStation } from "@/interfaces/SearchStation";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";

const SearchTabs = ({
  lines,
  stations,
}: {
  lines: SearchLine[];
  stations: SearchStation[];
}) => {
  return (
    <Tabs colorScheme="gray" isFitted variant={"soft-rounded"}>
      <TabList margin={"1rem 1rem 0 1rem"}>
        <Tab>Duraklar</Tab>

        <Tab>Hatlar</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <SearchStations stations={stations} />
        </TabPanel>

        <TabPanel>
          <SearchLines lines={lines} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SearchTabs;
