"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const drawerWidth = 248;
const collapsedDrawerWidth = 76;
const appBarHeight = 64;

const navigationItems = [
  {
    label: "Projects",
    href: "/projects",
    icon: <WorkOutlineRoundedIcon />,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: <DescriptionRoundedIcon />,
  },
];

type NavigationMenuProps = {
  collapsed: boolean;
  mobile?: boolean;
  pathname: string;
  onNavigate?: () => void;
};

function NavigationMenu({
  collapsed,
  mobile = false,
  pathname,
  onNavigate,
}: NavigationMenuProps) {
  return (
    <List sx={{ px: 1.5, py: 1 }}>
      {navigationItems.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <ListItem key={item.href} disablePadding sx={{ mb: 0.75 }}>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={onNavigate}
              sx={{
                minHeight: 44,
                borderRadius: 2,
                justifyContent: collapsed && !mobile ? "center" : "flex-start",
                px: collapsed && !mobile ? 1.25 : 1.75,
                backgroundColor: isActive ? "action.selected" : "transparent",
                "&:hover": {
                  backgroundColor: isActive
                    ? "action.selected"
                    : "action.hover",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed && !mobile ? 0 : 1.5,
                  justifyContent: "center",
                  color: isActive ? "text.primary" : "text.secondary",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  opacity: collapsed && !mobile ? 0 : 1,
                  transition: "opacity 180ms ease",
                }}
                slotProps={{
                  primary: {
                    sx: {
                      fontSize: "0.95rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "text.primary" : "text.secondary",
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default function Layout(props: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = React.useState(false);
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDesktopMenuToggle = () => {
    setDesktopCollapsed(!desktopCollapsed);
  };

  const handleMobileMenuClose = () => {
    setMobileOpen(false);
  };

  const currentDrawerWidth = desktopCollapsed
    ? collapsedDrawerWidth
    : drawerWidth;

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100dvh",
        bgcolor: "background.default",
      }}
    >
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Toolbar
          sx={{
            minHeight: `${appBarHeight}px !important`,
            px: { xs: 1, sm: 2 },
          }}
        >
          {!isMobile && (
            <IconButton
              onClick={handleDesktopMenuToggle}
              sx={{ mr: 1 }}
              aria-label={
                desktopCollapsed ? "Expand sidebar" : "Collapse sidebar"
              }
              title={desktopCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {desktopCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          )}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open navigation menu"
              onClick={handleMobileMenuToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            component={Link}
            href="/"
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 0.2,
              textDecoration: "none",
              color: "text.primary",
            }}
          >
            Ernie Francis
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleMobileMenuClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            mt: `${appBarHeight}px`,
            height: `calc(100% - ${appBarHeight}px)`,
            borderRight: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
          },
        }}
      >
        <NavigationMenu
          collapsed={false}
          mobile
          pathname={pathname}
          onNavigate={handleMobileMenuClose}
        />
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: currentDrawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          overflowX: "hidden",
          transition: (theme) =>
            theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          "& .MuiDrawer-paper": {
            width: currentDrawerWidth,
            boxSizing: "border-box",
            mt: `${appBarHeight}px`,
            height: `calc(100% - ${appBarHeight}px)`,
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            overflowX: "hidden",
            borderRight: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
          },
        }}
      >
        <NavigationMenu collapsed={desktopCollapsed} pathname={pathname} />
        <Divider sx={{ mt: "auto" }} />
      </Drawer>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: `calc(100dvh - ${appBarHeight}px)`,
          flex: 1,
          mt: `${appBarHeight}px`,
        }}
      >
        <Box
          component="main"
          sx={{
            flex: 1,
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2, sm: 2.5, md: 3 },
          }}
        >
          {props.children}
        </Box>
        <Box sx={{ mt: "auto" }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
