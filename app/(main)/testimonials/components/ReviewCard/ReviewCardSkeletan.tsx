import {
    Box,
    HStack,
    Icon,
    Skeleton,
    SkeletonCircle,
    VStack,
  } from "@chakra-ui/react";
  import { FaQuoteLeft } from "react-icons/fa";
  const ReviewCardSkeleton = () => {
    return (
      <Box
        p={{ base: 5, lg: 6 }}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        w={"100%"}
        height={{ base: "250px", lg: "280px" }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <VStack align="start" spacing={{ base: 2, lg: 4 }} flexGrow={1}>
          <Icon as={FaQuoteLeft} w={6} h={6} color="teal.500" />
          <Skeleton height="50px" width="100%" />
          <HStack>
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} height="20px" width="20px" borderRadius="full" />
            ))}
          </HStack>
        </VStack>
        <HStack mt={{ base: 2, lg: 4 }}>
          <SkeletonCircle size="10" />
          <Skeleton height="20px" width="100px" />
        </HStack>
      </Box>
    );
  };

  export default ReviewCardSkeleton;
