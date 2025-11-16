"use client";

import { Box, Button, Center, Image, SimpleGrid, Skeleton, Text, VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import PageHero from "../../../../component/common/CommonHeroSection/CommonHeroSection";
import TravelPackageCard from "../../../../component/common/TravelPackageCard/element/TravelPackageCard";
import { formatTitle } from "../../../../config/utils/function";
import stores from "../../../../store/stores";
import CustomSubHeading from "../../../../travelComponent/common/CustomSubHeading/CustomSubHeading";
import SightSeeingCard2 from "../../../sightseeing/component/SightseeingCard2";

const Page = observer(() => {
  const {
    destinationStore: { getDestinations, destination },
    sightSeeingStore: { getSightSeeing, sightSeeing }
  } = stores;

  const params = useParams();
  const router = useRouter();

  const destinations = Array.isArray(params?.destination)
    ? params.destination.map((city) => decodeURIComponent(city).toLowerCase())
    : [decodeURIComponent(params?.destination || "").toLowerCase()];

  // Prevent unnecessary API calls
  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current && destinations.length > 0) {
      getDestinations({ page: 1, limit: 15, destination: destinations });
      getSightSeeing({ page: 1, limit: 15 });
      hasFetched.current = true;  // Prevent future redundant calls
    }
  }, [destinations, getDestinations, getSightSeeing]);

  if (!destinations.length) {
    return (
      <Center h="50vh">
        <Text fontSize="xl">Loading...</Text>
      </Center>
    );
  }

  const formattedDestination = destinations.map(formatTitle).join(" , ");

  const filteredPackages = destination?.data?.filter((pkg) =>
    pkg.destination?.some(dest => destinations?.includes(dest?.toLowerCase().replace(/\s+/g, "-")))
  );

  const filteredSightseeing = sightSeeing?.data?.filter((pkg) =>
    pkg.destination?.destination?.some(dest => destinations.includes(dest.toLowerCase().replace(/\s+/g, "-")))
  );


  return (
    <Box>
      <PageHero
        title={`Explore the Beauty of ${formattedDestination}`}
        lineColor="cyan.300"
        subtitle={filteredPackages.length > 0
          ? filteredPackages[0]?.description || `Discover breathtaking landscapes in ${formattedDestination}.`
          : `Discover breathtaking landscapes in ${formattedDestination}.`}
        bgImage={filteredPackages.length > 0 && filteredPackages[0]?.image?.url
          ? `url(${filteredPackages[0]?.image?.url})`
          : "url('https://images.unsplash.com/photo-1519229642444-2c6c164c3aa5?q=80&w=1933&auto=format&fit=crop')"}
      />

      <Box maxW={{ base: "95%", xl: "90%" }} mx="auto" py={6}>
        {destination.loading ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} height="200px" borderRadius="md" />
            ))}
          </SimpleGrid>
        ) : filteredPackages.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={6}>
            {filteredPackages.map((pkg) => <TravelPackageCard key={pkg._id} pkg={pkg} />)}
          </SimpleGrid>
        ) : (
          <Center py={12}>
            <VStack spacing={4}>
              <Image src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No packages found" boxSize="120px" opacity={0.8} />
              <Text fontSize="xl" fontWeight="bold" color="gray.600">
                Oops! No travel packages found for {formattedDestination}.
              </Text>
              <Button colorScheme="cyan" variant="solid" size="md" onClick={() => router.push("/destinations")}>
                Explore Other Destinations
              </Button>
            </VStack>
          </Center>
        )}
      </Box>

      <Box my="4rem" maxW={{ base: "95%", lg: "90%" }} mx="auto">
        <CustomSubHeading highlightText="Sightseeing Adventures">Unmissable Views</CustomSubHeading>
        <Box mt={{ base: 4, lg: 6 }}>
          {sightSeeing.loading ? (
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
              {[...Array(4)].map((_, index) => (
                <Skeleton key={index} height="200px" borderRadius="md" />
              ))}
            </SimpleGrid>
          ) : filteredSightseeing.length > 0 ? (
            <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 1 }} spacing={6}>
              {filteredSightseeing.map((place, index) => <SightSeeingCard2 key={index} tour={place} />)}
            </SimpleGrid>
          ) : (
            <VStack spacing={4} py={12}>
              <Image src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" alt="No sightseeing found" boxSize="120px" opacity={0.8} />
              <Text fontSize="xl" fontWeight="bold" color="gray.600">
                Oops! No Sightseeing found for {formattedDestination}.
              </Text>
            </VStack>
          )}
        </Box>
      </Box>
    </Box>
  );
});

export default Page;
