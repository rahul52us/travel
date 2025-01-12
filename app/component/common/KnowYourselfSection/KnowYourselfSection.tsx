import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";
import { CloseIcon } from "@chakra-ui/icons";
import CardComponent3 from "../CardComponent3/CardComponent3";

const data = [
  {
    bgGradient: "linear(to-br, #FFB8B2 80%, #FFFFFF)",
    borderColor: "#C686819E",
    rotatedText: "DEPRESSION",
    mainText: "“Feeling Low or Just a Rough Patch?”",
    imageSrc: "images/depressionImage2.png",
  },
  // {
  //   bgGradient: "linear(to-br, #B2D8FF 80%, #FFFFFF)",
  //   borderColor: "#819EC6",
  //   rotatedText: "ANXIETY",
  //   mainText: "“Feeling Overwhelmed or Nervous?”",
  //   imageSrc: "images/anxietyImage.png",
  // },
];

const KnowYourselfSection = () => {
  return (
    <Box py={8} px={4}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        alignItems="center"
      >
        {/* Left Section */}
        <Box py={6} maxW="90%">
          <Text textTransform="uppercase" color="#DF837C">
            Our Providers
          </Text>
          <Heading
            as="h2"
            fontWeight={400}
            fontSize="52px"
            my={3}
            lineHeight="1.2"
          >
            Not Sure What you <br /> are{" "}
            <Text as="span" fontWeight={600}>
              struggling with?
            </Text>
          </Heading>
          <Text color="#434343" fontSize="18px" mt={4} lineHeight="32px">
            Take a quick, simple assessment to see if your symptoms match common
            mental health conditions. It’s not a diagnosis, but a helpful tool
            to understand what’s going on. Just answer a few easy questions, and
            we’ll guide you from there.
          </Text>
          <Button
            bgGradient="linear(to-r, #065F68,#065F68, #2A8A94)"
            mt={6}
            shadow="xl"
            w="210px"
            h="55px"
            rounded="8px"
            fontWeight={500}
            rightIcon={<LuArrowUpRight fontSize="22px" />}
          >
            Take Assessment
          </Button>
        </Box>

        <Box>
          <Grid templateColumns={{ base: "1fr", md: "1fr" }} gap={6}>
            {data.map((item, index) => (
              <CardComponent3
                key={index}
                bgGradient={item.bgGradient}
                borderColor={item.borderColor}
                rotatedText={item.rotatedText}
                mainText={item.mainText}
                imageSrc={item.imageSrc}
              />
            ))}
          </Grid>
          {/* <Box
            rounded="10px"
            bgGradient="linear(to-br, #FFB8B2 80%, #FFFFFF)"
            border="1px solid"
            borderColor={"#C686819E"}
            p={3}
            maxW="30rem"
            h="20rem"
            position="relative"
          >
            <Text
              py={2}
              px={4}
              transform="rotate(-90deg)"
              transformOrigin="left top"
              position="absolute"
              top="9rem"
              left="0.5rem"
              rounded="full"
              bg="#FFFFFF6E"
              fontWeight="bold"
              textAlign="center"
            >
              DEPRESSION
            </Text>

            <IconButton
              icon={<CloseIcon />}
              position="absolute"
              color={"black"}
              top="-0.5rem"
              right="-0.5rem"
              shadow={"base"}
              aria-label="Close"
              isRound
              bg="white"
              _hover={{ bg: "gray.200" }}
            />

            <Flex
              alignItems="flex-start"
              h="full"
              pl="3.5rem"
              pr="2rem"
              pt={"1.25rem"}
            >
              <Text fontSize="38px" lineHeight="1.2">
                “Feeling Low or Just a Rough Patch?”
              </Text>
            </Flex>

            <Image
              src="images/depressionImage2.png"
              alt="Placeholder"
              position="absolute"
              objectFit={"cover"}
              bottom={0}
              right="1rem"
              boxSize="10rem"
            />
          </Box> */}
        </Box>
      </Grid>
    </Box>
  );
};

export default KnowYourselfSection;
