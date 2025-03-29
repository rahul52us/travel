// "use client";
// import { Box, Flex, Grid, GridItem, Image, Text, Skeleton } from "@chakra-ui/react";
// import CustomSubHeading from "../../travelComponent/common/CustomSubHeading/CustomSubHeading";
// import { useRouter } from "next/navigation";
// import { observer } from "mobx-react-lite";
// import stores from "../../store/stores";
// import { useEffect } from "react";

// const Destinations = observer(() => {
//   const router = useRouter();
//   const {
//     locationStore: { getLocations, location },
//   } = stores;

//   useEffect(() => {
//     getLocations({ page: 1 , limit : 15});
//   }, [getLocations]);

//   return (
//     <Box p={{ base: 4, md: 8 }} maxW="7xl" mx="auto">
//       <CustomSubHeading highlightText="Destinations">
//         Explore Top Sightseeing
//       </CustomSubHeading>

//       <Grid
//         templateColumns={{
//           base: "repeat(1, 1fr)", // 1 column on mobile
//           sm: "repeat(2, 1fr)", // 2 columns on small screens (tablet)
//           lg: "repeat(3, 1fr)", // 3 columns on large screens (desktop)
//         }}
//         gap={{ base: 4, md: 8 }} // Adjust gap for mobile and larger screens
//         mt={8}
//       >
//         {/* Show Skeleton when loading */}
//         {location.loading
//           ? Array.from({ length: 6 }).map((_, index) => (
//               <GridItem key={index} borderRadius="xl" overflow="hidden">
//                 <Skeleton height="300px" borderRadius="xl" />
//               </GridItem>
//             ))
//           : location.data && location.data.length > 0
//           ? location.data.map((item: any, index: number) => (
//               <GridItem
//                 key={index}
//                 position="relative"
//                 borderRadius="xl"
//                 overflow="hidden"
//                 cursor="pointer"
//                 _hover={{
//                   transform: "scale(1.05)",
//                 }}
//                 transition="transform 0.3s ease"
//                 onClick={() => {
//                   if(item.destinations?.length > 0){
//                     router.push(`sightseeing/${item.destinations[0].destination}`)}}
//                   }
//               >
//                 <Image
//                   src={item.image?.url}
//                   alt={`${item.name} view`}
//                   h={{ base: "300px", md: "440px" }} // Adjust height for mobile and larger screens
//                   w="100%"
//                   objectFit="cover"
//                 />
//                 <Flex
//                   position="absolute"
//                   bottom={0}
//                   left={0}
//                   right={0}
//                   p={{ base: 4, md: 6 }} // Adjust padding for mobile and larger screens
//                   bgGradient="linear(to-b, transparent, blackAlpha.600, rgba(0, 0, 0, 0.7))"
//                   direction="column"
//                   alignItems="flex-start"
//                 >
//                   <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="white">
//                     {item.name}
//                   </Text>
//                   <Text fontSize={{ base: "md", md: "md" }} color="white" opacity={0.9} mb={2}>
//                     {item.description}
//                   </Text>
//                 </Flex>
//               </GridItem>
//             ))
//           : // Show a message if there is no data
//             !location.loading && (
//               <Text fontSize="lg" color="gray.500" textAlign="center">
//                 No Locations available.
//               </Text>
//             )}
//       </Grid>
//     </Box>
//   );
// });

// export default Destinations;

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

const Page = observer(() => {
  const {
    sightSeeingStore: { getSightSeeing, sightSeeing },
  } = stores;

  useEffect(() => {
    getSightSeeing({ page: 1, limit: 20 });
  }, [getSightSeeing]);

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
          Unforgettable Sightseeing Adventures
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
        ) : sightSeeing.data.length > 0 ? (
          sightSeeing.data.map((tour, index) => (
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