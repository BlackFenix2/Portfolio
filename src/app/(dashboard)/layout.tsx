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
import Link from "next/link";
import Footer from "./Footer";

const drawerWidth = 220;

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Ernie Francis
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            mt: "64px",
            height: "calc(100% - 64px)",
          },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/projects">
              <ListItemText primary="Projects" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/resume">
              <ListItemText primary="Resume" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
          flex: 1,
          ml: { md: `${drawerWidth}px` },
          mt: "64px",
        }}
      >
        <Box component="main" sx={{ flex: 1, px: { xs: 2, sm: 3 }, py: 2 }}>
          {props.children}
        </Box>
        <Box sx={{ mt: "auto" }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
