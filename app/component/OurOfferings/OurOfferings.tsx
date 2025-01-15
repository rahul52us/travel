import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CardComponent1 from "../common/CardComponent1/CardComponent1";
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
  return (
    <Box maxW={"85%"} mx={"auto"} my={12}>
      <Text
        textAlign={"center"}
        color={"#DF837C"}
        textTransform={"uppercase"}
        fontSize={"16px"}
      >
        OUR OFFERINGS
      </Text>
      <Heading
        textAlign={"center"}
        as={"h2"}
        fontWeight={400}
        fontSize={"48px"}
        my={2}
      >
        Specialized care for{" "}
        <Text as={"span"} fontWeight={600}>
          all ages
        </Text>
      </Heading>
      <Grid
        templateColumns={"1fr 1fr 1fr 1fr"}
        gap={4}
        mt={8}
      
      >
        {/* <CardComponent1/> */}
        {cardData.map((card, index) => (
          <CardComponent1
            key={index}
            index={index}
            title={card.title}
            description={card.description}
            image={card.image}
            buttonText={card.buttonText}
            buttonLink={card.buttonLink}
            bgColor={card.bgColor}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default OurOfferings;
