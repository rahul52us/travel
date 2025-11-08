'use client'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Tag,
  Text
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt, FaRegStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import BookingInfoModal from "../../../../component/BookingInfoModal/BookingInfoModal";
import { formatTitle } from "../../../../config/utils/function";
import PerkIcon from "./PerkIcon";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

const TravelPackageCard = ({ pkg }: { pkg: any }) => {
  const [openBookingModal, setOpenBookingModal] = useState({ open: false, data: pkg });
  const [showMoreDesc, setShowMoreDesc] = useState(false);

  const sentences = pkg?.description
    ?.split('.')
    .filter((sentence: string) => sentence.trim().length > 0)
    .map((sentence: string) => sentence.trim()) || [];

  if (sentences.length === 0) return null;

  const originalPrice = pkg.discount ? Math.round(pkg.price / (1 - pkg.discount / 100)) : null;
  const fullStars = Math.floor(pkg.rating);
  const hasHalfStar = pkg.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Card
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
      bg="white"
    >
      {pkg.discount && (
        <Tag
          position="absolute"
          top={3}
          right={3}
          bg="red.500"
          color="white"
          size="sm"
          borderRadius="full"
          px={3}
          zIndex={2}
        >
          {pkg.discount}% OFF
        </Tag>
      )}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1.5fr" }} gap={5} alignItems="stretch">
        <GridItem
          position="relative"
          _before={{
            content: '""',
            display: "block",
            pb: "56.25%", // Maintains 16:9 aspect ratio as minimum
          }}
        >
          <Box
            position="absolute"
            inset={0}
            bgImage={`url(${pkg?.image?.url})`}
            bgSize="cover"
            bgPosition="center"
            _after={{
              content: '""',
              position: "absolute",
              inset: 0,
              bgGradient: "linear(to-t, blackAlpha.700, transparent)",
            }}
          />
          <Flex
            position="absolute"
            bottom={3}
            left={3}
            color="white"
            zIndex={1}
            align="center"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            <FaMapMarkerAlt size={18} />
            <Heading fontSize="lg" ml={2} textShadow="1px 1px 3px rgba(0, 0, 0, 0.4)">
              {formatTitle(pkg?.name)}
            </Heading>
          </Flex>
        </GridItem>

        {/* Content Section */}
        <GridItem>
          <CardBody>
            <Heading as="h3" size="sm" fontWeight={500} color={"brand.100"} textAlign={'end'} mb={2}>
              {formatTitle(pkg.destination)}
            </Heading>
            <Flex justify="space-between" align="center" mb={3}>
              <Tag colorScheme="teal" borderRadius="full" px={4} size="sm">
                {pkg.days} Days / {pkg.days - 1} Nights
              </Tag>
              <Flex align="center">
                {[...Array(fullStars)].map((_, i) => (
                  <FaStar key={`full-${i}`} color="gold" />
                ))}
                {hasHalfStar && <FaStarHalfAlt color="gold" />}
                {[...Array(emptyStars)].map((_, i) => (
                  <FaRegStar key={`empty-${i}`} color="gold" />
                ))}
                <Text ml={2} fontWeight="bold">{pkg.rating}</Text>
              </Flex>
            </Flex>

            {/* Description with Read More */}
            {pkg?.description && (
              <Box mb={3}>
                <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                  {sentences.slice(0, showMoreDesc ? sentences.length : 3).map((sentence, index) => (
                    <p key={index} className="mb-2 last:mb-0">
                      {sentence}.
                    </p>
                  ))}
                </Text>
                {sentences.length > 3 && (
                  <Button
                    variant="link"
                    color="brand.100"
                    size="sm"
                    onClick={() => setShowMoreDesc(!showMoreDesc)}
                    rightIcon={showMoreDesc ? <FaChevronUp /> : <FaChevronDown />}
                  >
                    {showMoreDesc ? "Show Less" : "Read More"}
                  </Button>
                )}
              </Box>
            )}

            {/* Itinerary Timeline */}
            <Flex
              mt={4}
              overflowX="auto"
              minW={"100%"}
              align="center"
              sx={{
                "::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              }}
            >
              <Text fontSize="sm" fontWeight="bold" mr={4} flexShrink={0}>
                Cities:
              </Text>
              {pkg?.itinerary.map((stop: any, index: number) => (
                <Flex key={index} align="center" mr={3} whiteSpace="nowrap" _hover={{ color: "brand.100", transition: "color 0.2s" }}>
                  <Box textAlign="center">
                    <Text fontSize="sm" fontWeight="600" color="brand.100" noOfLines={1}>
                      {stop?.place}
                    </Text>
                    <Text fontSize="sm" color="gray.500" noOfLines={1}>
                      {stop?.nights} nights
                    </Text>
                  </Box>
                  {index < pkg.itinerary.length - 1 && (
                    <Text mx={2} color="gray.300" fontWeight="bold">
                      →
                    </Text>
                  )}
                </Flex>
              ))}
            </Flex>

            {/* Perks */}
            <Text fontSize="sm" fontWeight="bold" mt={4} mb={2}>Highlights:</Text>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={3} mb={3}>
              {pkg.perks.map((perk: string, index: number) => (
                <Flex
                  key={index}
                  align="center"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <PerkIcon type={perk}  />
                  <Text ml={2} fontSize={{ base: "xs", lg: "sm" }} fontWeight="medium">
                    {perk}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </CardBody>
        </GridItem>
      </Grid>

      {/* Footer Section */}
      <CardFooter
        bg="gray.50"
        borderTopWidth="1px"
        borderColor="gray.200"
        py={3}
        px={5}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Text fontSize="xs" color="gray.500">Starting from</Text>
          <Flex align="baseline">
            {originalPrice && (
              <Text fontSize="lg" color="gray.500" textDecoration="line-through" mr={2}>
                ₹{originalPrice.toLocaleString()}
              </Text>
            )}
            <Heading fontSize="2xl" color="brand.100">
              ₹{pkg.price.toLocaleString()}
            </Heading>
            <Text as="span" fontSize="sm" color="gray.500" ml={1}>
              /person
            </Text>
          </Flex>
        </Box>
        <Button
          borderRadius="full"
          size="sm"
          px={5}
          bgGradient="linear(to-r, brand.100, blue.600)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, brand.100, blue.700)", transform: "scale(1.05)" }}
          animation={`${bounce} 2s infinite`}
          onClick={() => setOpenBookingModal({ open: true, data: pkg })}
        >
          Book Now
        </Button>
      </CardFooter>
      <BookingInfoModal
        isOpen={openBookingModal.open}
        onClose={() => setOpenBookingModal({ data: null, open: false })}
        data={{ id: openBookingModal?.data?._id, type: 'destination', title: openBookingModal.data?.destination }}
      />
    </Card>
  );
};

export default TravelPackageCard;