"use client";
import { observer } from "mobx-react-lite";
import React from "react";
import SightSeeingDestination from "../page";
import { useParams } from "next/navigation";
const page = observer(() => {
   const params =  useParams()
  return <SightSeeingDestination location={params.locations}/>;
});

export default page;
