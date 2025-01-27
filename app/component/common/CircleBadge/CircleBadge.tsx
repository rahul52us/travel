'use client';

import { Box, Text } from "@chakra-ui/react";
import React from "react";

// CircleBadge component with props for flexibility, including dynamic colors
const CircleBadge = ({ price, label, icon, gradientStart, gradientEnd, borderColor, textColor, iconColor, bgColor }) => {
  return (
    <Box
      position="relative"
      width="180px"
      height="180px"
      bgGradient={`linear(to-b, ${gradientStart || 'blue.50'}, ${gradientEnd || 'blue.100'})`}
      clipPath="circle(50% at 50% 50%)"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      boxShadow="lg"
      border="5px solid"
      borderColor={borderColor || 'blue.300'}
      borderRadius="full"
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "xl",
      }}
      cursor="pointer"
    >
      <Box
        bg="white"
        px="12px"
        py="6px"
        borderRadius="md"
        boxShadow="sm"
        position="absolute"
        top="10%"
      >
        <Text fontSize="xs" fontWeight="bold" color={textColor || 'gray.600'}> {/* dynamic text color */}
          {label || 'LABEL'}
        </Text>
      </Box>

      {/* Main Price Text */}
      <Text fontSize="2xl" fontWeight="bold" color={textColor || 'blue.700'}> {/* dynamic price text color */}
        ₹ {price || '0'}
      </Text>

      {/* Bottom Icon or Star */}
      <Box
        as="span"
        bg={bgColor || 'blue.200'} // dynamic background color for the icon
        color={iconColor || 'blue.700'} // dynamic icon color
        px="8px"
        py="3px"
        borderRadius="full"
        fontSize="lg"
        position="absolute"
        bottom="8%"
        boxShadow="sm"
        transform="scale(1.2)"
      >
        {icon || '★'}
      </Box>
    </Box>
  );
};

export default CircleBadge;
