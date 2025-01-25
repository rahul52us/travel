'use client';

import { Box, SimpleGrid, Heading, Text, Divider } from '@chakra-ui/react';
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
    <Box p={[4, 6, 8]} bg="gray.50">
      <Box textAlign="center" mb={6}>
        <Heading as="h2" size="xl" color="teal.600" fontWeight="bold" letterSpacing="wider">
          {heading}
        </Heading>
        <Text color="gray.500" mt={2} fontSize="lg">
          Explore our collection of handpicked cards curated just for you!
        </Text>
        <Divider mt={4} borderColor="teal.500" borderWidth={2} w="80px" mx="auto" />
      </Box>

      <SimpleGrid
        columns={[1, 2, 3, 4]}
        spacing={[4, 6]}
      >
        {data.map((card, index) => (
          <OverlayCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Banner;
