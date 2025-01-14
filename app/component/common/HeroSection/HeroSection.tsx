import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const HeroSection = () => {
  return (
    <Box mx={"auto"} my={12} maxW={"85%"}>
      <Grid templateColumns={"1fr 1fr"} gap={6}>
        <Box>
          <Flex align={"center"} justify={"center"} h={"100%"}>
            <Box py={6} maxW="90%">
              <Text textTransform="uppercase" color="#DF837C">
                Our Providers
              </Text>
              <Heading
                as="h1"
                fontWeight={400}
                fontSize="5.25rem"
                my={3}
                lineHeight="1.2"
              >
                For Better <br />{" "}
                <Text as="span" fontWeight={600}>
                  Mental Health
                </Text>
              </Heading>
              <Text color="#434343" fontSize="18px" mt={4} lineHeight="32px">
                Our mission is to make specialised mental health care accessible
                to those who struggle to get the help they need. We support
                teenagers, adults, and families in their recovery from mental
                illness– Metamind is here to help.
              </Text>
              <Button
                bgGradient="linear(to-r, #065F68,#065F68, #2A8A94)"
                mt={6}
                shadow="xl"
                w="210px"
                h="55px"
                rounded="8px"
                fontWeight={500}
              >
                Get Started
              </Button>
            </Box>
          </Flex>
        </Box>
        <Flex justify={"end"}>
          <Box>
            <Flex gap={3}>
              <Box
                w={"6rem"} // 110px -> 6.875rem
                h={"9rem"} // 155px -> 9.6875rem
                bg={"#FFB8B2"}
                borderBottomRightRadius={"2.625rem"} // 42px -> 2.625rem
              />
              <Box
                w={"16rem"} // 280px -> 17.5rem
                h={"9rem"} // 155px -> 9.6875rem
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
                src="/images/homeimage2.png"
                w={"11rem"} // 180px -> 11.25rem
                h={"9rem"} // 155px -> 9.6875rem
              />
            </Flex>
            <Flex gap={3} mt={3}>
              <Box>
                <Image
                  src="/images/homeimage1.png"
                  alt=""
                  h={"13rem"} // 225px -> 14.0625rem
                  objectFit={"cover"}
                  w={"22.8rem"} // 403px -> 25.1875rem
                />
                <Grid templateColumns={"1fr 1fr"} mt={3} gap={"1rem"}>
                  <Box
                    bg={"#86C6F4"}
                    borderBottomLeftRadius={"2.625rem"} // 42px -> 2.625rem
                  />
                  <Box
                    bg={"#065F68"}
                    h={"9.25rem"} // 148px -> 9.25rem
                    borderBottomRightRadius={"2.625rem"} // 42px -> 2.625rem
                    borderTopLeftRadius={"2.625rem"} // 42px -> 2.625rem
                  />
                </Grid>
              </Box>
              <Box>
                <Box
                  w={"11rem"} // 180px -> 11.25rem
                  h={"7rem"} // 117px -> 7.3125rem
                  bg={"#EAF475"}
                  mb={"1rem"} // 16px -> 1rem
                />
                <Image
                  src="/images/homeimage3.png"
                  objectFit={"cover"}
                  alt=""
                  h={"15rem"} // 260px -> 16.25rem
                  w={"11rem"} // 180px -> 11.25rem
                  borderBottomRightRadius={"2.625rem"} // 42px -> 2.625rem
                  borderTopLeftRadius={"2.625rem"} // 42px -> 2.625rem
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default HeroSection;
