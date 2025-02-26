"use client";

import { Box } from '@chakra-ui/react';
import SightseeingPage from './component/Sightseeing';
import Destinations from './SightseeingDestinations';

const page = () => {
  return (
    <Box>

      <Destinations/>
<SightseeingPage/>

    </Box>
  )
}

export default page