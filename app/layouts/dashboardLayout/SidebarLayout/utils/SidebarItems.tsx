import {
  FaChartPie,
  FaUsers,
  FaAddressBook,
  FaMapMarkedAlt,
  FaGlobeAsia,
  FaLandmark,
  FaCommentAlt,
  FaCogs,
  FaRoute,
  FaHotel,
} from "react-icons/fa";
import { CalendarIcon } from "@chakra-ui/icons";
import { dashboard } from "../../../../config/utils/routes";

interface SidebarItem {
  id: number;
  name: string;
  icon: any;
  url: string;
  role?: string[];
  children?: SidebarItem[];
}

const sidebarDatas: SidebarItem[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: <FaChartPie />,
    url: "/dashboard",
    role: ["user"],
  },
  {
    id: 2,
    name: "Users",
    icon: <FaUsers />,
    url: "/dashboard/users",
    role: ["user"],
  },
  {
    id: 9,
    name: "Itinerary",
    icon: <FaRoute />,
    url: "/dashboard/itinerary",
    role: ["user"],
  },
  {
    id: 11,
    name: "Hotels",
    icon: <FaHotel />,
    url: "/dashboard/hotel",
    role: ["user"],
  },
  // {
  //   id: 9,
  //   name: "Booking",
  //   icon: <FaCommentAlt />,
  //   url: "/dashboard/bookings",
  //   role: ["user"],
  // },
  // {
  //   id: 5,
  //   name: "Page Sections",
  //   icon: <FaLayerGroup />,
  //   url: "/dashboard/content-section",
  //   role: ["user"],
  // },
  // Blogs
  // {
  //   id: 501,
  //   name: "Blogs",
  //   icon: <FaBlog />,
  //   url: dashboard.blog.index,
  //   role: ["user", "superadmin", "manager", "admin"],
  //   children: [
  //     {
  //       id: 502,
  //       name: "Index",
  //       icon: <CalendarIcon />,
  //       url: `${dashboard.blog.index}`,
  //       role: ["user", "superadmin", "manager", "admin"],
  //     },
  //     {
  //       id: 503,
  //       name: "Create",
  //       icon: <FaPlusCircle />,
  //       url: `${dashboard.blog.create}`,
  //       role: ["superadmin", "manager", "admin"],
  //     },
  //   ],
  // },
];

export const sidebarFooterData: SidebarItem[] = [
  {
    id: 34,
    name: "Settings",
    icon: <FaCogs />,
    url: "/profile",
    role: ["user", "admin", "superadmin", "manager"],
  },
];

const getSidebarDataByRole = (role: string[] = ["user"]): SidebarItem[] => {
  const filterByRole = (items: SidebarItem[]): SidebarItem[] => {
    return items
      .filter((item) => !item.role || item.role.some((r) => role.includes(r)))
      .map((item) => ({
        ...item,
        children: item.children ? filterByRole(item.children) : undefined,
      }));
  };
  return filterByRole(sidebarDatas);
};

// Example usage
const userRole = ["user"]; // Example role
const sidebarData = getSidebarDataByRole(userRole);

export { sidebarData, getSidebarDataByRole };
