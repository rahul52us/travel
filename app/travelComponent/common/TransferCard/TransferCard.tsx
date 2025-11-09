import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaBus, FaInfoCircle, FaPlane, FaRupeeSign, FaTrain } from 'react-icons/fa';

const TransferCard = ({ image, title, description, price, buttonText, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIconForCategory = (category) => {
    switch (category) {
      case 'Airport Transfer':
        return <Icon as={FaPlane} color="brand.100" boxSize={5} />;
      case 'Eurail Ticket':
        return <Icon as={FaTrain} color="brand.100" boxSize={5} />;
      case 'Hop on Hop Off Tour':
        return <Icon as={FaBus} color="brand.100" boxSize={5} />;
      default:
        return <Icon as={FaInfoCircle} color="brand.100" boxSize={5} />;
    }
  };

  return (
    <Card
    //   maxW="sm"
      borderRadius="md"
      boxShadow={isHovered ? "lg" : "base"}
      transition="all 0.3s"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      mb={4}
    >
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        h="240px"
        borderTopRadius="md"
      />
      
      <CardBody py={4}>
        <Flex align="center">
          {getIconForCategory(category)}
          <Heading size="sm" ml={2} noOfLines={1}>{title}</Heading>
        </Flex>

        <Stack spacing={3} mt={2}>
          <Text fontSize="sm" color="gray.600" noOfLines={3}>
            {description}
          </Text>
        </Stack>
      </CardBody>

      <CardFooter borderTop="1px solid" borderColor="gray.200" py={3}>
        <Flex justify="space-between" align="center" w="full">
          <Box>
            <Text fontSize="xs" color="gray.500">Starting from</Text>
            <Flex align="center">
              <Icon as={FaRupeeSign} color="brand.100" mr={1} />
              <Text fontSize="xl" fontWeight="bold" color="brand.100">{price}</Text>
            </Flex>
          </Box>
          <Button 
          bg={'brand.100'}
          color={'white'}
          _hover={{bg:"brand.100",transform:"scale(1.1)"}}
            // colorScheme={isHovered ? "teal" : "blue"} 
            size="sm" 
            borderRadius="lg"
          >
            {buttonText}
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};


export default TransferCard;
