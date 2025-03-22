"use client";
import { Box, Heading, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import stores from "../../../../store/stores";

const BlogFeatureCard = () => {
  const {
    themeStore: { themeConfig },
  } = stores;
  const [tabChange, setTabChange] = useState("blogs");
  const handleTabChange = (tab: string) => {
    setTabChange(tab);
  };
  return (
    <Box
      position="relative"
      maxW={"95%"}
      mt={2}
      mx={"auto"}
      borderRadius="lg"
      overflow="hidden"
      width="full"
      height={{ base: "50vh", md: "60vh", lg: "75vh" }}
      backgroundImage="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="end"
      p={{ base: 4, md: 6 }}
      color="white"
    >
      {/* Tab Navigation */}
      <Tabs
        position="absolute"
        top={6}
        left={12}
        variant={"soft-rounded"}
        size={"sm"}
      >
        <TabList
          borderRadius="full"
          bg="blackAlpha.200"
          color="white"
          w={"fit-content"}
          border={"1px solid white"}
        >
          <Tab
            onClick={() => handleTabChange("blogs")}
            _selected={{
              color: themeConfig.colors.custom.light.primary,
              bg: "white",
            }}
            color={"white"}
          >
            Blogs
          </Tab>
        </TabList>
      </Tabs>
      {tabChange === "blogs" ? (
        <Box
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          maxW={{ base: "100%", lg: "95%" }}
          mx={"auto"}
        >
          <CustomSmallTitle textAlign={{ base: "start", md: "start" }}>
            FEATURED
          </CustomSmallTitle>
          <Heading
            color={themeConfig.colors.brand[300]}
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            mt={1}
            fontWeight={600}
          >
            Top Tips for Planning Your Next Adventure
          </Heading>

          <Text
            color={themeConfig.colors.brand[100]}
            fontSize={{ base: "sm", lg: "lg" }}
            mt={2}
            w={{ base: "100%", lg: "80%" }}
            fontWeight={400}
            noOfLines={{ base: 2, md: 3 }}
          >
            {`Traveling is all about discovering new places, cultures, and
            experiences. Whether you're planning a weekend getaway or a long
            vacation, choosing the right destination, setting a budget, and
            preparing in advance can make your trip hassle-free. Don't forget to
            embrace spontaneity—sometimes the best memories come from unplanned
            adventures!`}
          </Text>
        </Box>
      ) : (
        <Box
          p={{ base: 4, md: 6 }}
          borderRadius="md"
          maxW={{ base: "100%", lg: "95%" }}
          mx={"auto"}
        >
          <CustomSmallTitle textAlign={{ base: "start", md: "start" }}>
            FEATURED
          </CustomSmallTitle>
          <Heading
            color={themeConfig.colors.brand[300]}
            fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
            mt={1}
            fontWeight={600}
          >
            Top Tips for Planning Your Next Adventure
          </Heading>

          <Text
            color={themeConfig.colors.brand[100]}
            fontSize={{ base: "sm", lg: "lg" }}
            mt={2}
            w={{ base: "100%", lg: "80%" }}
            fontWeight={400}
            noOfLines={{ base: 2, md: 3 }}
          >
            {`Traveling is all about discovering new places, cultures, and
            experiences. Whether you're planning a weekend getaway or a long
            vacation, choosing the right destination, setting a budget, and
            preparing in advance can make your trip hassle-free. Don't forget to
            embrace spontaneity—sometimes the best memories come from unplanned
            adventures!`}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default BlogFeatureCard;
