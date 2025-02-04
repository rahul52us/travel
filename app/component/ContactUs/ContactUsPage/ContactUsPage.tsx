"use client";
import { Box, Text } from "@chakra-ui/react";
import PageHero from "../../common/CommonHeroSection/CommonHeroSection";
import ContactDetails from "../ContactDetails/ContactDetails";
import ContactUs from "../ContactUs";
import JoinCommunitySection from "../JoinCommunitySection/JoinCommunitySection";

const ContactUsPage = () => {
  return (
    <Box>
      {/* <CommonHeroSection
      title="Contact Us"
      subtitle="We'd love to hear from you! Reach out for travel inquiries, partnerships, or just to say hello."
    //   bgImage="url('/your-custom-image.jpg')" // Optional custom image
    /> */}

      <PageHero
        title="Contact Our Team"
        lineColor="teal.300"
        subtitle={  
            <>  
              Let&apos;s craft your perfect journey together! Reach out to our travel  
              experts  
              <Text as="span" color="teal.200" fontWeight="semibold" mx={1.5}>  
                24/7  
              </Text>  
              for personalized assistance.  
            </>  
          }
        bgImage="url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
      />
      <ContactDetails />

      <JoinCommunitySection />
      <ContactUs />
      <Box bg={"white"} py={12}>
        <Box
          w="100%"
          maxW="90%"
          h="360px"
          mx={"auto"}
          overflow="hidden"
          borderRadius="16px"
          boxShadow="sm"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56102.85705242562!2d77.08718284863279!3d28.49675100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fb3a5bb1bd9%3A0xbdbc7a3341280449!2sCosmic%20Travels-%20Where%20every%20travel%20is%20a%20story%20worth%20telling!5e0!3m2!1sen!2sin!4v1738690029249!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsPage;
