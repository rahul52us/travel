import {
  Box,
  useBreakpointValue
} from "@chakra-ui/react";
import CustomCarousel from "../../../component/common/CustomCarousal/CustomCarousal";
import CustomSubHeading from "../CustomSubHeading/CustomSubHeading";
import SightseeingCard from "./element/SightseeingCard";

const data = [
  {
    name: "Eiffel Tower",
    type: "Monument",
    description:
      "Visit the iconic Eiffel Tower and enjoy breathtaking views of Paris.",
    price: 2500,
    hours: 2,
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
  },
  {
    name: "Grand Canyon",
    type: "Nature",
    description:
      "Explore the majestic Grand Canyon with guided tours and more.",
    price: 4000,
    hours: 5,
    location: "Arizona, USA",
    image: "https://example.com/grand-canyon.jpg",
  },
  {
    name: "Grand Canyon",
    type: "Nature",
    description:
      "Explore the majestic Grand Canyon with guided tours and more.",
    price: 4000,
    hours: 5,
    location: "Arizona, USA",
    image: "https://example.com/grand-canyon.jpg",
  },
  {
    name: "Grand Canyon",
    type: "Nature",
    description:
      "Explore the majestic Grand Canyon with guided tours and more.",
    price: 4000,
    hours: 5,
    location: "Arizona, USA",
    image: "https://example.com/grand-canyon.jpg",
  },
];

const SightseeingList = () => {
  const noOfSlides = useBreakpointValue({ base: 1, md: 2, lg: 4 });
  return (
    <Box my={"5rem"} maxW={"90%"} mx={"auto"}>
      <CustomSubHeading highlightText="Sightseeing Adventures">
        Unmissable Views
      </CustomSubHeading>
      <Box mt={12}>
        <CustomCarousel autoplay={true} slidesToShow={noOfSlides}>
          {data.map((place, index) => (
            <SightseeingCard key={index} place={place} />
          ))}
        </CustomCarousel>
      </Box>
    </Box>
  );
};

export default SightseeingList;
