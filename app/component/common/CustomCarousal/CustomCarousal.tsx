import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
// import { Box, IconButton } from '@/components/ui/card';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    aria-label="Previous slide"
    icon={<ChevronLeftIcon />}
    onClick={onClick}
    position="absolute"
    left={4}
    top="50%"
    transform="translateY(-50%)"
    zIndex={2}
    rounded="full"
    bg="white"
    shadow="lg"
    _hover={{ bg: "gray-100" }}
    className="opacity-70 hover:opacity-100"
  />
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    aria-label="Next slide"
    icon={<ChevronRightIcon />}
    onClick={onClick}
    position="absolute"
    right={4}
    top="50%"
    transform="translateY(-50%)"
    zIndex={2}
    rounded="full"
    bg="white"
    shadow="lg"
    _hover={{ bg: "gray-100" }}
    className="opacity-70 hover:opacity-100"
  />
);

const CustomCarousel = ({
  children,
  slidesToShow = 3,
  slidesToScroll = 1,
  autoplay = false,
  autoplaySpeed = 3000,
  showArrows = true,
  ...props
}) => {
  const settings = {
    dots: false,
    infinite: true,
    showArrows: false,
    speed: 500,
    slidesToShow,

    slidesToScroll,
    autoplay,
    autoplaySpeed,
    prevArrow: showArrows ? <PrevArrow /> : null,
    nextArrow: showArrows ? <NextArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 3),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...props,
  };

  return (
    <Box position="relative" width="full" p={{ base: 4, md: 4 }}>
      <Slider {...settings}>
        {React.Children.map(children, (child) => (
          <Box px={2}>{child}</Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CustomCarousel;
