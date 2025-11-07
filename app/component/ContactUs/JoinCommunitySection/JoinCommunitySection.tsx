import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import CustomSmallTitle from "../../common/CustomSmallTitle/CustomSmallTitle";
//   import CustomButton from "../common/CustomButton/CustomButton";
//   import CustomSmallTitle from "../common/CustomSmallTitle/CustomSmallTitle";

const JoinCommunitySection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box my={{lg:"6rem"}} maxW={{ base:"95%",md: "90%", xl: "85%" }} mx={"auto"}>
      {isMobile ? (
        // Mobile View
        <Flex direction="column" align="center" p={4}>
          {/* Heading and Text */}
          <Box textAlign="center">
            <CustomSmallTitle >Join Our Community</CustomSmallTitle>
            <Heading
              mt={1}
              as={"h2"}
              fontSize={{ base: "24px", md: "44px", xl: "46px" }}
            >
              Join our community
            </Heading>
          </Box>

          {/* Image */}
          <Box mt={6} ml={{lg:-4}}>
            <Image
              src="https://media.istockphoto.com/id/1217093906/photo/womens-hand-typing-on-mobile-smartphone-live-chat-chatting-on-application-communication.jpg?s=2048x2048&w=is&k=20&c=5ruD84xHuW8x0d8W1uJK63UEbe4f-gGhgcY0RXp5Y-c="
              alt="Community Image"
            />
          </Box>

          {/* Description */}
          <Text mt={4} color={"#434343"} textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim a a tr veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Text>

          {/* Button */}
          <Box mt={6}>
            {/* <CustomButton
                size={buttonSize}
                w={buttonWidth}
                rounded={"full"}
                onClick={() =>
                  window.open(
                    "https://chat.whatsapp.com/XXXXXXXXXXXXXX",
                    "_blank"
                  )
                }
              >
                Subscribe Now
              </CustomButton> */}
          </Box>
        </Flex>
      ) : (
        // Tablet and Desktop View
        <Grid templateColumns={"1fr 1fr"} gap={2}>
          {/* Text Content */}
          <Box p={4} pt={"4rem"}>
            <CustomSmallTitle textAlign={"start"}>
              Join Our Community
            </CustomSmallTitle>
            <Heading
              mt={1}
              as={"h2"}
              fontSize={{ base: "24px", md: "44px", xl: "46px" }}
            >
              Join our community
            </Heading>
            <Text mt={6} w={"90%"} color={"#434343"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim a a tr veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Box mt={6}>
              {/* <CustomButton
                  size={buttonSize}
                  w={buttonWidth}
                  rounded={"full"}
                  onClick={() =>
                    window.open(
                      "https://chat.whatsapp.com/XXXXXXXXXXXXXX",
                      "_blank"
                    )
                  }
                >
                  Subscribe Now
                </CustomButton> */}
            </Box>
          </Box>

          {/* Image */}
          <Box mt={4}>
            <Image
              src="https://media.istockphoto.com/id/1217093906/photo/womens-hand-typing-on-mobile-smartphone-live-chat-chatting-on-application-communication.jpg?s=2048x2048&w=is&k=20&c=5ruD84xHuW8x0d8W1uJK63UEbe4f-gGhgcY0RXp5Y-c="
              alt="Community Image"
              w={"80%"}
              mx={"auto"}
              h={"90%"}
              objectFit={"cover"}
              rounded={"2xl"}
            />
          </Box>
        </Grid>
      )}
    </Box>
  );
};

export default JoinCommunitySection;
