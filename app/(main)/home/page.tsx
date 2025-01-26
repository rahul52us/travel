"use client";
// src/app/game/page.tsx
import { Box } from "@chakra-ui/react";
import HeroSection from "../../component/common/HeroSection/HeroSection";
import ContactUs from "../../component/ContactUs/ContactUs";
import TravelBentoGrid from "../../travelComponent/common/TravelBentoGrid/TravelBentoGrid";
import StatsSection from "../../travelComponent/StatsSection/StatsSection";

import LocationCarousel from "../../component/common/LocationCarousel/LocationCarousel";
import TravelpackagesCard from "../../component/common/TravelPackageCard/TravelPackageCard";
import WhyChooseUs from "../../travelComponent/WhyChooseUs/WhyChooseUs";
import Banner from "./component/Banner";

// Data for the first Banner
const cardData1 = [
  {
    imageSrc: "/images/aboutImage.png",
    title: "Card Title 1",
    description: "This is the first card description.",
  },
  {
    imageSrc: "/images/homeImage1.png",
    title: "Card Title 2",
    description: "This is the second card description.",
  },
  {
    imageSrc: "/images/cardImage1.png",
    title: "Card Title 3",
    description: "This is the third card description.",
  },
  {
    imageSrc: "/images/homeImage2.png",
    title: "Card Title 4",
    description: "This is the fourth card description.",
  },
  {
    imageSrc: "/images/homeImage2.png",
    title: "Card Title 4",
    description: "This is the fourth card description.",
  },
];

// Data for the second Banner
const cardData2 = [
  {
    imageSrc: "/images/homeImage3.png",
    title: "Card Title 5",
    description: "This is the fifth card description.",
  },
  {
    imageSrc: "/images/homeImage4.png",
    title: "Card Title 6",
    description: "This is the sixth card description.",
  },
  {
    imageSrc: "/images/cardImage2.png",
    title: "Card Title 7",
    description: "This is the seventh card description.",
  },
  {
    imageSrc: "/images/homeImage5.png",
    title: "Card Title 8",
    description: "This is the eighth card description.",
  },
];

export default function Home() {
  return (
    <Box>
      <Banner data={cardData1} heading="Explore Our First Set of Cards" />
      <Banner data={cardData2} heading="Explore Our Second Set of Cards" />
      {/* <Text fontSize="xl" fontWeight="bold">Welcome to the Home Page</Text> */}
      <HeroSection />


      <TravelBentoGrid/>
      <StatsSection/>
      <LocationCarousel/>
      <TravelpackagesCard/>
      <WhyChooseUs/>
      {/* <TestimonialSection />  */}
      {/* <OurValues />
      <OurOfferings /> */}

      {/* <Box
        maxW={{ md: "90%" }}
        mx={"auto"}
        my={{ base: "0rem", md:"2rem",lg: "6rem" }}
        py={{ base: "2rem", md: "3rem" }}
        px={{ base: 4 }}
      >

        <Text
          color={"#DF837C"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontSize={{ base: "14px", md: "16px" }}
        >
          science behind our practice
        </Text>
        <Heading
          textAlign={"center"}
          as={"h2"}
          fontWeight={400}
          fontSize={{ base: "24px", md: "48px" }}
          my={2}
        >
          Care that goes{" "}
          <Text as={"span"} fontWeight={600}>
            beyond talking
          </Text>
        </Heading>
        <Text textAlign={"center"} color={"#2C2B2B"} fontSize={"16px"}>
          At Metamind, we combine science and care to help you achieve better
          recovery
        </Text>

        <Grid
          templateColumns={{ md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
          gap={4}
          mt={10}
        >
          {cardData2.map((card, index) => {
            const borderRadius = {
              topLeft: index === 0 ? "50px" : "10px",
              bottomRight: index === cardData2.length - 1 ? "50px" : "10px",
            };

            return (
              <CardComponent2
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
                borderRadius={borderRadius}
              />
            );
          })}
        </Grid>
      </Box> */}

      {/* <Box my={"4rem"} maxW={"90%"} mx={"auto"}>
        <ProvidersSection />
      </Box>
      <TestimonialSection /> */}
      {/* <NewTestimonialCard/> */}
      {/* <Box>
        <BookCallComponent />
      </Box>
      <Box my={"4rem"} maxW={"95%"} mx={"auto"}>
        <KnowYourselfSection />
      </Box> */}

      {/* <Box maxW={'60%'} mx={'auto'} my={12}>
      <TestimonialCard/>
      </Box> */}
      {/* <FAQ /> */}
      <Box>
        <ContactUs />
      </Box>
    </Box>
  );
}
