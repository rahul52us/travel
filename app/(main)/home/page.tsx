"use client";
// src/app/game/page.tsx
import { Box, Grid, Text, useColorModeValue } from "@chakra-ui/react";
import HeroSection from "../../component/common/HeroSection/HeroSection";
import OurValues from "../../component/common/OurValues/OurValues";
import CardComponent1 from "../../component/common/CardComponent1/CardComponent1";
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

export default function GamePage() {
  return (
    <Box>
      {/* <Text fontSize="xl" fontWeight="bold">Welcome to the Home Page</Text> */}
      <HeroSection />
      <OurValues />
      <Grid
        maxW={"90%"}
        mx={"auto"}
        my={12}
        templateColumns={"1fr 1fr 1fr 1fr"}
        gap={4}
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
}
