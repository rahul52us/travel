import React from "react";
import { Box, VStack, Link, Icon, Text, Image, Flex } from "@chakra-ui/react";
import { AtSignIcon, SettingsIcon, CalendarIcon } from "@chakra-ui/icons";

const Sidebar: React.FC = () => {
  const navItems = [
    { label: "Overview", icon: AtSignIcon, href: "/overview" },
    { label: "Reports", icon: CalendarIcon, href: "/reports" },
  ];

  return (
    <Box
      as="aside"
      color="white"
      h="100vh"
      p="3"
      boxShadow="lg"
      borderRight="1px"
      position="relative"
    >
      {/* Logo Section */}
      <Box
        cursor="pointer"
        mb="4"
        textAlign="center"
        borderBottom={"1.2px solid gray"}
        mt={-2}
      >
        <Image
          aria-label=""
          src="/images/logo.png"
          alt="Logo"
          style={{ width: "150px", margin: "0 auto", display: "block" }}
        />
      </Box>

      <Flex direction="column" justifyContent="space-between" h="full">
        {/* Navigation Items */}
        <VStack align="start" spacing="4" flex="1" w="full">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              w="full"
              display="flex"
              alignItems="center"
              py="3"
              px="4"
              borderRadius="md"
              transition="background-color 0.3s ease"
              _hover={{
                bg: "blue.600",
                color: "white",
                textDecoration: "none",
              }}
              _focus={{ boxShadow: "none" }}
            >
              <Icon as={item.icon} boxSize="6" mr="3" />
              <Text fontSize="lg">{item.label}</Text>
            </Link>
          ))}

          {/* Settings at the Bottom-Right Corner */}
          <Box position="absolute" bottom="0" right="0" p="4" w="full">
            <Link
              href="/settings"
              w="full"
              display="flex"
              alignItems="center"
              py="3"
              px="4"
              borderRadius="md"
              transition="background-color 0.3s ease"
              _hover={{ bg: "blue.600", color: "white", textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              <Icon as={SettingsIcon} boxSize="6" mr="3" />
              <Text fontSize="lg">Settings</Text>
            </Link>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
