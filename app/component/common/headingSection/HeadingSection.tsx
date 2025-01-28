'use client';

import { Heading, Text, VStack } from "@chakra-ui/react";

interface HeadingSectionProps {
  title: string;
  subtitle: string;
  titleSize?: string;
  subtitleSize?: string;
  titleColor?: string;
  subtitleColor?: string;
  spacing?: number;
  textAlign?: "center" | "left" | "right";
  maxWidth?: string;
  fontWeightTitle?: string;
  fontWeightSubtitle?: string;
  paddingX?: number;
  paddingY?: number;
}

const HeadingSection = ({
  title,
  subtitle,
  titleSize = "xl",
  subtitleSize = "md",
  titleColor = "teal.600",
  subtitleColor = "gray.600",
  spacing = 2,
  textAlign = "center",
  maxWidth = "700px",
  fontWeightTitle = "semibold",
  fontWeightSubtitle = "light",
  paddingX = 4,
  paddingY = 5,
}: HeadingSectionProps) => {
  return (
    <VStack
      align={textAlign}
      spacing={spacing}
      w="full"
      maxW={maxWidth}
      mx="auto"
      px={paddingX}
      py={paddingY}
    >
      <Heading
        as="h2"
        size={titleSize}
        color={titleColor}
        fontWeight={fontWeightTitle}
        textAlign={textAlign}
        lineHeight="1.3"
        mb={1}
      >
        {title}
      </Heading>
      <Text
        fontSize={subtitleSize}
        color={subtitleColor}
        lineHeight="1.4"
        textAlign={textAlign}
        fontWeight={fontWeightSubtitle}
        opacity={0.8}
        maxW="85%"
      >
        {subtitle}
      </Text>
    </VStack>
  );
};

export default HeadingSection;
