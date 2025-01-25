import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import React from "react";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" direction="row" bg="gray.100">
      {/* Mobile Sidebar (Drawer) */}
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        position="fixed"
        top="4"
        left="4"
        zIndex="overlay"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="white">
          <Sidebar />
        </DrawerContent>
      </Drawer>

      {/* Static Sidebar for Larger Screens */}
      <Box
        as="aside"
        w="250px"
        bg="gray.800"
        color="white"
        position="fixed"
        top="0"
        left="0"
        h="100vh"
        display={{ base: "none", md: "block" }}
        boxShadow="lg"
      >
        <Sidebar />
      </Box>

      <Flex flex="1" direction="column" ml={{ base: "0", md: "250px" }}>
        <Box
          as="header"
          bg="blue.500"
          color="white"
          px="6"
          py="4"
          boxShadow="md"
          position="sticky"
          top="0"
          zIndex="sticky"
        >
          <Box ml={{base : '50px', md : '2px'}}>
          <Header />
          </Box>
        </Box>

        <Box
          as="main"
          flex="1"
          p="2"
          overflowY="auto"
          h={{ base: "calc(100vh - 4rem)", md: "calc(100vh - 4rem)" }} // Adjusts for header height
        >
          <Box>{children}</Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;
