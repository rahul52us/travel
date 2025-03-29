import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { INSTRAGRAM_LINK } from '../../../../../config/utils/variables';
// import { FooterProps } from '../components/footer/types';

export const footerData = {
  companyInfo: {
    name: "Cosmic Travels",
    tagline: "Explore. Dream. Discover",
    crisisNumber: "888-888-88",
    socialLinks: [
      // {
      //   name: "LinkedIn",
      //   url: "https://linkedin.com",
      //   icon: FaLinkedinIn
      // },
      // {
      //   name: "Twitter",
      //   url: "https://twitter.com",
      //   icon: FaTwitter
      // },
      {
        name: "Instagram",
        url: INSTRAGRAM_LINK,
        icon: FaInstagram
      },
      {
        name: "Whatsapp",
        url: "https://wa.me/919958805754",
        icon: FaWhatsapp
      },
      // {
      //   name: "Pintrest",
      //   url: "https://instagram.com",
      //   icon: FaPinterestP
      // },
    ]
  },
  contactInfo: {
    phone: "+91 - 9958 805 754",
    email: "hello@cosmictravels.in",
    address: "Khasra No. 328, Near Peer Baba, Main Sultanpur Market, Sultanpur, New Delhi- 110030"
  },
  sections: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Sightseeing", href: "/sightseeing" },
        { name: "Blogs", href: "/blogs" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact Us", href: "/contact-us" }
      ]
    },
    {
      title: "Destinations",
      links: [
        { name: "Eastern Europe", href: "/destinations/eastern-europe" },
        { name: "Singapore", href: "/destinations/singapore" },
        { name: "Dubai", href: "/destinations/dubai" },
        { name: "Scandanavia", href: "/destinations/Scandanavia" },
        { name: "Western Europe", href: "/destinations/western-europe" },
        { name: "Central Europe", href: "/destinations/central-europe" },
        { name: "Malaysia", href: "/destinations/malaysia" },
        { name: "Thailand", href: "/destinations/thailand" },

      ]
    }
  ],
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation" }
  ]
};
