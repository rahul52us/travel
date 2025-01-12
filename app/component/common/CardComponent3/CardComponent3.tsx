import React from "react";
import { Box, Text, Flex, IconButton, Image } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const CardComponent3 = ({ bgGradient, borderColor, rotatedText, mainText, imageSrc }) => {
  return (
    <Box
      rounded="10px"
      bgGradient={bgGradient}
      border="1px solid"
      borderColor={borderColor}
      p={3}
      maxW="30rem"
      h="20rem"
      position="relative"
    >
      {/* Rotated Text */}
      <Text
        py={2}
        px={4}
        transform="rotate(-90deg)"
        transformOrigin="left top"
        position="absolute"
        top="9rem"
        left="0.5rem"
        rounded="full"
        bg="#FFFFFF6E"
        fontWeight="bold"
        textAlign="center"
      >
        {rotatedText}
      </Text>

      {/* Icon Button */}
      <IconButton
        icon={<CloseIcon />}
        position="absolute"
        color="black"
        top="-0.5rem"
        right="-0.5rem"
        shadow="base"
        aria-label="Close"
        isRound
        bg="white"
        _hover={{ bg: "gray.200" }}
      />

      {/* Main Text */}
      <Flex alignItems="flex-start" h="full" pl="3.5rem" pr="2rem" pt="1.25rem">
        <Text fontSize="38px" lineHeight="1.2">
          {mainText}
        </Text>
      </Flex>

      {/* Image */}
      <Image
        src={imageSrc}
        alt="Card Image"
        position="absolute"
        objectFit="cover"
        bottom={0}
        right="1rem"
        boxSize="10rem"
      />
    </Box>
  );
};

export default CardComponent3;
