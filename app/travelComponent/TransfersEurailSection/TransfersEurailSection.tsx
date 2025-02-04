"use client";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import CustomCarousel from "../../component/common/CustomCarousal/CustomCarousal";
import CustomSubHeading from "../common/CustomSubHeading/CustomSubHeading";
import TransferCard from "../common/TransferCard/TransferCard";

const transferData = [
  {
    image: "https://via.placeholder.com/300",
    title: "Amsterdam Airport Transfer",
    description:
      "After your flight has landed and you have collected your baggage, you proceed to the Arrival Hall, at level 0. You will meet the driver at Schiphol Plaza, the meeting point of the airport. He will be holding a sign with your name.",
    price: "50",
    buttonText: "Book Now",
    category: "Airport Transfer",
  },
  {
    image: "https://www.cosmictravels.in/uploads/transfers/rome8.jpg",
    title: "Amsterdam to Paris Eurail Ticket",
    description:
      "The train journey from Amsterdam to Paris is a scenic and convenient way to travel between these two iconic European cities. As you depart from Amsterdam, you'll pass through picturesque Dutch countryside before crossing the border into Belgium.",
    price: "120",
    buttonText: "Book Ticket",
    category: "Eurail Ticket",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Milan Hop on Hop Off Tour",
    description:
      "Get on one of the open-air double-decker buses for a hop-on hop-off tour of Milan. There are three bus routes to choose from, with more than 30 combined stops between them, so you can find a stop close to where you are.",
    price: "25",
    buttonText: "Book Tour",
    category: "Hop on Hop off Tour",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Swiss Pass",
    description:
      "You can enjoy unlimited access by public train, bus, and boat to visit more than 90 cities, reach peaks of many mountains, and sail through beautiful lakes in Switzerland with the Swiss Travel Pass.",
    price: "200",
    buttonText: "Buy Pass",
    category: "Eurail Ticket",
  },
];

const TransfersEurailSection = () => {
  const noOfSlides = useBreakpointValue({ base: 1, md: 2, lg: 4 });

  return (
    <Box maxW={{ xl: "95%" }} mx={"auto"} my={"5rem"}>
      {/* <Grid templateColumns={'1fr 1fr 1fr 1fr'} gap={4}> */}
      <CustomSubHeading highlightText="Eurail">Transfers and</CustomSubHeading>
      <Box mt={8}>

      <CustomCarousel
        slidesToShow={noOfSlides}
        showArrows={false}
        autoplay={true}
      >
        {transferData.map((item, index) => (
          <TransferCard key={index} {...item} />
        ))}
      </CustomCarousel>
        </Box>
      {/* </Grid> */}
    </Box>
  );
};

export default TransfersEurailSection;
