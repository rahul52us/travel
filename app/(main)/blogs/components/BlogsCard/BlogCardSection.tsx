import { Box, Center, Divider, FormControl, FormLabel, Grid, Heading, Input, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import CustomSmallTitle from "../../../../component/common/CustomSmallTitle/CustomSmallTitle";
import BlogsCard from "./BlogsCard";
import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../../../store/stores";
import { getStatusType } from "../../../../config/utils/function";

const BlogCardSection = observer(({fromIndividualBlog} : any) => {
  const {
    auth: { openNotification },
    BlogStore: { getBlogs, blogs },
    themeStore : {themeConfig}
  } = stores;

  const [selectedTab, setSelectedTab] = useState(0);
  // const [setSelectedTopic] = useState("");
  // const [setSelectedAudience] = useState("");

  const blogTopics = ["Therapy", "Depression", "Anxiety"];
  const blogAudiences = ["Patients", "Therapists", "General Public"];

  const eventTopics = ["Workshops", "Webinars", "Seminars"];
  const eventAudiences = ["Students", "Professionals", "General Public"];

  const fetchBlogsDetails = useCallback(() => {
    getBlogs({ page: 1, limit: 10 })
      .catch((err: any) => {
        openNotification({
          title: "Failed to Retrieve Blogs",
          message: err?.data?.message,
          type: getStatusType(err.status),
        });
      });
  }, [openNotification, getBlogs]);

  useEffect(() => {
    fetchBlogsDetails();
  }, [fetchBlogsDetails]);


  // const filterBlogs = (blogs) => {
  //   return blogs.filter((blog) =>
  //     (selectedTopic ? blog.topic === selectedTopic : true) &&
  //     (selectedAudience ? blog.audience === selectedAudience : true)
  //   );
  // };
  const filterBlogs = () => {
    return blogs?.data || []; // Filtering ko disable kar diya, ab select hone ke baad bhi effect nahi hoga
  };

  return (
    <Box>
      {fromIndividualBlog && <Divider mt={5} mb={5}/> }
      <CustomSmallTitle>Resources & Insights</CustomSmallTitle>
      <Heading
        mt={2}
        as={"h2"}
        textAlign={"center"}
        fontSize={{ base: "24px", md: "44px" }}
        fontWeight={400}
        px={{ base: 2, md: 0 }}
      >
<strong style={{ fontWeight: 600 }}>
  {fromIndividualBlog
    ? 'Discover More Related Blogs You Might Love'
    : 'Explore Our Latest Blogs, Events, and More'}
</strong>
      </Heading>

      <Tabs
        variant='solid-rounded'
        colorScheme='teal'
        size={'sm'}
        mt={{ base: 6, lg: 12 }}
        onChange={(index) => {
          setSelectedTab(index);
          // setSelectedTopic("");
          // setSelectedAudience("");
        }}
      >
        <Center>
          <TabList gap={2} justifyContent={'center'} p={1} rounded={'full'} w={'fit-content'} display="none">
            <Tab fontWeight={400} _selected={{ color: 'white', bg: themeConfig.colors.custom.light.primary }} color={'brand.100'} py={1} fontSize={'lg'} w={'100px'}>
              Blogs
            </Tab>
            <Tab fontWeight={400} _selected={{ color: 'white', bg: "brand.100" }} color={'brand.100'} py={1} w={'100px'} fontSize={'lg'}>
              Events
            </Tab>
          </TabList>
        </Center>

        <Grid display="none" templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} px={4} gap={6} mt={8}>
          <FormControl>
            <FormLabel fontWeight={700}>Search</FormLabel>
            <Input size={'sm'} placeholder="I'm looking for" variant={'flushed'} borderColor={'gray.400'} focusBorderColor='#8A8A8A' />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={700}>Topic</FormLabel>
            <Select size={'sm'} placeholder="Select Topic" variant={'flushed'} borderColor={'gray.400'} focusBorderColor='#8A8A8A' onChange={(e) => (e.target.value)}>
              {(selectedTab === 0 ? blogTopics : eventTopics).map((topic) => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight={700}>Audience</FormLabel>
            <Select size={'sm'} placeholder="Select Audience" variant={'flushed'} borderColor={'gray.400'} focusBorderColor='#8A8A8A' onChange={(e) => (e.target.value)}>
              {(selectedTab === 0 ? blogAudiences : eventAudiences).map((audience) => (
                <option key={audience} value={audience}>{audience}</option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <TabPanels>
          {/* Blogs Tab */}
          <TabPanel px={"0"}>
            <Box
            >
              {filterBlogs().length > 0 ? (
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
                  {filterBlogs().map((blog) => (
                    <BlogsCard key={blog.id} {...blog} otherBlog={false} />
                  ))}
                </Grid>
              ) : (
                <Text textAlign="center" mt={2}>No blogs available.</Text>
              )}
            </Box>
          </TabPanel>

          {/* Events Tab */}
          <TabPanel px={"0"}>
            <Box
              maxH="550px"
              overflowY="auto"
              px={2}
              sx={{
                scrollbarWidth: "thin",
                scrollbarColor: "#188691 #f0f0f0",
                "&::-webkit-scrollbar": { width: "6px" },
                "&::-webkit-scrollbar-thumb": { background: "#188691", borderRadius: "4px" },
                "&::-webkit-scrollbar-track": { background: "#f0f0f0" },
              }}
            >
              {filterBlogs().length > 0 ? (
                <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={4}>
                  {filterBlogs().map((blog) => (
                    <BlogsCard key={blog.id} {...blog} otherBlog={true} />
                  ))}
                </Grid>
              ) : (
                <Text textAlign="center" mt={2}>No events available.</Text>
              )}
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
});

export default BlogCardSection;
