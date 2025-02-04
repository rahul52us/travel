import { Box } from '@chakra-ui/react';
import StatsGrid from '../common/StatsComponent/StatsComponent';
const statsData = [
    { value: 100000, label: "Happy Travellers" },
    { value: 5000, label: "Destinations" },
    { value: 10000, label: "Trips" },
    { value: 2000, label: "Luxury Hotels" },
    // { value: 100, label: "Licensed Professional" },
  ];

const StatsSection = () => {
  return (
    <Box maxW={'80%'} mx={'auto'} mt={6} mb={2}>
      <StatsGrid statsData={statsData} />
    </Box>
  )
}

export default StatsSection
