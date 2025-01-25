import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LuArrowUpRight } from "react-icons/lu";
import CustomButton from "../CustomButton/CustomButton";
import RotatingCard from "../RotatingCard/RotatingCard";

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
  const buttonSize = useBreakpointValue({ base: "md", md: "xl" });
  const buttonFont = useBreakpointValue({ base: "14px", md: "16px" });

  return (
    <Box>
      <Grid
        templateColumns={{ lg: "1fr 1fr" }}
        gap={4}
        justifyContent={"space-between"}
      >
        <Box
          py={{ base: "0rem", lg: "6rem" }}
          px={{ base: 4, lg: 0 }}
          w={{ md: "95%" }}
        >
          <Text
            textTransform={"uppercase"}
            color={"#DF837C"}
            fontSize={{ base: "14px", md: "16px" }}
            textAlign={{ base: "center", md: "start" }}
          >
            Our Providers
          </Text>
          <Heading
            as={"h2"}
            fontWeight={400}
            my={{ base: 1, md: 3 }}
            fontSize={{ base: "24px", md: "52px" }}
            textAlign={{ base: "center", md: "start" }}
          >
            Meet our{" "}
            <Text as={"span"} fontWeight={600}>
              Licensed <br /> Therapists
            </Text>
          </Heading>
          <Text
            color={"#434343"}
            fontSize={{ base: "16px", md: "20px" }}
            textAlign={{ base: "center", md: "start" }}
          >
            At Metamind, our licensed therapists specialize in various
            treatments, including CBT, ACT, Psychodynamic Therapy, and more. We
            treat a wide range of conditions, such as:
          </Text>
          <Flex mt={4} flexWrap={"wrap"}>
            {list.map((item, index) => (
              <Box
                key={index}
                py={{ base: 1, md: 2 }}
                px={{ base: 4, md: 8 }}
                mb={2}
                w={"fit-content"}
                rounded={"full"}
                border={"1px solid #065F68"}
                color={"#065F68"}
                mr={3}
                fontSize={{ base: "12px", md: "16px" }}
              >
                {item}
              </Box>
            ))}
          </Flex>

          {/* <Button
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
          </Button> */}
          <CustomButton
            icon={LuArrowUpRight}
            onClick={() => alert("Button Clicked!")}
            mt={6}
            size={buttonSize}
            fontSize={buttonFont}
          >
            Explose Therapist
          </CustomButton>
        </Box>

        <Flex justify={"end"} pl={{ base: 0, md: 2, lg: 12 }} pt={{ md: 8 }}>
          <RotatingCard />
        </Flex>
        {/* <Flex justify={"end"} w={"100%"} h={"85%"}>
            <Image src="images/providerSection.png" objectFit={"contain"} alt=""/>
          </Flex> */}
      </Grid>
    </Box>
  );
};

export default ProvidersSection;
