"use client"

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Badge,
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  shouldForwardProp,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { isValidMotionProp, motion } from "framer-motion"
// import dynamic from "next/dynamic"
import { useState } from "react"
import { FaClock, FaCloudRain, FaSun } from "react-icons/fa"
import { MdCheckCircle, MdInfo, MdLocalOffer, MdStar, MdTipsAndUpdates } from "react-icons/md"
import type { TourPackage } from "./tourPackage"

// const Map = dynamic(() => import("./map"), { ssr: false })

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
})

interface TourDetailsProps {
  pkg: TourPackage
}

export default function TourDetails({ pkg }: TourDetailsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const bgColor = useColorModeValue("gray.50", "gray.900")
  const cardBg = useColorModeValue("white", "gray.800")
  const highlightBg = useColorModeValue("gray.50", "gray.700")

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Hero Section with Parallax */}

      {/* <Box position="relative" height="90vh" overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundImage={`url(${pkg.mainImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundAttachment="fixed"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8))"
        />
        <Container maxW="7xl" height="full">
          <Flex height="full" direction="column" justify="flex-end" pb={16} position="relative">
            <ChakraBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={ "all 0.5s" }>
              <Heading color="white" size="4xl" mb={4} textShadow="2px 2px 4px rgba(0,0,0,0.4)">
                {pkg?.location1}
              </Heading>
              <Text color="white" fontSize="xl" maxW="2xl" textShadow="1px 1px 2px rgba(0,0,0,0.4)">
                {pkg.description.brief}
              </Text>
            </ChakraBox>
          </Flex>
        </Container>
      </Box> */}

      <Container maxW="7xl" py={16}>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
          <Stack spacing={8}>
            {/* Image Gallery */}
            <Box bg={cardBg} p={6} borderRadius="xl" shadow="md">
              <Heading size="lg" mb={6}>
                Gallery
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 3 }} spacing={4}>
                {pkg.images.map((image, index) => (
                  <Box
                    key={index}
                    cursor="pointer"
                    onClick={() => {
                      setSelectedImage(image)
                      onOpen()
                    }}
                    position="relative"
                    overflow="hidden"
                    borderRadius="lg"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${pkg.location} ${index + 1}`}
                      w="full"
                      h="200px"
                      objectFit="cover"
                      transition="transform 0.3s"
                      _hover={{ transform: "scale(1.05)" }}
                    />
                  </Box>
                ))}
              </SimpleGrid>
            </Box>

            {/* Tabs Section */}
            <Tabs variant="enclosed" colorScheme="blue">
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Itinerary</Tab>
                <Tab>Activities</Tab>
                <Tab>Reviews</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Stack spacing={6}>
                    {/* Description */}
                    <Text fontSize="lg">{pkg.description.detailed}</Text>

                    {/* Weather Information */}
                    <Box bg={highlightBg} p={6} borderRadius="lg">
                      <Heading size="md" mb={4}>
                        Weather & Best Time to Visit
                      </Heading>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        <Stat>
                          <StatLabel>Temperature</StatLabel>
                          <StatNumber>
                            <Flex align="center" gap={2}>
                              <FaSun />
                              {pkg.weather.temperature}
                            </Flex>
                          </StatNumber>
                        </Stat>
                        <Stat>
                          <StatLabel>Rainfall</StatLabel>
                          <StatNumber>
                            <Flex align="center" gap={2}>
                              <FaCloudRain />
                              {pkg.weather.rainfall}
                            </Flex>
                          </StatNumber>
                        </Stat>
                      </SimpleGrid>
                      <Text mt={4} color="gray.600">
                        Best time to visit: {pkg.weather.bestTime}
                      </Text>
                    </Box>

                    {/* Cultural Notes */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                      {pkg.culturalNotes.map((note) => (
                        <Box key={note.title} bg={cardBg} p={6} borderRadius="lg" shadow="sm">
                          <Flex align="center" gap={3} mb={3}>
                            <Icon as={MdInfo} boxSize={5} color="blue.500" />
                            <Heading size="md">{note.title}</Heading>
                          </Flex>
                          <Text>{note.description}</Text>
                        </Box>
                      ))}
                    </SimpleGrid>

                    {/* Local Cuisine */}
                    <Box>
                      <Heading size="lg" mb={6}>
                        Local Cuisine
                      </Heading>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        {pkg.localCuisine.map((dish) => (
                          <Box key={dish.name} bg={cardBg} borderRadius="lg" overflow="hidden" shadow="md">
                            <Image
                              src={dish.image || "/placeholder.svg"}
                              alt={dish.name}
                              h="200px"
                              w="full"
                              objectFit="cover"
                            />
                            <Box p={4}>
                              <Heading size="md" mb={2}>
                                {dish.name}
                              </Heading>
                              <Text>{dish.description}</Text>
                            </Box>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </Box>
                  </Stack>
                </TabPanel>

                <TabPanel>
                  <Stack spacing={6}>
                    {pkg.itinerary.map((day, index) => (
                      <ChakraBox
                        key={day.place}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      // transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Box bg={cardBg} p={6} borderRadius="lg" shadow="md">
                          <Flex gap={4}>
                            <Box bg="blue.500" color="white" p={3} borderRadius="full" height="fit-content">
                              Day {index + 1}
                            </Box>
                            <Stack spacing={3}>
                              <Heading size="md">{day.place}</Heading>
                              <Text>{day.description}</Text>
                              <Stack>
                                <Text fontWeight="bold">Activities:</Text>
                                <List spacing={2}>
                                  {day.activities.map((activity) => (
                                    <ListItem key={activity} display="flex" alignItems="center">
                                      <ListIcon as={MdCheckCircle} color="green.500" />
                                      {activity}
                                    </ListItem>
                                  ))}
                                </List>
                              </Stack>
                            </Stack>
                          </Flex>
                        </Box>
                      </ChakraBox>
                    ))}
                  </Stack>
                </TabPanel>

                <TabPanel>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                    {pkg.activities.map((activity) => (
                      <Box key={activity.id} bg={cardBg} borderRadius="lg" overflow="hidden" shadow="md">
                        <Image
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          h="200px"
                          w="full"
                          objectFit="cover"
                        />
                        <Box p={4}>
                          <Heading size="md" mb={2}>
                            {activity.title}
                          </Heading>
                          <Text mb={3}>{activity.description}</Text>
                          <Flex justify="space-between" align="center">
                            <Badge colorScheme="blue">
                              <Flex align="center" gap={1}>
                                <FaClock />
                                {activity.duration}
                              </Flex>
                            </Badge>
                            <Text fontWeight="bold">${activity.price}</Text>
                          </Flex>
                        </Box>
                      </Box>
                    ))}
                  </SimpleGrid>
                </TabPanel>

                <TabPanel>
                  <Stack spacing={6}>
                    {pkg.reviews.map((review) => (
                      <Box key={review.id} bg={cardBg} p={6} borderRadius="lg" shadow="md">
                        <Flex gap={4}>
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            boxSize="48px"
                            borderRadius="full"
                          />
                          <Stack spacing={2}>
                            <Flex align="center" gap={2}>
                              <Text fontWeight="bold">{review.name}</Text>
                              <Text color="gray.500">•</Text>
                              <Text color="gray.500">{review.date}</Text>
                            </Flex>
                            <Flex>
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Icon key={i} as={MdStar} color={i < review.rating ? "yellow.400" : "gray.300"} />
                              ))}
                            </Flex>
                            <Text>{review.comment}</Text>
                          </Stack>
                        </Flex>
                      </Box>
                    ))}
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>

            {/* Map Section */}
            <Box bg={cardBg} p={6} borderRadius="xl" shadow="md">
              <Heading size="lg" mb={6}>
                Location
              </Heading>
              <AspectRatio ratio={16 / 9}>
                <Box borderRadius="lg" overflow="hidden">
                  {/* <Map latitude={pkg.location.latitude} longitude={pkg.location.longitude} /> */}
                </Box>
              </AspectRatio>
              <Text mt={4} color="gray.600">
                {pkg.location.address}
              </Text>
            </Box>

            {/* Travel Tips & FAQ */}
            <Stack spacing={6}>
              <Box bg={cardBg} p={6} borderRadius="xl" shadow="md">
                <Heading size="lg" mb={6}>
                  Travel Tips
                </Heading>
                <Accordion allowMultiple>
                  {pkg.travelTips.map((tip) => (
                    <AccordionItem key={tip.category}>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Flex align="center" gap={2}>
                            <Icon as={MdTipsAndUpdates} color="blue.500" />
                            <Text fontWeight="bold">{tip.category}</Text>
                          </Flex>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <List spacing={2}>
                          {tip.tips.map((tipItem, index) => (
                            <ListItem key={index} display="flex" alignItems="center">
                              <ListIcon as={MdCheckCircle} color="green.500" />
                              {tipItem}
                            </ListItem>
                          ))}
                        </List>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>

              <Box bg={cardBg} p={6} borderRadius="xl" shadow="md">
                <Heading size="lg" mb={6}>
                  Frequently Asked Questions
                </Heading>
                <Accordion allowMultiple>
                  {pkg.faqs.map((faq, index) => (
                    <AccordionItem key={index}>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text fontWeight="bold">{faq.question}</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>{faq.answer}</AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Box>
            </Stack>
          </Stack>

          {/* Sticky Booking Card */}
          <Box>
            <Box position="sticky" top={4} bg={cardBg} p={6} borderRadius="xl" shadow="md">
              <Stack spacing={6}>
                <Stack>
                  <Text fontSize="sm" color="gray.500">
                    Starting from
                  </Text>
                  <Flex align="baseline" gap={2}>
                    <Text
                      fontSize="3xl"
                      fontWeight="bold"
                      textDecoration={pkg.discount ? "line-through" : "none"}
                      color={pkg.discount ? "gray.400" : "current"}
                    >
                      ${pkg.price.toLocaleString()}
                    </Text>
                    {pkg.discount && (
                      <Text fontSize="3xl" fontWeight="bold" color="green.500">
                        ${(pkg.price * (1 - pkg.discount / 100)).toLocaleString()}
                      </Text>
                    )}
                  </Flex>
                  {pkg.discount && (
                    <Flex align="center" color="green.500">
                      <Icon as={MdLocalOffer} mr={1} />
                      <Text fontWeight="medium">{pkg.discount}% OFF</Text>
                    </Flex>
                  )}
                </Stack>

                <Divider />

                <Stack spacing={4}>
                  <Stat>
                    <StatLabel>Duration</StatLabel>
                    <StatNumber>{pkg.days} Days</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Rating</StatLabel>
                    <StatNumber>
                      <Flex align="center" gap={1}>
                        {pkg.rating}
                        <Icon as={MdStar} color="yellow.400" />
                      </Flex>
                    </StatNumber>
                  </Stat>
                </Stack>

                <Button size="lg" colorScheme="blue" w="full">
                  Enquire Now
                </Button>

                <Text fontSize="sm" color="gray.500" textAlign="center">
                  Free cancellation up to 48 hours before the tour
                </Text>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Container>

      {/* Image Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton zIndex="overlay" />
          <ModalBody p={0}>
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                w="full"
                h="auto"
                maxH="90vh"
                objectFit="contain"
              />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

