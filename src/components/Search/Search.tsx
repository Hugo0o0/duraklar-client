"use client";
import { useSearch } from "@/hooks/useSearch";
import { Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import SearchTabs from "./SearchTabs/SearchTabs";

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const { data } = useSearch(search);
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Stack
      transition={"all 0.3s"}
      w={{ base: isFocused ? "100%" : "20rem", md: "40rem", lg: "50rem" }}
      height={{ base: isFocused ? "100%" : "30rem", md: "30rem" }}
      spacing={{ base: isFocused ? "0" : "0.375rem", md: "0.375rem" }}
      position={{ base: "absolute", lg: "static" }}
      top={isFocused ? 0 : "auto"}
    >
      <Input
        onClick={() => setIsFocused((prev) => !prev)}
        variant="fixed-background"
        placeholder="Ara..."
        type="search"
        bg={bg}
        borderRadius={{ base: isFocused ? "0" : "0.375rem", md: "0.375rem" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Stack
        borderRadius={{ base: isFocused ? "0" : "0.375rem", md: "0.375rem" }}
        height={"100%"}
        bg={bg}
        overflowY={"scroll"}
        transition={"all 0.3s"}
      >
        <SearchTabs lines={data?.lines!} stations={data?.stations!} />
      </Stack>
    </Stack>
  );
};

export default Search;
