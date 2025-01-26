import { Box } from '@chakra-ui/react';
import StatsGrid from '../common/StatsComponent/StatsComponent';
const statsData = [
    { value: 100000, label: "Therapies Offered" },
    { value: 5000, label: "Destinations" },
    { value: 10000, label: "Trips" },
    { value: 2000, label: "Luxury Hotels" },
    // { value: 100, label: "Licensed Professional" },
  ];

const StatsSection = () => {
  return (
    <Box maxW={'80%'} mx={'auto'} my={12}>
      <StatsGrid statsData={statsData} />
    </Box>
  )
}

export default StatsSection
