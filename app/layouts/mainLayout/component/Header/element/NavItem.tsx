"use client";
import { Box } from "@chakra-ui/react";
import React from "react";

const NavItem = ({ item }: any) => {
  return (
    <Box
      as="span"
      fontSize={"18px"}
      color={"#045B64"}
      position="relative"
      cursor={"pointer"}
      _hover={{
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-4px", 
          left: 0,
          width: "100%",
          height: "4px", 
          backgroundColor: "#045B64",
        },
      }}
    >
      {item.title}
    </Box>
  );
};

export default NavItem;
