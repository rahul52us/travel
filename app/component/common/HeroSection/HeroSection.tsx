import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  return (
    <Box mx={"auto"}>
      <Grid templateColumns={"1fr 1fr"}>
        <Box>hello</Box>
        <Box>
          <Flex gap={3}>
            <Box
              w={"6.875rem"} // 110px -> 6.875rem
              h={"9.6875rem"} // 155px -> 9.6875rem
              bg={"#FFB8B2"}
              borderBottomRightRadius={"2.625rem"} // 42px -> 2.625rem
            />
            <Box
              w={"17.5rem"} // 280px -> 17.5rem
              h={"9.6875rem"} // 155px -> 9.6875rem
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
              w={"11.25rem"} // 180px -> 11.25rem
              h={"9.6875rem"} // 155px -> 9.6875rem
            />
          </Flex>
          <Flex gap={3} mt={3}>
            <Box>
              <Image
                src="/images/homeimage1.png"
                alt=""
                h={"14.0625rem"} // 225px -> 14.0625rem
                w={"25.1875rem"} // 403px -> 25.1875rem
              />
              <Grid templateColumns={"1fr 1fr"} mt={"1rem"} gap={"1rem"}>
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
                w={"11.25rem"} // 180px -> 11.25rem
                h={"7.3125rem"} // 117px -> 7.3125rem
                bg={"#EAF475"}
                mb={"1rem"} // 16px -> 1rem
              />
              <Image
                src="/images/homeimage3.png"
                alt=""
                h={"16.25rem"} // 260px -> 16.25rem
                w={"11.25rem"} // 180px -> 11.25rem
                borderBottomRightRadius={"2.625rem"} // 42px -> 2.625rem
                borderTopLeftRadius={"2.625rem"} // 42px -> 2.625rem
              />
            </Box>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default HeroSection;
