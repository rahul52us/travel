import { Box, Grid, Heading } from "@chakra-ui/react";
import ContactCard from "../common/ContactCard/ContactCard";



const ContactDetails = () => {
  const contactInfo = [
    {
      bg: "#FFB8B2",
      icon: "/icons/email.svg",
      title: "Email",
      content: "support@metamindhealth.com",
      onClick: () => window.open("mailto:support@metamindhealth.com"),
    },
    {
      bg: "#EAF475",
      icon: "/icons/phone.svg",
      title: "Phone",
      content: "+1 234 567 890",
      onClick: () => window.open("tel:+1234567890"),
    },
    {
      bg: "#86C6F4",
      icon: "/icons/location.svg",
      title: "Address",
      content: "123 Main Street, City, Country",
      onClick: () =>
        window.open(
          "https://maps.app.goo.gl/MvsWSJcnu1r4ypgy6"
        ),
    },
    {
      bg: "#9DEAB2",
      icon: "/icons/clock.svg",
      title: "Operating Hours",
      content: "Mon-Fri: 8 AM - 4:30 PM",
      onClick: null,
    },
  ];

  return (
    <Box my={20} maxW={{base:"95%",md:"85%",xl:"82%"}} mx={"auto"}>
        <Heading as={'h2'} textAlign={'center'} mb={{base:4,md:8}} fontSize={{base:"34px",lg:"42px",xl:'44px'}}>Contact Details</Heading>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }} gap={4}>
        {contactInfo.map((info, index) => (
          <ContactCard
            key={index}
            bg={info.bg}
            icon={info.icon}
            title={info.title}
            content={info.content}
            onClick={info.onClick}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ContactDetails;
