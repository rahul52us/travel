import { FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa';
// import { FooterProps } from '../components/footer/types';

export const footerData = {
  companyInfo: {
    name: "Cosmic Travels",
    tagline: "Talk. Listen. Recover",
    crisisNumber: "888-888-88",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: FaLinkedinIn
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
        icon: FaTwitter
      },
      {
        name: "Instagram",
        url: "https://instagram.com",
        icon: FaInstagram
      },
      {
        name: "Pintrest",
        url: "https://instagram.com",
        icon: FaPinterestP
      },
    ]
  },
  contactInfo: {
    phone: "+1 (800) 123-4567",
    email: "contact@wellforceit.com",
    address: "123 Innovation Drive, Suite 789, Tech City, CA 90210"
  },
  sections: [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact Us", href: "/contact-us" }
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "Tour Packages", href: "/packages" },
        { name: "Visa Servises", href: "/visa-service" },
        { name: "Blogs", href: "/blogs" },
      
      ]
    }
  ],
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation" }
  ]
};
