import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
    FaBed,
    FaBinoculars,
    FaBus,
    FaHotel,
    FaMapMarkedAlt,
    FaMountain,
    FaPlane,
    FaQuestionCircle,
    FaShip,
    FaSnowflake,
    FaTrain,
    FaUmbrellaBeach,
    FaUtensils,
    FaWater,
} from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import {
    MdEmojiFoodBeverage,
    MdOutlineHotel,
    MdPool,
    MdTempleHindu,
} from "react-icons/md";

const PerkIcon = ({ type }: { type: string }) => {
  const lower = type.toLowerCase();

  // Substring-based matching
  const iconMap: { keyword: string; icon: IconType }[] = [
    // 🏨 Hotels / Stay
    { keyword: "5 star", icon: FaBed },
    { keyword: "4 star", icon: FaHotel },
    { keyword: "3 star", icon: FaHotel },
    { keyword: "hotel", icon: MdOutlineHotel },
    { keyword: "ryokan", icon: FaBed },
    { keyword: "stay", icon: FaHotel },
    { keyword: "comfortable", icon: MdOutlineHotel },

    // 🍽️ Food
    { keyword: "breakfast", icon: MdEmojiFoodBeverage },
    { keyword: "lunch", icon: FaUtensils },
    { keyword: "dinner", icon: FaUtensils },
    { keyword: "meals", icon: FaUtensils },
    { keyword: "kaiseki", icon: FaUtensils },
    { keyword: "tea", icon: FaBinoculars },

    // 🚆 Transport
    { keyword: "airport", icon: FaPlane },
    { keyword: "transfer", icon: FaBus },
    { keyword: "eurail", icon: FaTrain },
    { keyword: "train", icon: FaTrain },
    { keyword: "bus", icon: FaBus },
    { keyword: "flight", icon: FaPlane },
    { keyword: "cruise", icon: FaShip },
    { keyword: "ferry", icon: FaShip },
    { keyword: "boat", icon: FaShip },

    // 🎟️ Activities / Tours
    { keyword: "tour", icon: FaMapMarkedAlt },
    { keyword: "guided", icon: FaBinoculars },
    { keyword: "sightseeing", icon: FaMapMarkedAlt },
    { keyword: "entrance", icon: IoTicketOutline },
    { keyword: "fees", icon: IoTicketOutline },
    { keyword: "manager", icon: GrUserManager },

    // ⚽ Adventure
    { keyword: "water sport", icon: FaWater },
    { keyword: "adventure", icon: FaMountain },
    { keyword: "trek", icon: FaMountain },
    { keyword: "hike", icon: FaMountain },

    // 🛕 Religious / Cultural
    { keyword: "temple", icon: MdTempleHindu },
    { keyword: "shrine", icon: MdTempleHindu },
    { keyword: "heritage", icon: FaMapMarkedAlt },

    // 🌴 Leisure / Vacation
    { keyword: "beach", icon: FaUmbrellaBeach },
    { keyword: "pool", icon: MdPool },
    { keyword: "mountain", icon: FaMountain },
    { keyword: "island", icon: FaUmbrellaBeach },
    { keyword: "resort", icon: FaHotel },
    { keyword: "ice", icon: FaSnowflake },

    // 💱 Taxes / Extras
    { keyword: "gst", icon: HiOutlineReceiptTax },
  ];

  const matched = iconMap.find((item) => lower.includes(item.keyword));

  const SelectedIcon = matched ? matched.icon : FaQuestionCircle;

  return <Icon as={SelectedIcon} color="brand.100" boxSize={4} />;
};

export default PerkIcon;
