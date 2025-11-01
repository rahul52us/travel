import { Icon } from "@chakra-ui/react";
import { 
  FaBed, FaUtensils, FaBinoculars, FaBus, FaHotel, FaMapMarkedAlt, 
  FaShip, FaTrain, FaQuestionCircle 
} from "react-icons/fa";
import { GrVisa } from "react-icons/gr";
import { GiCaveEntrance, GiMountaintop, GiVillage } from "react-icons/gi";
import { IconType } from "react-icons";
import { MdLocationCity } from "react-icons/md";
import { TbBuildingTunnel } from "react-icons/tb";

const keywordIcons: Record<string, IconType> = {
  hotel: FaHotel,
  "5-star": FaBed,
  "4 star": FaHotel,
  "3 star": FaHotel,
  breakfast: FaUtensils,
  lunch: FaUtensils,
  dinner: FaUtensils,
  sightseeing: FaMapMarkedAlt,
  tours: FaBinoculars,
  transfer: FaBus,
  airport: FaBus,
  eurail: FaTrain,
  boat: FaShip,
  cruise: FaShip,
  visa: GrVisa,
  caves: GiCaveEntrance,
  island: FaShip, // you can swap to something better if needed
  village: GiVillage,
  tower: FaBinoculars,
  hills:GiMountaintop,
  mountain:GiMountaintop,
  city:MdLocationCity,
  tunnel:TbBuildingTunnel
};

const PerkIcon = ({ type }: { type: string }) => {
  const normalized = type.toLowerCase();

  const matchedEntry = Object.entries(keywordIcons).find(([keyword]) =>
    normalized.includes(keyword)
  );

  const IconComponent = matchedEntry ? matchedEntry[1] : FaQuestionCircle;

  return <Icon as={IconComponent} color="blue.500" boxSize={5} />;
};

export default PerkIcon;





// import { Icon } from '@chakra-ui/react';
// import { IconType } from 'react-icons';
// import {
//     FaBed,
//     FaBinoculars,
//     FaBus,
//     FaHotel,
//     FaMapMarkedAlt,
//     FaQuestionCircle // Default icon
//     ,
//     FaShip,
//     FaTrain,
//     FaUtensils
// } from 'react-icons/fa';
// import { GiCaveEntrance } from 'react-icons/gi';
// import { GrVisa } from "react-icons/gr";


// const PerkIcon = ({ type }: { type: string }) => {
//   const icons: Record<string, IconType> = {
//     "5-star hotels": FaBed,
//     "Daily breakfast": FaUtensils,
//     "Guided tours": FaBinoculars,
//     "Airport transfer": FaBus,
//     "4 Star Hotel": FaHotel,
//     "4 Star Hotels": FaHotel,
//     "3 Star Hotel": FaHotel,
//     "Breakfast": FaUtensils,
//     "Lunch": FaUtensils,
//     "Dinner": FaUtensils,
//     "Sightseeing and Tours": FaMapMarkedAlt,
//     "Transfers and Boat": FaShip,
//     "Transfers and EURAIL": FaTrain,
//     "Daily Breakfast": FaUtensils,
//     "Airport Transfers": FaBus,
//     "Visa": GrVisa,
//     "VISA": GrVisa,
//     "Batu Caves":GiCaveEntrance
//   };

//   const IconComponent = icons[type] || FaQuestionCircle;
  
//   return <Icon as={IconComponent} color="blue.500" boxSize={5} />;
// };

// export default PerkIcon;