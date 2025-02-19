import { Avatar, Box, Flex, Heading, HStack, Icon, IconButton, Image, Tag, Text } from "@chakra-ui/react";
import { FaClock, FaCompass, FaRegBookmark, FaRegHeart } from "react-icons/fa";

const AllBlogCard = ({ title, image, author, date, location, readTime, category, authorImage, alt }) => {
  return (
    <Box
      position="relative"
      _hover={{
        '.story-content': { transform: 'translateY(-10px)' },
        'img': { transform: 'scale(1.05)' }
      }}
      overflow="hidden"
      borderRadius="3xl"
      shadow="base"
      w="100%" // Ensures responsiveness within grid/parent
    >
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="3xl"
        border="2px solid"
        borderColor="gray.100"
        bg="white"
      >
        {/* Image Section */}
        <Box overflow="hidden" h={{ base: "180px", md: "220px", lg: "250px" }}>
          <Image
            src={image}
            alt={alt}
            h="100%"
            w="100%"
            objectFit="cover"
            transition="transform 0.4s"
          />
        </Box>

        {/* Content Section */}
        <Box px={{ base: 3, md: 4, lg: 6 }} py={{ base: 3, md: 4 }} className="story-content" transition="transform 0.3s">
          
          {/* Category and Actions */}
          <Flex justify="space-between" mb={{ base: 2, md: 3, lg: 4 }}>
            <Tag variant="outline" colorScheme="blue" size="sm" fontSize={{ base: "xs", md: "sm", lg: "md" }}>
              {category}
            </Tag>
            <HStack spacing={{ base: 1, md: 2 }}>
              <IconButton aria-label="Like" icon={<FaRegHeart />} variant="ghost" size="sm" />
              <IconButton aria-label="Bookmark" icon={<FaRegBookmark />} variant="ghost" size="sm" />
            </HStack>
          </Flex>

          {/* Title */}
          <Heading fontSize={{ base: "sm", md: "lg", lg: "xl" }} mb={2} lineHeight="tall" noOfLines={2}>
            {title}
          </Heading>

          {/* Author Details */}
          <Flex align="center" mb={3}>
            <Avatar size="sm" name={author} src={authorImage} border="2px solid" borderColor="blue.200" />
            <Text ml={2} fontWeight="medium" fontSize={{ base: "xs", md: "sm", lg: "md" }}>{author}</Text>
            <Box mx={2} w={1} h={1} bg="gray.400" borderRadius="full" />
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">{date}</Text>
          </Flex>

          {/* Location & Read Time */}
          <Flex align="center" color="gray.500" fontSize={{ base: "xs", md: "sm" }}>
            <Icon as={FaCompass} mr={2} />
            <Text>{location}</Text>
            <Box mx={2} w={1} h={1} bg="gray.400" borderRadius="full" />
            <Icon as={FaClock} mr={2} />
            <Text>{readTime} min read</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AllBlogCard;
