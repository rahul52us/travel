import { Box, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";

const FeatureCard = ({ icon, title, content }) => (
  <Box
    bg={useColorModeValue('white', 'gray.800')}
    p={6}
    borderRadius="2xl"
    borderWidth="1px"
    borderColor={useColorModeValue('gray.200', 'gray.700')}
    boxShadow="md"
    textAlign="center"
    transition="all 0.3s ease-in-out"
    _hover={{
      transform: 'translateY(-4px)',
      boxShadow: 'xl',
      borderColor: 'teal.400',
    }}
    position="relative"
    overflow="hidden"
  >
    {/* Gradient overlay on hover */}
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgGradient="linear(to-b, teal.400, transparent)"
      opacity={0}
      transition="opacity 0.3s ease-in-out"
      _hover={{ opacity: 0.1 }}
      zIndex={3}
    />
    
    {/* Content */}
    <Box position="relative" zIndex={2}>
      <Icon as={icon} w={12} h={12} mb={4} color="teal.400" />
      <Heading fontSize={{base:"20px",lg:"28px"}} mb={3} fontWeight="semibold" color={useColorModeValue('gray.800', 'white')}>
        {title}
      </Heading>
      <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.300')}>
        {content}
      </Text>
    </Box>
  </Box>
);

export default FeatureCard;