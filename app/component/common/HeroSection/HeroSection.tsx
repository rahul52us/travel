import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import CustomButton from "../CustomButton/CustomButton";

const HeroSection = () => {
  const bittonSize = useBreakpointValue({ base: "lg", md: "xl" });
  const buttonWidth = useBreakpointValue({ base: "8rem", md: "180px" });
  return (
    <Box mx={"auto"} my={{ base: 4, md:6,lg: 10 }} maxW={{ base: "90%", md: "85%" }}>
      <Grid templateColumns={{ lg: "1fr 1fr" }} gap={6}>
        <Box>
          <Flex align={"center"} h={"100%"}>
            <Box py={{ base: 4, md: 6 }} maxW="90%">
              <Text textTransform="uppercase" color="#DF837C">
                SEEK HELP
              </Text>
              <Heading
                as="h1"
                fontWeight={400}
                fontSize={{ base: "2.8rem", md: "5.25rem" }}
                my={3}
                lineHeight="1.15"
              >
                For Better <br />{" "}
                <Text as="span" fontWeight={600}>
                  Mental Health
                </Text>
              </Heading>
              <Text
                color="#434343"
                fontSize={{ base: "16px", md: "18px" }}
                mt={{ base: 1, md: 4 }}
                lineHeight={{ base: "28px", md: "32px" }}
              >
                Our mission is to make specialised mental health care accessible
                to those who struggle to get the help they need. We support
                teenagers, adults, and families in their recovery from mental
                illness– Metamind is here to help.
              </Text>
              <Box mt={{ base: 4, md: 6 }}>
                <CustomButton
                  width={buttonWidth}
                  size={bittonSize}
                  onClick={() => alert("Button Clicked!")}
                >
                  Get Started
                </CustomButton>
              </Box>
            </Box>
          </Flex>
        </Box>

        <Flex justify={{base:"center",lg:"end"}}>
          <Box>
            <Flex gap={[2, 3]}>
              <Box
                w={["4rem", "5.5rem"]} // Smaller for base, default for larger screens
                h={["6rem", "8.25rem"]}
                bg={"#FFB8B2"}
                borderBottomRightRadius={"2.625rem"}
              />
              <Box
                w={["11rem", "15.5rem"]}
                h={["6rem", "8.25rem"]}
                bg={"#065F68"}
                borderTopLeftRadius={"2.625rem"}
                p={["1rem", "1.5rem"]}
              >
                <Flex direction={"column"} justify={"space-between"} h={"100%"}>
                  <Text
                    color={"white"}
                    fontSize={["1rem", "1.3125rem"]}
                    fontWeight={500}
                  >
                    Talk. Listen. Recover
                  </Text>
                  <Text color={"white"} fontSize={["0.875rem", "1.0625rem"]}>
                    Get Started
                  </Text>
                </Flex>
              </Box>
              <Image
                src="/images/homeImage2.png"
                w={["7rem", "10.5rem"]}
                h={["6rem", "8.25rem"]}
                alt=""
              />
            </Flex>
            <Flex gap={[2, 3]} mt={[2, 3]}>
              <Box>
                <Image
                  src="/images/homeImage1.png"
                  alt=""
                  h={["8rem", "12rem"]}
                  objectFit={"cover"}
                  w={["14rem", "21.75rem"]}
                />
                <Grid
                  templateColumns={"1fr 1fr"}
                  mt={[2, 3]}
                  gap={["0.5rem", "1rem"]}
                >
                  <Box
                    bg={"#86C6F4"}
                    borderBottomLeftRadius={"2.625rem"}
                    pt={[6, 6]}
                    pl={[3, 4]}
                  >
                    <Text
                      lineHeight={["2rem", "4rem"]}
                      fontWeight={700}
                      fontSize={["2rem", "3.25rem"]}
                    >
                      +5k
                    </Text>
                    <Text fontSize={["0.55rem", "0.9rem"]}>
                      Happy users catered
                    </Text>
                  </Box>
                  <Box
                    bg={"#065F68"}
                    h={["6rem", "9rem"]}
                    borderBottomRightRadius={"2.625rem"}
                    borderTopLeftRadius={"2.625rem"}
                  />
                </Grid>
              </Box>
              <Box>
                <Box
                  w={["7rem", "10.5rem"]}
                  h={["4rem", "6rem"]}
                  bg={"#EAF475"}
                  mb={["0.5rem", "1rem"]}
                />
                <Image
                  src="/images/homeimage3.png"
                  objectFit={"cover"}
                  alt=""
                  h={["10rem", "15rem"]}
                  w={["7rem", "10.5rem"]}
                  borderBottomRightRadius={"2.625rem"}
                  borderTopLeftRadius={"2.625rem"}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* <Flex justify={"end"}>
          <Box>
            <Flex gap={3}>
              <Box
                w={"5.5rem"} // 110px -> 6.875rem
                h={"8.25rem"} // 155px -> 9.6875rem
                bg={"#FFB8B2"}
                borderBottomRightRadius={"2.625rem"} // 42px -> 2.625rem
              />
              <Box
                w={"15.5rem"} // 280px -> 17.5rem
                h={"8.25rem"} // 155px -> 9.6875rem
                bg={"#065F68"}
                borderTopLeftRadius={"2.625rem"} // 42px -> 2.625rem
                p={"1.5rem"} // 24px -> 1.5rem
              >
                <Flex direction={"column"} justify={"space-between"} h={"100%"}>
                  <Text color={"white"} fontSize={"1.3125rem"} fontWeight={500}>
                    Talk. Listen. Recover
                  </Text>
                  <Text color={"white"} fontSize={"1.0625rem"}>
                    Get Started
                  </Text>
                </Flex>
              </Box>
              <Image
                src="/images/homeImage2.png"
                w={"10.5rem"} // 180px -> 11.25rem
                h={"8.25rem"} // 155px -> 9.6875rem
                alt=""
              />
            </Flex>
            <Flex gap={3} mt={3}>
              <Box>
                <Image
                  src="/images/homeImage1.png"
                  alt=""
                  h={"12rem"} // 225px -> 14.0625rem
                  objectFit={"cover"}
                  w={"21.75rem"} // 403px -> 25.1875rem
                />
                <Grid templateColumns={"1fr 1fr"} mt={3} gap={"1rem"}>
                  <Box
                    bg={"#86C6F4"}
                    borderBottomLeftRadius={"2.625rem"} // 42px -> 2.625rem
                    pt={8}
                    pl={4}
                  >
                    <Text
                      lineHeight={"4rem"}
                      fontWeight={700}
                      fontSize={"3.25rem"}
                    >
                      +5k
                    </Text>
                    <Text>Happy users catered</Text>
                  </Box>
                  <Box
                    bg={"#065F68"}
                    h={"9rem"} // 148px -> 9.25rem
                    borderBottomRightRadius={"2.625rem"} // 42px -> 2.625rem
                    borderTopLeftRadius={"2.625rem"} // 42px -> 2.625rem
                  />
                </Grid>
              </Box>
              <Box>
                <Box
                  w={"10.5rem"} // 180px -> 11.25rem
                  h={"6rem"} // 117px -> 7.3125rem
                  bg={"#EAF475"}
                  mb={"1rem"} // 16px -> 1rem
                />
                <Image
                  src="/images/homeimage3.png"
                  objectFit={"cover"}
                  alt=""
                  h={"15rem"} // 260px -> 16.25rem
                  w={"10.5rem"} // 180px -> 11.25rem
                  borderBottomRightRadius={"2.625rem"} // 42px -> 2.625rem
                  borderTopLeftRadius={"2.625rem"} // 42px -> 2.625rem
                />
              </Box>
            </Flex>
          </Box>
        </Flex> */}
      </Grid>
    </Box>
  );
};

export default HeroSection;
