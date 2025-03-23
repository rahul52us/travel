import {
  Avatar,
  Box,
  HStack,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import CustomCarousel from "../../../../component/common/CustomCarousal/CustomCarousal";
import { observer } from "mobx-react-lite";
import stores from "../../../../store/stores";
import { useEffect } from "react";
import ReviewCardSkeleton from "./ReviewCardSkeletan";

const ReviewCard = (data: any) => {
  return (
    <Box
      p={{ base: 5, lg: 6 }}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      w={"100%"}
      bg={useColorModeValue("white", "gray.700")}
      height={{ base: "250px", lg: "280px" }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <VStack align="start" spacing={{ base: 2, lg: 4 }} flexGrow={1}>
        <Icon as={FaQuoteLeft} w={6} h={6} color="teal.500" />
        <Text
          fontSize={{ base: "sm", lg: "md" }}
          color={useColorModeValue("gray.600", "gray.300")}
          noOfLines={4}
        >
          {data?.description}
        </Text>
        <HStack>
          {[...Array(data?.rating || 2)].map((_, i) => (
            <Icon
              key={i}
              as={FaStar}
              w={{ base: 4, lg: 5 }}
              h={{ base: 4, lg: 5 }}
              color="yellow.400"
            />
          ))}
        </HStack>
      </VStack>
      <HStack mt={{ base: 2, lg: 4 }}>
        <Avatar size="md" name={data?.name} src={data?.image?.url} />
        <Text fontWeight="bold">{data?.name}</Text>
      </HStack>
    </Box>
  );
};

const ReviewsList = observer(() => {
  const showArrows = useBreakpointValue({ base: false, md: true });
  const {
    testimonialStore: { testimonials, getTestimonials },
  } = stores;

  useEffect(() => {
    getTestimonials({ limit: 15, page: 1 });
  }, [getTestimonials]);
  return (
    <Box>
      {testimonials.loading ?
      <CustomCarousel showDots={true} autoplay={true} showArrows={showArrows}>
        {[...Array(5)].map((_, index) => (
          <ReviewCardSkeleton key={index} />
        ))}
      </CustomCarousel> :
      <CustomCarousel showDots={true} autoplay={true} showArrows={showArrows}>
      {testimonials?.data?.map((testimonial, index) => (
        <ReviewCard key={testimonial._id || index} {...testimonial} />
      ))}
    </CustomCarousel>
    }
    </Box>
  );
});

export default ReviewsList;