import { Box, Input, Image, Text, VStack, HStack, Grid, Heading, Flex, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import CustomButton from "../../../../component/common/CustomButton/CustomButton";
import { INSTRAGRAM_LINK } from "../../../../config/utils/variables";

const StayTune = () => {
    const buttonHeight = useBreakpointValue({ base: "40px", md: "50px" });

    return (
        <Box p={{ base: 4, md: 8 }}>
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                alignItems="center"
                gap={{ base: 6, md: 4 }}
            >
                {/* Left Side - Text & Input */}
                <VStack align="flex-start" spacing={2}>
                    <CustomSmallTitle>Stay Adventurous</CustomSmallTitle>

                    <Heading
                        as="h2"
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                        fontWeight="600"
                        color="#000"
                    >
                        Subscribe for Travel Tips & Deals
                    </Heading>

                    <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                        Get exclusive travel guides, destination inspirations, {" "}
                        <Box as="br" display={{ base: "none", md: "block" }} />
                        and the best deals delivered to your inbox.
                    </Text>

                    {/* Input Box and Button */}
                    <HStack spacing={2} w="100%" mt={6}>
                        <Input
                            placeholder="Enter Your Email"
                            bg="white"
                            border="1px solid #ccc"
                            _focus={{ borderColor: "#065F68" }}
                            h={{ base: "40px", md: "50px" }}
                            borderRadius="8px"
                        />
                        <CustomButton height={buttonHeight} borderRadius="8px" onClick={() =>
                            window.open(
                                INSTRAGRAM_LINK,
                                "_blank"
                            )
                        }>
                            Subscribe Now
                        </CustomButton>
                    </HStack>
                </VStack>

                {/* Right Side - Image */}
                <Flex justify={{ base: "center", md: "end" }} mt={{ base: 6, md: 0 }}>
                    <Image
                        src="https://st4.depositphotos.com/4640111/41072/i/450/depositphotos_410721236-stock-photo-planning-vacation-travel-plan-trip.jpg"
                        alt="Travel Planning"
                        h={{ base: "200px", md: "300px" }}
                        objectFit="cover"
                        blendMode={"multiply"}
                    />
                </Flex>
            </Grid>
        </Box>
    );
};

export default StayTune;