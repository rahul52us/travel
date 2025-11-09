import { Box, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import CustomCarousel from "../../component/common/CustomCarousal/CustomCarousal";
import CustomSubHeading from "../common/CustomSubHeading/CustomSubHeading";

const europeanPlaces = [
  {
    country: "France",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "The Eiffel Tower, Paris – Iconic symbol of love and architecture.",
  },
  {
    country: "Italy",
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "The Colosseum, Rome – A glimpse into ancient Roman history.",
  },
  {
    country: "Spain",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Sagrada Familia, Barcelona – Masterpiece of Gaudí's architecture.",
  },
  {
    country: "Germany",
    image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "Neuschwanstein Castle – The fairy-tale castle of Bavaria.",
  },
  {
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: "The Matterhorn, Zermatt – Iconic peak of the Swiss Alps.",
  },
//   {
//     country: "Netherlands",
//     image: "https://images.unsplash.com/photo-1504893524553-b7d0a5f8b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
//     description: "Amsterdam Canals – Picturesque waterways of the city.",
//   },
];

const ExploreEuropeCarousel = () => {
  const showArrows = useBreakpointValue({base:false,lg:true})

  return (
    <Box py="10" bg="brand.200" position="relative" maxW={'90%'} mx={'auto'} mt={{base:6,md:12}}>
      {/* <Heading as="h2" size="xl" textAlign="center" mb="8" color="teal.600">
        Explore Europe
      </Heading> */}
      <CustomSubHeading highlightText="You" my={{base:2,md:3}}>
      Europe Awaits 
      </CustomSubHeading>
        <Text textAlign={'center'} color={'gray.500'} mb={{base:2,lg:6}}>
            Discover the Magic of Europe: A Journey Through Timeless Beauty and Diverse Cultures
        </Text>
        <CustomCarousel slidesToShow={4} showArrows={showArrows} showDots={true}>
        {europeanPlaces.map((place, index) => (
            <Box
              key={index}
              flex="0 0 280px"
              borderRadius="lg"
              overflow="hidden"
              position="relative"
              boxShadow="md"
            >
              <Image
                src={place.image}
                alt={place.country}
                objectFit="cover"
                height="180px"
                width="100%"
              />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)"
                p="4"
                color="brand.200"
              >
                <Heading as="h3" size="md" mb="1">
                  {place.country}
                </Heading>
                <Text fontSize="sm" lineHeight={"20px"}>{place.description}</Text>
              </Box>
            </Box>
          ))}
        </CustomCarousel>
    </Box>
  );
};

export default ExploreEuropeCarousel;