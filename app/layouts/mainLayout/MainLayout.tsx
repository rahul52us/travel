"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";

const MainLayout = ({ children }: any) => {
  return (
    <Box>
      <Header />
      <Box>
      {children}
      </Box>
      <Footer/>
    </Box>
  );
};

export default MainLayout;
