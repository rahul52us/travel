import { observer } from "mobx-react-lite";
import { useEffect, useState, useCallback } from "react";
import { Avatar, Box, Badge, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, Spinner, Center } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import stores from "../../../../store/stores";
import useDebounce from "../../../../component/config/component/customHooks/useDebounce";
import { tablePageLimit } from "../../../../component/config/utils/variable";
import CustomTable from "../../../../component/config/component/CustomTable/CustomTable";
import { formatDateTime } from "../../../../component/config/utils/dateUtils";

const LeadsTable = observer(({ onAdd, onEdit, onDelete, refreshTrigger }: any) => {
  const {
    userStore: { getAllUsers, therapist: leads },
    auth: { openNotification },
  } = stores;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLead, setSelectedLead] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 700);

  // Add debug logging
  console.log("=== LeadsTable Debug ===");
  console.log("leads object:", leads);
  console.log("leads.data:", leads?.data);
  console.log("leads.loading:", leads?.loading);
  console.log("leads.totalPages:", leads?.totalPages);
  console.log("currentPage:", currentPage);
  console.log("searchQuery:", searchQuery);
  console.log("========================");

  const applyGetAllLeads = useCallback(
    ({ page = 1, limit = tablePageLimit, reset = false }) => {
      const query: any = { page, limit, userType: "lead" };

      if (debouncedSearchQuery?.trim()) {
        query.search = debouncedSearchQuery.trim();
      }

      if (reset) {
        query.page = 1;
        query.limit = tablePageLimit;
      }

      console.log("Fetching leads with query:", query);
      console.log("Full stores object:", stores);
      console.log("userStore:", stores.userStore);

      getAllUsers(query)
        .then((response) => {
          console.log("getAllUsers SUCCESS response:", response);
          console.log("Response type:", typeof response);
          console.log("Response data:", response?.data);
        })
        .catch((err) => {
          console.error("getAllUsers CATCH error:", err);
          console.error("Error type:", typeof err);
          console.error("Error message:", err?.message);
          console.error("Full error object:", err);
          
          // Check if it's an authentication error
          if (err?.message === "Welcome to our app" || err?.response?.status === 401) {
            openNotification({
              type: "error",
              title: "Authentication Error",
              message: "Please log in again. Your session may have expired.",
            });
          } else {
            openNotification({
              type: "error",
              title: "Failed to fetch leads",
              message: err?.message || "Unknown error occurred. Check console for details.",
            });
          }
        });
    },
    [debouncedSearchQuery, getAllUsers, openNotification]
  );

  useEffect(() => {
    applyGetAllLeads({ page: currentPage, limit: tablePageLimit });
  }, [currentPage, debouncedSearchQuery, applyGetAllLeads]);

  useEffect(() => {
    if (refreshTrigger) {
      applyGetAllLeads({ page: currentPage, limit: tablePageLimit });
    }
  }, [refreshTrigger, currentPage, applyGetAllLeads]);

  const handleChangePage = (page: number) => setCurrentPage(page);
  
  const resetTableData = () => {
    setCurrentPage(1);
    setSearchQuery("");
    applyGetAllLeads({ reset: true });
  };

  const handleRowClick = (lead: any) => {
    setSelectedLead(lead);
    onOpen();
  };

  const LeadStatusBadge = ({ status }: { status: string }) => {
    const colorScheme =
      {
        fresh_leads: "blue",
        in_progress: "orange",
        converted: "green",
        lost: "red",
      }[status] || "gray";

    const label =
      {
        fresh_leads: "Fresh Lead",
        in_progress: "In Progress",
        converted: "Converted",
        lost: "Lost",
      }[status] || status;

    return (
      <Badge colorScheme={colorScheme} px={3} py={1} borderRadius="full" w="fit-content">
        {label}
      </Badge>
    );
  };

  const LeadsTableColumns = [
    { headerName: "S.No.", key: "sno", props: { row: { textAlign: "center" } } },
    { headerName: "Reference ID", key: "referenceId", props: { row: { textAlign: "center", fontWeight: 600 } } },
    { headerName: "Name", key: "name", props: { row: { textAlign: "center" } } },
    { headerName: "Contact", key: "contact", props: { row: { textAlign: "center" } } },
    { headerName: "Email", key: "email", props: { row: { textAlign: "center" } } },
    {
      headerName: "Lead Status",
      key: "leadStatus",
      type: "component",
      metaData: {
        component: (dt: any) => (
          <Stack direction="row" flexWrap="wrap" justify="center">
            <LeadStatusBadge status={dt.leadStatus} />
          </Stack>
        ),
      },
      props: { row: { textAlign: "center" } },
    },
    { headerName: "Departure", key: "departure", props: { row: { textAlign: "center" } } },
    { headerName: "Destination", key: "destination", props: { row: { textAlign: "center" } } },
    {
      headerName: "Departure Date",
      key: "departureDate",
      type: "component",
      metaData: {
        component: (dt: any) => <Box>{dt?.departureDate ? new Date(dt.departureDate).toLocaleDateString() : "-"}</Box>,
      },
      props: { row: { textAlign: "center", minW: 120 } },
    },
    {
      headerName: "Duration",
      key: "duration",
      type: "component",
      metaData: {
        component: (dt: any) => <Text>{dt.duration ? `${dt.duration} Days` : '-'}</Text>,
      },
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Budget",
      key: "budget",
      type: "component",
      metaData: {
        component: (dt: any) => <Text>₹{dt.budget || '-'}</Text>,
      },
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Guests",
      key: "noOfGuests",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Created At",
      key: "createdAt",
      type: "component",
      metaData: { component: (dt: any) => <Box>{formatDateTime(dt?.createdAt)}</Box> },
      props: { row: { textAlign: "center", minW: 120 } },
    },
    {
      headerName: "Actions",
      key: "table-actions",
      type: "table-actions",
      props: { row: { textAlign: "center", minW: 180 } },
    },
  ];

  // Check if data exists and is an array
  const tableData = Array.isArray(leads?.data) 
    ? leads.data.map((lead: any, index: number) => ({
        ...lead,
        sno: (currentPage - 1) * tablePageLimit + index + 1,
      }))
    : [];

  console.log("Processed tableData:", tableData);

  // Show loading state
  if (leads?.loading && tableData.length === 0) {
    return (
      <Box p={4}>
        <Center h="400px">
          <Stack align="center" spacing={4}>
            <Spinner size="xl" color="teal.500" thickness="4px" />
            <Text color="gray.600">Loading leads...</Text>
          </Stack>
        </Center>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <CustomTable
        title="Leads"
        data={tableData}
        columns={LeadsTableColumns}
        actions={{
          actionBtn: {
            addKey: { showAddButton: true, function: () => onAdd() },
            editKey: { showEditButton: true, function: (e: any) => onEdit(e) },
            viewKey: { showViewButton: true, function: (e: any) => handleRowClick(e) },
            deleteKey: { showDeleteButton: true, function: (e: any) => onDelete(e) },
          },
          search: {
            show: true,
            searchValue: searchQuery,
            onSearchChange: (e: any) => setSearchQuery(e.target.value),
          },
          resetData: { show: true, text: "Reset Data", function: resetTableData },
          pagination: {
            show: true,
            onClick: handleChangePage,
            currentPage: currentPage,
            totalPages: leads?.totalPages || 1,
          },
        }}
        loading={leads?.loading}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgGradient="linear(to-r, teal.400, blue.400)" color="white">
            <Flex align="center" gap={3}>
              <GiCommercialAirplane size="24px" />
              Lead Details
            </Flex>
          </DrawerHeader>

          {selectedLead && (
            <DrawerBody>
              <Box position="relative">
                <Box textAlign="center">
                  <Text fontSize="2xl" fontWeight="bold">
                    {selectedLead.name}
                  </Text>
                  <Text color="gray.500" mb={2}>{selectedLead.referenceId}</Text>
                  <LeadStatusBadge status={selectedLead.leadStatus} />

                  <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={6}>
                    <GridItem>
                      <Box bg="teal.50" p={3} borderRadius="lg">
                        <Text fontSize="sm" color="gray.500">Duration</Text>
                        <Text fontWeight="bold">{selectedLead.duration} Days</Text>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Box bg="teal.50" p={3} borderRadius="lg">
                        <Text fontSize="sm" color="gray.500">Budget</Text>
                        <Text fontWeight="bold">₹{selectedLead.budget}</Text>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Box bg="blue.50" p={3} borderRadius="lg">
                        <Text fontSize="sm" color="gray.500">Guests</Text>
                        <Text fontWeight="bold">{selectedLead.noOfGuests}</Text>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Box bg="blue.50" p={3} borderRadius="lg">
                        <Text fontSize="sm" color="gray.500">Source</Text>
                        <Text fontWeight="bold">{selectedLead.source || 'N/A'}</Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </Box>

                <Tabs mt={6} variant="soft-rounded" colorScheme="teal">
                  <TabList>
                    <Tab _selected={{ color: "white", bg: "teal.400" }}>Contact</Tab>
                    <Tab _selected={{ color: "white", bg: "teal.400" }}>Travel</Tab>
                    <Tab _selected={{ color: "white", bg: "teal.400" }}>Notes</Tab>
                    <Tab _selected={{ color: "white", bg: "teal.400" }}>Follow Up</Tab>
                  </TabList>

                  <TabPanels mt={2}>
                    <TabPanel>
                      <Stack spacing={4}>
                        <Box>
                          <Text fontSize="sm" color="gray.500" fontWeight="600">Email</Text>
                          <Text>{selectedLead.email}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500" fontWeight="600">Contact</Text>
                          <Text>{selectedLead.contact}</Text>
                        </Box>
                      </Stack>
                    </TabPanel>

                    <TabPanel>
                      <Stack spacing={4}>
                        <Flex align="center" gap={3} p={3} bg="gray.50" borderRadius="md">
                          <FaMapMarkerAlt color="#319795" />
                          <Box>
                            <Text fontSize="sm" color="gray.500">Departure</Text>
                            <Text fontWeight="500">{selectedLead.departure}</Text>
                          </Box>
                        </Flex>
                        <Flex align="center" gap={3} p={3} bg="gray.50" borderRadius="md">
                          <FaMapMarkerAlt color="#319795" />
                          <Box>
                            <Text fontSize="sm" color="gray.500">Destination</Text>
                            <Text fontWeight="500">{selectedLead.destination}</Text>
                          </Box>
                        </Flex>
                        <Flex align="center" gap={3} p={3} bg="gray.50" borderRadius="md">
                          <FaCalendarAlt color="#319795" />
                          <Box>
                            <Text fontSize="sm" color="gray.500">Departure Date</Text>
                            <Text fontWeight="500">
                              {selectedLead.departureDate 
                                ? new Date(selectedLead.departureDate).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                  })
                                : 'N/A'}
                            </Text>
                          </Box>
                        </Flex>
                      </Stack>
                    </TabPanel>

                    <TabPanel>
                      <Text color="gray.600" lineHeight="tall">
                        {selectedLead.notes || 'No notes available'}
                      </Text>
                    </TabPanel>

                    <TabPanel>
                      <Stack spacing={4}>
                        <Box>
                          <Text fontSize="sm" color="gray.500" fontWeight="600">Follow Up Date</Text>
                          <Text>
                            {selectedLead.followUpDate 
                              ? new Date(selectedLead.followUpDate).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })
                              : 'Not scheduled'}
                          </Text>
                        </Box>
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

export default LeadsTable;