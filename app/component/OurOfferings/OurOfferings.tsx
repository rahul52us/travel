import { Box, Flex, Grid, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import CardComponent1 from "../common/CardComponent1/CardComponent1";
import CustomButton from "../common/CustomButton/CustomButton";

const cardData = [
  {
    title: "Individual Therapy",
    description:
      "In one-on-one sessions with an expert by your side you will work through life’s challenges and attain personal growth.",
    image: "/images/cardImage1.png",
    buttonText: "Explore service",
    buttonLink: "#",
    bgColor: "#9DEAB2",
  },
  {
    title: "Couples Counseling",
    description:
      "Providing support to couples to strengthen their bond and resolve challenges.",
    image: "/images/cardImage1.png",
    buttonText: "Explore service",
    buttonLink: "#",
    bgColor: "#FFB6C1",
  },
  {
    title: "Teen Therapy",
    description:
      "We support teenagers (ages 13-18 years) navigating mental health challenges and helping teens feel heard and understood.",
    image: "/images/cardImage1.png",
    buttonText: "Explore service",
    buttonLink: "#",
    bgColor: "#EAF475",
  },
  {
    title: "Couples Counseling",
    description:
      "Providing support to couples to strengthen their bond and resolve challenges.",
    image: "/images/cardImage1.png",
    buttonText: "Explore service",
    buttonLink: "#",
    bgColor: "#B9DDFF",
  },
];

const OurOfferings = () => {
  const [hoverBgColor, setHoverBgColor] = useState("white");
  const buttonSize = useBreakpointValue({base:"lg",md:"xl"})

  return (
    <Box
      bg={hoverBgColor}
      py={{ base: "3rem", md: "6rem" }}
      px={{ base: 4,md:0 }}
      transition="background-color 0.3s ease-in-out" // Smooth transition
    >
      <Box maxW={{ md: "85vw" }} mx={"auto"}>
        <Text
          textAlign={"center"}
          color={"#DF837C"}
          textTransform={"uppercase"}
          fontSize={{ base: "14px", md: "16px" }}
        >
          OUR OFFERINGS
        </Text>
        <Heading
          textAlign={"center"}
          as={"h2"}
          fontWeight={400}
          fontSize={{ base: "24px", md: "48px" }}
          my={{ md: 2 }}
        >
          Specialized care for{" "}
          <Text as={"span"} fontWeight={600}>
            all ages
          </Text>
        </Heading>
        <Grid
          templateColumns={{ md:"1fr 1fr",lg: "1fr 1fr 1fr 1fr" }}
          gap={4}
          mt={8}
          justifyContent={"center"}
        >
          {cardData.map((card, index) => (
            <Box
              key={index}
              onMouseEnter={() => setHoverBgColor(card.bgColor)}
              onMouseLeave={() => setHoverBgColor("white")}
            >
              <CardComponent1
                // index={index}
                title={card.title}
                description={card.description}
                image={card.image}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                bgColor={card.bgColor}
              />
            </Box>
          ))}
        </Grid>
      </Box>
      <Flex justify={"center"}>
        <CustomButton
          size={buttonSize}
          fontSize="14px"
          width={"210px"}
          icon={LuArrowUpRight}
          onClick={() => alert("Button Clicked!")}
          mt={8}
        >
          Explore All Services
        </CustomButton>
      </Flex>
    </Box>
  );
};

export default OurOfferings;
