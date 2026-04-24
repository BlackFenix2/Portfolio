"use client";
import {
  Box,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import type { ProjectPage } from "@/lib/prismicio/types";

type Props = {
  page: ProjectPage;
};

export default function ProjectView({ page }: Props) {
  const imageWidth = 800;
  const imageHeight = 400;

  return (
    <Box sx={{ px: 2 }}>
      <Typography variant="h2" sx={{ py: 2 }}>
        <Link href="/projects" passHref>
          <Tooltip title="Go Back" arrow placement="top">
            <IconButton>
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>
        <PrismicText field={page.data.title} fallback="null title" />
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <PrismicNextImage
          field={page.data.image}
          fallbackAlt=""
          width={imageWidth}
          style={{
            maxWidth: imageWidth,
            maxHeight: imageHeight,
          }}
        />
        <Box sx={{ flex: 1 }}>
          <CardHeader title="Tech Stack: " />
          <CardContent>
            <Stack
              direction={"row"}
              sx={{
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {page.data.features.length > 0 &&
                page.data.features.map(({ icon }, index) => (
                  <Tooltip
                    title={icon.alt}
                    placement="top"
                    key={icon.alt || index}
                  >
                    <Box>
                      <PrismicNextImage
                        field={icon}
                        width={96}
                        fallbackAlt=""
                      />
                    </Box>
                  </Tooltip>
                ))}
            </Stack>
          </CardContent>
        </Box>
      </Box>
      <PrismicRichText
        field={page.data.description}
        fallback={<p>No content</p>}
      />
      <Tooltip title="Project Website" enterDelay={300} arrow>
        <IconButton
          component="a"
          href={page.data.url.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <OpenInNewIcon fontSize="large" />
        </IconButton>
      </Tooltip>
      {page.data.source.url && (
        <Tooltip title="Github Repo" enterDelay={300} arrow>
          <IconButton
            component="a"
            href={page.data.source.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}
