import {
  Box,
  Text,
  Skeleton,
  SimpleGrid,
  VStack,
  Image,
} from "@chakra-ui/react";
import CustomSubHeading from "../CustomSubHeading/CustomSubHeading";
import SightseeingCard from "./element/SightseeingCard";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { useEffect } from "react";

const SightseeingList = observer(() => {
  const {
    sightSeeingStore: { getSightSeeing, sightSeeing },
  } = stores;

  useEffect(() => {
    getSightSeeing({ page: 1, limit : 15 });
  }, [getSightSeeing]);

  return (
    <Box my="4rem" maxW={{ base: "95%", lg: "90%" }} mx="auto">
      <CustomSubHeading highlightText="Sightseeing Adventures">
        Unmissable Views
      </CustomSubHeading>
      <Text
        textAlign="center"
        fontSize={{ base: "sm", lg: "md" }}
        maxW={{ base: "95%", lg: "80%" }}
        color="gray.500"
        mx="auto"
      >
        {`From iconic landmarks to hidden treasures, discover the world’s most
        breathtaking sights that will leave you inspired and in awe. Let your
        curiosity guide you to unforgettable experiences.`}
      </Text>

      <Box mt={{ base: 4, lg: 6 }}>
        {sightSeeing.loading ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} height="300px" borderRadius="lg" />
            ))}
          </SimpleGrid>
        ) : sightSeeing?.data?.length > 0 ? (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            {sightSeeing.data.map((place, index) => (
              <SightseeingCard key={index} place={place} />
            ))}
          </SimpleGrid>
        ) : (
          <VStack spacing={4} mt={6}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              alt="No sightseeing found"
              boxSize="120px"
              opacity={0.8}
            />
            <Text fontSize="xl" fontWeight="bold" color="gray.600">
              Oops! No sightseeing spots found.
            </Text>
            <Text fontSize="md" color="gray.500" textAlign="center" maxW="400px">
              {`We're always adding new destinations. Check back later for more amazing places!`}
            </Text>
          </VStack>
        )}
      </Box>
    </Box>
  );
});

export default SightseeingList;
