"use client";

import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import NavItemsLayout from "./component/NavItemsLayout";
import HeroNavButton from "./component/HeroNavButton";

const Header = () => {
  return (
    <Box>
<Box h={'2.5rem'} bg={'#045B64'} />
    <Flex alignItems="center" justify={'space-evenly'}  >
      <Image src="/images/logo.png" alt="" h="90px" />
      <NavItemsLayout />
      <HeroNavButton />
    </Flex>
    </Box>
  );
};

export default Header;
