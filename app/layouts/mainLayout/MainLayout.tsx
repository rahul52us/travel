"use client";

import { Box } from "@chakra-ui/react";
import React, { ReactNode, useEffect } from "react";
import Header from "./component/Header/Header";
import { Footer } from "./component/Footer/Footer";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";
import DelayedModal from "../../component/common/Modal/DelayModal.tsx/DelayedModal";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = observer(({ children }) => {
  const {destinationStore : {getDestinations}, locationStore : {getLocations}} = stores

  useEffect(() => {
    getLocations({page : 1, limit : 20})
    getDestinations({page : 1, limit : 15})
  },[getDestinations, getLocations])


  return (
    <Box>
      <Header />
      <Box>
        {children}
      </Box>
      <DelayedModal />
      <Footer />
    </Box>
  );
});

export default MainLayout;
