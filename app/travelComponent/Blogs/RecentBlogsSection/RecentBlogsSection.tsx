import { Box, Heading, Text } from '@chakra-ui/react';
import CustomCarousel from '../../../component/common/CustomCarousal/CustomCarousal';
import RecentBlogCard from '../../common/RecentBlogCard/RecentBlogCard';

const travelData = [
    {
      id: 1,
      image: "https://picsum.photos/400/300?random=1",
      category: "Adventure Travel",
      title: "Exploring Hidden Waterfalls in Southeast Asia",
      location: "Bali, Indonesia",
    },
    {
      id: 2,
      image: "https://picsum.photos/400/300?random=2",
      category: "Cultural Experience",
      title: "Discovering Ancient Temples of Cambodia",
      location: "Siem Reap, Cambodia",
    },
    {
      id: 3,
      image: "https://picsum.photos/400/300?random=3",
      category: "Luxury Retreat",
      title: "Relaxing in the Maldives Overwater Bungalows",
      location: "Maldives",
    },
    {
      id: 4,
      image: "https://picsum.photos/400/300?random=4",
      category: "Wildlife Safari",
      title: "Safari Adventure in the Serengeti",
      location: "Tanzania",
    },
    {
      id: 5,
      image: "https://picsum.photos/400/300?random=5",
      category: "City Exploration",
      title: "Exploring the Streets of Tokyo",
      location: "Tokyo, Japan",
    },
  ];
const RecentBlogsSection = () => {
  return (
    <Box my={'5rem'}>

<Heading as="h3" fontSize="2xl" mb={6} position="relative">
          <Text as="span" position="relative" zIndex={1} bg={'gray.50'} pr={4}>
            Recently Published
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
        <CustomCarousel autoplay={true} slidesToShow={4}>

         {travelData.map((item) => (
             <RecentBlogCard
             key={item.id}
             image={item.image}
             category={item.category}
             title={item.title}
             location={item.location}
             />
            ))}
            </CustomCarousel>
      
    </Box>
  )
}

export default RecentBlogsSection
