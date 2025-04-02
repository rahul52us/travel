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
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";
import SightSeeingCard2 from "./component/SightseeingCard2";
import { useParams } from "next/navigation";

const Page = observer(() => {
  const {
    sightSeeingStore: { getSightSeeing, sightSeeing },
  } = stores;
  const params : any = useParams();

  useEffect(() => {
    getSightSeeing({ page: 1, limit: 20 });
  }, [getSightSeeing]);

  const formattedLocation = params.locations?.replace(/-/g, " ").toLowerCase();

  const filteredSightSeeing = formattedLocation
    ? sightSeeing.data.filter(
        (tour) => tour.destination?.location?.name?.toLowerCase() === formattedLocation
      )
    : sightSeeing.data;

  return (
    <Box>
      <VStack
        spacing={8}
        align="stretch"
        maxW={{ lg: "80%" }}
        mx="auto"
        py={10}
        px={{ base: 6, md: 10 }}
      >
        <Heading size="xl" textAlign="center" color="teal.600" mb={2}>
          {params.location
            ? `Sightseeing in ${params.locations}`
            : "Unforgettable Sightseeing Adventures"}
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
        ) : filteredSightSeeing.length > 0 ? (
          filteredSightSeeing.map((tour, index) => (
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
              {`Oops! We couldn't find any sightseeing tours `}
            </Text>
          </Center>
        )}
      </VStack>
    </Box>
  );
});

export default Page;