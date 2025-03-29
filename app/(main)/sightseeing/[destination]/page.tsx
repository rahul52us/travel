"use client";
import {
  Box,
  Center,
  Text,
  VStack,
  Heading,
  Image,
  Divider,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import SightSeeingCard2 from "../component/SightseeingCard2";
import { useParams } from "next/navigation";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { formatTitle } from "../../../config/utils/function";

const Page = observer(() => {
  const { destination }: any = useParams();

  const {
    sightSeeingStore: { getSightSeeing, sightSeeing },
  } = stores;

  useEffect(() => {
    getSightSeeing({ page: 1, limit: 15 });
  }, [getSightSeeing]);

  const formattedDestination = formatTitle(destination || "");

  const filteredSightseeing = sightSeeing?.data?.filter((pkg: any) => {
    return pkg.destination?.destination === destination;
  });

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

        {sightSeeing.loading ? (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <Box key={index} p={4} boxShadow="md" borderRadius="md">
                <Skeleton height="200px" mb={4} borderRadius="md" />
                <SkeletonText noOfLines={2} spacing={3} />
              </Box>
            ))}
          </>
        ) : filteredSightseeing.length > 0 ? (
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
              maxW={"75%"}
              mt={5}
            >
              {`Oops! We couldn't find any sightseeing tours for `}
              <Text as="span" fontWeight="bold" color="teal.500">
                {formattedDestination}
              </Text>
              . Please check back later or explore other destinations!
            </Text>
          </Center>
        )}
      </VStack>
    </Box>
  );
});

export default Page;
