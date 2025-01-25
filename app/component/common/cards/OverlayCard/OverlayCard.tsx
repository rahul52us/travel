'use client';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

interface OverlayCardProps {
  imageSrc: string; // Image URL
  title: string; // Overlay Title
  description?: string; // Optional description
}

const OverlayCard: React.FC<OverlayCardProps> = ({ imageSrc, title, description }) => {
  return (
    <Box
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      boxShadow="lg"
      _hover={{ transform: 'scale(1.03)', transition: 'all 0.3s ease-in-out' }}
      cursor="pointer"
    >
      {/* Background Image */}
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="250px" />

      {/* Overlay Text */}
      <Flex
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)"
        flexDirection="column"
        justify="flex-end"
        align="center"
        color="white"
        textAlign="center"
        p={4}
      >
        <Text
          fontSize="xl"
          fontWeight="extrabold"
          mb={1}
          textShadow="0px 4px 6px rgba(0, 0, 0, 0.4)"
          letterSpacing="wide"
        >
          {title}
        </Text>
        {description && (
          <Text
            fontSize="md"
            mb={2}
            textShadow="0px 3px 4px rgba(0, 0, 0, 0.3)" // Subtle shadow for description
            lineHeight="1.6"
            fontWeight="medium"
          >
            {description}
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default OverlayCard;
