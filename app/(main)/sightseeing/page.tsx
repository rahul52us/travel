"use client";
import { Box, Text } from "@chakra-ui/react";
import PageHero from "../../component/common/CommonHeroSection/CommonHeroSection";
import Destinations from "./SightseeingDestinations";

const page = () => {
  return (
    <Box>
      <PageHero
        title="Discover Sightseeing Wonders"
        lineColor="teal.300"
        subtitle={
          <>
            {`Uncover the world’s most iconic landmarks, hidden gems, and cultural
            treasures. From ancient ruins to`}
            <Text as="span" color="teal.200" fontWeight="semibold" mx={1.5}>
              modern marvels
            </Text>
            , embark on unforgettable journeys.
          </>
        }
        bgImage="url('https://images.unsplash.com/photo-1473452784071-a5f531af184f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      />
      <Destinations />
    </Box>
  );
};

export default page;