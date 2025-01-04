'use client';
// src/app/game/page.tsx
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function GamePage() {
  const bgColor = useColorModeValue("brand.500", "brand.700");
  const textColor = useColorModeValue("white", "brand.100");

  return (
    <Box bg={bgColor} color={textColor} p={4}>
      <Text fontSize="xl" fontWeight="bold">Welcome to the Game Page</Text>
    </Box>
  );
}
