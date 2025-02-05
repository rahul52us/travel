import { Box, Text } from "@chakra-ui/react";
import PageHero from "../../component/common/CommonHeroSection/CommonHeroSection";
// import CosmicTravelVisaServices from "./elements/VisaServicePage/VisaServicePage";
import VisaServicesPage from "./elements/VisaServicePage/VisaServicePage";
 
const VisaService = () => {
  return (
    <Box>
      <PageHero
        title="Our Visa Services"
        lineColor="blue.300"
        subtitle={
          <>
            Navigating visa requirements can be complex. Let our visa experts
            guide you
            <Text as="span" color="blue.200" fontWeight="semibold" mx={1.5}>
              24/7
            </Text>
            to ensure a seamless travel experience.
          </>
        }
        bgImage="url('https://img.freepik.com/free-photo/flight-aviation-cloudy-aircraft-airplane_1172-277.jpg?t=st=1738765418~exp=1738769018~hmac=0e4496960af44e78db21327f916ef0e1c688ac7fb25cfedecda5a8561106dd85&w=1060')"
      />
      {/* <CosmicTravelVisaServices/> */}
      <VisaServicesPage/>
    </Box>
  );
};

export default VisaService;
