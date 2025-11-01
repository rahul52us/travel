"use client";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import {
  FaAddressBook,
  FaComments,
  FaNewspaper,
  FaUsers,
} from "react-icons/fa";
import DashboardCard from "../common/DashboardCard/DashboardCard";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import stores from "../../../store/stores";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Extend Chakra UI theme (optional)
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      500: "#3182ce",
      900: "#1a365d",
    },
  },
});

// Dummy travel data
const dummyData = {
  monthlyBookings: [120, 180, 250, 300, 500, 450, 600, 700, 550, 400, 300, 200], // Jan–Dec
  destinations: ["Paris", "Dubai", "New York", "Bali", "Tokyo"],
  topBookings: [320, 280, 250, 200, 150],
  cancellations: [20, 40, 25, 15, 10],
};

// Bookings by Month (Line chart)
const bookingsLineChart = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Bookings",
      data: dummyData.monthlyBookings,
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderWidth: 2,
      fill: true,
    },
  ],
};

// Top Destinations vs. Cancellations (Bar chart)
const destinationsBarChart = {
  labels: dummyData.destinations,
  datasets: [
    {
      label: "Bookings",
      data: dummyData.topBookings,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
    {
      label: "Cancellations",
      data: dummyData.cancellations,
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ],
};

// Dashboard component
const Dashboard = observer(() => {
  const {
    dashboardStore: { getDashboardCount, count },
  } = stores;

  useEffect(() => {
    getDashboardCount();
  }, [getDashboardCount]);

  const dashboardData = [
    {
      label: "Active Leads",
      value: count?.data?.leads || 0,
      icon: FaNewspaper,
      color: "blue",
      href: "/dashboard/active",
    },
    {
      label: "Hot Leads",
      value: count?.data?.hotleads || 0,
      icon: FaUsers,
      color: "green",
      href: "/dashboard/hotleads",
    },
    {
      label: "Booked",
      value: count?.data?.booked || 0,
      icon: FaComments,
      color: "purple",
      href: "/dashboard/booked",
    },
    {
      label: "Lost",
      value: count?.data?.lost || 0,
      icon: FaAddressBook,
      color: "orange",
      href: "/dashboard/lost",
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Box p={5}>
        <Heading mb={5} size={"lg"} color={"teal.600"}>
          Dashboard
        </Heading>
        <Box mb={4}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
            {dashboardData.map((item, index) => (
              <Skeleton
                isLoaded={!count?.loading}
                key={index}
                borderRadius="lg"
              >
                <DashboardCard
                  label={item.label}
                  href={item.href}
                  value={item.value}
                  icon={item.icon}
                  color={item.color}
                />
              </Skeleton>
            ))}
          </SimpleGrid>
        </Box>

        <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={10}>
          <GridItem>
            <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={5}>
                Bookings by Month
              </Text>
              <Line data={bookingsLineChart} />
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
              <Text fontSize="lg" fontWeight="bold" mb={5}>
                Top Destinations & Cancellations
              </Text>
              <Bar data={destinationsBarChart} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
});

export default Dashboard;