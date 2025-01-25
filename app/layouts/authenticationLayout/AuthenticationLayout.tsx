'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Flex, Box } from '@chakra-ui/react';

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  if (pathname === '/register') {
    return <>{children}</>;
  }

  return (
    <Flex
      direction="column"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      bg="gray.50"
      padding={5}
    >
      <Box
        width={{ base: '100%', md: '400px' }}
        boxShadow="lg"
        bg="white"
        padding={6}
        borderRadius="md"
        textAlign="center"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default AuthenticationLayout;
