import { Box, Text, VStack } from "@chakra-ui/react";
import PageHero from "../../../component/common/CommonHeroSection/CommonHeroSection";
import SightSeeingCard2 from "./SightseeingCard2";
import { sightseeingData } from "./utils/sightseeingData";

// Dummy data for demonstration
const dummyTour = [
  {
    title: "Keukenhof and Zaanse Schans Windmills Day Trip from Amsterdam",
    duration: "9 hours",
    description:
      "Make the most of your time in the Netherlands by seeing Keukenhof botanical garden and Zaanse Schans in one day with stress-free transport from Amsterdam included. This day trip from Amsterdam takes you to the garden in the morning to see its impressive flower fields on a Lisse guided tour. Afterward, it’s on to Zaanse Schans to see its windmills and clog museum before enjoying a cheese tasting at a farm. Easy drop-off in Amsterdam concludes your experience.",
    price: "€89.99",
    maxGroupSize: 15,
   
    images: [
      "https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?w=1060",
      "https://img.freepik.com/free-photo/dark-clouds-canal-amsterdam_1304-5376.jpg?ga=GA1.1.1625681573.1739726311&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/bicycles-street-amsterdam_1321-1775.jpg?ga=GA1.1.1625681573.1739726311&semt=ais_hybrid",
    ],
  },
  {
    title: "Keukenhof and Zaanse Schans Windmills Day Trip from Amsterdam",
    duration: "9 hours",
    description:
      "Make the most of your time in the Netherlands by seeing Keukenhof botanical garden and Zaanse Schans in one day with stress-free transport from Amsterdam included. This day trip from Amsterdam takes you to the garden in the morning to see its impressive flower fields on a Lisse guided tour. Afterward, it’s on to Zaanse Schans to see its windmills and clog museum before enjoying a cheese tasting at a farm. Easy drop-off in Amsterdam concludes your experience.",
    price: "€89.99",
    maxGroupSize: 15,
    includes: [
      "Transportation",
      "Guided Tour",
      "Cheese Tasting",
      "Entrance Fees",
    ],
    images: [
      "https://img.freepik.com/premium-photo/trees-growing-forest_1048944-30368869.jpg?w=1060",
      "https://img.freepik.com/free-photo/dark-clouds-canal-amsterdam_1304-5376.jpg?ga=GA1.1.1625681573.1739726311&semt=ais_hybrid",
      "https://img.freepik.com/free-photo/bicycles-street-amsterdam_1321-1775.jpg?ga=GA1.1.1625681573.1739726311&semt=ais_hybrid",
    ],
  },
];

// Usage in your component
const SightSeeingPage = () => {
  return (
    <Box>
      <PageHero
        title="Explore the World's Wonders"
        lineColor="teal.300"
        subtitle={
          <>
            Discover breathtaking destinations, iconic landmarks, and hidden
            gems with our curated
            <Text as="span" color="teal.200" fontWeight="semibold" mx={1.5}>
              sightseeing experiences
            </Text>
            that bring your travel dreams to life.
          </>
        }
        bgImage="url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        // height="450px"
        // overlayColor="rgba(0, 0, 0, 0.4)"
        // titleColor="white"
        // subtitleColor="gray.100"
        // align="center"
      />
      <VStack
        spacing={8}
        align="stretch"
        maxW={{lg:"90%"}}
        mx="auto"
        py={8}
        px={{ base: 4, md: 8 }}
      >
        {sightseeingData.map((tour, index) => (
          <SightSeeingCard2 key={index} tour={tour} />
        ))}
      </VStack>
    </Box>
  );
};

export default SightSeeingPage;
