"use client";

import { useParams } from "next/navigation";
import TravelPackageCard from "../../../../component/common/TravelPackageCard/element/TravelPackageCard";
import { Box, Text, Center, VStack, Image, Button, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";
import PageHero from "../../../../component/common/CommonHeroSection/CommonHeroSection";
import { useRouter } from "next/navigation";
import CustomSubHeading from "../../../../travelComponent/common/CustomSubHeading/CustomSubHeading";
import { observer } from "mobx-react-lite";
import stores from "../../../../store/stores";
import { useEffect } from "react";
import { formatTitle } from "../../../../config/utils/function";
import SightSeeingCard2 from "../../../sightseeing/component/SightseeingCard2";

const Page = observer(() => {
  const {
    destinationStore: { getDestinations, destination },
    sightSeeingStore: { getSightSeeing, sightSeeing },
  } = stores;

  const params = useParams();
  const router = useRouter();

  const destinationTitle =
    typeof params?.destination === "string" ? params.destination.toLowerCase() : "";

  useEffect(() => {
    getDestinations({ page: 1, limit : 15, destination : destinationTitle });
    getSightSeeing({ page: 1, limit : 15 });
  }, [getDestinations, getSightSeeing]);



  if (!destinationTitle) {
    return (
      <Center h="50vh">
        <Text fontSize="xl">Loading...</Text>
      </Center>
    );
  }

  const formattedDestination = formatTitle(destinationTitle)

  const filteredPackages = destination?.data?.filter(
    (pkg) => pkg.destination.toLowerCase() === destinationTitle?.split('-').join(' ')
  );

  const filteredSightseeing = sightSeeing?.data?.filter(
    (pkg) => pkg.destination?.destination?.toLowerCase() === destinationTitle?.split('-').join(' ')
  );

  return (
    <Box>
      <PageHero
        title={`Explore the Beauty of ${formattedDestination}`}
        lineColor="cyan.300"
        subtitle={filteredPackages?.length > 0
          ? filteredPackages[0]?.description
            ? filteredPackages[0]?.description
            : `Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences in ${formattedDestination}.`
          : `Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences in ${formattedDestination}.`}
        bgImage={filteredPackages?.length > 0 ? filteredPackages[0]?.image?.url ? `url(${filteredPackages[0]?.image?.url})` : "url('https://images.unsplash.com/photo-1519229642444-2c6c164c3aa5?q=80&w=1933&auto=format&fit=crop')" : "url('https://images.unsplash.com/photo-1519229642444-2c6c164c3aa5?q=80&w=1933&auto=format&fit=crop')"}
      />

      <Box maxW={{ base: "95%", xl: "90%" }} mx="auto" py={6}>
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
        ) : filteredPackages.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {filteredPackages.map((pkg) => (
              <TravelPackageCard key={pkg._id} pkg={pkg} />
            ))}
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
                <Box key={index} p={4} boxShadow="md" borderRadius="md" bg="gray.100">
                  <Skeleton height="200px" borderRadius="md" />
                  <SkeletonText mt="4" noOfLines={2} spacing="4" />
                  <Skeleton height="30px" mt="4" />
                </Box>
              ))}
            </SimpleGrid>
          ) : filteredSightseeing.length > 0 ? (
            <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 1 }} spacing={6}>
              {filteredSightseeing.map((place, index) => (
                <SightSeeingCard2 key={index} tour={place} />
              ))}
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