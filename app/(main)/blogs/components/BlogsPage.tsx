"use client";

import { Box } from "@chakra-ui/react";
import BlogFeatureCard from "./BlogHeroSection/BlogHeroSection";
import BlogCardSection from "./BlogsCard/BlogCardSection";
import BookCallComponentBlog from "./bookcallcomponentblog/bookcallcomponentblog";
import StayTune from "./stayTuned/stayTuned";
import VideoCarousel from "./VideoCarousel/VideoCarousel";
import { observer } from "mobx-react-lite";

const BlogsPage = observer(() => {
  return (
    <Box bg={'brand.200'}>
      <BlogFeatureCard />
      <Box mt={12}>
        <VideoCarousel />
      </Box>
      <Box mt={{ base: "50px", lg: "80px" }} maxW={{ md: "90%", xl: '85%' }} mx={'auto'} px={{ base: 3, md: 0 }}>
        <BlogCardSection />
        <Box mt={{ base: "40px", lg: "80px" }}>

          <BookCallComponentBlog />
        </Box>

        {/* StayTune Section */}
        <Box my={{ base: "40px", lg: "80px" }}>
          <StayTune />
        </Box>
      </Box>
      {/* <IndividualBlogPage/>
        <OtherBlogSection/> */}
    </Box>
  );
});

export default BlogsPage;
