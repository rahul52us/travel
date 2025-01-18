import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaHeartbeat } from "react-icons/fa";

const OurValues = () => {
  return (
    <Box bg={"#065F680D"} py={"8rem"}>
      <Grid templateColumns={"1.15fr 1fr"} alignItems={"end"}>
        <Box position="relative" mb={10}>
          <Flex gap={3} align="flex-end" justify={"center"}>
            <Box
              bg="#FFB8B2"
              h="22rem"
              w="24.5rem"
              borderTopRightRadius="190px"
              borderBottomLeftRadius="190px"
            />
            <Box
              bg="#065F68"
              h="17.5rem"
              w="9rem"
              borderTopLeftRadius="90px"
              borderBottomRightRadius="90px"
            />
          </Flex>

          {/* Adjusted Image Position */}
          <Image
            src="images/aboutimage2.png"
            position="absolute"
            bottom="2" // Aligns the base of the image with the base of the boxes
            left="50%"
            transform="translateX(-50%)"
            zIndex="1" // Ensures the image appears above the boxes
          />
          <Center>
            <Box
              height="37px"
              bgColor="#494949"
              opacity="0.70"
              filter="blur(73px)"
              borderRadius="40%"
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
