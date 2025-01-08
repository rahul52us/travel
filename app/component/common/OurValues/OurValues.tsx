import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const OurValues = () => {
  return (
    <Box bg={"#065F680D"} py={"8rem"}>
      <Grid templateColumns={"1.15fr 1fr"} placeItems={"center"}>
        <Box>
            <Box bg={'#FFB8B2'} h={'20rem'} w={'400px'} borderTopRightRadius={'220px'} borderBottomLeftRadius={'220px'}  />
          <Image src="images/aboutimage2.png"  />



          <Center>
          <Box
            height="37px"
            bgColor="#494949"
            opacity="0.70"
            filter="blur(73px)"
            borderRadius="40%" // Assuming it's a perfect ellipse
          />
          </Center>
        </Box>
        <Box>
          <Text fontSize={"54px"} fontWeight={400} color={"#0F0F0F"}>
            What Makes
            <Text fontWeight={600} as={"span"}>
              {" "}
              Us Unique
            </Text>
          </Text>
          <Text w={"70%"} color={"#434343"}>
            At Metamind, we know that seeking mental health care can be a long,
            frustrating journey. With us, you’ll find the right support to move
            forward with clarity & confidence.
          </Text>
          <VStack spacing={3} align={"stretch"} w={"650px"}>
            <Box
              mt={6}
              px={8}
              py={4}
              rounded={8}
              shadow={"rgba(0, 0, 0, 1.18)"}
              bg={"#FFFFFF"}
            >
              <Flex align={"center"} gap={2}>
                <Image src="/icons/icon1.svg" />
                <Text fontSize={"20px"}>Completely Confidential</Text>
              </Flex>
              <Text color={"#292929"} fontSize={"16px"}>
                Everything you share stays private. Therapy is your safe space
                to talk openly without fear or judgment.
              </Text>
            </Box>
            <Flex
              bg={"#FFFFFF9C"}
              px={5}
              rounded={"16px"}
              py={2}
              align={"center"}
              gap={4}
            >
              <Icon boxSize={"32px"} color={"#045B648F"} as={FaHeartbeat} />
              <Text color={"#111111AB"} fontSize={"20px"}>
                Licensed Therapists
              </Text>
            </Flex>
            <Flex
              bg={"#FFFFFF9C"}
              px={5}
              rounded={"16px"}
              py={2}
              align={"center"}
              gap={4}
            >
              <Icon boxSize={"32px"} color={"#045B648F"} as={FaHeartbeat} />
              <Text color={"#111111AB"} fontSize={"20px"}>
                Flexible Therapy Options
              </Text>
            </Flex>
            <Flex
              bg={"#FFFFFF9C"}
              px={5}
              rounded={"16px"}
              py={2}
              align={"center"}
              gap={4}
            >
              <Icon boxSize={"32px"} color={"#045B648F"} as={FaHeartbeat} />
              <Text color={"#111111AB"} fontSize={"20px"}>
                Supervised Care
              </Text>
            </Flex>
            <Flex
              bg={"#FFFFFF9C"}
              px={5}
              rounded={"16px"}
              py={2}
              align={"center"}
              gap={4}
            >
              <Icon boxSize={"32px"} color={"#045B648F"} as={FaHeartbeat} />
              <Text color={"#111111AB"} fontSize={"20px"}>
                Tailored Treatments Plan
              </Text>
            </Flex>
          </VStack>
          <Button
            bgGradient={"linear(to-r, #065F68,#065F68, #2A8A94)"}
            mt={6}
            w={"180px"}
            h={"55px"}
            rounded={"8px"}
            fontWeight={500}
          >
            Get Started
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default OurValues;
