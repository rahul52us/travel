import { Box, Image, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const experiences = [
  {
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "Breathtaking mountain views",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    caption: "Relaxing on pristine beaches",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "Exploring vibrant local markets",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "Adventurous wildlife safaris",
  },
]

export default function ExperienceGallery() {
  const bgColor = useColorModeValue("gray.50", "gray.900")
  const captionBg = useColorModeValue("whiteAlpha.800", "blackAlpha.800")

  return (
    <Box bg={bgColor} py={10} rounded="lg">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {experiences.map((experience, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            position="relative"
            overflow="hidden"
            rounded="lg"
          >
            <Image
              src={experience.image || "/placeholder.svg"}
              alt={experience.caption}
              w="full"
              h="300px"
              objectFit="cover"
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              bg={captionBg}
              p={2}
              transition="all 0.3s"
              _groupHover={{ transform: "translateY(0)" }}
            >
              <Text textAlign="center" fontWeight="semibold">
                {experience.caption}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  )
}

