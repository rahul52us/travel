import { FaTwitter, FaLinkedin, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
// import { FooterProps } from '../components/footer/types';

export const footerData = {
  companyInfo: {
    name: "Metamind",
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
        { name: "Specialist", href: "/specialist" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Client Reviews", href: "/reviews" },
        { name: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "Individual Therapy", href: "/services/individual" },
        { name: "Couples Therapy", href: "/services/couples" },
        { name: "Teen Therapy", href: "/services/teen" },
        { name: "Psychological Assessment", href: "/services/assessment" }
      ]
    }
  ],
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation" }
  ]
};
