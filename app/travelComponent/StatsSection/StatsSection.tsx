import { Box } from '@chakra-ui/react';
import StatsGrid from '../common/StatsComponent/StatsComponent';
const statsData = [
    { value: 500, label: "Happy Travellers",icon:"https://cdn-icons-png.flaticon.com/128/10529/10529754.png" },
    { value: 20, label: "Destinations",icon:"https://cdn-icons-png.flaticon.com/128/3125/3125931.png" },
    { value: 300, label: "Trips" ,icon:"https://cdn-icons-png.flaticon.com/128/2743/2743956.png"},
    { value: 100, label: "Luxury Hotels",icon:"https://cdn-icons-png.flaticon.com/128/5503/5503812.png" },
    // { value: 100, label: "Licensed Professional" },
  ];

const StatsSection = () => {
  return (
    <Box maxW={'80%'} mx={'auto'} mt={4} mb={2}>
      <StatsGrid statsData={statsData} />
    </Box>
  )
}
export default StatsSection
