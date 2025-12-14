"use client";
import { Button } from "@chakra-ui/react";
import React from "react";

const HeroNavButton = () => {
  const handleClick = () => {
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
    <Button
      bg={"brand.100"}
      _hover={{ bg: "brand.100", transform: "translateY(-2px)" }}
      color={"brand.200"}
      size="lg"
      fontWeight={600}
      fontSize="sm"
      onClick={handleClick}
    >
      Enquire Now
    </Button>
  );
};

export default HeroNavButton;
