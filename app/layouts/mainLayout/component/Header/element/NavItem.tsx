"use client";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

interface NavItemProps {
  item: {
    title: string;
    link?: string;
    subItems?: { title: string; link: string }[];
  };
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const router = useRouter();

  if (item.subItems) {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          variant="ghost"
          fontSize={{ lg: "16px", xl: "18px" }}
          color="#1C2B47"
          fontWeight={500}
          p={0}
        >
          {item.title}
        </MenuButton>
        <MenuList>
          {item.subItems.map((subItem) => (
            <MenuItem
              key={subItem.title}
              onClick={() => router.push(subItem.link)}
              _hover={{ bg: "#1C2B47", color: "white" }}
              color={"#1C2B47"}
              transition={"all 0.2s ease"}
            >
              {subItem.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  return (
    <Box
      as="span"
      fontSize={{ lg: "16px", xl: "18px" }}
      color="#1C2B47"
      position="relative"
      cursor="pointer"
      _hover={{
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-4px",
          left: 0,
          width: "100%",
          height: "4px",
          backgroundColor: "#1C2B47",
        },
      }}
      onClick={() => {
        if (item.link) router.push(item.link);
      }}
    >
      {item.title}
    </Box>
  );
};

export default NavItem;
