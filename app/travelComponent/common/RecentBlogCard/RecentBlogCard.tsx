import { Box, Flex, Heading, Icon, Image, Tag, Text } from "@chakra-ui/react";
import { FaCompass } from "react-icons/fa";

const RecentBlogCard = ({ image, category, title, location }) => {
  return (
    <Box
    //   minW="300px"
    //   mr={6}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
      transition="all 0.3s"
    >
      <Image src={image} h="200px" w="100%" objectFit="cover" alt="blog" />
      <Box p={5}>
        <Tag colorScheme="blue" size={'sm'} mb={3}>{category}</Tag>
        <Heading fontSize="lg" mb={2} noOfLines={2}>{title}</Heading>
        <Flex align="center" color="gray.500">
          <Icon as={FaCompass} mr={2} />
          <Text fontSize="sm">{location}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecentBlogCard;