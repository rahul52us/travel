import {
    Box, Grid, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent,
    ModalHeader, ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";

const travelImages = [
  {
    src: "https://img.freepik.com/free-photo/indian-city-buildings-scene_23-2151823127.jpg?t=st=1737828010~exp=1737831610~hmac=79342b6096b0a25d7f6cd11a62bcd0f27c1041d9a7bc950b5ba889f80754fe17&w=1380",
    alt: "Beach Scene",
    span: [1, 2],
  },
  {
    src: "https://img.freepik.com/free-photo/man-sitting-rock-yosemite-national-park-sentinel-dome-yosemite-usa_181624-40029.jpg?t=st=1737827690~exp=1737831290~hmac=d40ce6e3c0430255cbda64b76242b4f5aa7d5e0b255436e745316fbaf146950c&w=1060",
    alt: "Mountain Landscape",
    span: [1, 1],
  },
  {
    src: "https://img.freepik.com/free-photo/pyramid-giza_422131-91.jpg?t=st=1737828258~exp=1737831858~hmac=ece4ed9a1cf8018aee47d858b2e7c18f62ba645c3fd18a38997c5d776908742f&w=1060",
    alt: "Mountain Landscape",
    span: [1, 1],
  },
  {
    src: "https://img.freepik.com/free-photo/woman-bikini-standing-viewpoint-nang-yuan-island-thailand_335224-1092.jpg?t=st=1737827643~exp=1737831243~hmac=f62c188d1f3ceed5f0bc4b350bcea9edf84cde0de877377b564d0aa90f1c9d96&w=1060",
    alt: "City Street",
    span: [1, 2],
  },
  {
    src: "https://img.freepik.com/free-photo/beautiful-wide-shot-eiffel-tower-paris-surrounded-by-water-with-ships-colorful-sky_181624-5118.jpg?t=st=1737828115~exp=1737831715~hmac=d7c33aae67c6af179ea34218e4be7e730a64f63f54ee4b90f7463188e632eee1&w=1060",
    alt: "Forest Trail",
    span: [1, 1],
  },
  {
    src: "https://img.freepik.com/free-photo/landscape-with-sunset-yixing_1127-4152.jpg?t=st=1737828051~exp=1737831651~hmac=51fd93078c542a33d7aaf3aedd657eb31fa316511dd81d9f3ca9c48f760c8023&w=1060",
    alt: "Forest Trail",
    span: [1, 1],
  },
  {
    src: "https://img.freepik.com/free-photo/water-villas-calm-sea-tropical-maldives-island_1232-4480.jpg?t=st=1737827587~exp=1737831187~hmac=88f3107e6cd8e71dc00678ddeca033228ba5d0ab21244c19a8d5fa96cd4acee1&w=996",
    alt: "Desert Sunset",
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

  return (
    <Box p={5} maxW={"80%"} mx={"auto"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={3} h="600px">
        {travelImages.map((img, index) => (
          <GridItem
            key={index}
            colSpan={img.span[0]}
            rowSpan={img.span[1]}
            position="relative"
            overflow="hidden"
            cursor="pointer"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => handleImageClick(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              objectFit="cover"
              rounded={"10px"}
              w="100%"
              h="100%"
            />
          </GridItem>
        ))}
      </Grid>

      {selectedImage && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedImage.alt}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                objectFit="contain"
                w="100%"
                h="500px"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
