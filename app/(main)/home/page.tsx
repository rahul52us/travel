'use client';
// src/app/game/page.tsx
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import HeroSection from "../../component/common/HeroSection/HeroSection";
import OurValues from "../../component/common/OurValues/OurValues";

export default function GamePage() {

  return (
    <Box>
      {/* <Text fontSize="xl" fontWeight="bold">Welcome to the Home Page</Text> */}
      <HeroSection/>
      <OurValues/>
    </Box>
  );
}
