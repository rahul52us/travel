'use client';

import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { Montserrat, Poppins } from 'next/font/google';
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Notification from "./component/common/Notification/Notification";
import AuthenticationLayout from "./layouts/authenticationLayout/AuthenticationLayout";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import stores from "./store/stores";

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { companyStore: { getCompanyDetails } } = stores;
  const pathname = usePathname();

  // --- Extend Chakra Theme ---
  const theme = extendTheme({
    ...stores.themeStore.themeConfig,
    fonts: {
      heading: montserrat.style.fontFamily,
      body: poppins.style.fontFamily,
    },
  });

  useEffect(() => {
    getCompanyDetails();
  }, [getCompanyDetails]);

  const getLayout = () => {
    if (
      pathname === '/login' ||
      pathname === '/register' ||
      pathname === "/forgot-password" ||
      pathname === '/signUp'
    ) {
      return AuthenticationLayout;
    } else if (pathname.startsWith('/dashboard')) {
      return DashboardLayout;
    }
    return MainLayout;
  };

  const LayoutComponent = getLayout();

  return (
    <html lang="en">
      <head>
        <ColorModeScript initialColorMode="light" />
      </head>
      <body className={`${montserrat.className} ${poppins.className}`} style={{ margin: 0, padding: 0 }}>
        <ChakraProvider theme={theme}>
          <Notification />
          <LayoutComponent>{children}</LayoutComponent>
        </ChakraProvider>
      </body>
    </html>
  );
}
