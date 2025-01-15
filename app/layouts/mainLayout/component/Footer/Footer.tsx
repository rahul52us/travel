import {
  Box,
  Container,
  Divider,
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

export const Footer: React.FC<any> = () => {
  const bgColor = useColorModeValue("teal.700", "teal.900");
  const textColor = useColorModeValue("white", "white");

  return (
    <Box bg={"#065F68"} color={textColor} borderTopRadius={"40px"} py={14}>
      <Container as={Stack} maxW={"85%"}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2.5fr 1fr 1fr 1fr" }}
          spacing={2}
        >
          {/* Company Info */}
          <Stack spacing={4}>
            <Box>
              <Image src="/images/whiteLogo.png" alt="logo" h={"100px"} />
              {/* <Heading size="md" mb={2}>{footerData.companyInfo?.name}</Heading> */}
              <Text pl={1} fontSize={"2xl"} mt={-2}>
                {footerData.companyInfo.tagline}
              </Text>
            </Box>
            <Stack direction="row" spacing={4}>
              {footerData.companyInfo.socialLinks.map((social) => (
                <Link key={social.name} href={social.url}>
                  <Box
                    boxSize={7} // Outer box size
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    rounded="full"
                    bg="#FFFFFF1C"
                    _hover={{ color: "gray.300" }}
                  >
                    <Icon
                      as={social.icon}
                      boxSize="60%" // Icon size relative to the container
                    />
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
        <Box pt={10} pb={2}>
          <Text textAlign={"center"}>
            We're not a crisis service. For immediate help, call{" "}
            {footerData.companyInfo.crisisNumber}.
          </Text>
        </Box>

        {/* Bottom Bar */}
      </Container>
      <Box>
        <Divider borderColor={"#FFFFFF33"} />
        <Grid
          pt={6}
          gap={4}
          templateColumns={"1fr 1fr 1fr"}
          // justify={{ base: "center", md: "end" }}
          // align={{ base: "center", md: "center" }}
        >
          <Box>
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
          <Text textAlign={"center"} fontSize={"sm"} pl={2}>
            ©{new Date().getFullYear()}{" "}
            <Text as={"span"} color={"#DF837C"}>
              {footerData.companyInfo.name}
            </Text>{" "}
            . All rights reserved.
          </Text>
          <Stack direction={"row"} spacing={5}>
            {footerData.legalLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  _hover={{ color: "gray.300" }}
                  fontSize={"sm"}
                  textAlign={"end"}
                >
                  {link.name}
                </Link>
                {index < footerData.legalLinks.length - 1 && <Text>/</Text>}
              </React.Fragment>
            ))}
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
};
