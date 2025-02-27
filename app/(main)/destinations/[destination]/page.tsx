"use client";

import { useParams } from "next/navigation";
import TravelPackageCard from "../../../component/common/TravelPackageCard/element/TravelPackageCard";
import { travelPackages } from "../../../component/common/TravelPackageCard/utils/constant";
import {
  Box,
  Text,
  Center,
  VStack,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import CustomCarousel from "../../../component/common/CustomCarousal/CustomCarousal";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import { useRouter } from "next/navigation";
import CustomSubHeading from "../../../travelComponent/common/CustomSubHeading/CustomSubHeading";
import SightseeingCard from "../../../travelComponent/common/SightseeingCard/element/SightseeingCard";
import { sightseeingData } from "../../sightseeing/utils/sightseeingData";

const Page = () => {
  const params = useParams();
  const router = useRouter(); // Call useRouter here

  const noOfSlides = useBreakpointValue({ base: 1, md: 2, lg: 4 });
  const showArrows = useBreakpointValue({ base: false, lg: true });

  // Ensure it's a string and handle cases where params.destination is a string array
  const destination =
    typeof params?.destination === "string"
      ? params.destination.toLowerCase()
      : ""; // default to empty string if it's an array

  if (!destination) {
    return (
      <Center h="50vh">
        <Text fontSize="xl">Loading...</Text>
      </Center>
    );
  }

  const formattedDestination = destination
    ?.split("-")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    ?.join(" ");

  // Filter travel packages by matching destination
  const filteredPackages = travelPackages.filter(
    (pkg) => pkg.destination.toLowerCase() === destination
  );

  const filteredSightseeing = sightseeingData.filter(
    (pkg) => pkg.destination.toLowerCase() === destination
  );

  return (
    <Box>
      <PageHero
        title={`Explore the Beauty of ${formattedDestination}`}
        lineColor="cyan.300"
        subtitle={`Discover breathtaking landscapes, vibrant cultures, and unforgettable experiences in ${formattedDestination}. From historic landmarks to stunning natural wonders, there's something for every traveler.`}
        bgImage="url('https://images.unsplash.com/photo-1519229642444-2c6c164c3aa5?q=80&w=1933&auto=format&fit=crop')"
      />

      <Box maxW={{ base: "95%", xl: "90%" }} mx="auto" py={6}>
        {filteredPackages.length > 0 ? (
          <CustomCarousel autoplay={true} showArrows={showArrows}>
            {filteredPackages.map((pkg) => (
              <TravelPackageCard key={pkg.id} pkg={pkg} />
            ))}
          </CustomCarousel>
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
              <Text
                fontSize="md"
                color="gray.500"
                textAlign="center"
                maxW="400px"
              >
                {`We're always adding new destinations. Try exploring other amazing places!`}
              </Text>
              <Button
                colorScheme="cyan"
                variant="solid"
                size="md"
                onClick={() => router.push("/destinations")} // Use router object here
              >
                Explore Other Destinations
              </Button>
            </VStack>
          </Center>
        )}
      </Box>

      {filteredSightseeing.length > 0 ? (
        <Box my={"4rem"} maxW={{ base: "95%", lg: "90%" }} mx={"auto"}>
          <CustomSubHeading highlightText="Sightseeing Adventures">
            Unmissable Views
          </CustomSubHeading>

          <Box mt={{ base: 4, lg: 6 }}>
            <CustomCarousel
              autoplay={true}
              slidesToShow={noOfSlides}
              showArrows={showArrows}
            >
              {filteredSightseeing.map((place, index) => (
                <SightseeingCard key={index} place={place} />
              ))}
            </CustomCarousel>
          </Box>
        </Box>
      ) : (
        <Box my={6}>
          <Center py={12}></Center>
          <VStack spacing={4}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              alt="No packages found"
              boxSize="120px"
              opacity={0.8}
            />
            <Text fontSize="xl" fontWeight="bold" color="gray.600">
              Oops! No Sightseeings found for {formattedDestination}.
            </Text>
            <Text
              fontSize="md"
              color="gray.500"
              textAlign="center"
              maxW="400px"
            >
              {`We're always adding new destinations. Try exploring other amazing places!`}
            </Text>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Page;