import { Avatar, Box, Flex, Grid, Heading, HStack, Icon, Image, Tag, Text } from '@chakra-ui/react'
import { FaClock } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const BlogHighlight = () => {
  return (
    <Box>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        templateRows={{ lg: '320px 220px' }}
        gap={4}
        mb={20}
      >
        {/* Main Highlight - Spans two columns on larger screens */}
        <Box
          gridColumn={{ md: '1 / 3', lg: '1 / 3' }}
          borderRadius="3xl"
          overflow="hidden"
          position="relative"
          _hover={{ transform: 'scale(0.98)' }}
          transition="all 0.3s cubic-bezier(0.22, 1, 0.36, 1)"
        >
          <Image
            src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325"
            h="100%"
            w="100%"
            objectFit="cover"
            alt='Image'
          />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            bgGradient="linear(to-t, blackAlpha.800, transparent)"
            p={6}
            color="white"
          >
            <HStack mb={3}>
              <Tag variant="solid" bg="blue.500">Adventure</Tag>
              <Tag variant="solid" bg="purple.500">Guide</Tag>
            </HStack>
            <Heading as="h2" fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} mb={3}>
              Mountain Biking Trails in the Swiss Alps
            </Heading>
            <Flex align="center">
              <Avatar size="sm" name="Alex Turner" src="https://bit.ly/kent-c-dodds" />
              <Text ml={3}>Alex Turner</Text>
              <Icon as={FiArrowUpRight} ml={2} w={5} h={5} />
            </Flex>
          </Box>
        </Box>

        {/* Vertical Highlight - Stacks in mobile/tablets */}
        <Box
          gridColumn={{ base: '1 / 1', md: '1 / 3', lg: '3 / 4' }}
          gridRow={{ lg: '1 / 3' }}
          borderRadius="3xl"
          overflow="hidden"
          position="relative"
          _hover={{ transform: 'translateY(-5px)' }}
          transition="all 0.3s"
        >
          <Image
            src="https://images.unsplash.com/photo-1505832018823-50331d70d237"
            h="100%"
            w="100%"
            objectFit="cover"
            alt='Image'
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            p={6}
            bgGradient="linear(to-b, blackAlpha.600, transparent)"
          >
            <Text color="white" fontSize="lg" fontWeight="bold">Cultural Deep Dive</Text>
          </Box>
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={6}
            bgGradient="linear(to-t, blackAlpha.800, transparent)"
          >
            <Heading fontSize={{ base: "lg", md: "xl", lg: "2xl" }} color="white" mb={2}>
              Traditional Festivals of Japan
            </Heading>
            <Flex align="center" color="whiteAlpha.800">
              <Icon as={FaClock} mr={2} />
              <Text>12 min read</Text>
            </Flex>
          </Box>
        </Box>

        {/* Small Highlights - Stack properly on mobile */}
        <Box
          gridColumn={{ base: '1 / 1', md: '1 / 2' }}
          borderRadius="3xl"
          overflow="hidden"
          position="relative"
          _hover={{ transform: 'rotate(-1deg)' }}
          transition="all 0.3s"
        >
          <Image
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21"
            h="100%"
            w="100%"
            objectFit="cover"
            alt='Image'
          />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={4}
            bg="white"
            m={4}
            borderRadius="2xl"
          >
            <Text fontSize="sm" color="blue.500" mb={1}>PHOTO DIARY</Text>
            <Heading fontSize="lg">Desert Camping Under the Stars</Heading>
          </Box>
        </Box>

        <Box
          gridColumn={{ base: '1 / 1', md: '2 / 3' }}
          borderRadius="3xl"
          overflow="hidden"
          position="relative"
          _hover={{ transform: 'rotate(-1deg)' }}
          transition="all 0.3s"
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            h="100%"
            w="100%"
            objectFit="cover"
            alt='Image'
          />
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={4}
            bg="white"
            m={4}
            borderRadius="2xl"
          >
            <Text fontSize="sm" color="blue.500" mb={1}>PHOTO DIARY</Text>
            <Heading fontSize="lg">Sunrise Over the Desert</Heading>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default BlogHighlight
