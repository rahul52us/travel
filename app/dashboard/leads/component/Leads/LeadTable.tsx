import { observer } from "mobx-react-lite";
import { useEffect, useState, useCallback } from "react";
import {
  Avatar,
  Badge,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { GiPsychicWaves } from "react-icons/gi";
import Link from "next/link";
import stores from "../../../../store/stores";
import useDebounce from "../../../../component/config/component/customHooks/useDebounce";
import { tablePageLimit } from "../../../../component/config/utils/variable";
import CustomTable from "../../../../component/config/component/CustomTable/CustomTable";
import { formatDateTime } from "../../../../component/config/utils/dateUtils";

const LeadTable = observer(({ onAdd, onEdit, onDelete }: any) => {
  const {
    leadStore: { getAllLeads, leads },
    auth: { openNotification },
  } = stores;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLead, setSelectedTherapist] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const appGetAllUsers = useCallback(
    ({ page = 1, limit = tablePageLimit, reset = false }) => {
      const query: any = { page, limit };

      if (debouncedSearchQuery?.trim()) {
        query.search = debouncedSearchQuery.trim();
      }

      if (reset) {
        query.page = 1;
        query.limit = tablePageLimit;
      }

      getAllLeads(query)
        .then(() => {})
        .catch((err) => {
          openNotification({
            type: "error",
            title: "Failed to get leads",
            message: err?.message,
          });
        });
    },
    [debouncedSearchQuery, getAllLeads, openNotification]
  );

  useEffect(() => {
    appGetAllUsers({ page: currentPage, limit: tablePageLimit });
  }, [currentPage, debouncedSearchQuery, appGetAllUsers]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const resetTableData = () => {
    setCurrentPage(1);
    setSearchQuery("");
    appGetAllUsers({ reset: true });
  };

  const handleRowClick = (user: any) => {
    setSelectedTherapist(user);
    onOpen();
  };

  const LeadsTableColumn = [
  {
    headerName: "S.No.",
    key: "sno",
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Name",
    key: "name",
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Email",
    key: "email",
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Phone",
    key: "phoneNumber",
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Departure → Destination",
    key: "route",
    type: "component",
    metaData: {
      component: (dt: any) => (
        <Box textAlign="center">
          <Text fontWeight="medium">
            {dt.departure || "-"} → {dt.destination || "-"}
          </Text>
        </Box>
      ),
    },
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Guests",
    key: "numberOfGuests",
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Budget",
    key: "budget",
    type: "component",
    metaData: {
      component: (dt: any) => (
        <Box textAlign="center">
          <Text fontWeight="medium">
            ₹{dt.budget || 0}{" "}
            <Text as="span" color="gray.500" fontSize="sm">
              ({dt.budgetType === "per_person" ? "Per Person" : "Total"})
            </Text>
          </Text>
        </Box>
      ),
    },
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Created By",
    key: "createdBy",
    type: "component",
    metaData: {
      component: (dt: any) => (
        <Box textAlign="center">
          <Tooltip
            label={dt.createdBy?.username}
            hasArrow
            zIndex={9999}
          >
            <Text>{dt.createdBy?.name || "-"}</Text>
          </Tooltip>
        </Box>
      ),
    },
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Status",
    key: "status",
    type: "component",
    metaData: {
      component: (dt: any) => (
        <Box
          textAlign="center"
          color={
            dt.status === "pending"
              ? "orange.500"
              : dt.status === "approved"
              ? "green.500"
              : "red.500"
          }
          fontWeight="semibold"
        >
          {dt.status || "-"}
        </Box>
      ),
    },
    props: { row: { textAlign: "center" } },
  },
  {
    headerName: "Created At",
    key: "createdAt",
    type: "component",
    metaData: {
      component: (dt: any) => (
        <Box m={1}>{formatDateTime(dt?.createdAt)}</Box>
      ),
    },
    props: {
      row: { minW: 120, textAlign: "center" },
      column: { textAlign: "center" },
    },
  },
  {
    headerName: "Actions",
    key: "table-actions",
    type: "table-actions",
    props: {
      row: { minW: 180, textAlign: "center" },
      column: { textAlign: "center" },
    },
  },
];

  return (
    <Box p={4}>
      <CustomTable
        title="Leads"
        data={
          leads.data?.map((t: any, index: number) => ({
            ...t,
            sno: index + 1,
          })) || []
        }
        columns={LeadsTableColumn}
        actions={{
          actionBtn: {
            addKey: {
              showAddButton: true,
              function: () => {
                onAdd();
              },
            },
            editKey: {
              showEditButton: true,
              function: (e: any) => {
                onEdit(e);
              },
            },
            viewKey: {
              showViewButton: true,
              function: (e: any) => {
                handleRowClick(e);
              },
            },
            deleteKey: {
              showDeleteButton: true,
              function: (e: any) => {
                onDelete(e);
              },
            },
          },
          search: {
            show: true,
            searchValue: searchQuery,
            onSearchChange: (e: any) => setSearchQuery(e.target.value),
          },
          resetData: {
            show: true,
            text: "Reset Data",
            function: resetTableData,
          },
          pagination: {
            show: true,
            onClick: handleChangePage,
            currentPage: currentPage,
            totalPages: leads.totalPages || 1,
          },
        }}
        loading={leads.loading}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bgGradient="linear(to-r, blue.400, purple.400)"
            color="white"
          >
            <Flex align="center" gap={3}>
              <GiPsychicWaves size="24px" />
              Lead View
            </Flex>
          </DrawerHeader>

          {selectedLead && (
          <DrawerBody>
  <Box position="relative">
    {/* 🧍 Lead Info Header */}
    <Box textAlign="center" mt={2}>
      <Text fontSize="2xl" fontWeight="bold" color="gray.800">
        {selectedLead?.name || "N/A"}
      </Text>
      <Text fontSize="sm" color="gray.500" mt={1}>
        Reference ID: {selectedLead?.referenceId || "N/A"}
      </Text>
      <Badge
        colorScheme={
          selectedLead?.status === "pending"
            ? "yellow"
            : selectedLead?.status === "approved"
            ? "green"
            : "gray"
        }
        mt={2}
      >
        {selectedLead?.status || "N/A"}
      </Badge>
    </Box>

    {/* 🧭 Tabs for Lead Details */}
    <Tabs mt={6} variant="soft-rounded" colorScheme="blue" isFitted>
      <TabList flexWrap="wrap" gap={2}>
        {["Overview", "Contact", "Trip Info", "Created Info"].map((tab, i) => (
          <Tab key={i} _selected={{ color: "white", bg: "blue.500" }}>
            {tab}
          </Tab>
        ))}
      </TabList>

      <TabPanels mt={3}>
        {/* 🌍 Overview */}
        <TabPanel>
          <Stack spacing={3} fontSize="sm" color="gray.700">
            <Text>
              <strong>Destination:</strong> {selectedLead?.destination || "N/A"}
            </Text>
            <Text>
              <strong>Departure:</strong> {selectedLead?.departure || "N/A"}
            </Text>
            <Text>
              <strong>Duration:</strong> {selectedLead?.duration || "N/A"}
            </Text>
            <Text>
              <strong>Number of Guests:</strong> {selectedLead?.numberOfGuests || "N/A"}
            </Text>
          </Stack>
        </TabPanel>

        {/* ☎️ Contact Info */}
        <TabPanel>
          <Stack spacing={3} fontSize="sm" color="gray.700">
            <Text>
              <strong>Email:</strong> {selectedLead?.email || "N/A"}
            </Text>
            <Text>
              <strong>Phone:</strong> {selectedLead?.phoneNumber || "N/A"}
            </Text>
          </Stack>
        </TabPanel>

        {/* ✈️ Trip Info */}
        <TabPanel>
          <Stack spacing={3} fontSize="sm" color="gray.700">
            <Text>
              <strong>Departure Date:</strong>{" "}
              {selectedLead?.departureDate
                ? new Date(selectedLead.departureDate).toLocaleDateString()
                : "N/A"}
            </Text>
            <Text>
              <strong>Budget:</strong> ₹{selectedLead?.budget || "N/A"}{" "}
              ({selectedLead?.budgetType || "N/A"})
            </Text>
          </Stack>
        </TabPanel>

        {/* 🕓 Created Info */}
        <TabPanel>
          <Stack spacing={3} fontSize="sm" color="gray.700">
            <Text>
              <strong>Created By:</strong>{" "}
              {selectedLead?.createdBy?.name || "N/A"}
            </Text>
            <Text>
              <strong>Username:</strong>{" "}
              {selectedLead?.createdBy?.username || "N/A"}
            </Text>
            <Text>
              <strong>Created At:</strong>{" "}
              {selectedLead?.createdAt
                ? new Date(selectedLead.createdAt).toLocaleString()
                : "N/A"}
            </Text>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
</DrawerBody>

          )}
        </DrawerContent>
      </Drawer>
    </Box>
  );
});

export default LeadTable;