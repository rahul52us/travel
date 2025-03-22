import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import AllBlogCard from "../../common/AllBlogCard/AllBlogCard";
import CustomCarousel from "../../../component/common/CustomCarousal/CustomCarousal";

const storyData = [
    {
      title: "Coastal Highway Adventure: Pacific Northwest",
      image: "https://picsum.photos/600/400?random=1",
      alt: "Coastal Highway Adventure",
      author: "Sarah Johnson",
      date: "May 15, 2023",
      location: "Oregon Coast, USA",
      readTime: 6,
      category: "Road Trip",
      authorImage: "https://bit.ly/sage-adebayo",
    },
    {
        title: "Exploring the Swiss Alps of Switzerland",
      image: "https://picsum.photos/600/400?random=2",
      alt: "Swiss Alps",
      author: "John Doe",
      date: "June 10, 2023",
      location: "Switzerland",
      readTime: 5,
      category: "Adventure",
      authorImage: "https://bit.ly/code-beast",
    },
    {
      title: "A Walk Through Kyoto's Temples and Gardens",
      image: "https://picsum.photos/600/400?random=3",
      alt: "Kyoto Temples",
      author: "Emily Carter",
      date: "July 20, 2023",
      location: "Kyoto, Japan",
      readTime: 7,
      category: "Culture",
      authorImage: "https://bit.ly/prosper-baba",
    },
    {
      title: "Coastal Highway Adventure: Pacific Northwest",
      image: "https://picsum.photos/600/400?random=1",
      alt: "Coastal Highway Adventure",
      author: "Sarah Johnson",
      date: "May 15, 2023",
      location: "Oregon Coast, USA",
      readTime: 6,
      category: "Road Trip",
      authorImage: "https://bit.ly/sage-adebayo",
    },
  ];

  const AllBlogsSection = () => {
      const showArrows = useBreakpointValue({base:false,lg:true})

    return (
      <Box>
        <Box display={{base:"none",lg:"block"}}>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6} >
        {storyData.map((story, index) => (
          <AllBlogCard key={index} {...story} />
        ))}
      </Grid>
        </Box>
      <Box display={{base:"block",lg:"none"}}>
      <CustomCarousel autoplay={true} slidesToShow={4}  showArrows={showArrows}>
      {storyData.map((story, index) => (
          <AllBlogCard key={index} {...story} />
        ))}
      </CustomCarousel>
      </Box>
        </Box>
    );
  };

  export default AllBlogsSection;