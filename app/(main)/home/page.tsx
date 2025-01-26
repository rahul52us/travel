"use client";
// src/app/game/page.tsx
import { Box } from "@chakra-ui/react";
import HeroSection from "../../component/common/HeroSection/HeroSection";
import ContactUs from "../../component/ContactUs/ContactUs";
import TravelBentoGrid from "../../travelComponent/common/TravelBentoGrid/TravelBentoGrid";
import StatsSection from "../../travelComponent/StatsSection/StatsSection";

const cardData2 = [
  {
    image: "/images/evidence.png",
    title: "Evidence-Based Therapy",
    description:
      "Therapists at Metamind practice evidence-based therapies. Studies show that 67% of clients see meaningful improvements with evidence-based therapy compared to people who don’t take treatment.",
  },
  {
    image: "/images/evidence.png",
    title: "Personalized Treatment Plans",
    description:
      "In therapy “one size doesn’t fit all” so we tailor your treatment by taking feedback from you. It helps clients complete treatment & achieve better results, research shows.",
  },
  {
    image: "/images/evidence.png",
    title: "Dynamic Progress Monitoring",
    description:
      "We monitor your treatment regularly using standardized tools to ensure you’re always on track. This reduces any setbacks in therapy and helps you see how much you have progressed.",
  },
];

export default function GamePage() {
  return (
    <Box>
      {/* <Text fontSize="xl" fontWeight="bold">Welcome to the Home Page</Text> */}
      <HeroSection />


      <TravelBentoGrid/>
      <StatsSection/>
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
