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
  Text,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { IconType } from "react-icons";
import { FaBed, FaBinoculars, FaBus, FaHotel, FaMapMarkedAlt, FaMapMarkerAlt, FaShip, FaStar, FaTrain, FaUtensils } from "react-icons/fa";
import { formatTitle, getDestinationArray } from "../../../../config/utils/function";
import { useParams, useRouter } from "next/navigation";
import BookingInfoModal from "../../../../component/BookingInfoModal/BookingInfoModal";
import { useState } from "react";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

const PerkIcon = ({ type }: { type: string }) => {
  const icons: Record<string, IconType> = {
    "5-star hotels": FaBed,
    "Daily breakfast": FaUtensils,
    "Guided tours": FaBinoculars,
    "Airport transfer": FaBus,
    "4 Star Hotels": FaHotel,
    "3 Star Hotels": FaHotel,
    "Breakfast": FaUtensils,
    "Lunch": FaUtensils,
    "Dinner": FaUtensils,
    "Sightseeing and Tours": FaMapMarkedAlt,
    "Transfers and Boat": FaShip,
    "Transfers and EURAIL": FaTrain,
  };
  return icons[type] ? <Icon as={icons[type]} color="blue.500" boxSize={5} /> : null;
};

const TravelPackageCard = ({ pkg }: { pkg: any }) => {
      const [openBookingModal, setOpenBookingModal] = useState({open : false, data : pkg})
  const router = useRouter();
  const params = useParams();

  return (
    <Card
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
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
        >
          {pkg.discount}% OFF
        </Tag>
      )}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1.5fr" }} gap={5} alignItems="center">
        {/* Image Section */}
        <GridItem>
          <AspectRatio ratio={16 / 9}>
            <Box
              bgImage={pkg?.image?.url}
              bgSize="cover"
              bgPosition="center"
              position="relative"
              borderRadius="lg"
              _after={{ content: '""', position: "absolute", inset: 0, bgGradient: "linear(to-t, blackAlpha.700, transparent)" }}
            >
              <Flex
                position="absolute"
                bottom={3}
                left={3}
                color="white"
                zIndex={1}
                align="center"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
                onClick={() => {
                  if (params?.location) {
                    router.push(`/destinations/${params?.location}/${getDestinationArray(pkg)}`);
                  }
                }}
              >
                <FaMapMarkerAlt size={18} />
                <Heading fontSize="lg" ml={2} textShadow="1px 1px 3px rgba(0, 0, 0, 0.4)">
                  {formatTitle(pkg.destination)}
                </Heading>
              </Flex>
            </Box>
          </AspectRatio>
        </GridItem>

        {/* Content Section */}
        <GridItem>
          <CardBody>
            <Flex justify="space-between" align="center" mb={2}>
              <Tag colorScheme="blue" borderRadius="full" px={4} size="sm">
                {pkg.days} Days / {pkg.days - 1} Nights
              </Tag>
              <Flex align="center">
                <FaStar color="gold" />
                <Text ml={1.5} fontWeight="bold">{pkg.rating}</Text>
              </Flex>
            </Flex>

            {/* Description */}
            {pkg.description && (
              <Text fontSize="sm" color="gray.600" mb={3} noOfLines={{ base: 2, md: 3 }}>
                {pkg.description}
              </Text>
            )}

            {/* Perks */}
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3} mb={3}>
              {pkg.perks.map((perk: string, index: number) => (
                <Flex key={index} align="center">
                  <PerkIcon type={perk} />
                  <Text ml={2} fontSize={{ base: "xs", lg: "sm" }} fontWeight="medium">{perk}</Text>
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
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize="xs" color="gray.500">Starting from</Text>
          <Heading fontSize="2xl" color="blue.600">
            ₹{pkg.price.toLocaleString()}
            <Text as="span" fontSize="sm" color="gray.500"> /person</Text>
          </Heading>
        </Box>
        <Button
          borderRadius="full"
          size="sm"
          px={5}
          bgGradient="linear(to-r, blue.400, blue.600)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, blue.500, blue.700)", transform: "scale(1.05)" }}
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
