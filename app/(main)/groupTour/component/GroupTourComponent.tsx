"use client";
import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt, FaStar, FaWhatsapp } from "react-icons/fa";
import BookingInfoModal from "../../../component/BookingInfoModal/BookingInfoModal";
import PerkIcon from "../../../component/common/TravelPackageCard/element/PerkIcon";
import { formatTitle } from "../../../config/utils/function";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
`;

// const PerkIcon = ({ type }: { type: string }) => {
//   const icons: Record<string, IconType> = {
//     "5-star hotels": FaBed,
//     "Daily breakfast": FaUtensils,
//     "Guided tours": FaBinoculars,
//     "Airport transfer": FaBus,
//     "Ryokan stay": FaBed,
//     "Kaiseki dinner": FaUtensils,
//     "Tea ceremony": FaBinoculars,
//     "Bullet train pass": FaBus,
//     "4 Star Hotels": FaHotel,
//     "3 Star Hotels": FaHotel,
//     Breakfast: FaUtensils,
//     Lunch: FaUtensils,
//     Dinner: FaUtensils,
//     "Sightseeing and Tours": FaMapMarkedAlt,
//     "Transfers and Boat": FaShip,
//     "Transfers and EURAIL": FaTrain,
//   };

//   const SelectedIcon = icons[type] || FaQuestionCircle;
//   return <Icon as={SelectedIcon} color="brand.100" boxSize={4} />;
// };

const GroupTourComponent = ({ pkg }: { pkg: any }) => {
  const [openBookingModal, setOpenBookingModal] = useState({
    open: false,
    data: pkg,
  });
  const [showMoreDesc, setShowMoreDesc] = useState(false);

  const sentences =
    pkg?.description
      ?.split(".")
      .filter((s: string) => s.trim().length > 0)
      .map((s: string) => s.trim()) || [];

  return (
    <Card
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="0 6px 18px rgba(0,0,0,0.1)"
      bg="brand.200"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: "0 10px 28px rgba(0,0,0,0.15)",
      }}
    >
      <Flex direction={{ base: "column", md: "row" }} align="stretch">
        {/* --- LEFT: Image --- */}
        <Box
          flex={{ base: "none", md: "0 0 40%" }}
          position="relative"
          minH={{ base: "220px", md: "280px" }}
          bgImage={`url(${pkg?.image?.url})`}
          bgSize="cover"
          bgPos="center"
          _before={{
            content: '""',
            position: "absolute",
            inset: 0,
            bgGradient: "linear(to-t, rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          }}
        >
          {/* Destination label */}
          <Flex
            position="absolute"
            bottom={4}
            left={4}
            color="white"
            align="center"
            zIndex={2}
          >
            <FaMapMarkerAlt size={16} />
            <Heading
              ml={2}
              fontSize="lg"
              fontWeight="semibold"
              textShadow="0 2px 4px rgba(0,0,0,0.5)"
            >
              {pkg?.name || formatTitle(pkg?.destination)}
            </Heading>
          </Flex>

          {/* Discount tag */}
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
              py={1}
              fontWeight="semibold"
              zIndex={2}
            >
              {pkg.discount}% OFF
            </Tag>
          )}
        </Box>

        {/* --- RIGHT: Content --- */}
        <Flex
          flex="1"
          direction="column"
          justify="space-between"
          p={{ base: 4, md: 6 }}
          bg="white"
        >
          <Box>
            {/* Header */}
            <Flex justify="space-between" align="center" mb={3}>
              <Tag
                bg="brand.100"
                color="brand.200"
                borderRadius="full"
                px={4}
                py={1}
                fontWeight="semibold"
                fontSize="sm"
              >
                {pkg.days} Days / {pkg.days - 1} Nights
              </Tag>
              <Flex align="center">
                <FaStar color="gold" />
                <Text ml={1} fontWeight="bold" color="gray.700" fontSize="sm">
                  {pkg.rating}
                </Text>
              </Flex>
            </Flex>

            {/* Title */}
            <Heading
              fontSize="xl"
              mb={2}
              color="brand.100"
              fontWeight="semibold"
            >
              {pkg?.name || formatTitle(pkg?.destination)}
            </Heading>

            {/* Description */}
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

            {/* Itinerary */}
            <Flex
              mt={4}
              overflowX="auto"
              minW={"100%"}
              align="center"
              pb={2}
              mb={3}
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
                    <Text mx={2} color="gray.300" fontWeight="bold" px={2}>
                      →
                    </Text>
                  )}
                </Flex>
              ))}
            </Flex>

            {/* Perks */}
            <Text fontSize="sm" fontWeight="bold" mt={4} mb={2}>
              Highlights:
            </Text>
            <SimpleGrid columns={{ base: 2, md: 2 }} spacing={2} mb={4}>
              {pkg?.perks?.map((perk: string, i: number) => (
                <Flex key={i} align="center">
                  <PerkIcon type={perk} />
                  <Text ml={2} fontSize="sm" color="gray.700" noOfLines={1}>
                    {perk}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>

          {/* Footer */}
          <Divider my={3} />
          <Flex justify="space-between" align="center" flexWrap="wrap">
            <Box>
              <Text fontSize="xs" color="gray.500" mb={1}>
                Starting from
              </Text>
              <Heading fontSize="2xl" color="brand.100" fontWeight="bold">
                ₹{pkg.price.toLocaleString()}
                <Text as="span" fontSize="sm" color="gray.500" ml={1}>
                  /person
                </Text>
              </Heading>
            </Box>

            {/* Sky Blue Button */}
            <Flex gap={2} align="center">
              <Button
                bg="#25D366"
                color="white"
                _hover={{ bg: "#128C7E" }}
                borderRadius="full"
                size="sm"
                onClick={() => {
                  // 🔥 Track WhatsApp click in Google Tag Manager
                  (window as any).dataLayer = (window as any).dataLayer || [];
                  (window as any).dataLayer.push({
                    event: "whatsapp_click",
                    click_text: "WhatsApp Button",
                    package_name: pkg?.name || pkg?.destination || "Unknown Package",
                  });

                  const phone = "9958805754";
                  const message = `Hi, I am interested in the ${pkg?.name || pkg?.destination
                    } travel package. Please share more details.`;
                  const encodedMsg = encodeURIComponent(message);

                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

                  const url = isMobile
                    ? `https://wa.me/91${phone}?text=${encodedMsg}`
                    : `https://api.whatsapp.com/send?phone=91${phone}&text=${encodedMsg}`;

                  window.open(url, "_blank");
                }}

                p={{ base: 2, lg: 3 }}
              >
                <FaWhatsapp size={20} />
              </Button>

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
                onClick={() => setOpenBookingModal({ open: true, data: pkg })}
              >
                Enquire Now
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* Booking Modal */}
      <BookingInfoModal
        isOpen={openBookingModal.open}
        onClose={() => setOpenBookingModal({ data: null, open: false })}
        data={{
          id: openBookingModal?.data?._id,
          type: "groupTour",
          title: openBookingModal.data?.destination,
        }}
      />
    </Card>
  );
};

export default GroupTourComponent;