"use client";
import { Button } from "@chakra-ui/react";
import React from "react";

const HeroNavButton = ({ onClick }: any) => {
  return (
    <Button
      bg={"brand.100"}
      _hover={{ bg: "brand.100",transform: "translateY(-2px)" }}
      color={"brand.200"}
      size="lg"
      fontWeight={600}
      fontSize="sm"
      // _hover={{ bgGradient: "linear(to-r,brand.100,rgb(34, 112, 164))"}}
      onClick={onClick}
    >
      Book Trip
    </Button>
  );
};

export default HeroNavButton;
