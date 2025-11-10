import { observer } from "mobx-react-lite";
import { useEffect, useState, useCallback } from "react";
import {
  Avatar,
  Box,
  Badge,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
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
import { FaBrain, FaUserFriends, FaVideo } from "react-icons/fa";
import { GiPsychicWaves } from "react-icons/gi";
import Link from "next/link";
import stores from "../../../../store/stores";
import useDebounce from "../../../../component/config/component/customHooks/useDebounce";
import { tablePageLimit } from "../../../../component/config/utils/variable";
import CustomTable from "../../../../component/config/component/CustomTable/CustomTable";
import { formatDateTime } from "../../../../component/config/utils/dateUtils";

const UsersTable = observer(({ onAdd, onEdit, onDelete }: any) => {
  const {
    userStore: { getAllUsers, therapist },
    auth: { openNotification },
  } = stores;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  const applyGetAllTherapists = useCallback(
    ({ page = 1, limit = tablePageLimit, reset = false }) => {
      const query: any = { page, limit };

      if (debouncedSearchQuery?.trim()) {
        query.search = debouncedSearchQuery.trim();
      }

      if (reset) {
        query.page = 1;
        query.limit = tablePageLimit;
      }

      getAllUsers(query)
        .then(() => {})
        .catch((err) => {
          openNotification({
            type: "error",
            title: "Failed to get therapists",
            message: err?.message,
          });
        });
    },
    [debouncedSearchQuery, getAllUsers, openNotification]
  );

  useEffect(() => {
    applyGetAllTherapists({ page: currentPage, limit: tablePageLimit });
  }, [currentPage, debouncedSearchQuery, applyGetAllTherapists]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const resetTableData = () => {
    setCurrentPage(1);
    setSearchQuery("");
    applyGetAllTherapists({ reset: true });
  };

  const handleRowClick = (user: any) => {
    setSelectedTherapist(user);
    onOpen();
  };

  const AvailabilityBadge = ({ type }: { type: string }) => (
    <Badge
      colorScheme={type === "online" ? "green" : "blue"}
      px={3}
      py={1}
      borderRadius="full"
      w={"fit-content"}
      display="flex"
      alignItems="center"
      gap={2}
    >
      {type === "online" ? <FaVideo /> : <FaUserFriends />}
      {type}
    </Badge>
  );

  const TherapistTableColumns = [
    {
      headerName: "S.No.",
      key: "sno",
      props: { row: { textAlign: "center" } },
    },
    {
      headerName: "Pic",
      key: "user",
      type: "component",
      metaData: {
        component: (dt: any) => (
          <Box m={1}>
            <Avatar src={dt.pic?.url} name={dt.pic?.name} size="sm" />
          </Box>
        ),
      },
      props: {
        row: { minW: 120, textAlign: "center" },
        column: { textAlign: "center" },
      },
    },
    {
      headerName: "Username",
      key: "username",
      props: { row: { textAlign: "center" } },
    },
    {
      headerName: "Role",
      key: "role",
      props: { row: { textAlign: "center" } },
    },
    {
      headerName: "Bio",
      key: "bio",
      type: "tooltip",
      function: (dt: any) =>
        dt.profileDetails?.personalInfo?.bio ? (
          <Tooltip
            label={dt.profileDetails.personalInfo.bio}
            hasArrow
            zIndex={9999}
          >
            <span>{dt.profileDetails.personalInfo.bio.slice(0, 50)}</span>
          </Tooltip>
        ) : (
          "-"
        ),
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
        title="Users"
        data={
          therapist.data?.map((t: any, index: number) => ({
            ...t,
            sno: index + 1,
          })) || []
        }
        columns={TherapistTableColumns}
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
            totalPages: therapist.totalPages || 1,
          },
        }}
        loading={therapist.loading}
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
              User Profile
            </Flex>
          </DrawerHeader>

          {selectedTherapist && (
            <DrawerBody>
  <Box position="relative">
    <Flex justify="center">
      <Image
        src={selectedTherapist?.pic?.url}
        h="160px"
        objectFit="cover"
        rounded="xl"
        alt={`${selectedTherapist?.name || "Therapist"} profile image`}
      />
    </Flex>

    <Box textAlign="center" mt={3}>
      <Text fontSize="2xl" fontWeight="bold">
        {selectedTherapist?.profileDetails?.personalInfo?.name ||
          selectedTherapist?.name ||
          "N/A"}
      </Text>
    </Box>

    <Tabs mt={6} variant="soft-rounded" colorScheme="teal">
      <TabList flexWrap="wrap" gap={2}>
        {["Bio", "Contact"].map(
          (tab, i) => (
            <Tab key={i} _selected={{ color: "white", bg: "blue.400" }}>
              {tab}
            </Tab>
          )
        )}
      </TabList>

      <TabPanels mt={2}>
        {/* Bio */}
        <TabPanel>
          <Text color="gray.600" lineHeight="tall">
            {selectedTherapist?.profileDetails?.personalInfo?.bio ||
              "No bio available"}
          </Text>
        </TabPanel>

        {/* Expertise */}

        {/* Availability */}

        {/* Contact */}
        <TabPanel>
          <Stack spacing={3}>
            <Text fontSize="sm" color="gray.600">
              <strong>Email:</strong> {selectedTherapist?.username || "N/A"}
            </Text>
            <Text fontSize="sm" color="gray.600">
              <strong>Phone:</strong>{" "}
              {selectedTherapist?.profileDetails?.personalInfo?.phoneNumber ||
                "Not provided"}
            </Text>
            <Text fontSize="sm" color="gray.600">
              <strong>Address:</strong>{" "}
              {selectedTherapist?.profileDetails?.personalInfo?.address ||
                "Not available"}
            </Text>
          </Stack>
        </TabPanel>

        {/* Link */}
        <TabPanel>
          {selectedTherapist?.profileDetails?.personalInfo?.link ? (
            <Link
              href={selectedTherapist.profileDetails.personalInfo.link}
              target="_blank"
              rel="noopener noreferrer"
              color="blue.500"
            >
              {selectedTherapist.profileDetails.personalInfo.link}
            </Link>
          ) : (
            <Text color="gray.500">No link provided</Text>
          )}
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

export default UsersTable;