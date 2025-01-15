import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import NewTestimonialCard from "../common/NewTestimonialCard/NewTestimonialCard";

const testimonials = [
  {
    stars: 5,
    text: "Lorem ipsum dolor sit amet consectetur. Faucibus eget sapien volutpat tortor dolor facilisi sapien viverra dignissim. Felis in ipsum orci id. Tincidunt a quis nisl",
    avatarSrc: "",
    name: "Ayush Yadav",
    time: "2 weeks ago",
    logoSrc:
      "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
  },
  {
    stars: 4,
    text: "Another dummy testimonial content for testing.",
    avatarSrc: "",
    name: "Gojo Saturo",
    time: "1 month ago",
    logoSrc:
    "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
},
  {
    stars: 4,
    text: "Another dummy testimonial content for testing.",
    avatarSrc: "",
    name: "Madara Uchiha",
    time: "1 month ago",
    logoSrc:
    "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
},
];

const statsData = [
  { value: "12+", label: "Therapies Offered" },
  { value: "2-13", label: "Years of Experience" },
  { value: "19000+", label: "Therapy Hours Delivered" },
  { value: "2000+", label: "Assessments Taken" },
  { value: "100%", label: "Licensed Professional" },
];

const TestimonialSection = () => {
  return (
    <Box bg={"#FDFFDD"}>
      <Box maxW={"85%"} py={20} mx={"auto"}>
        <Text
          textAlign={"center"}
          color={"#DF837C"}
          textTransform={"uppercase"}
          fontSize={"16px"}
        >
          OUR TESTIMONIALS
        </Text>
        <Heading
          textAlign={"center"}
          as={"h2"}
          fontWeight={400}
          fontSize={"48px"}
          my={2}
        >
          Hear from Those Who’ve{" "}
          <Text as={"span"} fontWeight={600}>
            Found Recovery
          </Text>
        </Heading>
        <Grid templateColumns={"1fr 1fr 1fr "} gap={8} mt={12}>
          {testimonials.map((testimonial, index) => (
            <NewTestimonialCard key={index} {...testimonial} />
          ))}
        </Grid>

        <Grid templateColumns={"repeat(5, 1fr)"} mt={14} gap={4}>
          {statsData.map((stat, index) => (
            <Box
              key={index}
              borderRight={
                index < statsData.length - 1 ? "1px solid #DEDEDE" : "none"
              }
              pr={1}
            >
              <Text textAlign={"center"} fontSize={"3.6rem"} fontWeight={500}>
                {stat.value}
              </Text>
              <Text color={"#0F0F0F"} textAlign={"center"}>
                {stat.label}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
