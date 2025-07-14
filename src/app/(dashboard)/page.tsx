import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Signature from "@/components/Signature";

export default function HomePage() {
  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h2">Ernie Francis</Typography>
      <Typography variant="subtitle2">
        IT Enthauist / self-taught software developer
      </Typography>

      <Signature width={300} height={300} />

      {/* <ThreeBackground /> */}
      <Box style={{ padding: "2px" }} mt={2} display="flex" flexDirection="row">
        <Box paddingX={5}>
          <Link passHref href="/projects">
            <Button variant="contained">My Projects</Button>
          </Link>
        </Box>
        <Box paddingX={5}>
          <Link passHref href="/resume">
            <Button variant="contained">My Resume</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
