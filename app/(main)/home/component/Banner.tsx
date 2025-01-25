'use client';

import { Box, Heading, Text, Divider, Flex } from '@chakra-ui/react';
import React from 'react';
import OverlayCard from '../../../component/common/cards/OverlayCard/OverlayCard';

interface CardData {
  imageSrc: string;
  title: string;
  description?: string;
}

interface BannerProps {
  data: CardData[];
  heading?: string;
}

const Banner: React.FC<BannerProps> = ({ data, heading = 'Featured Cards' }) => {
  return (
    <Box p={[2, 2, 2]} bg="gray.50" mx="auto" maxW="95%">
      <Box textAlign="center" mb={6}>
        <Heading as="h2" size="xl" color="teal.600" fontWeight="bold" letterSpacing="wider">
          {heading}
        </Heading>
        <Text color="gray.500" mt={2} fontSize="lg">
          Explore our collection of handpicked cards curated just for you!
        </Text>
        <Divider mt={4} borderColor="teal.500" borderWidth={2} w="80px" mx="auto" />
      </Box>

      <Flex
        wrap="wrap"
        justify="center"
        align="center"
        gap={[4, 6]}
      >
        {data.map((card, index) => (
          <Box
            key={index}
            w={{ base: "100%", sm: "50%", md: "33.33%", lg: "18%" }}
            p={2}
          >
            <OverlayCard
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Banner;
