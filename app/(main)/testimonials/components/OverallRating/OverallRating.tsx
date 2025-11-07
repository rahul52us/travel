"use client"
import { StarIcon } from "@chakra-ui/icons"
import {
  Box,
  Circle,
  Flex,
  Grid,
  HStack,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react"
import { FaCoffee, FaHeart } from "react-icons/fa"
import { FaLocationPin, FaSun } from "react-icons/fa6"

const categories = [
  { name: "Service", icon: FaCoffee, color: "brand.100", rating: 4.7 },
  { name: "Location", icon: FaLocationPin, color: "green.400", rating: 4.9 },
  { name: "Comfort", icon: FaHeart, color: "pink.400", rating: 4.5 },
  { name: "Cleanliness", icon: FaSun, color: "yellow.400", rating: 4.8 },
]

const ratingDistribution = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 20 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
]

export default function RatingsSummary() {
  const overallRating = 4.7
  const totalReviews = 1234

  return (
    <Box  borderRadius="2xl" p={8} maxWidth="7xl" mx="auto" my={{base:6,lg:16}}>
      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        <Box flex={1}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Overall Rating
          </Text>
          <Flex align="center" mb={6}>
            <Text fontSize="6xl" fontWeight="bold" lineHeight={1}>
              {overallRating}
            </Text>
            <VStack align="flex-start" ml={4} spacing={0}>
              <HStack>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} fill={i < Math.floor(overallRating) ? "orange.400" : "gray.300"} stroke="none" />
                ))}
              </HStack>
              <Text color="gray.500">Based on {totalReviews} reviews</Text>
            </VStack>
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {categories.map((category) => (
              <Stat key={category.name} bg="gray.50" p={3} borderRadius="lg">
                <Flex align="center" mb={2}>
                  <Circle size={8} bg={category.color} color="white" mr={2}>
                    <category.icon size={16} />
                  </Circle>
                  <StatLabel>{category.name}</StatLabel>
                </Flex>
                <StatNumber>{category.rating}</StatNumber>
                <StatHelpText>
                  <Progress value={(category.rating / 5) * 100} size="sm" colorScheme={category.color.split(".")[0]} />
                </StatHelpText>
              </Stat>
            ))}
          </Grid>
        </Box>
        <Box flex={1}>
          <Text fontSize={{base:"xl",lg:"2xl"}} fontWeight="bold" mb={{base:2,lg:4}}>
            Rating Distribution
          </Text>
          {ratingDistribution.map((item) => (
            <Tooltip key={item.stars} label={`${item.percentage}%`} placement="top">
              <Flex align="center" mb={2}>
                <Text width={{lg:"40px"}}>{item.stars} stars</Text>
                <Progress flex={1} value={item.percentage} size={{base:"sm",lg:"lg"}} colorScheme="orange" borderRadius="full" mx={2} />
                <Text width="40px" textAlign="right">
                  {item.percentage}%
                </Text>
              </Flex>
            </Tooltip>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}

