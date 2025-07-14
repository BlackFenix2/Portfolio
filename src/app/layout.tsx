import * as React from "react";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import type { Navigation } from "@toolpad/core/AppProvider";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "projects",
    title: "Projects",
    icon: <DashboardIcon />,
  },
  {
    segment: "resume",
    title: "Resume",
    icon: <PersonIcon />,
  },
];

const BRANDING = {
  title: "Ernie Francis",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
              {props.children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
