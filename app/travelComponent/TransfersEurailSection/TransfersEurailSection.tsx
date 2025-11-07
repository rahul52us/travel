"use client";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import CustomCarousel from "../../component/common/CustomCarousal/CustomCarousal";
import CustomSubHeading from "../common/CustomSubHeading/CustomSubHeading";
import TransferCard from "../common/TransferCard/TransferCard";

// const transferData = [
//   {
//     image: "https://via.placeholder.com/300",
//     title: "Amsterdam Airport Transfer",
//     description:
//       "After your flight has landed and you have collected your baggage, you proceed to the Arrival Hall, at level 0. You will meet the driver at Schiphol Plaza, the meeting point of the airport. He will be holding a sign with your name.",
//     price: "50",
//     buttonText: "Book Now",
//     category: "Airport Transfer",
//   },
//   {
//     image: "https://www.cosmictravels.in/uploads/transfers/rome8.jpg",
//     title: "Amsterdam to Paris Eurail Ticket",
//     description:
//       "The train journey from Amsterdam to Paris is a scenic and convenient way to travel between these two iconic European cities. As you depart from Amsterdam, you'll pass through picturesque Dutch countryside before crossing the border into Belgium.",
//     price: "120",
//     buttonText: "Book Ticket",
//     category: "Eurail Ticket",
//   },
//   {
//     image: "https://via.placeholder.com/300",
//     title: "Milan Hop on Hop Off Tour",
//     description:
//       "Get on one of the open-air double-decker buses for a hop-on hop-off tour of Milan. There are three bus routes to choose from, with more than 30 combined stops between them, so you can find a stop close to where you are.",
//     price: "25",
//     buttonText: "Book Tour",
//     category: "Hop on Hop off Tour",
//   },
//   {
//     image: "https://via.placeholder.com/300",
//     title: "Swiss Pass",
//     description:
//       "You can enjoy unlimited access by public train, bus, and boat to visit more than 90 cities, reach peaks of many mountains, and sail through beautiful lakes in Switzerland with the Swiss Travel Pass.",
//     price: "200",
//     buttonText: "Buy Pass",
//     category: "Eurail Ticket",
//   },
// ];

const transferData = [
  {
    image: "https://images.unsplash.com/photo-1685470883352-ba1ea87c937d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW1zdGVyZGFtJTIwYnVzfGVufDB8MHwwfHx8Mg%3D%3D",
    title: "Amsterdam Airport Transfer",
    description: "After your flight has landed and you have collected your baggage, you proceed to the Arrival Hall, at level 0. You will meet the driver at Schiphol Plaza, the meeting point of the airport. He will be holding a sign with your name. He will then escort you to the vehicle, and take you safely to your final destination.",
    price: "3,999/-",
    buttonText: "Book Now",
    category: "Airport Transfer",
  },
  {
    title: "Amsterdam Hop on Hop Off Tour",
    image: "https://images.unsplash.com/photo-1726391073721-47f62d7f702c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEFtc3RlcmRhbSUyMGJ1c3xlbnwwfDB8MHx8fDI%3D",
    description: "See Amsterdam at your own pace with a hop-on hop-off bus or boat tour, including the option to combine both onto one ticket. Select a 24- or 48-hour ticket with several stops around town, enhanced by optional sightseeing around Amsterdam’s postcard-perfect network of waterways on the canal cruise. Pass by the Anne Frank House, National Maritime Museum, Heineken Experience and eclectic neighborhoods like Jordaan and the historical Red Light District, where you can disembark to explore.",
    price: "2,699/-",
    buttonText: "Book Now",
    category: "Hop on Hop Off Tour",
  },
  {
    image: "https://images.unsplash.com/photo-1683051425721-6e4cb392dba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW1zdGVyZGFtJTIwdHJhaW58ZW58MHwwfDB8fHwy",
    title: "Amsterdam to Paris Eurail Ticket",
    description: "The train journey from Amsterdam to Paris is a scenic and convenient way to travel between these two iconic European cities. As you depart from Amsterdam, you'll pass through picturesque Dutch countryside before crossing the border into Belgium. Enjoy the comfort of high-speed trains as you zip through charming Belgian towns and lush countryside. Finally, as you approach Paris, you'll be treated to stunning views of the French countryside before arriving at the bustling Gare du Nord station in the heart of the City of Light. Sit back, relax, and enjoy the seamless journey from Amsterdam to Paris by train, a perfect way to experience the beauty and charm of both cities.",
    price: "14,499/-",
    buttonText: "Book Now",
    category: "Eurail Ticket",
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1728723283456-c39c5d62e12d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    title: "Paris Airport Transfer",
    description: "On the day of arrival, your driver will meet you at the airport after the customs with a name plate. Your driver will help you with your baggage. You shall be riding in a fully equipped vehicle as the chauffeur takes you directly to your hotel in Paris.",
    price: "4,999/-",
    buttonText: "Book Now",
    category: "Airport Transfer",
  },
  {
    image: "https://images.unsplash.com/photo-1709404811484-56b9d1291c95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhcmlzJTIwYnVzfGVufDB8MHwwfHx8Mg%3D%3D",
    title: "Paris Hop on Hop Off Tour",
    description: "Taking a hop-on hop-off bus tour around Paris gives you access to all the main attractions, an overview of the city and a means of getting around all in one convenient package. With an open-top, double-decker Big Bus, you get the added bonus of an excellent vantage point for panoramic views.",
    price: "3,999/-",
    buttonText: "Book Now",
    category: "Hop on Hop Off Tour",
  },
  {
    image: "https://images.unsplash.com/photo-1694715971640-f5711d661c41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFyaXMlMjB0cmFpbnxlbnwwfDB8MHx8fDI%3D",
    title: "Paris to Zurich Eurail Ticket",
    description: "The train journey from Paris to Zurich offers a delightful mix of scenic beauty and convenience. Departing from the bustling Gare de Lyon in Paris, you'll soon find yourself gliding through the picturesque French countryside, passing charming villages and rolling hills. As you cross the border into Switzerland, the landscape transforms into stunning alpine vistas, with snow-capped mountains and crystal-clear lakes greeting you along the way. The journey is made even more enjoyable by the comfort and efficiency of the high-speed trains, ensuring a smooth and relaxing travel experience.",
    price: "14,999/-",
    buttonText: "Book Now",
    category: "Eurail Ticket",
  },
  {
    image: "https://images.unsplash.com/photo-1574499307074-f9a427d03a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN3aXNzJTIwcmFpbHxlbnwwfDB8MHx8fDI%3D",
    title: "Swiss Pass",
    description: "You can enjoy unlimited access by public train, bus, and boat to visit more than 90 cities, reach peaks of many mountains, and sail through beautiful lakes in Switzerland with the Swiss Travel Pass. You also benefit from free entrance to 500+ museums, discounted city tours, and access to private and scenic trains with a pre-requisite seat reservation.",
    price: "22,999/-",
    buttonText: "Book Now",
    category: "Travel Pass",
  },
  {
    image: "https://images.unsplash.com/photo-1619959695171-8c302edab22e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fE1pbGFuJTIwVHJhaW58ZW58MHwwfDB8fHwy",
    title: "Zurich to Milan Train Ticket",
    description: "The train journey from Zurich to Milan is a delightful mix of Swiss and Italian landscapes, offering travelers a unique and scenic experience. Departing from Zurich Hauptbahnhof, you'll soon find yourself gliding through the picturesque Swiss countryside, with its rolling hills, pristine lakes, and charming villages. As you cross the border into Italy, the scenery changes to lush vineyards, historic towns, and stunning mountain views. The high-speed trains provide a comfortable and efficient ride, allowing you to relax and enjoy the journey.",
    price: "8,999/-",
    buttonText: "Book Now",
    category: "Train Ticket",
  },
  {
    image: "https://images.unsplash.com/photo-1609444074490-a4eb06f5ebf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWklMjB0YXhpfGVufDB8MHwwfHx8Mg%3D%3D",
    title: "Milan Airport Transfer",
    description: "Get to where you need to go with ease by booking a private transfer service in the Milan area. This service is available from any of the Milan-area airports, the central train station, or nearby cities such as Bellagio, Como, and Verona. Whether you’re arriving or departing, this service is available for your needs.",
    price: "10,999/-",
    buttonText: "Book Now",
    category: "Airport Transfer",
  },
  {
    image: "https://images.unsplash.com/photo-1730346055097-e42e65c69dd8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1pbGFuJTIwYnVzfGVufDB8MHwwfHx8Mg%3D%3D",
    title: "Milan Hop on Hop Off Tour",
    description: "Get on one of the open-air double-decker buses for a hop-on hop-off tour of Milan. There are three bus routes to choose from, with more than 30 combined stops between them, so you can find a stop close to where you are and where you want to go.",
    price: "2,499/-",
    buttonText: "Book Now",
    category: "Hop on Hop Off Tour",
  },
  {
    image: "https://images.unsplash.com/photo-1545157000-85f257f7b040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFZlbmljZSUyMHJhaWx8ZW58MHwwfDB8fHwy",
    title: "Milan to Venice Eurail Ticket",
    description: "The train journey from Milan to Venice is a popular and scenic route. You can enjoy stunning views of the Italian countryside as the train passes through picturesque towns and rolling hills. Along the way, travelers can relax in spacious and well-equipped train cars, with amenities such as comfortable seating, onboard dining options, and free Wi-Fi.",
    price: "2,999/-",
    buttonText: "Book Now",
    category: "Eurail Ticket",
  },
  {
    image: "https://images.unsplash.com/photo-1654839775818-ddb4e97436e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvbWUlMjB0cmFpbnxlbnwwfDB8MHx8fDI%3D",
    title: "Milan to Rome Eurail Ticket",
    description: "The train journey from Milan to Rome is a fantastic way to experience the beauty and charm of Italy while traveling between two of its most iconic cities. You can enjoy scenic views of the Italian countryside, including rolling hills, vineyards, and picturesque towns along the way. The train cars are comfortable and well-equipped, with amenities such as spacious seating, onboard dining options, and free Wi-Fi.",
    price: "5,499/-",
    buttonText: "Book Now",
    category: "Eurail Ticket",
  },
  {
    image: "https://images.unsplash.com/photo-1589533114720-a5824d3983bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEZsb3JlbmNlfGVufDB8MHwwfHx8Mg%3D%3D",
    title: "Milan to Florence Eurail Ticket",
    description: "The train journey from Milan to Florence is a delightful way to experience the beauty and charm of Italy while traveling between two of its most enchanting cities. The journey typically takes around 1.5 to 2 hours, making it a convenient and efficient option for travelers. Passengers can enjoy picturesque views of the Italian countryside, including rolling hills, vineyards, and historic towns along the way. The train cars are comfortable and well-equipped, with amenities such as spacious seating, onboard dining options, and free Wi-Fi.",
    price: "3,499/-",
    buttonText: "Book Now",
    category: "Eurail Ticket",
  },
  {
    image: "https://images.unsplash.com/photo-1612972384886-502453e26e44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZSUyMHRheGl8ZW58MHwwfDB8fHwy",
    title: "Rome Airport Transfer",
    description: "Our drivers will wait at the arrival terminal of your flight, he will have a sign with your name and you don't have to be worried of possible delays of your flight: the driver will check your flight and will be at the airport on time to pick you up! He will help with your luggages and will be glad to give you all the information you need during the trip.",
    price: "5,999/-",
    buttonText: "Book Now",
    category: "Airport Transfer",
  },
  {
    image: "https://images.unsplash.com/photo-1603668279554-631d92eaef9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tZSUyMGJ1c3xlbnwwfDB8MHx8fDI%3D",
    title: "Rome Hop on Hop Off Tour",
    description: "Rome has a bounty of things to see and the mix of its architecture is a testament to its past; Roman ruins, baroque squares, and Renaissance gardens combine to give the city its enticing edge. See it all on a Rome hop-on hop-off bus tour, and learn about the Italian capital as you go.",
    price: "1,999/-",
    buttonText: "Book Now",
    category: "Hop on Hop Off Tour",
  },
  {
    image: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfDB8MHx8fDI%3D",
    title: "Rome to Florence Eurail Ticket",
    description: "The train journey from Rome to Florence is a scenic and convenient way to travel between two of Italy's most iconic cities. Offering you a comfortable and efficient mode of transportation. As the train travels through the picturesque Italian countryside, passengers can enjoy stunning views of rolling hills, vineyards, and charming towns along the way. The train cars are well-equipped with amenities such as spacious seating, onboard dining options, and free Wi-Fi, ensuring a pleasant travel experience.",
    price: "3,299/-",
    buttonText: "Book Now",
    category: "Eurail Ticket",
  },
  {
    image: "https://images.unsplash.com/photo-1660164965018-b38cbfa6bdc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlJTIwdHJhaW58ZW58MHwwfDB8fHwy",
    title: "Rome to Venice Eurail Ticket",
    description: "The train journey from Rome to Venice is a captivating way to experience the beauty and charm of Italy while traveling between two of its most iconic cities. You can enjoy a comfortable and scenic ride through the Italian countryside. As the train glides along the tracks, passengers can admire picturesque views of rolling hills, vineyards, and historic towns, creating a truly immersive travel experience. The train cars are well-equipped with amenities such as spacious seating, onboard dining options, and free Wi-Fi, ensuring a pleasant and convenient journey.",
    price: "4,999/-",
    buttonText: "Book Now",
    category: "Eurail Ticket",
  },
  {
    image: "https://images.unsplash.com/photo-1465461907033-f27efa4fee63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmFwbGVzJTIwcmFpbHxlbnwwfDB8MHx8fDI%3D",
    title: "Rome to Naples Eurail Ticket",
    description: "The train journey from Rome to Naples is a delightful way to explore the beauty and culture of Italy while traveling between two vibrant cities. Offering comfortable and efficient mode of transportation. As the train speeds through the Italian countryside, passengers can enjoy scenic views of rolling hills, vineyards, and charming towns along the way. The train cars are well-equipped with amenities such as spacious seating, onboard dining options, and free Wi-Fi, ensuring a pleasant and relaxing travel experience.",
    price: "5,499/-",
    buttonText: "Book Now",
    category: "Eurail Ticket",
  },
];

const   TransfersEurailSection = () => {
  const noOfSlides = useBreakpointValue({ base: 1, md: 2, lg: 4 });
  const showArrows = useBreakpointValue({base:false,lg:true})

  return (
    <Box maxW={{ base: "95%" }} mx={"auto"} my={"5rem"}>
      {/* <Grid templateColumns={'1fr 1fr 1fr 1fr'} gap={4}> */}
      <CustomSubHeading highlightText="Eurail">Transfers and</CustomSubHeading>
      <Box mt={{base:2,lg:8}}>

      <CustomCarousel
        slidesToShow={noOfSlides}
        showArrows={showArrows}
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
