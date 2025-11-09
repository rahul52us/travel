import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  FaBed,
  FaBinoculars,
  FaBus,
  FaHotel,
  FaMapMarkedAlt,
  FaQuestionCircle // Default icon
  ,

  FaShip,
  FaTrain,
  FaUtensils
} from 'react-icons/fa';
import { GrVisa } from "react-icons/gr";


const PerkIcon = ({ type }: { type: string }) => {
  const icons: Record<string, IconType> = {
    "5-star hotels": FaBed,
    "Daily breakfast": FaUtensils,
    "Guided tours": FaBinoculars,
    "Airport transfer": FaBus,
    "4 Star Hotel": FaHotel,
    "4 Star Hotels": FaHotel,
    "3 Star Hotel": FaHotel,
    "Breakfast": FaUtensils,
    "Lunch": FaUtensils,
    "Dinner": FaUtensils,
    "Sightseeing and Tours": FaMapMarkedAlt,
    "Transfers and Boat": FaShip,
    "Transfers and EURAIL": FaTrain,
    "Daily Breakfast": FaUtensils,
    "Airport Transfers": FaBus,
    "Visa": GrVisa,
    "VISA": GrVisa,
  };

  const IconComponent = icons[type] || FaQuestionCircle;
  
  return <Icon as={IconComponent} color="brand.100" boxSize={5} />;
};

export default PerkIcon;