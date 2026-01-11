"use client";
import { Button, Flex } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const HeroNavButton = ({ onClick }: any) => {
  const handleWhatsAppClick = () => {
    // 🔥 Send WhatsApp click event to Google Tag Manager
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "whatsapp_click",
      click_text: "WhatsApp Button",
    });

    const phone = "9958805754";
    const message =
      "Hi, I am interested in your travel packages. Please share more details.";
    const encodedMsg = encodeURIComponent(message);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const url = isMobile
      ? `https://wa.me/91${phone}?text=${encodedMsg}`
      : `https://api.whatsapp.com/send?phone=91${phone}&text=${encodedMsg}`;

    window.open(url, "_blank");
  };

  return (
    <Flex gap={2} align="center">
      {/* WhatsApp Button */}
      <Button
        bg="#25D366"
        color="white"
        _hover={{ bg: "#128C7E", transform: "translateY(-2px)" }}
        size="lg"
        fontWeight={600}
        borderRadius="full"
        onClick={handleWhatsAppClick}
        p={3}
        aria-label="WhatsApp Button"
      >
        <FaWhatsapp size={24} />
      </Button>

      {/* Enquire Button */}
      <Button
        bg={"brand.100"}
        _hover={{ bg: "brand.100", transform: "translateY(-2px)" }}
        color={"brand.200"}
        size="lg"
        fontWeight={600}
        fontSize="sm"
        onClick={onClick}
      >
        Enquire Now
      </Button>
    </Flex>
  );
};

export default HeroNavButton;
