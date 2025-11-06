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
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import CustomSubHeading from "../CustomSubHeading/CustomSubHeading";

const travelImages = [
  {
    src: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwYmVhY2h8ZW58MHwwfDB8fHwy",
    alt: "Tropical Paradise Beach",
    span: [1, 2],
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW58ZW58MHwwfDB8fHwy",
    alt: "Majestic Mountain Peaks",
    span: [1, 1],
  },
  {
    src: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9zY293fGVufDB8MHwwfHx8Mg%3D%3D",
    alt: "Historic Urban Exploration",
    span: [1, 1],
  },
  {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW4lMjB0cmFkaXRpb258ZW58MHx8MHx8fDI%3D",
    alt: "Timeless Cultural Traditions",
    span: [1, 2],
  },
  {
    src: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvJTIwbmlnaHR8ZW58MHwwfDB8fHwy",
    alt: "City Lights and Nightlife",
    span: [1, 1],
  },
  {
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW8lMjBzdW5zZXR8ZW58MHwwfDB8fHwy",
    alt: "Golden Sunset Serenity",
    span: [1, 1],
  },
  {
    src: "https://images.unsplash.com/photo-1520276862420-fafc37770ce4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWR2ZW50dXJlJTIwc3BvcnRzfGVufDB8MHwwfHx8Mg%3D%3D",
    alt: "Adrenaline-Pumping Adventures",
    span: [1, 1],
  },
];

export default function TravelBentoGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  const gridColumns = useBreakpointValue({ base: 2, md: 3, lg: 3 });
  const gridRows = useBreakpointValue({ base: "auto", md: "520px" });

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
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.03)" }}
            onClick={() => handleImageClick(img)}
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
              color="brand.200"
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

      {selectedImage && (
        <Modal
          isOpen={isOpen}
          isCentered
          onClose={onClose}
          size={{ base: "md", md: "xl" }}
        >
          <ModalOverlay />
          <ModalContent rounded={'2xl'}>
            <ModalHeader color={'brand.100'} pb={0}>{selectedImage.alt}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                objectFit="contain"
                w="100%"
                maxH={{ base: "300px", md: "500px" }}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
