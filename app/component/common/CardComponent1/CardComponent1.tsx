import { FaChevronRight } from "react-icons/fa";
import { Box, Button, Card, Image, Text } from "@chakra-ui/react";
import React from "react";

// Reusable Card Component
const CardComponent1 = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
  bgColor,
}) => {
  return (
    <Box
      cursor={"pointer"}
      overflow={"hidden"} // Ensures the zoomed image doesn't overflow
      _hover={{
        img: {
          transform: "scale(1.1)", // Zoom effect
        },
      }}
    >
      <Card
        maxW={{lg:"19rem"}}
        shadow={"none"}
        p={4}
        bg={bgColor}
        pb={8}
        rounded={"10px"}
        h={"30.5rem"} // Fixed height for the card
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Image
          src={image}
          rounded={"8px"}
          objectFit={"cover"}
          w={"100%"}
          h={"270px"} // Fixed height for the image
          alt={title}
          transition={"transform 0.3s ease-in-out"} // Smooth zoom transition
        />
        <Box flexGrow={1}>
          <Text mt={5} mb={3} fontWeight={500} fontSize={"22px"} noOfLines={1}>
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
          rightIcon={<FaChevronRight />}
          color={"#065F68"}
          w={"fit-content"}
          textAlign={"start"}
          bg={"none"}
          p={0}
          variant={"link"}
          fontSize={"18px"}
          mt={2}
          onClick={() => window.open(buttonLink, "_blank")}
        >
          {buttonText}
        </Button>
      </Card>
    </Box>
  );
};

export default CardComponent1;
