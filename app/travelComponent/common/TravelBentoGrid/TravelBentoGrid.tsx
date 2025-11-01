import {
  Box,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpointValue,
  useDisclosure,
  IconButton,
  Flex,
  // keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import CustomSubHeading from "../CustomSubHeading/CustomSubHeading";
import { travelImages } from "./constant";
import { keyframes } from "@emotion/react";

export default function TravelBentoGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    onOpen();
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % travelImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(travelImages[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentIndex - 1 + travelImages.length) % travelImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(travelImages[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const gridColumns = useBreakpointValue({ base: 2, md: 3, lg: 3 });
  const gridRows = useBreakpointValue({ base: "auto", md: "520px" });

  // Animation for modal entrance
  const scaleUp = keyframes`
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  `;

  const animation = prefersReducedMotion ? undefined : `${scaleUp} 0.3s ease-out`;

  return (
    <Box
      p={{ base: 2, md: 5 }}
      maxW={{ base: "95%", md: "70%" }}
      mx="auto"
      my={{ base: "40px", lg: "60px" }}
    >
      <CustomSubHeading highlightText="Our World">
        Wander Through
      </CustomSubHeading>

      <Text fontSize={'md'} maxW={'90%'} mx={'auto'} color={'gray.500'} mb={4} textAlign={'center'}>
        Explore diverse destinations for every traveler. From serene beaches to vibrant cities and thrilling adventures, find your next unforgettable journey here.
      </Text>
      
      <Grid
        templateColumns={`repeat(${gridColumns}, 1fr)`}
        gap={{ base: 2, lg: 3 }}
        h={gridRows}
        mt={8}
      >
        {travelImages.map((img, index) => (
          <GridItem
            key={index}
            colSpan={{ base: 1, md: img.span[0] }}
            rowSpan={{ base: 1, md: img.span[1] }}
            position="relative"
            rounded="10px"
            overflow="hidden"
            cursor="pointer"
            transition="transform 0.3s, filter 0.3s"
            _hover={{ 
              transform: "scale(1.03)",
              filter: "brightness(1.1)"
            }}
            onClick={() => handleImageClick(img, index)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              objectFit="cover"
              rounded="10px"
              w="100%"
              h="100%"
            />
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              bgGradient="linear(to-t, rgba(0, 0, 0, 0.7), transparent)"
              color="white"
              p={2}
              textAlign="center"
            >
              <Text fontSize={{base:"sm",lg:"md"}} fontWeight="bold">
                {img.alt}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        motionPreset="scale"
        isCentered
      >
        <ModalOverlay 
          bg="blackAlpha.800" 
          backdropFilter="blur(10px)"
        />
        <ModalContent 
          bg="transparent" 
          boxShadow="none" 
          maxW="100vw"
          maxH="100vh"
          animation={animation}
        >
          <ModalCloseButton 
            zIndex="10" 
            color="white" 
            bg="blackAlpha.600"
            _hover={{ bg: "blackAlpha.800" }}
            position="fixed"
            top="4"
            right="4"
            size="lg"
          />
          
          <ModalBody 
            p={0} 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            onClick={onClose}
          >
            {selectedImage && (
              <Box 
                position="relative" 
                w="100%" 
                h="100%" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  objectFit="contain"
                  maxW="100%"
                  maxH="100%"
                  rounded="md"
                  fallbackSrc="https://via.placeholder.com/800x600?text=Image+Loading"
                />
                
                {/* Navigation Arrows */}
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon boxSize={8} />}
                  position="fixed"
                  left={{ base: 2, md: 10 }}
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={goToPrevious}
                  bg="blackAlpha.600"
                  color="white"
                  _hover={{ bg: "blackAlpha.800" }}
                  size="lg"
                  display={{ base: 'none', md: 'flex' }}
                />
                
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon boxSize={8} />}
                  position="fixed"
                  right={{ base: 2, md: 10 }}
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={goToNext}
                  bg="blackAlpha.600"
                  color="white"
                  _hover={{ bg: "blackAlpha.800" }}
                  size="lg"
                  display={{ base: 'none', md: 'flex' }}
                />
                
                {/* Image Info */}
                <Box
                  position="fixed"
                  bottom="0"
                  left="0"
                  right="0"
                  bgGradient="linear(to-t, blackAlpha.800, transparent)"
                  color="white"
                  p={4}
                  textAlign="center"
                >
                  <Text fontSize="xl" fontWeight="bold">
                    {selectedImage.alt}
                  </Text>
                  {selectedImage.description && (
                    <Text fontSize="md" mt={2} maxW="2xl" mx="auto">
                      {selectedImage.description}
                    </Text>
                  )}
                </Box>
                
                {/* Mobile navigation dots */}
                <Flex
                  position="fixed"
                  bottom="20px"
                  left="0"
                  right="0"
                  justify="center"
                  gap={2}
                  display={{ base: 'flex', md: 'none' }}
                >
                  {travelImages.map((_, idx) => (
                    <Box
                      key={idx}
                      w="10px"
                      h="10px"
                      rounded="full"
                      bg={currentIndex === idx ? "white" : "whiteAlpha.500"}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setSelectedImage(travelImages[idx]);
                      }}
                      cursor="pointer"
                    />
                  ))}
                </Flex>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}