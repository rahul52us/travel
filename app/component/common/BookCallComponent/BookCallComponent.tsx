import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";

const BookCallComponent = () => {
  return (
    <Box
      bg={"#FFF1F0"}
      position="relative"
      overflow="hidden"
    >
      <Image
        src="images/shape1.png"
        transform={"scaleX(-1)"}
        w={["8rem", "10rem", "12rem"]}
        h={["6rem", "8rem", "10rem"]}
        position={"absolute"}
        right={"0"}
        top={"0"}
        alt="book"
      />
      <Box
        bgGradient={"linear(to-r, #045B64, #066D77)"}
        py={["2rem", "3rem"]}
        px={{ base: "1rem", md: "2rem", lg: "12rem" }}
        color={"#FFFFFF"}
      >
        <Text textAlign={"center"} fontSize={["14px", "16px", "18px"]}>
          Still Unsure? Let’s Talk.
        </Text>
        <Text
          fontSize={["24px", "32px", "40px"]}
          textAlign={"center"}
          lineHeight={["32px", "40px", "56px"]}
          color={"#FFFFFF"}
          fontWeight={400}
          my={2}
        >
          Book a{" "}
          <Text as={"span"} fontWeight={500}>
            Free 15-minute
          </Text>{" "}
          call with a licensed therapist.
        </Text>
        <Text textAlign={"center"} fontSize={["12px", "14px", "18px"]}>
          At Metamind, our licensed therapists specialize in various treatments,
          including CBT, ACT, Psychodynamic
        </Text>
        <Center>
          <Button
            bg={"#FFB8B2"}
            color={"black"}
            fontWeight={500}
            h={["40px", "45px", "52px"]}
            w={["120px", "140px", "170px"]}
            mt={4}
            shadow={"xl"}
            fontSize={["12px", "14px", "16px"]}
          >
            Book 15-min call
          </Button>
        </Center>
      </Box>
      <Image
        src="images/shape1.png"
        w={["7rem", "10rem", "12rem"]}
        h={["6rem", "8rem", "10rem"]}
        position={"absolute"}
        left={"0"}
        bottom={"0"}
        alt="shape"
      />
    </Box>
  );
};

export default BookCallComponent;
