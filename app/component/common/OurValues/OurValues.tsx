import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import CustomButton from "../CustomButton/CustomButton";
import { features } from "./featureData";

const OurValues = () => {
  const buttonSize = useBreakpointValue({base:"lg",md:"xl"})
  const buttonWidth = useBreakpointValue({base:"7rem",md:"180px"})

  return (
    <Box
      bg={"#F3F7F7"}
      py={{ base: "3rem", md: "6rem" }}
      px={{ base: 4 }}
      position="relative"
      borderTopLeftRadius={"120px"}
      borderBottomRightRadius={"120px"}
      overflow="hidden"
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "1.15fr 1fr" }} // Adjust grid layout for smaller screens
        alignItems={{ base: "center", md: "start" }}
        gap={{ base: 6, md: 0 }}
      >
        <Box
          display={{ base: "block", lg: "none" }}
          textAlign={{ base: "center", lg: "start" }}
        >
          <Text textTransform="uppercase" color="#DF837C">
            OUR VALUES
          </Text>
          {/* <Text
            fontSize={{ base: "30px", md: "54px" }}
            fontWeight={400}
            color={"#0F0F0F"}
          >
            What Makes
            <Text fontWeight={600} as={"span"}>
              {" "}
              Us Unique
            </Text>
          </Text> */}
          <Heading
            textAlign={"center"}
            as={"h2"}
            fontWeight={400}
            fontSize={{ base: "30px", md: "54px" }}
            my={{ md: 2 }}
          >
            What Makes{" "}
            <Text as={"span"} fontWeight={600}>
              Us Unique
            </Text>
          </Heading>
          <Text
            w={{ base: "100%", lg: "70%" }}
            color={"#434343"}
            fontSize={{ base: "14px", md: "16px" }}
            px={{md:4,lg:0}}
          >
            At Metamind, we know that seeking mental health care can be a long,
            frustrating journey. With us, you’ll find the right support to move
            forward with clarity & confidence.
          </Text>
        </Box>
        <Box
          position={{ base: "relative", lg: "sticky" }}
          top={0}
          height={{ base: "auto", lg: "100%" }}
          maxHeight={{ base: "300px", md: "600px" }}
        >
          <Image
            src="images/aboutimage2.png"
            objectFit={"contain"}
            height={{ base: "auto", md: "100%" }}
            width={"100%"}
            alt="aboutImage"
          />
        </Box>

        <Box>
          <Box display={{ base: "none", lg: "block" }}>
            <Text textTransform="uppercase" color="#DF837C">
              Our Providers
            </Text>
            <Text
              fontSize={{ base: "30px", md: "48px" }}
              fontWeight={400}
              color={"#0F0F0F"}
            >
              What Makes
              <Text fontWeight={600} as={"span"}>
                {" "}
                Us Unique
              </Text>
            </Text>
            <Text
              w={{ base: "100%", md: "70%" }}
              color={"#434343"}
              fontSize={{ base: "14px", md: "16px" }}
            >
              At Metamind, we know that seeking mental health care can be a
              long, frustrating journey. With us, you’ll find the right support
              to move forward with clarity & confidence.
            </Text>
          </Box>
          <Box
            maxHeight="24rem"
            minH={"24rem"}
            overflowY="hidden"
            mb={6}
            mt={{ base: 4 }}
          >
            <Accordion w={{ base: "100%", lg: "90%" }} defaultIndex={0}>
              <VStack spacing={3} align="stretch">
                {features.map((feature, index) => (
                  <AccordionItem key={index} border="none">
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          px={8}
                          pt={isExpanded ? 4 : 3}
                          pb={isExpanded ? 0 : 3}
                          bg={isExpanded ? "white" : "#FFFFFF9C"}
                          rounded={"16px"}
                          borderBottomRadius={isExpanded ? "0px" : "16px"}
                          boxShadow={
                            isExpanded ? "rgba(0, 0, 0, 0.18)" : "none"
                          }
                          _hover={{ bg: "white" }}
                        >
                          <Flex align="center" gap={4} flex="1">
                            <Image
                              src={feature.icon}
                              alt="icon"
                              boxSize="26px"
                              opacity={isExpanded ? 1 : 0.6}
                            />

                            <Text
                              fontSize={{ base: "16px", md: "18px" }}
                              color={isExpanded ? "#292929" : "#111111AB"}
                            >
                              {feature.title}
                            </Text>
                          </Flex>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel
                          pb={4}
                          px={8}
                          bg={isExpanded ? "white" : "#FFFFFF9C"}
                          borderBottomRadius={"16px"}
                        >
                          <Text
                            color="#292929"
                            fontSize={{ base: "14px", md: "16px" }}
                          >
                            {feature.description}
                          </Text>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </VStack>
            </Accordion>
          </Box>

          <Box position="relative" bottom={0}>
            <CustomButton
              width={buttonWidth}
              size={buttonSize}
              onClick={() => alert("Button Clicked!")}
              // mt={6}
            >
              Get Started
            </CustomButton>
            {/* <Button
              bgGradient={"linear(to-r, #065F68,#065F68, #2A8A94)"}
              w={{ base: "140px", md: "180px" }}
              h={{ base: "45px", md: "55px" }}
              rounded={"8px"}
              fontWeight={500}
              fontSize={{ base: "14px", md: "16px" }}
            >
              Get Started
            </Button> */}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default OurValues;
