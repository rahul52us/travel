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

const list = [
  "ADHD",
  "Depression",
  "Anxiety",
  "Body - Image",
  "Trauma",
  "OCD",
  "Mood Disorder",
  "And More..",
];

const ProvidersSection = () => {
  return (
    <Box>
      <Grid templateColumns={"1fr 1fr"} gap={4}>
        <Box py={14} w={"95%"}>
          <Text textTransform={"uppercase"} color={"#DF837C"}>
            Our Providers
          </Text>
          <Heading as={"h2"} fontWeight={400} fontSize={"52px"} my={3}>
            Meet our{" "}
            <Text as={"span"} fontWeight={600}>
              Licensed <br /> Therapists
            </Text>
          </Heading>
          <Text color={"#434343"} fontSize={"20px"}>
            At Metamind, our licensed therapists specialize in various
            treatments, including CBT, ACT, Psychodynamic Therapy, and more. We
            treat a wide range of conditions, such as:
          </Text>
          <Flex mt={4} flexWrap={"wrap"}>
            {list.map((item, index) => (
              <Box
                key={index}
                py={2}
                px={8}
                mb={2}
                w={"fit-content"}
                rounded={"full"}
                border={"1px solid #065F68"}
                color={"#065F68"}
                mr={3}
                fontSize={"16px"}
              >
                {item}
              </Box>
            ))}
          </Flex>

          <Button
            bgGradient={"linear(to-r, #065F68,#065F68, #2A8A94)"}
            mt={6}
            shadow={"xl"}
            w={"210px"}
            h={"55px"}
            rounded={"8px"}
            fontWeight={500}
            rightIcon={<LuArrowUpRight fontSize={"22px"} />}
          >
            Explose Therapist
          </Button>
        </Box>

        <Box>
          <Flex justify={"end"} w={"100%"} h={"85%"}>
            <Image src="images/providerSection.png" objectFit={"contain"} />
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default ProvidersSection;
