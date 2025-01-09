import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import React from "react";

// Reusable Card Component
const CardComponent1 = ({
  index,
  title,
  description,
  image,
  buttonText,
  buttonLink,
  bgColor,
}) => {
  return (
    <Box>
      <Card
        maxW={"xs"}
        p={4}
        bg={bgColor}
        pb={8}
        rounded={"10px"}
        h={"500px"} // Fixed height for the card
        display="flex"
        flexDirection="column"
        borderTopLeftRadius={index === 0 ? "84px" : "8px"}
        borderBottomRightRadius={index === 3 ? "80px" : "8px"}
        justifyContent="space-between"
      >
        <Image
          src={image}
          borderTopLeftRadius={index === 0 ? "80px" : "8px"}
          borderBottomRightRadius={index === 3 ? "80px" : "8px"}
          objectFit={"cover"}
          w={"100%"}
          h={"280px"} // Fixed height for the image
          alt={title}
        />
        <Box flexGrow={1}>
          <Text mt={5} mb={3} fontWeight={600} fontSize={"22px"} noOfLines={1}>
            {title}
          </Text>
          <Text
            color={"#434343"}
            fontSize={"15px"}
            lineHeight={"26px"}
            noOfLines={3} // Ensures text does not overflow
          >
            {description}
          </Text>
        </Box>
        <Button
          rightIcon={<ChevronRightIcon />}
          color={"#065F68"}
          w={"fit-content"}
          textAlign={"start"}
          bg={"none"}
          p={0}
          variant={"link"}
          fontSize={"18px"}
          mt={4}
          onClick={() => window.open(buttonLink, "_blank")}
        >
          {buttonText}
        </Button>
      </Card>
    </Box>
  );
};

export default CardComponent1;
