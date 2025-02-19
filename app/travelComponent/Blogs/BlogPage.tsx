import { Box, Heading, Text } from "@chakra-ui/react";
import "../../component/FAQ/FAQAccordion/scroll.css";
import AllBlogsSection from "./AllBlogsSection/AllBlogsSection";
import BlogHighlight from "./BlogHighlight/BlogHighlight";
import RecentBlogsSection from "./RecentBlogsSection/RecentBlogsSection";

const BlogPage = () => {
  // const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box maxW={{base:"95%",lg:"7xl"}} mx="auto" px={{ base: 0, md: 8 }}>
      {/* Page Header */}
      <Box textAlign="center" mb={6}>
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl" }
        }
        letterSpacing={'2px'}
          mb={2}
          fontWeight="900"
        >
          Wander<span style={{ color: "#3182CE" }}>Lens</span>
        </Heading>
        <Text fontSize="lg" color="gray.600" maxW="2xl" mx="auto">
          Journey through stories that redefine travel experiences
        </Text>
      </Box>
      <BlogHighlight />

      {/* Creative All Stories Grid */}
      <Heading as="h3" fontSize={{base:"xl",lg:"2xl"}} mb={{lg:8}} position="relative">
        <Text as="span" position="relative" zIndex={1} bg={"gray.50"} pr={4}>
          All Stories
        </Text>
        <Box
          position="absolute"
          left={0}
          right={0}
          top="50%"
          height="2px"
          bg="gray.200"
          zIndex={0}
        />
      </Heading>

      <AllBlogsSection />

      <Box mb={16} mt={12}>
        <RecentBlogsSection />
      </Box>
    </Box>
  );
};

export default BlogPage;
