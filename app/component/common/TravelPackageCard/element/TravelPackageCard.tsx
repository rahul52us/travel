'use client'
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Tag,
  Text
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IconType } from "react-icons";
import { FaBed, FaBinoculars, FaBus, FaHotel, FaMapMarkedAlt, FaMapMarkerAlt, FaQuestionCircle, FaShip, FaStar, FaTrain, FaUtensils } from "react-icons/fa";
import { formatTitle, getDestinationArray } from "../../../../config/utils/function";
import BookingInfoModal from "../../../BookingInfoModal/BookingInfoModal";

  // Bounce animation for the button
  const bounce = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  `;


 const PerkIcon = ({ type }: { type: string }) => {
  const icons: Record<string, IconType> = {
    // Existing icons
    "5-star hotels": FaBed,
    "Daily breakfast": FaUtensils,
    "Guided tours": FaBinoculars,
    "Airport transfer": FaBus,
    "Ryokan stay": FaBed,
    "Kaiseki dinner": FaUtensils,
    "Tea ceremony": FaBinoculars,
    "Bullet train pass": FaBus,

    // New icons
    "4 Star Hotels": FaHotel,
    "3 Star Hotels": FaHotel,
    "Breakfast": FaUtensils,
    "Lunch": FaUtensils,
    "Dinner": FaUtensils,
    "Sightseeing and Tours": FaMapMarkedAlt,
    "Transfers and Boat": FaShip,
    "Transfers and EURAIL": FaTrain,
  };

  const SelectedIcon = icons[type] || FaQuestionCircle; // 👈 fallback default icon

  return <Icon as={SelectedIcon} color="blue.500" boxSize={4} />;
};


  // Main Card Component
  const TravelPackageCard = ({ pkg }: { pkg: any }) => {
    const [openBookingModal, setOpenBookingModal] = useState({open : false, data : pkg})
    const [isOpen] = useState(false);
    const router = useRouter()

    return (
      <Card
        key={pkg.id}
        borderRadius="xl"
        overflow="hidden"
        boxShadow="lg"
        transition="all 0.3s ease"
        _hover={{
          transform: "scale(1.02)",
          boxShadow: "xl",
        }}
        position="relative"
      >
        {/* Discount Tag */}
        {pkg.discount && (
          <Tag
            position="absolute"
            top={4}
            right={4}
            bg="red.500"
            color="white"
            size="sm"
            borderRadius="full"
            px={3}
          >
            {pkg.discount}% OFF
          </Tag>
        )}

        {/* Image Section */}
        <AspectRatio ratio={16 / 9}>
          <Box
            bgImage={pkg?.image?.url}
            bgSize="cover"
            bgPosition="center"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              inset: 0,
              bgGradient: "linear(to-t, blackAlpha.600, blackAlpha.200)",
            }}
          >
            <Flex position="absolute" bottom={4} left={4} color="white" zIndex={1} align="center">
              <FaMapMarkerAlt size={20} />
              <Heading fontSize="lg" ml={2} textShadow="1px 1px 3px rgba(0, 0, 0, 0.4)" cursor="pointer" onClick={() => {
                if(pkg?.location?.name)
                {
                  router.push(`/destinations/${pkg?.location?.name?.split(' ')?.join(',')}/${getDestinationArray(pkg)}`)
                }
              }}>
                {pkg?.name || formatTitle(pkg?.destination)}
              </Heading>
            </Flex>
          </Box>
        </AspectRatio>

        {/* Card Body */}
        <CardBody bg="white">
          <Flex justify="space-between" align="center" mb={3}>
            <Tag colorScheme="blue" borderRadius="full" px={4} size={{base:"sm",md:"md"}}>
              {pkg.days} Days / {pkg.days - 1} Nights
            </Tag>
            <Flex align="center">
              <FaStar color="gold" />
              <Text ml={2} fontWeight="bold">
                {pkg.rating}
              </Text>
            </Flex>
          </Flex>

          {/* Perks Section */}
          <SimpleGrid columns={2} spacing={2} mb={4}>
            {pkg.perks.map((perk, index) => (
              <Flex key={index} align="center">
                <PerkIcon type={perk} />
                <Text ml={2} fontSize={{base:"xs",lg:"sm"}} fontWeight="medium">
                  {perk}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>

          {/* Itinerary Section */}
          <Box mt={4}>
  <Flex
    overflowX="auto"
    align="center"
    sx={{
      "::-webkit-scrollbar": { display: "none" },
      scrollbarWidth: "none",
    }}
  >
    {pkg.itinerary.map((stop, index) => (
      <Flex key={index} align="center" mr={3} whiteSpace="nowrap">
        <Box textAlign="center">
          <Text fontSize="xs" fontWeight="medium" color="gray.700" noOfLines={1}>
            {stop.place}
          </Text>
          <Text fontSize="xs" color="gray.500" noOfLines={1}>
            {stop.nights} nights
          </Text>
        </Box>
        {index < pkg.itinerary.length - 1 && (
          <Box flex="1" height="2px" bg="gray.300" mx={2} />
        )}
      </Flex>
    ))}
  </Flex>
</Box>

          {/* Highlights Section */}
          {isOpen && (
            <Box mt={4}>
              <Text fontWeight="bold" mb={2} fontSize="sm">
                Highlights:
              </Text>
              <Flex wrap="wrap" gap={2}>
                {pkg.highlights.map((highlight, index) => (
                  <Tag key={index} colorScheme="green" borderRadius="full" size="sm">
                    {highlight}
                  </Tag>
                ))}
              </Flex>
            </Box>
          )}
        </CardBody>

        {/* Card Footer */}
        <CardFooter
          bg="gray.50"
          borderTopWidth="1px"
          borderColor="gray.100"
          py={3}
          justifyContent="space-between"
          alignItems={{base:"flex-end",lg:"center"}}
        >
          <Box>
            <Text fontSize={{base:"xs",lg:"sm"}} color="gray.500">
              Starting from
            </Text>
            <Heading fontSize={{base:"xl",lg:"2xl"}} color="blue.600">
              ₹{pkg.price.toLocaleString()}
              <Text as="span" fontSize="sm" color="gray.500">
                /person
              </Text>
            </Heading>
          </Box>
          <Button
            // colorScheme="red"
            borderRadius="full"
            size={{base:"xs",lg:"sm"}}
            animation={`${bounce} 2s infinite`}
            onClick={() => setOpenBookingModal({open : true, data : pkg})}
          >
            Book Now
          </Button>
        </CardFooter>
        <BookingInfoModal isOpen={openBookingModal.open} onClose={() => setOpenBookingModal({data : null, open : false})} data={{id : openBookingModal?.data?._id, type : 'destination', title : openBookingModal.data?.destination}}/>
      </Card>
    );
};

  export default TravelPackageCard;
