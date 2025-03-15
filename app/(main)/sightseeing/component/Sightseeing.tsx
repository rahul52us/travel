'use client';
import { Box, Text, VStack } from "@chakra-ui/react";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import SightSeeingCard2 from "./SightseeingCard2";
import { sightseeingData } from "../utils/sightseeingData";

// Usage in your component
const SightSeeingPage = () => {
  return (
    <Box>
      <PageHero
        title="Explore the World's Wonders"
        lineColor="teal.300"
        subtitle={
          <>
            Discover breathtaking destinations, iconic landmarks, and hidden
            gems with our curated
            <Text as="span" color="teal.200" fontWeight="semibold" mx={1.5}>
              sightseeing experiences
            </Text>
            that bring your travel dreams to life.
          </>
        }
        bgImage="url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      />
      <VStack
        spacing={{base:4,lg:8}}
        align="stretch"
        maxW={{lg:"90%"}}
        mx="auto"
        py={8}
        px={{ base: 4, md: 8 }}
      >
        {sightseeingData.map((tour, index) => (
          <SightSeeingCard2 key={index} tour={tour} />
        ))}
      </VStack>
    </Box>
  );
};

export default SightSeeingPage;
