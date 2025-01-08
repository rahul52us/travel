"use client";

import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import NavItemsLayout from "./component/NavItemsLayout";
import HeroNavButton from "./component/HeroNavButton";

const Header = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Image src="/images/logo.png" alt="" h="85px" />
      <NavItemsLayout />
      <HeroNavButton />
    </Flex>
  );
};

export default Header;
