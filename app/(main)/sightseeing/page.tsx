"use client";
import { Box, Text } from "@chakra-ui/react";
import PageHero from "../../component/common/CommonHeroSection/CommonHeroSection";
import Destinations from "./SightseeingDestinations";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";

const page = observer(({ location }: any) => {
  const { locationStore: { location: locationData } } = stores;

  const formattedLocation = location?.replace(/-/g, " ").toLowerCase();

  const matchedLocation = locationData?.data?.find(
    (loc) => loc?.name.toLowerCase() === formattedLocation
  );

  const matchedTagline = matchedLocation?.tagline;

  const title = matchedLocation
    ? matchedTagline || "Discover Sightseeing Wonders"
    // ? `Discover Sightseeing Wonders in ${matchedLocation.name} ${locationData?.data[0]?.tagline}`
    : "Discover Sightseeing Wonders";

  const description = matchedLocation?.description || `Uncover the world’s most iconic landmarks, hidden gems, and cultural treasures. From ancient ruins to modern marvels, embark on unforgettable journeys.`;

  const bgImage = matchedLocation?.image?.url || "https://images.unsplash.com/photo-1473452784071-a5f531af184f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <Box>
      <PageHero
        title={title}
        lineColor="teal.300"
        subtitle={<Text>{description}</Text>}
        bgImage={`url('${bgImage}')`}
      />
      <Destinations />
    </Box>
  );
});

export default page;