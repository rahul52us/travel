import { Box, Grid, Heading } from "@chakra-ui/react";
import ContactCard from "../common/ContactCard/ContactCard";



const ContactDetails = () => {
  const contactInfo = [
    {
      bg: "#FFB8B2",
      icon: "/icons/email.svg",
      title: "Email",
      content: "hello@cosmictravels.in",
      onClick: () => window.open("mailto:hello@cosmictravels.in"),
    },
    {
      bg: "#EAF475",
      icon: "/icons/phone.svg",
      title: "Phone",
      content: "+91 9958 805 754",
      onClick: () => window.open("tel:9958 805 754"),
    },
    {
      bg: "#86C6F4",
      icon: "/icons/location.svg",
      title: "Address",
      content: "Khasra No. 328, Near Peer Baba, Main Sultanpur Market, Sultanpur, New Delhi- 110030",
      onClick: () =>
        window.open(
          "https://maps.app.goo.gl/c24UhLAr6uBwX2TGA"
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
    <Box my={20} maxW={{base:"95%",md:"85%",xl:"90%"}} mx={"auto"}>
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
