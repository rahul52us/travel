import { Avatar, Box, Flex, Heading, HStack, Icon, IconButton, Image, Tag, Text } from "@chakra-ui/react";
import { FaClock, FaCompass, FaRegBookmark, FaRegHeart } from "react-icons/fa";

const AllBlogCard = ({ title, image, author, date, location, readTime, category, authorImage ,alt}) => {
  return (
    <Box
      position="relative"
      _hover={{
        '.story-content': { transform: 'translateY(-10px)' },
        'img': { transform: 'scale(1.05)' }
      }}
      overflow="hidden"
      borderRadius="3xl"
      shadow={"base"}
    >
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="3xl"
        border="2px solid"
        borderColor="gray.100"
        bg="white"
      >
        <Box overflow="hidden" h="250px">
          <Image src={image} alt={alt} h="100%" w="100%" objectFit="cover" transition="transform 0.4s" />
        </Box>

        <Box px={6} py={4} className="story-content" transition="transform 0.3s">
          <Flex justify="space-between" mb={4}>
            <Tag variant="outline" colorScheme="blue" size={'sm'}>{category}</Tag>
            <HStack>
              <IconButton aria-label="Like" icon={<FaRegHeart />} variant="ghost" size="sm" />
              <IconButton aria-label="Bookmark" icon={<FaRegBookmark />} variant="ghost" size="sm" />
            </HStack>
          </Flex>

          <Heading fontSize="xl" mb={3} lineHeight="tall" noOfLines={2}>{title}</Heading>

          <Flex align="center" mb={4}>
            <Avatar size="sm" name={author} src={authorImage} border="2px solid" borderColor="blue.200" />
            <Text ml={3} fontWeight="medium">{author}</Text>
            <Box mx={3} w={1} h={1} bg="gray.400" borderRadius="full" />
            <Text fontSize="sm" color="gray.500">{date}</Text>
          </Flex>

          <Flex align="center" color="gray.500">
            <Icon as={FaCompass} mr={2} />
            <Text fontSize="sm">{location}</Text>
            <Box mx={3} w={1} h={1} bg="gray.400" borderRadius="full" />
            <Icon as={FaClock} mr={2} />
            <Text fontSize="sm">{readTime} min read</Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default AllBlogCard;