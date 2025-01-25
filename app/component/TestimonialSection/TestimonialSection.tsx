import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import NewTestimonialCard from "../common/NewTestimonialCard/NewTestimonialCard";
import CustomCarousel from "../common/CustomCarousal/CustomCarousal";

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
  {
    stars: 4,
    text: "Another dummy testimonial content for testing. new",
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
  const noOfSlides = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  return (
    <Box bg={"#FDFFDD"}>
      <Box
        maxW={{ md: "90%" }}
        py={{ base: "3rem", md: "6rem" }}
        px={{ base: 4, md: 0 }}
        mx={"auto"}
      >
        <Text
          textAlign={"center"}
          color={"#DF837C"}
          textTransform={"uppercase"}
          fontSize={{ base: "14px", md: "16px" }}
        >
          OUR TESTIMONIALS
        </Text>
        <Heading
          textAlign={"center"}
          as={"h2"}
          fontWeight={400}
          fontSize={{ base: "24px", md: "48px" }}
          my={{ base: 1, md: 2 }}
          px={1}
        >
          Hear from Those Who’ve{" "}
          <Text as={"span"} fontWeight={600}>
            Found Recovery
          </Text>
        </Heading>
        {/* <Grid templateColumns={"1fr 1fr 1fr "} gap={8} mt={12}>
          {testimonials.map((testimonial, index) => (
            <NewTestimonialCard key={index} {...testimonial} />
          ))}
        </Grid> */}
        <Box mt={{ base: 4, md: 8 }}>
          <CustomCarousel
            slidesToShow={noOfSlides}
            autoplay={true}
            showArrows={false}
          >
            {testimonials.map((testimonial, index) => (
              <NewTestimonialCard key={index} {...testimonial} />
            ))}
          </CustomCarousel>
        </Box>

        <Grid
          templateColumns={{ base: "1fr 1fr", md: "repeat(5, 1fr)" }}
          mt={{ base: 8, lg: 14 }}
          gap={{ base: 8, md: 8,lg:4 }}
        >
          {statsData.map((stat, index) => (
            <GridItem
              key={index}
              colSpan={{
                base: index === statsData.length - 1 ? 2 : 1, // Center the last item
                md: 1,
              }}
              justifySelf={{
                base: index === statsData.length - 1 ? "center" : "unset",
                md: "unset",
              }}
            >
              <Box
                borderRight={
                  index < statsData.length - 1 ? "1px solid #DEDEDE" : "none"
                }
                pr={{lg:1}}
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ base: "2rem", md:"2.4rem",lg: "3.6rem" }}
                  fontWeight={500}
                  lineHeight={{ base: "3rem" }}
                >
                  {stat.value}
                </Text>
                <Text
                  color={"#0F0F0F"}
                  textAlign={"center"}
                  fontSize={{ base: "xs", lg: "md" }}
                >
                  {stat.label}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TestimonialSection;
