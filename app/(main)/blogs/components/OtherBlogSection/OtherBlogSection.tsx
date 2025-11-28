import { Box, Grid } from "@chakra-ui/react";
import CustomCarousel from "../../../../component/common/CustomCarousal/CustomCarousal";
import BlogsCard from "../BlogsCard/BlogsCard";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import CustomSubHeading from "../../../../component/common/CustomSubHeading/CustomSubHeading";

export const otherBlogData = [
  {
    id: 1,
    image: "/images/blogs/eventCard.webp",
    date: "20 March 2025, Thursday",
    title: "Eating Disorders & BPD: The Hidden Connection",
    charges: "NO COST",
    description:
      "Trusted international travel company in India for romantic getaways, family holidays & group tours. Customized itineraries & complete support.",
  },
];

const OtherBlogSection = () => {
  return (
    <Box py={4}>
      {/* Titles Section */}
      <Box textAlign="center" mb={6}>
        <CustomSmallTitle>You might like</CustomSmallTitle>
        <CustomSubHeading>Other blogs</CustomSubHeading>
      </Box>

      {/* Desktop Grid Layout */}
      <Box display={{ base: "none", lg: "block" }}>
        <Grid templateColumns={"1fr 1fr 1fr"} gap={4} maxW={"85%"} mx={"auto"}>
          {otherBlogData.map((blog, index) => (
            <BlogsCard key={index} {...blog} otherBlog={true} />
          ))}
        </Grid>
      </Box>

      {/* Mobile Carousel Layout */}
      <Box display={{ base: "block", lg: "none" }} px={3}>
        <CustomCarousel
          slidesToShow={1}
          autoplay={true}
          showArrows={false}
          showDots={true}
        >
          {otherBlogData.map((blog) => (
            <BlogsCard key={blog.id} {...blog} otherBlog={true} />
          ))}
        </CustomCarousel>
      </Box>
    </Box>
  );
};

export default OtherBlogSection;
