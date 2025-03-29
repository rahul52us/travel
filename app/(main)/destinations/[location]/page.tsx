"use client";

import { useParams } from "next/navigation";
import {
  Box,
  Text,
  Center,
  VStack,
  Image,
  Button,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Heading,
  Divider,
} from "@chakra-ui/react";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { useEffect } from "react";
import { formatTitle } from "../../../config/utils/function";
import TravelPackageCard from "./component/TravelPackageCard";

const Page = observer(() => {
  const {
    destinationStore: { getDestinations, destination },
    locationStore: { location },
  } = stores;

  const params: any = useParams();
  const router = useRouter();

  const destinationTitle =
    typeof params?.location === "string" ? params.location.toLowerCase() : "";

  useEffect(() => {
    getDestinations({ page: 1, location: params?.location });
  }, [getDestinations]);

  if (!destinationTitle) {
    return (
      <Center h="50vh">
        <Text fontSize="xl">Loading...</Text>
      </Center>
    );
  }

  const formattedDestination = formatTitle(destinationTitle);

  const filteredPackages = destination?.data || [];

  const filterLocation = location.data?.filter(
    (it: any) => it.name === params?.location?.split("-").join(" ")
  );

  console.log(filterLocation);

  return (
    <Box>
      <PageHero
        title={`Explore the Beauty of ${formattedDestination}`}
        lineColor="cyan.300"
        subtitle={
          filterLocation?.length > 0
            ? filterLocation[0]?.description
              ? filterLocation[0]?.description
              : `Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences in ${formattedDestination}.`
            : `Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences in ${formattedDestination}.`
        }
        bgImage={
          filterLocation?.length > 0
            ? filterLocation[0]?.image?.url
              ? `url(${filterLocation[0]?.image?.url})`
              : "url('https://images.unsplash.com/photo-1519229642444-2c6c164c3aa5?q=80&w=1933&auto=format&fit=crop')"
            : "url('https://images.unsplash.com/photo-1519229642444-2c6c164c3aa5?q=80&w=1933&auto=format&fit=crop')"
        }
      />

      <Box maxW={{ base: "95%", xl: "90%" }} mx="auto" py={6}>
        {destination.loading ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {[...Array(4)].map((_, index) => (
              <Box
                key={index}
                p={4}
                boxShadow="md"
                borderRadius="md"
                bg="gray.100"
              >
                <Skeleton height="200px" borderRadius="md" />
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
                <Skeleton height="30px" mt="4" />
              </Box>
            ))}
          </SimpleGrid>
        ) : filteredPackages.length > 0 ? (
          <Box my={5}>
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              mb={8}
              textAlign="center"
              color="blue.700"
            >
              Explore Our Best Travel Packages
            </Heading>
            <Divider />
            <SimpleGrid columns={{ base: 1 }} spacing={6}>
              {filteredPackages.map((pkg) => (
                <TravelPackageCard key={pkg._id} pkg={pkg} />
              ))}
            </SimpleGrid>
          </Box>
        ) : (
          <Center py={12}>
            <VStack spacing={4}>
              <Image
                src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                alt="No packages found"
                boxSize="120px"
                opacity={0.8}
              />
              <Text fontSize="xl" fontWeight="bold" color="gray.600">
                Oops! No travel packages found for {formattedDestination}.
              </Text>
              <Button
                colorScheme="cyan"
                variant="solid"
                size="md"
                onClick={() => router.push("/destinations")}
              >
                Explore Other Destinations
              </Button>
            </VStack>
          </Center>
        )}
      </Box>
    </Box>
  );
});

export default Page;
