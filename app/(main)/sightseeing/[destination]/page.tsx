"use client";
import {
  Box,
  Center,
  Text,
  VStack,
  Heading,
  Image,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import SightSeeingCard2 from "../component/SightseeingCard2";
import { sightseeingData } from "../utils/sightseeingData";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const destination =
    typeof params?.destination === "string"
      ? params.destination.toLowerCase()
      : "";

  if (!destination) {
    return (
      <Center h="50vh">
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          Loading, please wait...
        </Text>
      </Center>
    );
  }

  const filteredSightseeing = sightseeingData.filter(
    (pkg) => pkg.destination.toLowerCase() === destination
  );

  const formattedDestination = destination
    ?.split("-")
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    ?.join(" ");

  return (
    <Box>
      <PageHero
        title="Embark on an Unforgettable Journey"
        lineColor="teal.400"
        subtitle={
          <>
            {`Discover the world's most breathtaking landscapes, rich cultures, and hidden wonders.
            Let the magic of`}
            <Text as="span" color="teal.300" fontWeight="bold" mx={1.5}>
              {formattedDestination}
            </Text>
            take you on an adventure of a lifetime.
          </>
        }
        bgImage="url('https://images.unsplash.com/photo-1473452784071-a5f531af184f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      />
      <VStack
        spacing={8}
        align="stretch"
        maxW={{ lg: "80%" }}
        mx="auto"
        py={10}
        px={{ base: 6, md: 10 }}
      >
        <Heading size="xl" textAlign="center" color="teal.600" mb={4}>
          Sightseeing in {formattedDestination}
        </Heading>
        <Divider borderColor="teal.300" />
        {filteredSightseeing.length > 0 ? (
          filteredSightseeing.map((tour, index) => (
            <SightSeeingCard2 key={index} tour={tour} />
          ))
        ) : (
          <Center py={10} flexDirection="column">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              alt="No packages found"
              boxSize="120px"
              opacity={0.8}
            />
            <Text
              fontSize="xl"
              fontWeight="medium"
              color="gray.600"
              textAlign="center"
              maxW={'75%'}
              mt={5}
            >
              `{` Oops! We couldn't find any sightseeing tours for`}
              <Text as="span" fontWeight="bold" color="teal.500">
                {" "}
                {formattedDestination}.
              </Text>
              Please check back later or explore other destinations!
            </Text>
          </Center>
        )}
      </VStack>
    </Box>
  );
};

export default Page;