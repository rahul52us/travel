import {
  Avatar,
  Box,
  HStack,
  Icon,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import CustomCarousel from "../../../../component/common/CustomCarousal/CustomCarousal";

const ReviewCard = ({ review, rating, name, avatar }) => {
  return (
    <Box
      p={{base:5,lg:6}}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      w={'100%'}
      bg={useColorModeValue("white", "gray.700")}
      height={{base:"250px",lg:"280px"}}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <VStack align="start" spacing={{base:2,lg:4}} flexGrow={1}>
        <Icon as={FaQuoteLeft} w={6} h={6} color="teal.500" />
        <Text
          fontSize={{base:"sm",lg:"md"}}
          color={useColorModeValue("gray.600", "gray.300")}
          noOfLines={4}
        >
          {review}
        </Text>
        <HStack>
          {[...Array(rating)].map((_, i) => (
            <Icon key={i} as={FaStar} w={{base:4,lg:5}} h={{base:4,lg:5}} color="yellow.400" />
          ))}
        </HStack>
      </VStack>
      <HStack mt={{base:2,lg:4}}>
        <Avatar size="md" name={name} src={avatar} />
        <Text fontWeight="bold">{name}</Text>
      </HStack>
    </Box>
  );
};

const dummyReviews = [
  {
    review: "This product is amazing! Highly recommend it. lorem ipsum",
    rating: 5,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    review:
      "Great service and support. Will buy again! support. Will buy again! support. Will buy again!",
    rating: 4,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    review:
      "Decent quality, but shipping was slow. support. Will buy again! support. Will buy again! support. Will buy again!support. Will buy again! support. Will buy again! support. Will buy again!",
    rating: 3,
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const ReviewsList = () => {
  const showArrows = useBreakpointValue({ base: false, md: true });
  return (
    <Box>
      <CustomCarousel showDots={true} autoplay={true} showArrows={showArrows}>
        {dummyReviews.map((testimonial, index) => (
          <ReviewCard key={index} {...testimonial} />
        ))}
      </CustomCarousel>
    </Box>
  );
};

export default ReviewsList;
