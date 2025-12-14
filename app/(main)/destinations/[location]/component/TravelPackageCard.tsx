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
import {
  FaChevronDown,
  FaChevronUp,
  FaMapMarkerAlt,
  FaRegStar,
  FaStar,
  FaStarHalfAlt
} from "react-icons/fa";
import BookingInfoModal from "../../../../component/BookingInfoModal/BookingInfoModal";
import PerkIcon from "../../../../component/common/TravelPackageCard/element/PerkIcon";
import { formatTitle } from "../../../../config/utils/function";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

const TravelPackageCard = ({ pkg }: { pkg: any }) => {
  const [openBookingModal, setOpenBookingModal] = useState({ open: false, data: pkg });
  const [showMoreDesc, setShowMoreDesc] = useState(false);

  const sentences =
    pkg?.description
      ?.split(".")
      .filter((s: string) => s.trim().length > 0)
      .map((s: string) => s.trim()) || [];

  if (sentences.length === 0) return null;

  const originalPrice = pkg.discount
    ? Math.round(pkg.price / (1 - pkg.discount / 100))
    : null;

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
      w="100%"
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

      {/* 🌟 FIXED RESPONSIVE GRID */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1.5fr" }}
        gap={{ base: 0, md: 5 }}
      >
        {/* 🌟 IMAGE SECTION FIXED FOR MOBILE */}
        <GridItem w="100%">
          <Box
            w="100%"
            h={{ base: "220px", sm: "260px", md: "100%" }}
            bgImage={`url(${pkg?.image?.url})`}
            bgSize="cover"
            bgPosition="center"
            position="relative"
          >
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-t, blackAlpha.700, transparent)"
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
              <Heading
                fontSize={{ base: "md", md: "lg" }}
                ml={2}
                textShadow="1px 1px 3px rgba(0, 0, 0, 0.4)"
              >
                {formatTitle(pkg?.name)}
              </Heading>
            </Flex>
          </Box>
        </GridItem>

        {/* CONTENT SECTION */}
        <GridItem>
          <CardBody p={{ base: 4, md: 5 }}>
            <Heading
              as="h3"
              size="sm"
              fontWeight={500}
              color={"brand.100"}
              textAlign={"end"}
              mb={2}
            >
              {formatTitle(pkg.destination)}
            </Heading>

            <Flex justify="space-between" align="center" mb={3}>
              <Tag colorScheme="teal" borderRadius="full" px={4} size="sm">
                {pkg.days} Days / {pkg.days - 1} Nights
              </Tag>

              <Flex align="center" fontSize={{ base: "xs", sm: "sm" }}>
                {[...Array(fullStars)].map((_, i) => (
                  <FaStar key={`full-${i}`} color="gold" />
                ))}
                {hasHalfStar && <FaStarHalfAlt color="gold" />}
                {[...Array(emptyStars)].map((_, i) => (
                  <FaRegStar key={`empty-${i}`} color="gold" />
                ))}
                <Text ml={2} fontWeight="bold">
                  {pkg.rating}
                </Text>
              </Flex>
            </Flex>

            {/* DESCRIPTION */}
            {pkg?.description && (
              <Box mb={3}>
                <Text fontSize="sm" color="gray.600" lineHeight="1.6">
                  {sentences
                    .slice(0, showMoreDesc ? sentences.length : 3)
                    .map((sentence, index) => (
                      <p key={index}>{sentence}.</p>
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

            {/* ITINERARY */}
            <Flex
              mt={4}
              overflowX="auto"
              minW={"100%"}
              align="center"
              maxW={{base:"200px",md:"100%"}}
              pb={2}
              sx={{
                "::-webkit-scrollbar": { display: "none" },
                scrollbarWidth: "none",
              }}
            >
              <Text fontSize="sm" fontWeight="bold" mr={4} flexShrink={0}>
                Cities:
              </Text>

              {pkg?.itinerary.map((stop: any, index: number) => (
                <Flex
                  key={index}
                  align="center"
                  mr={3}
                  whiteSpace="nowrap"
                  _hover={{ color: "brand.100" }}
                >
                  <Box textAlign="center">
                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      color="brand.100"
                      noOfLines={1}
                    >
                      {stop?.place}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
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

            {/* PERKS */}
            <Text fontSize="sm" fontWeight="bold" mt={4} mb={2}>
              Highlights:
            </Text>

            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 3 }}
              spacing={3}
              mb={3}
            >
              {pkg.perks.map((perk: string, index: number) => (
                <Flex
                  key={index}
                  align="center"
                  _hover={{ transform: "scale(1.05)" }}
                  transition="0.2s"
                >
                  <PerkIcon type={perk} />
                  <Text
                    ml={1}
                    fontSize={{ base: "xs", sm: "sm" }}
                    fontWeight="medium"
                  >
                    {perk}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </CardBody>
        </GridItem>
      </Grid>

      {/* FOOTER */}
      <CardFooter
        bg="gray.50"
        borderTopWidth="1px"
        borderColor="gray.200"
        py={3}
        px={{ base: 4, md: 5 }}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        rowGap={3}
      >
        <Box>
          <Text fontSize="xs" color="gray.500">
            Starting from
          </Text>

          <Flex align="baseline" flexWrap="wrap">
            {originalPrice && (
              <Text
                fontSize="lg"
                color="gray.500"
                textDecoration="line-through"
                mr={2}
              >
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
          _hover={{
            bgGradient: "linear(to-r, brand.100, blue.700)",
            transform: "scale(1.05)",
          }}
          animation={`${bounce} 2s infinite`}
          // onClick={() => setOpenBookingModal({ open: true, data: pkg })}
          onClick={() => {
  const phone = "9958805754";
  const message = `Hi, I am interested in the ${pkg?.name || pkg?.destination} travel package. Please share more details.`;
  const encodedMsg = encodeURIComponent(message);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const url = isMobile
    ? `https://wa.me/91${phone}?text=${encodedMsg}`
    : `https://api.whatsapp.com/send?phone=91${phone}&text=${encodedMsg}`;

  window.open(url, "_blank");
}}

        >
          Enquire Now
        </Button>
      </CardFooter>

      <BookingInfoModal
        isOpen={openBookingModal.open}
        onClose={() => setOpenBookingModal({ data: null, open: false })}
        data={{
          id: openBookingModal?.data?._id,
          type: "destination",
          title: openBookingModal.data?.destination,
        }}
      />
    </Card>
  );
};

export default TravelPackageCard;
