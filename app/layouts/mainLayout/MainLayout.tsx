"use client";

import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";
import { headerLargeHeight, headerSmallHeight } from "./component/Header/utils/constant";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box mt={{ base: headerSmallHeight, lg: headerLargeHeight }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
