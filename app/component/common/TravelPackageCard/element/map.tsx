"use client"

import { Box } from "@chakra-ui/react"
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import "leaflet/dist/leaflet.css"
// import L from "leaflet"

// Fix for default marker icon
// delete (L.Icon.Default.prototype as any)._getIconUrl
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "/marker-icon-2x.png",
//   iconUrl: "/marker-icon.png",
//   shadowUrl: "/marker-shadow.png",
// })

interface MapProps {
  latitude: number
  longitude: number
}

export default function Map({ 
    // latitude, 
    // longitude
 }: MapProps) {
  return (
    <Box h="full" w="full">
      {/* <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: "100%", width: "100%" }}> */}
        {/* <TileLayer */}
          {/* url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" */}
          {/* attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' */}
        {/* /> */}
        {/* <Marker position={[latitude, longitude]}> */}
          {/* <Popup>Your destination is here!</Popup> */}
        {/* </Marker> */}
      {/* </MapContainer> */}
    </Box>
  )
}

