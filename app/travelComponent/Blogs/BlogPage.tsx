import {
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import '../../component/FAQ/FAQAccordion/scroll.css';
import AllBlogsSection from './AllBlogsSection/AllBlogsSection';
import BlogHighlight from './BlogHighlight/BlogHighlight';
import RecentBlogsSection from './RecentBlogsSection/RecentBlogsSection';

  const BlogPage = () => {
    // const isMobile = useBreakpointValue({ base: true, md: false });

    return (
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }}>
        {/* Page Header */}
        <Box textAlign="center" mb={6}>
          <Heading as="h1" fontSize={{ base: '4xl', md: '4xl' }} mb={2} fontWeight="900">
            Wander<span style={{ color: '#3182CE' }}>Lens</span>
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
            Journey through stories that redefine travel experiences
          </Text>
        </Box>
        <BlogHighlight/>

        {/* Creative All Stories Grid */}
        <Heading as="h3" fontSize="2xl" mb={8} position="relative">
          <Text as="span" position="relative" zIndex={1} bg={'gray.50'} pr={4}>
            All Stories
          </Text>
          <Box
            position="absolute"
            left={0}
            right={0}
            top="50%"
            height="2px"
            bg="gray.200"
            zIndex={0}
          />
        </Heading>

        <AllBlogsSection/>



        <Box mb={16} mt={12}>

          <RecentBlogsSection/>

        {/* <Flex overflowX="auto" pb={4} className='customScrollBar'>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box
              key={item}
              minW="300px"
              mr={6}
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              _hover={{ boxShadow: 'xl', transform: 'translateY(-4px)' }}
              transition="all 0.3s"
            >
              <Image
                src={`https://picsum.photos/400/300?random=${item}`}
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Box p={6}>
                <Tag colorScheme="blue" mb={3}>Adventure Travel</Tag>
                <Heading fontSize="lg" mb={2}>
                  Exploring Hidden Waterfalls in Southeast Asia
                </Heading>
                <Flex align="center" color="gray.500">
                  <Icon as={FaCompass} mr={2} />
                  <Text fontSize="sm">Bali, Indonesia</Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex> */}
      </Box>


        {/* <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={8}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Box
              key={item}
              position="relative"
              _hover={{
                '.story-content': { transform: 'translateY(-10px)' },
                'img': { transform: 'scale(1.05)' }
              }}
              overflow="hidden"
              borderRadius="3xl"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="linear-gradient(45deg, #f3f4f6 25%, transparent 25%, transparent 75%, #f3f4f6 75%)"
                bgSize="10px 10px"
                opacity="0.1"
                zIndex={-1}
              />

              <Box
                position="relative"
                overflow="hidden"
                borderRadius="3xl"
                border="2px solid"
                borderColor="gray.100"
                bg="white"
              >
                <Box overflow="hidden" h="250px">
                  <Image
                    src={`https://picsum.photos/600/400?random=${item}`}
                    h="100%"
                    w="100%"
                    objectFit="cover"
                    transition="transform 0.4s"
                  />
                </Box>

                <Box p={6} className="story-content" transition="transform 0.3s">
                  <Flex justify="space-between" mb={4}>
                    <Tag variant="outline" colorScheme="blue">Road Trip</Tag>
                    <HStack>
                      <IconButton
                        aria-label="Like"
                        icon={<FaRegHeart />}
                        variant="ghost"
                        size="sm"
                      />
                      <IconButton
                        aria-label="Bookmark"
                        icon={<FaRegBookmark />}
                        variant="ghost"
                        size="sm"
                      />
                    </HStack>
                  </Flex>

                  <Heading fontSize="xl" mb={3} lineHeight="tall">
                    Coastal Highway Adventure: Pacific Northwest
                  </Heading>

                  <Flex align="center" mb={4}>
                    <Avatar
                      size="sm"
                      name="Sarah Johnson"
                      src="https://bit.ly/sage-adebayo"
                      border="2px solid"
                      borderColor="blue.200"
                    />
                    <Text ml={3} fontWeight="medium">Sarah Johnson</Text>
                    <Box mx={3} w={1} h={1} bg="gray.400" borderRadius="full" />
                    <Text fontSize="sm" color="gray.500">May 15, 2023</Text>
                  </Flex>

                  <Flex align="center" color="gray.500">
                    <Icon as={FaCompass} mr={2} />
                    <Text fontSize="sm">Oregon Coast, USA</Text>
                    <Box mx={3} w={1} h={1} bg="gray.400" borderRadius="full" />
                    <Icon as={FaClock} mr={2} />
                    <Text fontSize="sm">6 min read</Text>
                  </Flex>
                </Box>
              </Box>
            </Box>
          ))}
        </Grid> */}

      </Box>
    );
  };

  export default BlogPage;