'use client';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

interface OverlayCardProps {
  imageSrc: string;
  title: string;
  description?: string;
}

const OverlayCard: React.FC<OverlayCardProps> = ({ imageSrc, title, description }) => {
  return (
    <Box
      maxW="100%"  // Ensuring no extra width is applied
      borderRadius="md"
      overflow="hidden"
      position="relative"
      boxShadow="lg"
      _hover={{
        transform: 'scale(1.05)',
        transition: 'all 0.3s ease-in-out',
        boxShadow: 'xl',
      }}
      cursor="pointer"
      mx="auto" // Center the card horizontally within its parent
    >
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />

      <Flex
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)"
        flexDirection="column"
        justify="flex-end"
        align="center"
        color="white"
        textAlign="center"
        p={4}
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          mb={2}
          textShadow="0px 4px 8px rgba(0, 0, 0, 0.6)"
          letterSpacing="wide"
          lineHeight="1.4"
        >
          {title}
        </Text>
        {description && (
          <Text
            fontSize="sm"
            mb={4}
            textShadow="0px 3px 6px rgba(0, 0, 0, 0.4)"
            lineHeight="1.6"
            fontWeight="medium"
            maxW="90%"
            mx="auto"
          >
            {description}
          </Text>
        )}
      </Flex>
    </Box>
  );
};

export default OverlayCard;
