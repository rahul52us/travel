import { Flex, useColorModeValue } from "@chakra-ui/react";
import SightseeingCard from "./element/SightseeingCard";

const data = [
    {
      name: "Eiffel Tower",
      type: "Monument",
      description: "Visit the iconic Eiffel Tower and enjoy breathtaking views of Paris.",
      price: 2500,
      hours: 2,
      location: "Paris, France",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    },
    {
      name: "Grand Canyon",
      type: "Nature",
      description: "Explore the majestic Grand Canyon with guided tours and more.",
      price: 4000,
      hours: 5,
      location: "Arizona, USA",
      image: "https://example.com/grand-canyon.jpg",
    },
    {
      name: "Grand Canyon",
      type: "Nature",
      description: "Explore the majestic Grand Canyon with guided tours and more.",
      price: 4000,
      hours: 5,
      location: "Arizona, USA",
      image: "https://example.com/grand-canyon.jpg",
    },
    {
      name: "Grand Canyon",
      type: "Nature",
      description: "Explore the majestic Grand Canyon with guided tours and more.",
      price: 4000,
      hours: 5,
      location: "Arizona, USA",
      image: "https://example.com/grand-canyon.jpg",
    },
  ];

const SightseeingList = () => {
    return (
      <Flex
        wrap="wrap"
        justify="center"
        gap={6}
        // py={6}
        // px={4}
        bg={useColorModeValue("gray.50", "gray.900")}
      >
        {data.map((place,index) => (
          <SightseeingCard key={index} place={place} />
        ))}
      </Flex>
    );
  };
  
  export default SightseeingList;