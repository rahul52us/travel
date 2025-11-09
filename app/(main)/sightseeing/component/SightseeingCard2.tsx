"use client";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaMapMarkedAlt, FaMapPin } from "react-icons/fa";
import { FiArrowRightCircle, FiClock, FiUser } from "react-icons/fi";
import BookingInfoModal from "../../../component/BookingInfoModal/BookingInfoModal";

const SightSeeingCard2 = ({ tour }) => {
  const [openBookingModal, setOpenBookingModal] = useState({
    open: false,
    data: tour,
  });
  const coverImage = tour.coverImage?.url || "";
  const tourImages = tour.images?.length
    ? tour.images.map((img) => img.url)
    : [];

  const [activeImage, setActiveImage] = useState(coverImage);
  const [thumbnails, setThumbnails] = useState(tourImages);

  const handleImageSelect = (selectedImg) => {
    if (selectedImg !== activeImage) {
      setThumbnails((prevThumbnails) => {
        const updatedThumbnails = prevThumbnails.filter(
          (img) => img !== selectedImg
        );
        return [activeImage, ...updatedThumbnails];
      });
      setActiveImage(selectedImg);
    }
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg="brand.200"
      borderRadius="xl"
      boxShadow="md"
      overflow="hidden"
      width="full"
      transition="all 0.2s"
      _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
      maxH={{ lg: "380px" }} // Increased height to accommodate better spacing
      p={{ base: 2, md: 4 }}
    >
      {/* Image Section */}
      <Box
        flex={{ md: 1 }}
        position="relative"
        minW={{ md: "300px" }} // Set minimum width for image section
      >
        <Image
          src={activeImage}
          alt={tour.title}
          objectFit="cover"
          rounded={{ base: "lg", md: "xl" }}
          height={{ base: "250px", md: "100%" }}
          width="full"
        />

        {/* Thumbnails */}
        {thumbnails.length > 0 && (
          <Flex
            position="absolute"
            bottom="2"
            left="4"
            right="4"
            p={1}
            bg="blackAlpha.600"
            backdropFilter="blur(2px)"
            borderRadius="lg"
            justifyContent="center"
            gap={2}
            flexWrap="wrap"
          >
            {thumbnails.map((img, index) => (
              <Box
                key={index}
                cursor="pointer"
                onClick={() => handleImageSelect(img)}
                border={img === activeImage ? "2px solid" : "none"}
                borderColor="brand.100"
                borderRadius="md"
                overflow="hidden"
                transition="all 0.3s ease-in-out"
                _hover={{ transform: "scale(1.15)" }}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  objectFit="cover"
                  height={{ base: "40px", md: "50px" }}
                  width={{ base: "40px", md: "50px" }}
                  borderRadius="md"
                />
              </Box>
            ))}
          </Flex>
        )}
      </Box>

      {/* Content Section */}
      <Flex
        flex={{ md: 2 }}
        p={{ base: 4, md: 6 }}
        direction="column"
        gap={{ base: 3, md: 4 }}
        overflow="hidden"
      >
        <Flex direction="column" justify="space-between" align="flex-start">
          {/* Destination */}
          <Flex
            align="center"
            gap={2}
            cursor="pointer"
            mb={1}
          >
            <Icon as={FaMapMarkedAlt} boxSize={6} color="brand.100" />
            <Heading as="h2" fontSize={{ base: "lg", md: "26px" }} lineHeight="1.2">
              {tour?.name || tour?.title}
            </Heading>
          </Flex>

          {/* Location */}
          <Flex
            align="center"
            gap={2}
            // onClick={() =>
            //   router.push(`/destinations/${tour?.destination?.location?.name}`)
            // }
            cursor="pointer"
          >
            <Icon as={FaMapPin} boxSize={4} color="red.500" />
            <Heading as="h4" size={{ base: "xs", md: "sm" }} fontWeight={600} color="brand.100">
              {tour?.destinationName || "Unknown Location"}
            </Heading>
          </Flex>
        </Flex>

        <HStack spacing={4} flexWrap="wrap" mt={2}>
          <Flex align="center">
            <Icon as={FiClock} mr={2} />
            <Text fontWeight="500" fontSize={{ base: "xs", md: "md" }}>
              {tour?.duration}
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={FiUser} mr={2} />
            <Text fontWeight="500" fontSize={{ base: "xs", md: "md" }}>
              Max {tour?.maxGroupSize} people
            </Text>
          </Flex>
        </HStack>

        {/* Description with improved visibility */}
        <Box flex="1" overflow="hidden" py={2}>
          <Text
            color="gray.700"
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.5"
            noOfLines={3}
          >
            {tour?.description}
          </Text>
        </Box>

        <Stack spacing={3}>
          <Flex align="center" fontSize="sm">
            <Icon as={FiArrowRightCircle} mr={2} color="brand.100" />
          </Flex>
        </Stack>

        <Divider />

        {/* Price and Booking Form */}
        <Flex justify="space-between" align="center" flexWrap="wrap" gap={3} mt={2}>
          <Box>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="800"
              color="brand.100"
            >
              ₹{tour?.price}
              <Text
                as="span"
                fontSize={{ base: "sm", md: "md" }}
                color="gray.500"
                fontWeight="normal"
              >
                /person
              </Text>
            </Text>
            <Text color="green.600" fontSize="sm">
              Instant Confirmation
            </Text>
          </Box>

          <Flex gap={3} align="center" flexWrap="wrap">
            <Tag
              colorScheme="green"
              borderRadius="full"
              size={{ base: "md", md: "lg" }}
            >
              Free Cancellation
            </Tag>
            <Button
              colorScheme="brand.100"
              px={6}
              size={{ base: "sm", md: "md" }}
              onClick={() => setOpenBookingModal({ data: tour, open: true })}
            >
              Enquire Now
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <BookingInfoModal
        isOpen={openBookingModal.open}
        onClose={() => setOpenBookingModal({ data: null, open: false })}
        data={{
          id: openBookingModal?.data?._id,
          type: "sightSeeing",
          title: openBookingModal.data?.destination?.destination,
        }}
      />
    </Flex>
  );
};

export default SightSeeingCard2;