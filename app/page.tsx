"use client";
import React from "react";
import Home from "./(main)/home/page";
import DelayedModal from "./component/common/Modal/DelayModal.tsx/DelayedModal";
const page = () => {
  return (
    <>
      <Home />
      <DelayedModal />
    </>
  );
};

export default page;
