import { Box, useBreakpointValue, Skeleton, SkeletonText, SimpleGrid } from "@chakra-ui/react";
import CustomCarousel from "../CustomCarousal/CustomCarousal";
import TravelPackageCard from "./element/TravelPackageCard";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { useEffect } from "react";

const TravelPackageList = observer(() => {
  const {
    destinationStore: { getDestinations, destination },
  } = stores;

  useEffect(() => {
    getDestinations({ page: 1 });
  }, [getDestinations]);

  const showArrows = useBreakpointValue({ base: false, lg: true });

  return (
    <Box maxW={{ base: "95%", xl: "90%" }} mx="auto" py={2}>
      {destination.loading ? (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {[...Array(4)].map((_, index) => (
            <Box key={index} p={4} boxShadow="md" borderRadius="md" bg="gray.100">
              <Skeleton height="200px" borderRadius="md" />
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
              <Skeleton height="30px" mt="4" />
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <CustomCarousel autoplay={true} showArrows={showArrows}>
          {Array.isArray(destination?.data) &&
            destination?.data?.map((pkg) => <TravelPackageCard key={pkg.id} pkg={pkg} />)}
        </CustomCarousel>
      )}
    </Box>
  );
});

export default TravelPackageList;