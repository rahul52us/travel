"use client";
import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import OverlayCard from "../../../component/common/cards/OverlayCard/OverlayCard";
import HeadingSection from "../../../component/common/headingSection/HeadingSection";

interface CardData {
  imageSrc: string;
  title: string;
  description?: string;
}

interface BannerProps {
  data: CardData[];
  heading?: string;
}

const Banner: React.FC<BannerProps> = ({
  data,
  heading = "Featured Cards",
}) => {
  return (
    <Box p={[2, 2, 2]} bg="gray.50" mx="auto" maxW="95%">
      <Box textAlign="center">
        <HeadingSection
          title={heading}
          subtitle="Explore our collection of handpicked cards curated just for you!"
        />
      </Box>

      <Flex wrap="wrap" justify="center" align="center" gap={[4, 6]}>
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