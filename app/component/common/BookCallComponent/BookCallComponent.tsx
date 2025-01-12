import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

const BookCallComponent = () => {
  return (
    <Box
      w={"95%"}
      mx={"auto"}
      p={6}
      rounded={"24px"}
      bg={"#FFF1F0"}
      position="relative"
    >
      <Image
        src="images/shape1.png"
        transform={"scaleX(-1)"}
        w={"12rem"}
        h={"10rem"}
        position={"absolute"}
        right={"1rem"}
        top={"1.5rem"}
      />
      <Box
        rounded={"24px"}
        bgGradient={"linear(to-r, #045B64, #066D77)"}
        py={"4.5rem"}
        px={"12rem"}
        color={"#FFFFFF"}
      >
        <Text textAlign={"center"} fontSize={"18px"} mb={1}>
          Still Unsure? Let’s Talk.
        </Text>
        <Text
          fontSize={"44px"}
          textAlign={"center"}
          lineHeight={"56px"}
          color={"#FFFFFF"}
          fontWeight={400}
        >
          Book a{" "}
          <Text as={"span"} fontWeight={500}>
            {" "}
            Free 15-minute{" "}
          </Text>{" "}
          call with a licensed therapist. Ask questions, clear doubts, and take
          the first step toward better mental health
        </Text>
        <Center>
          <Button
            bg={"#FFB8B2"}
            color={"black"}
            fontWeight={500}
            h={"52px"}
            w={"170px"}
            mt={4}
            shadow={"xl"}
          >
            Book 15-min call
          </Button>
        </Center>
      </Box>
      <Image
        src="images/shape1.png"
        w={"12rem"}
        h={"10rem"}
        position={"absolute"}
        left={"1rem"}
        bottom={"1rem"}
      />
    </Box>
  );
};

export default BookCallComponent;
