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
    src: "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823127.jpg?w=1380",
    alt: "Beach Scene",
    span: [1, 2],
  },
  {
    src: "https://img.freepik.com/free-photo/man-sitting-rock-yosemite-national-park_181624-40029.jpg?w=1060",
    alt: "Mountain Landscape",
    span: [1, 1],
  },
  {
    src: "https://img.freepik.com/free-photo/pyramid-giza_422131-91.jpg?w=1060",
    alt: "Pyramid of Giza",
    span: [1, 1],
  },
  {
    src: "https://img.freepik.com/free-photo/woman-bikini-standing-viewpoint_335224-1092.jpg?w=1060",
    alt: "Island View",
    span: [1, 2],
  },
  {
    src: "https://img.freepik.com/free-photo/eiffel-tower-paris_181624-5118.jpg?w=1060",
    alt: "Eiffel Tower",
    span: [1, 1],
  },
  {
    src: "https://img.freepik.com/free-photo/sunset-yixing_1127-4152.jpg?w=1060",
    alt: "Sunset Landscape",
    span: [1, 1],
  },
  {
    src: "https://img.freepik.com/free-photo/water-villas-tropical-maldives-island_1232-4480.jpg?w=996",
    alt: "Maldives Villas",
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
    <Box p={{ base: 2, md: 5 }} maxW={{ base: "95%", md: "70%" }} mx="auto" my={{base:'40px',lg:'60px'}}>
      <CustomSubHeading highlightText="Our World">Wander Through</CustomSubHeading>
      <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={{base:2,lg:3}} h={gridRows} mt={8}>
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
              color="white"
              p={2}
              textAlign="center"
            >
              <Text fontSize="md" fontWeight="bold">
                {img.alt}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {selectedImage && (
        <Modal isOpen={isOpen} onClose={onClose} size={{ base: "md", md: "xl" }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader pb={0}>{selectedImage.alt}</ModalHeader>
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