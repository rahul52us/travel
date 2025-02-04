import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Discover Hidden Wonders',
    subtitle: 'Explore destinations off the beaten path',
    text: 'Uncover secret spots known only to locals and seasoned travelers'
  },
  {
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Live New Experiences',
    subtitle: 'Create stories worth remembering',
    text: 'From mountain peaks to underwater adventures - find your thrill'
  },
  {
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Taste World Flavors',
    subtitle: 'Journey through global cuisines',
    text: 'Savor authentic dishes in their places of origin'
  }
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setActiveIndex(prev => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 'right' : 'left');
    setActiveIndex(newIndex);
  };

  return (
    <Box position="relative" h="90vh" w="100%" overflow="hidden">
      <AnimatePresence initial={false} custom={direction}>
        <MotionBox
          key={activeIndex}
          position="absolute"
          w="100%"
          h="100%"
          filter="brightness(0.4)"
          bg={`url('${slides[activeIndex].image}')`}
          bgSize="cover"
          bgPosition="center"
          initial={{ x: direction === 'right' ? '100%' : '-100%', opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 'right' ? '-100%' : '100%', opacity: 0.5 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
      </AnimatePresence>

      {/* Content Overlay */}
      <Flex
        position="absolute"
        w="100%"
        h="100%"
        align="center"
        justify="center"
        px={{ base: 4, md: 12 }}
        py={16}
        color="white"
      >
        <AnimatePresence mode="wait" initial={false}>
          <MotionFlex
            key={activeIndex}
            direction="column"
            align="start"
            maxW="container.xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              mb={6}
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
              lineHeight="1.2"
              textShadow={'2px 2px 4px rgba(0, 0, 0, 0.2)'}
            >
              {slides[activeIndex].title}
            </Heading>

            <Text fontSize={{ base: 'xl', md: '3xl' }} mb={4} fontWeight="semibold" textShadow={'2px 2px 4px rgba(0, 0, 0, 0.5)'}>
              {slides[activeIndex].subtitle}
            </Text>

            <Text fontSize={{ base: 'md', md: 'lg' }} mb={8} maxW="600px" textShadow={'2px 2px 4px rgba(0, 0, 0, 0.5)'}>
              {slides[activeIndex].text}
            </Text>

            <Button
              colorScheme="teal"
              size="lg"
              px={8}
              fontSize="lg"
              bg={'transparent'}
              rounded={'full'}
              border={'1px groove white'}
              _hover={{ transform: 'scale(1.05)' }}
              backdropFilter={'auto'}
              backdropBlur={'8px'}
              _focus={{ boxShadow: 'outline' }}
              backdropBrightness={'0.7'}
              transition="all 0.2s"
            >
              Start Journey
            </Button>
          </MotionFlex>
        </AnimatePresence>
      </Flex>

      {/* Progress Dots */}
      <Flex
        position="absolute"
        bottom="8"
        left="50%"
        transform="translateX(-50%)"
        gap="4"
        zIndex="2"
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            as="button"
            w="3"
            h="3"
            borderRadius="full"
            bg={index === activeIndex ? 'teal.300' : 'whiteAlpha.600'}
            _hover={{ bg: 'teal.200' }}
            onClick={() => handleSlideChange(index)}
            transition="all 0.3s"
          />
        ))}
      </Flex>

      {/* Progress Bar */}
      
      {/* <MotionBox
        position="absolute"
        bottom="0"
        left="0"
        h="3px"
        bg="teal.300"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 8, ease: 'linear' }}
        key={activeIndex}
      /> */}
    </Box>
  );
};

export default HeroSection;