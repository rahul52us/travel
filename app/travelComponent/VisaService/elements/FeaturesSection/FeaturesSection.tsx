import { Box, SimpleGrid } from "@chakra-ui/react";
import {
  FaClock,
  FaGlobe,
  FaHandshake,
  FaHeadset,
  FaThumbsUp,
} from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import CustomSubHeading from "../../../common/CustomSubHeading/CustomSubHeading";
import FeatureCard from "../common/FeatureCard/FeatureCard";

const features = [
  {
    icon: FaUserTie,
    title: "Expert Guidance",
    content:
      "Our visa specialists have extensive knowledge in handling applications for leisure, business, and education purposes worldwide.",
  },
  {
    icon: FaClock,
    title: "Efficiency and Accuracy",
    content:
      "We process your visa applications swiftly and accurately, minimizing errors for smooth processing.",
  },
  {
    icon: FaThumbsUp,
    title: "Convenience",
    content:
      "Submit your application online from anywhere in the world with our user-friendly platform.",
  },
  {
    icon: FaHeadset,
    title: "Comprehensive Support",
    content:
      "From initial consultation to visa issuance, we provide end-to-end support at every step.",
  },
  {
    icon: FaHandshake,
    title: "Customer Satisfaction",
    content:
      "We prioritize your satisfaction and go above and beyond to exceed your expectations.",
  },
  {
    icon: FaGlobe,
    title: "Global Coverage",
    content:
      "We handle visa applications for over 190 countries, ensuring you're covered wherever you go.",
  },
];

const FeaturesSection = () => {
  return (
    <Box py={20} maxW={"85%"} mx={"auto"}>
      <CustomSubHeading highlightText=" Stand Out?">
        Why Our Visa Services
      </CustomSubHeading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mt={8}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesSection;
