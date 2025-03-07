'use client';

import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      minHeight="100vh"
      direction={{ base: 'column', md: 'row' }}
      justifyContent="center"
      alignItems="center"
      bg="gray.50"
      p={{ base: 4, md: 6 }}
    >
      {/* Left Section - Background Image */}
      {!isMobile && (
        <Box
          position="relative"
          bgImage="url('https://bombaytrooper.com/wp-content/uploads/2024/03/Travel-Agency-bt-Blog.jpeg')"
          height={{ md: '90vh', xl: '94vh' }}
          width={{ md: '50%', lg: '45%' }}
          bgSize="cover"
          bgPosition="center"
          rounded="xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          alignSelf="center"
          shadow="lg"
        />
      )}

      {/* Right Section - Form Content */}
      <Box
        bg="white"
        p={{ base: 6, md: 8 }}
        borderRadius="lg"
        width={{ base: '100%', md: '45%', lg: '40%' }}
        maxW="500px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        shadow={{ base: 'none', md: 'xl' }}
        minHeight={{ md: 'auto' }}
        ml={{ md: 6 }}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default AuthenticationLayout;