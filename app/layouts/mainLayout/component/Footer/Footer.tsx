import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import stores from "../../../../store/stores";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { footerData } from "./components/footerData";

export const Footer: React.FC = observer(() => {
  const {
    destinationStore: { destination },
    locationStore: { location },
  } = stores;
  const textColor = useColorModeValue("gray.100", "white");
  const [destinationData, setDestinationsData] = useState([]);

  useEffect(() => {
    if (destinationData.length === 0 && destination?.data?.length > 0) {
      setDestinationsData(destination.data.slice(0, 7));
    }
  }, [destination?.data]);

  const sections: any = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Group Tour", href: "/groupTour" },
        { name: "Blogs", href: "/blogs" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      title: "Destinations",
      links:
        location?.data?.map((dt: any) => ({
          name: dt?.name,
          href: `/destinations/${dt?.name?.split(" ").join("-")}`,
        })) || [],
    },
  ];

  return (
    <Box
      bgGradient={"linear(to-r, #1c2f47ff, #0A192F)"}
      color={textColor}
      py={{ base: "8", md: 6 }}
    >
      <Flex
        align={"center"}
        justify={"space-between"}
        maxW={{ base: "90%", md: "75%" }} // Adjust max width for mobile and tablet
        mx={"auto"}
        mb={4}
        pt={2}
        direction={{ base: "column", md: "row" }} // Stack vertically on mobile, row on tablet and above
        gap={{ base: 4, md: 0 }} // Add gap between items on mobile
      >
        <Flex align={"center"} gap={2}>
          <Box>
            <Image
              src="/icons/support.png"
              alt="Support"
              boxSize={{ base: "50px", md: "70px" }}
              objectFit={"contain"}
            />
          </Box>
          <Text ml={4} fontSize={{ base: "lg", md: "2xl" }} fontWeight={700}>
            Need Any Support For Tour & Travels ?
          </Text>
        </Flex>
        <Flex align={"center"} gap={2}>
          <Box>
            <Image
              src="/icons/vacation.png"
              alt="Support"
              boxSize={{ base: "50px", md: "70px" }}
              objectFit={"contain"}
            />
          </Box>
          <Text ml={4} fontSize={{ base: "xl", md: "2xl" }} fontWeight={700}>
            Ready to Get Started With Vacations!
          </Text>
        </Flex>
      </Flex>
      <Divider mb={6} maxW={"80%"} mx={"auto"} />
      <Box>
        <Container as={Stack} maxW={{ lg: "90%" }} px={{ base: 4, md: 8 }}>
          <SimpleGrid
            templateColumns={{
              base: "1fr", // Stacks items on small screens
              sm: "1fr 1fr", // Two columns on small screens
              md: "1.5fr 1fr 1fr 1fr", // Standard grid layout on medium and larger screens
              lg: "2fr 1fr 1fr 1fr", // Standard grid layout on medium and larger screens
            }}
            spacing={{ base: 3, md: 4 }}
          >
            {/* Company Info */}
            <Stack
              spacing={{ base: 4, md: 4 }}
              align={{ base: "center", md: "flex-start" }}
            >
              <Box textAlign={{ base: "center", md: "left" }}>
                {/* <Center rounded={"xl"}> */}
                <Image
                  src="/images/logo3.png"
                  alt="logo"
                  objectFit={"cover"}
                  // display="none"
                  h={{ base: "70px", lg: "100px" }}
                  mx={{ base: "auto", md: 0 }}
                  mt={6}
                />
                {/* </Center> */}
                <Text
                  pl={1}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  mt={3}
                >
                  {footerData.companyInfo.tagline}
                </Text>
              </Box>
              <Stack
                direction="row"
                spacing={4}
                justify={{ base: "center", md: "flex-start" }}
              >
                {footerData.companyInfo.socialLinks.map((social) => (
                  <Link key={social.name} href={social.url}>
                    <Box
                      boxSize={10}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      rounded="full"
                      bg="#FFFFFF1C"
                      _hover={{ color: "gray.300" }}
                    >
                      <Icon as={social.icon} boxSize="60%" />
                    </Box>
                  </Link>
                ))}
              </Stack>
            </Stack>

            {sections.map((section) => (
              <FooterSection key={section.title} section={section} />
            ))}

            <ContactSection contactInfo={footerData.contactInfo} />
          </SimpleGrid>
        </Container>

        <Box mt={6}>
          <Divider borderColor={"#FFFFFF33"} />
          <Grid
            pt={6}
            gap={4}
            templateColumns={{
              base: "1fr", // Single column on small screens
              lg: "1fr 1fr 1fr", // Three columns on medium and larger screens
            }}
            textAlign={{ base: "center", lg: "left" }}
            alignItems={"center"}
          >
            <Box display={{ base: "none", sm: "block" }}>
              <Image
                position={"absolute"}
                h={"260px"}
                bottom={0}
                left={0}
                src="/images/footerImage.png"
                alt="footer"
                mixBlendMode={"multiply"}
                display="none"
              />
            </Box>
            <Text fontSize={{ base: "xs", sm: "sm" }} textAlign={"center"}>
              Copyright © {new Date().getFullYear()}{" "}
              <Text as={"span"} color={"brand.100"}>
                {footerData.companyInfo.name}
              </Text>{" "}
              . All rights reserved.
            </Text>
            <Stack
              direction="row" // Always a horizontal row
              spacing={2} // Small spacing between items
              justify={{ base: "center", lg: "flex-end" }} // Align to the right
              align="center" // Vertically center items
              wrap="wrap" // Wrap items if needed on very small screens
              pr={{ md: 8 }}
            >
              {footerData.legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    _hover={{ color: "gray.300" }}
                    fontSize={{ base: "xs", sm: "sm" }} // Smaller font size for better scaling
                  >
                    {link.name}
                  </Link>
                  {index < footerData.legalLinks.length - 1 && (
                    <Text
                      fontSize={{ base: "xs", sm: "sm" }} // Match separator size with links
                    >
                      /
                    </Text>
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
});
