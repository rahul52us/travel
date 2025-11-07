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
  Stack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { formatTitle } from "../../../config/utils/function";

const SightseeingCard = ({ place }) => {
  const cardBg = useColorModeValue("brand.200", "gray.800");
  const textColor = useColorModeValue("gray.900", "gray.100");
  

  // Initialize state: cover image + remaining images
  const [coverImage, setCoverImage] = useState(place.coverImage);
  const [galleryImages, setGalleryImages] = useState(place.images || []);

  // Handle Image Click (Switch cover image with selected image)
  const handleImageClick = (selectedImage) => {
    setCoverImage(selectedImage);
    setGalleryImages((prevImages) =>
      [coverImage, ...prevImages.filter((img) => img._id !== selectedImage._id)]
    );
  };

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
      bg={cardBg}
      p={5}
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.02)", boxShadow: "2xl" }}
    >
      <Flex direction={{ base: "column", md: "row" }} gap={6} align="stretch">
        {/* Left Side - Image Section */}
        <Box flex="1" position="relative">
          {/* Main Cover Image */}
          <Image
            src={coverImage?.url || "/fallback-image.jpg"}
            alt={coverImage?.name || "Image not available"}
            objectFit="cover"
            h="280px"
            w="100%"
            borderRadius="lg"
            boxShadow="md"
          />

          {/* Thumbnail Image Gallery */}
          {galleryImages.length > 0 && (
            <Flex mt={3} gap={2} overflowX="auto" overflowY="hidden">
              {galleryImages.map((img) => (
                <Image
                  key={img._id}
                  src={img.url}
                  alt={img.name}
                  h="70px"
                  w="90px"
                  objectFit="cover"
                  borderRadius="md"
                  cursor="pointer"
                  transition="all 0.2s ease-in-out"
                  _hover={{ transform: "scale(1.1)", boxShadow: "lg" }}
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </Flex>
          )}
        </Box>

        {/* Right Side - Details Section */}
        <Stack flex="1" spacing={4}>
          {/* Destination */}
          <HStack spacing={2}>
            <Icon as={FaMapMarkerAlt} color="red.400" />
            <Text fontSize="sm" color="gray.500" textTransform="capitalize">
              {formatTitle(place.destination?.destination) || "Unknown Destination"}
            </Text>
          </HStack>

          {/* Title */}
          <Text fontSize="xl" fontWeight="bold" color={textColor} noOfLines={2}>
            {place.title || "Untitled"}
          </Text>

          {/* Description */}
          <Text fontSize="sm" color="gray.600" noOfLines={3}>
            {place.description || "No description available."}
          </Text>

          {/* Price & Duration */}
          <HStack justify="space-between">
            <Text fontSize="lg" fontWeight="bold" color="brand.100">
              {place.price ? `$ ${place.price}` : "Price Not Available"}
            </Text>
            <Tag colorScheme="purple" variant="solid" fontSize="sm">
              <TagLeftIcon boxSize="14px" as={TimeIcon} />
              {place.duration ? place.duration.replace(/"/g, "") : "No Duration Info"}
            </Tag>
          </HStack>

          {/* Free Cancellation */}
          <Tooltip label="Free cancellation available" aria-label="Free cancellation tooltip">
            <Text fontSize="sm" color="green.500" fontWeight="500">
              ✅ Free Cancellation
            </Text>
          </Tooltip>
        </Stack>
      </Flex>
    </Box>
  );
};

export default SightseeingCard;
