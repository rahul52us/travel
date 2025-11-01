import { observer } from "mobx-react-lite";
import { useEffect, useState, useCallback } from "react";
import { Avatar, Box, Badge, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormControl, FormLabel, Grid, GridItem, Image, Input, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import { FaBrain, FaUserFriends, FaVideo } from "react-icons/fa";
import { GiPsychicWaves } from "react-icons/gi";
import Link from "next/link";
import stores from "../../../../store/stores";
import useDebounce from "../../../../component/config/component/customHooks/useDebounce";
import CustomTable from "../../../../component/config/component/CustomTable/CustomTable";
import { tablePageLimit } from "../../../../component/config/utils/variable";

const TherapistsTable = observer(({ onAdd, onEdit }: any) => {
  const {
    userStore: { getAllUsers, therapist },
    auth: { openNotification },
  } = stores;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  // New filter states
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [leadPriority, setLeadPriority] = useState("all");
  const [leadStatus, setLeadStatus] = useState("");
  const [leadSubStatus, setLeadSubStatus] = useState("all");
  const [leadSource, setLeadSource] = useState("all");
  const [assignedTo, setAssignedTo] = useState("all");
  const [enquiryType, setEnquiryType] = useState("");
  const [tags, setTags] = useState("all");
  const [leadNumber, setLeadNumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [limit, setLimit] = useState("10");
  const [tableSearchQuery, setTableSearchQuery] = useState("");

  const applyGetAllTherapists = useCallback(
    ({ page = 1, limit = tablePageLimit, reset = false }) => {
      const query: any = { page, limit };

      if (debouncedSearchQuery?.trim()) {
        query.search = debouncedSearchQuery.trim();
      }

      // Add new filter parameters
      if (fromDate) query.fromDate = fromDate;
      if (toDate) query.toDate = toDate;
      if (leadPriority && leadPriority !== "all") query.leadPriority = leadPriority;
      if (leadStatus) query.leadStatus = leadStatus;
      if (leadSubStatus && leadSubStatus !== "all") query.leadSubStatus = leadSubStatus;
      if (leadSource && leadSource !== "all") query.leadSource = leadSource;
      if (assignedTo && assignedTo !== "all") query.assignedTo = assignedTo;
      if (enquiryType) query.enquiryType = enquiryType;
      if (tags && tags !== "all") query.tags = tags;
      if (leadNumber) query.leadNumber = leadNumber;
      if (firstname) query.firstname = firstname;
      if (lastname) query.lastname = lastname;
      if (mobileNumber) query.mobileNumber = mobileNumber;
      if (emailId) query.emailId = emailId;

      if (reset) {
        query.page = 1;
        query.limit = tablePageLimit;
      }

      getAllUsers(query)
        .then(() => { })
        .catch((err) => {
          openNotification({
            type: "error",
            title: "Failed to get leads",
            message: err?.message,
          });
        });
    },
    [debouncedSearchQuery, fromDate, toDate, leadPriority, leadStatus, leadSubStatus, leadSource, assignedTo, enquiryType, tags, leadNumber, firstname, lastname, mobileNumber, emailId, getAllUsers, openNotification]
  );

  useEffect(() => {
    applyGetAllTherapists({ page: currentPage, limit: tablePageLimit });
  }, [currentPage, debouncedSearchQuery, applyGetAllTherapists]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    applyGetAllTherapists({ page: 1, limit: parseInt(limit) || tablePageLimit });
  };

  const resetTableData = () => {
    setCurrentPage(1);
    setSearchQuery("");
    setFromDate("");
    setToDate("");
    setLeadPriority("all");
    setLeadStatus("");
    setLeadSubStatus("all");
    setLeadSource("all");
    setAssignedTo("all");
    setEnquiryType("");
    setTags("all");
    setLeadNumber("");
    setFirstname("");
    setLastname("");
    setMobileNumber("");
    setEmailId("");
    setLimit("10");
    setTableSearchQuery("");
    applyGetAllTherapists({ reset: true });
  };

  const handleRowClick = (user: any) => {
    setSelectedTherapist(user);
    onOpen();
  };

  const AvailabilityBadge = ({ type }: { type: string }) => (
    <Badge colorScheme={type === "online" ? "green" : "blue"} px={3} py={1} borderRadius="full" w={"fit-content"} display="flex" alignItems="center" gap={2}>
      {type === "online" ? <FaVideo /> : <FaUserFriends />}
      {type}
    </Badge>
  );

  const TherapistTableColumns = [
    {
      headerName: "Lead No.",
      key: "sno",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Contact Name",
      key: "user",
      type: "component",
      metaData: {
        component: (dt: any) => (
          <Box m={1}>
            <Avatar
              src={dt.profileDetails?.personalInfo?.image}
              name={dt.profileDetails?.personalInfo?.name}
              size="sm"
            />
          </Box>
        ),
      },
      props: {
        row: { minW: 120, textAlign: "center" },
        column: { textAlign: "center" },
      },
    },
    {
      headerName: "Phone",
      key: "username",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Lead Source",
      key: "role",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Lead Status",
      key: "experience",
      type: "component",
      metaData: {
        component: (dt: any) => (
          <Stack direction="row" flexWrap="wrap">
            <Text>{dt.profileDetails?.personalInfo?.experience || '-'}</Text>
          </Stack>
        ),
      },
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Assigned",
      key: "charges",
      type: "component",
      metaData: {
        component: (dt: any) => (
          <Stack direction="row" flexWrap="wrap">
            <Text>₹{dt.profileDetails?.personalInfo?.charges || '-'}</Text>
          </Stack>
        ),
      },
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Current",
      key: "availability",
      type: "component",
      metaData: {
        component: (dt: any) => (
          <Stack direction="row" flexWrap="wrap" justify="center">
            {dt.profileDetails?.personalInfo?.availability?.map((type: string, idx: number) => (
              <AvailabilityBadge key={idx} type={type} />
            )) || '-'}
          </Stack>
        ),
      },
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Destination",
      key: "bio",
      type: "tooltip",
      function: (dt: any) => dt.profileDetails?.personalInfo?.bio ? (
        <Tooltip label={dt.profileDetails.personalInfo.bio} hasArrow zIndex={9999}>
          <span>{dt.profileDetails.personalInfo.bio.slice(0, 50)}</span>
        </Tooltip>
      ) : "-",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Trip Type",
      key: "tripType",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Enquiry Type",
      key: "enquiryType",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Tags",
      key: "tags",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Tour Start",
      key: "tourStart",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Created",
      key: "created",
      props: { row: { textAlign: "center" } }
    },
    {
      headerName: "Action",
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
      {/* Filter Section */}
      <Box bg="white" p={4} borderRadius="md" mb={4} boxShadow="sm">
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          {/* Row 1 */}
          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">From</FormLabel>
              <Input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">To</FormLabel>
              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Lead Priority</FormLabel>
              <Select
                value={leadPriority}
                onChange={(e) => setLeadPriority(e.target.value)}
                size="sm"
              >
                <option value="all">× All</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Lead Status</FormLabel>
              <Input
                value={leadStatus}
                onChange={(e) => setLeadStatus(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Lead Sub Status</FormLabel>
              <Select
                value={leadSubStatus}
                onChange={(e) => setLeadSubStatus(e.target.value)}
                size="sm"
              >
                <option value="all">× All</option>
                <option value="new">New</option>
                <option value="followup">Follow Up</option>
                <option value="contacted">Contacted</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Lead Source</FormLabel>
              <Select
                value={leadSource}
                onChange={(e) => setLeadSource(e.target.value)}
                size="sm"
              >
                <option value="all">× All</option>
                <option value="website">Website</option>
                <option value="referral">Referral</option>
                <option value="social">Social Media</option>
              </Select>
            </FormControl>
          </GridItem>

          {/* Row 2 */}
          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Assigned To</FormLabel>
              <Select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                size="sm"
              >
                <option value="all">All</option>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Enquiry Type</FormLabel>
              <Input
                value={enquiryType}
                onChange={(e) => setEnquiryType(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Lead Number</FormLabel>
              <Input
                placeholder="Lead Number"
                value={leadNumber}
                onChange={(e) => setLeadNumber(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Firstname</FormLabel>
              <Input
                placeholder="Firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Lastname</FormLabel>
              <Input
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Mobile Number</FormLabel>
              <Input
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          {/* Row 3 */}
          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Email Id</FormLabel>
              <Input
                placeholder="Enter Email Id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                size="sm"
              />
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Tags</FormLabel>
              <Select
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                size="sm"
              >
                <option value="all">× All</option>
                <option value="urgent">Urgent</option>
                <option value="vip">VIP</option>
                <option value="regular">Regular</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem>
            <FormControl>
              <FormLabel fontSize="sm">Limit</FormLabel>
              <Select
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                size="sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <Flex gap={2} h="100%" align="flex-end">
              <Button
                colorScheme="red"
                size="sm"
                onClick={handleSearch}
                flex="1"
              >
                Search
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      {/* Table Section */}
      <CustomTable
        title="All Leads"
        data={therapist.data?.map((t: any, index: number) => ({
          ...t,
          sno: index + 1,
        })) || []}
        columns={TherapistTableColumns}
        actions={{
          actionBtn: {
            addKey: {
              showAddButton: true,
              function: () => {
                if (onAdd) onAdd()
              },
            },
            editKey: {
              showViewButton: true,
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
          },
          // search: {
          //   show: true,
          //   searchValue: tableSearchQuery,
          //   onSearchChange: (e: any) => setTableSearchQuery(e.target.value),
          // },
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


      {/* Drawer */}
      {/* <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgGradient="linear(to-r, blue.400, purple.400)" color="white">
            <Flex align="center" gap={3}>
              <GiPsychicWaves size="24px" />
              Lead Details
            </Flex>
          </DrawerHeader>

          {selectedTherapist && (
            <DrawerBody>
              <Box position="relative">
                <Flex justify={"center"}>
                  <Image src={selectedTherapist?.pic?.url} h={"160px"} objectFit={"cover"} rounded={"xl"} alt="Lead Image" />
                </Flex>

                <Box textAlign="center" mt={2}>
                  <Text fontSize="2xl" fontWeight="bold">
                    {selectedTherapist.profileDetails?.personalInfo?.name || 'N/A'}
                  </Text>
                  <Text color="gray.500">{selectedTherapist.username}</Text>

                  <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={4}>
                    <GridItem>
                      <Box bg="blue.50" p={3} borderRadius="lg">
                        <Text fontSize="sm" color="gray.500">Lead Status</Text>
                        <Text fontWeight="bold">{selectedTherapist.profileDetails?.personalInfo?.experience || 'N/A'}</Text>
                      </Box>
                    </GridItem>
                    <GridItem>
                      <Box bg="blue.50" p={3} borderRadius="lg">
                        <Text fontSize="sm" color="gray.500">Assigned</Text>
                        <Text fontWeight="bold">₹{selectedTherapist.profileDetails?.personalInfo?.charges || 'N/A'}</Text>
                      </Box>
                    </GridItem>
                  </Grid>
                </Box>

                <Tabs mt={6} variant="soft-rounded" colorScheme="teal">
                  <TabList>
                    <Tab _selected={{ color: "white", bg: "blue.400" }}>Details</Tab>
                    <Tab _selected={{ color: "white", bg: "blue.400" }}>Destination</Tab>
                    <Tab _selected={{ color: "white", bg: "blue.400" }}>Current</Tab>
                    <Tab _selected={{ color: "white", bg: "blue.400" }}>Contact</Tab>
                    <Tab _selected={{ color: "white", bg: "blue.400" }}>Other</Tab>
                  </TabList>

                  <TabPanels mt={2}>
                    <TabPanel>
                      <Stack spacing={3}>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Lead Number</Text>
                          <Text fontWeight="500">{selectedTherapist.sno || 'N/A'}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Lead Source</Text>
                          <Text fontWeight="500">{selectedTherapist.role || 'N/A'}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Trip Type</Text>
                          <Text fontWeight="500">{selectedTherapist.tripType || 'N/A'}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Enquiry Type</Text>
                          <Text fontWeight="500">{selectedTherapist.enquiryType || 'N/A'}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Tags</Text>
                          <Text fontWeight="500">{selectedTherapist.tags || 'N/A'}</Text>
                        </Box>
                      </Stack>
                    </TabPanel>

                    <TabPanel>
                      <Text color="gray.600" lineHeight="tall">
                        {selectedTherapist.profileDetails?.personalInfo?.bio || 'N/A'}
                      </Text>
                    </TabPanel>

                    <TabPanel>
                      <Stack spacing={4}>
                        {selectedTherapist.profileDetails?.personalInfo?.availability?.map((type: string, idx: number) => (
                          <AvailabilityBadge key={idx} type={type} />
                        )) || <Text>N/A</Text>}
                      </Stack>
                    </TabPanel>

                    <TabPanel>
                      <Stack spacing={4}>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Phone</Text>
                          <Text fontWeight="500">{selectedTherapist.username || 'N/A'}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Email</Text>
                          <Text fontWeight="500">{selectedTherapist.emailId || 'N/A'}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Mobile Number</Text>
                          <Text fontWeight="500">{selectedTherapist.profileDetails?.personalInfo?.phoneNumber || 'N/A'}</Text>
                        </Box>
                      </Stack>
                    </TabPanel>

                    <TabPanel>
                      <Stack spacing={4}>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Tour Start</Text>
                          <Text fontWeight="500">{selectedTherapist.tourStart || 'N/A'}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Created</Text>
                          <Text fontWeight="500">{selectedTherapist.created || 'N/A'}</Text>
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.500">Link</Text>
                          <Link href={selectedTherapist.profileDetails?.personalInfo?.link || "#"} target="_blank" rel="noopener noreferrer">
                            {selectedTherapist.profileDetails?.personalInfo?.link || 'N/A'}
                          </Link>
                        </Box>
                      </Stack>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </DrawerBody>
          )}
        </DrawerContent>
      </Drawer> */}
    </Box>
  );
});

export default TherapistsTable;