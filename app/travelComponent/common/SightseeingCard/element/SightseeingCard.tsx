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
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const SightseeingCard = ({ place }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("blue.700", "gray.100");
  const priceColor = useColorModeValue("blue.500", "blue.300");

  const [coverImage, setCoverImage] = useState(place.coverImage);
  const [galleryImages, setGalleryImages] = useState(place.images || []);

  const handleImageClick = (selectedImage) => {
    setCoverImage(selectedImage);

    setGalleryImages((prevImages) => {
      return [
        coverImage,
        ...prevImages.filter((img) => img._id !== selectedImage._id),
      ];
    });
  };

  return (
    <Box borderRadius="md" overflow="hidden" boxShadow="md" bg={cardBg}>
      {/* Cover Image */}
      <Box position="relative">
        <Image
          src={coverImage?.url || "/fallback-image.jpg"}
          alt={coverImage?.name || "Image not available"}
          objectFit="cover"
          h="220px"
          w="full"
        />
      </Box>

      {galleryImages.length > 0 && (
        <Flex overflowX="auto" gap={2} p={2} mt={2}>
          {galleryImages.map((img) => (
            <Image
              key={img._id}
              src={img.url}
              alt={img.name}
              h="60px"
              w="80px"
              objectFit="cover"
              borderRadius="md"
              boxShadow="sm"
              cursor="pointer"
              onClick={() => handleImageClick(img)}
            />
          ))}
        </Flex>
      )}

      {/* Content Section */}
      <Box p={4}>
        {/* Destination */}
        <HStack justify="space-between" align="center" mb={2}>
          <HStack spacing={2} align="center">
            <Icon as={FaMapMarkerAlt} color="red.400" />
            <Text
              fontSize="sm"
              color="gray.500"
              textTransform="capitalize"
              cursor="pointer"
              // onClick={() =>
              //   router.push(
              //     `/destinations/${place?.destination?.location?.name?.split(' ')?.join('-')}`
              //   )
              // }
            >
              {place?.destination?.location?.name || "Unknown Location"}
            </Text>
          </HStack>
        </HStack>

        {/* Title */}
        <Text
          fontSize="md"
          cursor="pointer"
          fontWeight="bold"
          color={textColor}
          mb={2}
          noOfLines={2}
          // onClick={() => {
          //   router.push(
          //     `/destinations/${
          //       place?.destination?.location?.name?.split(' ')?.join('-')
          //     }/${getDestinationArray(place.destination)}`
          //   )
          // }
          // }
        >
          {/* {place.destination?.destination?.join(" , ") || "Unknown Destination"} */}
          {place?.name || place?.destination?.destination}
        </Text>

        {/* Description */}
        <Text fontSize="sm" color="gray.500" noOfLines={2} mb={2}>
          {place.description || "No description available."}
        </Text>

        {/* Price & Duration */}
        <HStack justify="space-between" align="center">
          <Text fontSize="lg" fontWeight="600" color={priceColor}>
            {place.price ? `₹ ${place.price}` : "Price Not Available"}
          </Text>
          <Tag colorScheme="purple" variant="outline">
            <TagLeftIcon boxSize="12px" as={TimeIcon} />
            {place.duration
              ? place.duration.replace(/"/g, "")
              : "No Duration Info"}
          </Tag>
        </HStack>

        {/* Free Cancellation Tooltip */}
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