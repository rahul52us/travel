"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SeoHead from "../../../component/config/component/SeoHead/SeoHead";
import PageLoader from "../../../component/common/Loader/PageLoader";
import { FACEBOOK_LINK, INSTRAGRAM_LINK } from "../../../config/utils/variables";
import BlogCardSection from "../components/BlogsCard/BlogCardSection";

const socialLinks = [
  {
    name: "Instagram",
    url: INSTRAGRAM_LINK,
    icon: FaInstagram
  },
  {
    name: "Facebook",
    url: FACEBOOK_LINK,
    icon: FaFacebook
  },
];

const IndividualBlogPage = observer(() => {
  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const {themeStore : {themeConfig}} = stores
  const {
    BlogStore: { getSingleBlogs },
  } = stores;

  const { title } = useParams();

  useEffect(() => {
    if (!title) return;

    const key = {
      title: title
    };

    setLoading(true);
    getSingleBlogs(key)
      .then((data) => {
        if (data) {
          setBlogData({
            ...data,
          });
        }
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, [title, getSingleBlogs]);

  return (
    <PageLoader loading={loading} noRecordFoundText={!blogData} height="15vh">
      <Box maxW={{ base: "95%", md: "90%" }} mx="auto">
        {/* Blog Title and Description */}
        <Box maxW="800px" mx="auto" px={{ base: 2, md: 4 }}>
          <Heading
            as="h1"
            textAlign="center"
            fontWeight={600}
            mt={2}
            mb={2}
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          >
            {blogData?.title?.split("-").join(" ")}
          </Heading>
        </Box>
        <SeoHead
          title={blogData?.title?.split("-").join(" ") || blogData?.slug?.split("-").join(" ")}
          description={blogData?.subTitle}
          image={blogData?.coverImage?.url}
        />

        {/* Blog Image */}
        <Image
          alt={blogData?.title?.split("-").join(" ")}
          borderTopRightRadius="50px"
          borderBottomLeftRadius="50px"
          mt={6}
          h={{ base: "50vh", md: "80vh" }}
          objectFit="cover"
          w="100%"
          src={blogData?.coverImage?.url}
        />

        {/* Main Content Grid */}
        <Grid
          templateColumns={{ base: "1fr", md: "0.75fr 4fr 1fr" }} // Stack columns on mobile, side by side on tablet and desktop
          gap={{ base: 6, md: 4 }}
          my={{ base: 6, md: 12 }}
        >
          {/* Social Shares Section */}
          <Box>
            <Box>
              <Center>
                <Icon as={IoShareSocialOutline} boxSize={5} />
              </Center>
              {/* <Text mt={1} textAlign="center" fontWeight={700} lineHeight={1} fontSize="sm">
                shares<br />996K
              </Text> */}
            </Box>
            <Flex
              direction={{ base: "row", md: "column" }} // Horizontal on mobile/tablet, vertical on desktop
              align="center"
              justify="center"
              gap={{ base: 3, md: 1 }}
              mt={6}
            >
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.url}>
                  <Box
                    boxSize={8}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg={themeConfig.colors.custom.light.primary}
                    _hover={{ color: "gray.300" }}
                    mb={{ base: 0, md: 3 }} // Add margin bottom for vertical layout
                    mr={{ base: 3, md: 0 }} // Add margin right for horizontal layout
                  >
                    <Icon as={social.icon} boxSize="60%" color="brand.200" />
                  </Box>
                </Link>
              ))}
            </Flex>
          </Box>

          {/* Blog Content Section */}
          <Box
            pr={{ base: 0, md: 4 }}
            dangerouslySetInnerHTML={{ __html: blogData?.content }}
          />

          {/* Contact Section */}
          <Box px={{ base: 2, md: 4 }} mt={{ base: 6, md: 0 }}>
            <Text
              fontWeight={700}
              fontSize={{ base: "xs", md: "lg" }}
              whiteSpace="nowrap"
            >
              Contact Us Right Now
            </Text>
            <Text color="#616161" fontSize={{ base: "sm", md: "md" }}>
              Have questions or need support? Reach out to us—we&apos;re here to
              help!
            </Text>
            <Button
              variant="outline"
              py={5}
              px={6}
              fontSize="sm"
              mt={4}
              colorScheme="teal"
            >
              Explore More Blogs
            </Button>
          </Box>
        </Grid>
        <BlogCardSection fromIndividualBlog={true}/>
      </Box>
    </PageLoader>
  );
});

export default IndividualBlogPage;