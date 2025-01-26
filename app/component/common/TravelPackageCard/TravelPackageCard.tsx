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
    useDisclosure
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { IconType } from "react-icons";
import {
    FaBed,
    FaBinoculars,
    FaBus,
    FaMapMarkerAlt,
    FaStar,
    FaUtensils,
} from "react-icons/fa";

const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const travelPackages = [
  {
    id: 1,
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    price: 105000,
    days: 7,
    rating: 4.8,
    perks: [
      "5-star hotels",
      "Daily breakfast",
      "Guided tours",
      "Airport transfer",
    ],
    highlights: ["Sunset cruise", "Volcano tour", "Wine tasting"],
    discount: 15,
    itinerary: [
      { place: "Santorini Town", nights: 3 },
      { place: "Oia Village", nights: 4 },
    ],
  },
  {
    id: 2,
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    price: 184000,
    days: 10,
    rating: 4.9,
    perks: [
      "Ryokan stay",
      "Kaiseki dinner",
      "Tea ceremony",
      "Bullet train pass",
    ],
    highlights: ["Cherry blossoms", "Bamboo forest", "Golden Pavilion"],
    discount: 10,
    itinerary: [
      { place: "Santorini Town", nights: 3 },
      { place: "Oia Village", nights: 4 },
      { place: "Oia Village", nights: 4 },
    ],
  },
];

const TravelPackageCard = () => {
  const { isOpen, onToggle } = useDisclosure();

  const PerkIcon = ({ type }: { type: string }) => {  
    const icons: Record<string, IconType> = {  
      "5-star hotels": FaBed,  
      "Daily breakfast": FaUtensils,  
      "Guided tours": FaBinoculars,  
      "Airport transfer": FaBus,  
      "Ryokan stay": FaBed,  
      "Kaiseki dinner": FaUtensils,  
      "Tea ceremony": FaBinoculars,  
      "Bullet train pass": FaBus,  
    };  
    return <Icon as={icons[type]} color="blue.500" boxSize={4} />;  
}; 

  return (
    <SimpleGrid columns={[1, 2, 2, 3]} spacing={8} p={8} maxW="90%" mx="auto">
      {travelPackages.map((pkg) => (
        <Card
          key={pkg.id}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="lg"
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.01)",
            boxShadow: "xl",
          }}
          position="relative"
        >
          {pkg.discount && (
            <Tag
              position="absolute"
              top={4}
              right={4}
              bg="red.500"
              size={"sm"}
              color="white"
              borderRadius="full"
              px={3}
              py={2}
              zIndex={2}
            >
              {pkg.discount}% OFF
            </Tag>
          )}

          <AspectRatio ratio={16 / 9}>
            <Box
              bgImage={`url(${pkg.image})`}
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
              <Flex
                position="absolute"
                bottom={4}
                left={4}
                color="white"
                zIndex={1}
              >
                <FaMapMarkerAlt size={24} />
                <Heading
                  fontSize="xl"
                  ml={2}
                  textShadow={"2px 2px 4px rgba(0, 0, 0, 0.5)"}
                >
                  {pkg.location}
                </Heading>
              </Flex>
            </Box>
          </AspectRatio>

          <CardBody bg="white">
            <Flex justify="space-between" align="center" mb={3}>
              <Tag colorScheme="blue" borderRadius="full" px={4}>
                {pkg.days} Days / {pkg.days - 1} Nights
              </Tag>
              <Flex align="center">
                <FaStar color="gold" />
                <Text ml={2} fontWeight="bold">
                  {pkg.rating}
                </Text>
              </Flex>
            </Flex>

            <SimpleGrid columns={2} columnGap={4} rowGap={2} mb={4}>
              {pkg.perks.map((perk, index) => (
                <Flex key={index} align="center">
                  <PerkIcon type={perk} />
                  <Text ml={2} fontSize="sm" fontWeight="medium">
                    {perk}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>

            <Box mt={4}>
              {/* <Text fontWeight="bold" mb={2} fontSize={'sm'}>
                Itinerary:
              </Text> */}
              <Flex
                overflowX="auto"
                align="center"
                css={{
                  "::-webkit-scrollbar": { display: "none" },
                  scrollbarWidth: "none",
                }}
              >
                {pkg.itinerary.map((stop, index) => (
                  <Flex
                    key={index}
                    align="center"
                    mr={3}
                    minWidth="max-content"
                  >
                    {/* Step Icon */}
                    <Box position="relative" textAlign="center">
                      {/* <Icon as={FaMapMarkerAlt} color="blue.500" boxSize={5} mb={1} /> */}
                      <Text fontSize="xs" fontWeight="medium" color="gray.700">
                        {stop.place}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {stop.nights} nights
                      </Text>
                    </Box>

                    {/* Connector Line */}
                    {index < pkg.itinerary.length - 1 && (
                      <Box
                        flex="1"
                        height="2px"
                        bg="gray.300"
                        mx={2}
                        alignSelf="center"
                        minWidth="20px"
                      />
                    )}
                  </Flex>
                ))}
              </Flex>
            </Box>

            {isOpen && (
              <Box mt={4}>
                <Text fontWeight="bold" mb={2} fontSize={"sm"}>
                  Highlights:
                </Text>
                <Flex wrap="wrap" gap={2}>
                  {pkg.highlights.map((highlight, index) => (
                    <Tag
                      key={index}
                      colorScheme="green"
                      borderRadius="full"
                      size={"sm"}
                    >
                      {highlight}
                    </Tag>
                  ))}
                </Flex>
              </Box>
            )}
          </CardBody>

          <CardFooter
            bg="gray.50"
            borderTop="1px solid"
            borderColor="gray.100"
            pb={4}
            pt={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Text fontSize="sm" color="gray.500">
                Starting from
              </Text>
              <Heading fontSize="2xl" color="blue.600">
                ₹{pkg.price.toLocaleString()}
                <Text as="span" fontSize="sm" color="gray.500">
                  /person
                </Text>
              </Heading>
            </Box>
            <Button
              colorScheme="blue"
              borderRadius="full"
              size={"sm"}
              px={4}
              py={5}
              fontWeight={400}
              onClick={onToggle}
              animation={`${bounce} 2s infinite`}
            >
              {isOpen ? "Hide Details" : "View Details"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default TravelPackageCard;
