"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import Signature from "@/components/Signature";

export default function HomePage() {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Signature width={600} height={100} />
      <Typography variant="subtitle2">
        IT Enthauist / software developer
      </Typography>

      {/* <ThreeBackground /> */}
      <Box
        sx={{
          p: "2px",
          mt: 2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ px: 5 }}>
          <Link passHref href="/projects">
            <Button variant="contained">My Projects</Button>
          </Link>
        </Box>
        <Box sx={{ px: 5 }}>
          <Link passHref href="/resume">
            <Button variant="contained">My Resume</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
