import { TimeIcon } from "@chakra-ui/icons";
import {
    Box,
    HStack,
    Icon,
    Image,
    Tag,
    TagLeftIcon,
    Text,
    Tooltip,
    useColorModeValue
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";

const SightseeingCard = ({ place }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("blue.700", "gray.100");
  const priceColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      // maxW="xs"
      bg={cardBg}
    >
      <Box position={"relative"}>
        <Image
          src={place.images[0]}
          alt={place.title}
          objectFit="cover"
          h="220px"
          w="full"
        />
        {/* <Tag
          colorScheme="purple"
          rounded={"full"}
          opacity={0.7}
          position="absolute"
          top={3}
          right={2}
          cursor="pointer"
        >
          {place.type}
        </Tag> */}
      </Box>

      <Box p={4}>
        <HStack justify="space-between" align="center" mb={2}>
          <HStack spacing={2} align="center">
            <Icon as={FaMapMarkerAlt} color="red.400" />
            <Text fontSize="sm" color="gray.500" textTransform={'capitalize'}>
              {place.destination}
            </Text>
          </HStack>
        </HStack>

        <Text fontSize="md" fontWeight="bold" color={textColor} mb={2} noOfLines={2}>
          {place.title}
        </Text>

        <Text fontSize="sm" color="gray.500" noOfLines={2} mb={2}>
          {place.description}
        </Text>

        <HStack justify="space-between" align="center">
          <Text fontSize="lg" fontWeight="600" color={priceColor}>
            {place.price}
          </Text>
          <Tag colorScheme="purple" variant={"outline"}>
          <TagLeftIcon boxSize="12px" as={TimeIcon} />
            {place.duration}
          </Tag>
        </HStack>

        <Tooltip
          label="Free cancellation available"
          aria-label="Free cancellation tooltip"
          mt={2}
        >
          <Text fontSize="sm" color="green.500" fontWeight="400">
            Free Cancellation
          </Text>
        </Tooltip>
      </Box>
    </Box>
  );
};


export default SightseeingCard;
