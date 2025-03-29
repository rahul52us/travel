"use client";
import { Button } from "@chakra-ui/react";
import React from "react";

const HeroNavButton = () => {
  return (
    <Button
  // bgGradient="linear(to-r, #6DD5FA, #2980B9)"
  bgGradient={"linear(to-r, #6DD5FA, #2980B9)"}
  size="lg"
  fontWeight={500}
  fontSize="sm"
  _hover={{ bgGradient: "linear(to-r,rgb(75, 194, 237),rgb(34, 112, 164))"}}
>
  Book Trip
</Button>
  );
};

export default HeroNavButton;
