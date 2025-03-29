"use client";
import { Flex } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../../../../store/stores";
import NavItem from "../element/NavItem";
import { formatTitle } from "../../../../../config/utils/function";

interface NavItemType {
  title: string;
  link?: string;
  subItems?: { title: string; link: string }[];
}
interface NavItemsLayoutProps {
  onClose?: () => void;
}

const NavItemsLayout: React.FC<NavItemsLayoutProps> = observer(({ onClose }) => {
  const { destinationStore: { destination } } = stores;

  // Construct nav items dynamically
  const dynamicNavItems: NavItemType[] = useMemo(() => {
    return [
      { title: "Home", link: "/" },
      { title: "About Us", link: "/about-us" },
      {
        title: "Destinations",
        subItems: destination.data?.map((dest: { destination: string }) => ({
          title: formatTitle(dest.destination),
          link: `/destinations/${dest.destination}`,
        })) || [],
      },
      { title: "Sightseeing", link: "/sightseeing" },
      { title: "Blogs", link: "/blogs" },
      { title: "Testimonials", link: "/testimonials" },
      { title: "Contact Us", link: "/contact-us" },
    ];
  }, [destination.data]);

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={{ base: 4, md: 6 }}
      alignItems={{ base: "center", md: "center" }}
      justifyContent="center"
      wrap={{ base: "wrap", md: "nowrap" }}
    >
      {dynamicNavItems.map((item) => (
        <NavItem item={item} key={item.title} onClose={onClose} />
      ))}
    </Flex>
  );
});

export default NavItemsLayout;
