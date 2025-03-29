import { Box, Text } from "@chakra-ui/react";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import TourPackageSection from "../../../travelComponent/TourPackageSection/TourPackageSection";
import { observer } from "mobx-react-lite";

const DestinationsPage = observer(() => {
  return (
    <Box>
      <PageHero
        title="Explore Destinations"
        lineColor="cyan.300"
        subtitle={
          <>
            Discover breathtaking destinations across the globe, from pristine
            beaches to
            <Text as="span" color="cyan.200" fontWeight="semibold" mx={1.5}>
              majestic mountains
            </Text>
            and vibrant cities.
          </>
        }
        bgImage="url('https://images.unsplash.com/photo-1519229642444-2c6c164c3aa5?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      />
      <TourPackageSection />
    </Box>
  );
});

export default DestinationsPage;
