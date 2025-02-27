import {
  Box,
  Center,
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
import React from "react";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import { footerData } from "./components/footerData";

// Removed empty interface
export const Footer: React.FC = () => {
  const textColor = useColorModeValue("gray.100", "white");

  return (
    <Box
      // bg={'#1C2B47 '}
      bgGradient={"linear(to-r, #1C2B47,#0A192F)"}
      color={textColor}
      // borderTopRadius={{ base: "24px", md: "40px" }}
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
      <Image src="/icons/support.png" alt="Support" boxSize={{ base: "50px", md: "70px" }} objectFit={'contain'} />  
    </Box>  
    <Text ml={4} fontSize={{ base: "lg", md: "2xl" }} fontWeight={700}>  
      Need Any Support For Tour & Travels ?  
    </Text>  
  </Flex>  
  <Flex align={"center"} gap={2}>  
    <Box>  
      <Image src="/icons/vacation.png" alt="Support" boxSize={{ base: "50px", md: "70px" }} objectFit={'contain'} />   
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
                <Center bg={"blackAlpha.200"} rounded={"xl"}>
                  <Image
                    src="/images/logo3.png"
                    alt="logo"
                    objectFit={"cover"}
                    h={{ base: "70px", lg: "160px" }}
                    mx={{ base: "auto", md: 0 }}
                  />
                </Center>
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
                      boxSize={7}
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

            {/* Sections */}
            {footerData.sections.map((section) => (
              <FooterSection key={section.title} section={section} />
            ))}

            {/* Contact Info */}
            <ContactSection contactInfo={footerData.contactInfo} />
          </SimpleGrid>

          {/* Crisis Notice */}
          {/* <Box
            pt={{ base: 4, md: 10 }}
            pb={2}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text textAlign={"center"} fontSize={{ base: "sm", md: "lg" }}>
              {`We're not a crisis service. For immediate help, call `}
              {footerData.companyInfo.crisisNumber}.
            </Text>
          </Box> */}
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
              />
            </Box>
            <Text fontSize={{ base: "xs", sm: "sm" }} textAlign={"center"}>
              ©{new Date().getFullYear()}{" "}
              <Text as={"span"} color={"teal.400"}>
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
};
