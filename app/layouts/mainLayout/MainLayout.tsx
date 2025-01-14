"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./component/Header/Header";

const MainLayout = ({ children }: any) => {
  return (
    <Box>
      <Header />
      <Box>
      {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
