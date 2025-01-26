'use client'
/** @jsxImportSource @emotion/react */
import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

export default function AnimatedBox() {
  const flowingColor = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  `;

  const isVisible = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isVisible && (
        <Box
          h={"3rem"}
          p={3}
          position="fixed"
          top={0}
          left={0}
          right={0}
          zIndex={20}
          bgGradient="linear(to-r, #006F94, #0097B2, #00A9D1, #006F94)" // Blue gradient colors
          bgSize="200% 200%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="md"
          css={{
            animation: `${flowingColor} 6s ease-in-out infinite`
          }}
        >
          <Text
            color="white"
            fontWeight="extrabold"
            fontSize="lg"
            textAlign="center"
            whiteSpace="nowrap"
            letterSpacing="wide"
            cursor="pointer"
          >
            🎨 LATEST: Discover Stunning Original Paintings by Talented Artists! 🖌️
          </Text>
        </Box>
      )}
    </>
  );
}
