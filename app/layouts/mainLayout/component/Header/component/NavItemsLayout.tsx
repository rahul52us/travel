"use client";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { navItems } from "../utils/constant";
import NavItem from "../element/NavItem";

const NavItemsLayout = () => {
  return (
    <Flex justifyContent="start" gap={8} >
      {navItems.map((item: any) => {
        return <NavItem item={item} key={item.title} />;
      })}
    </Flex>
  );
};

export default NavItemsLayout;
