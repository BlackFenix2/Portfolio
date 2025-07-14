import { createClient, linkResolver } from "@/lib/prismicio";
import * as prismic from "@prismicio/client";
import {
  Box,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PrismicNextImage } from "@prismicio/next";
import type { ProjectPage } from "@/lib/prismicio/types";
import { width } from "@mui/system";

const PROJECT_PAGE = "project-page";

export async function generateStaticParams() {
  const client = createClient();
  const documents = await client.getAllByType(PROJECT_PAGE);
  return documents.map((doc) => ({ uid: doc.uid }));
}

export default async function ProjectPage({
  params,
}: {
  params: { uid: string };
}) {
  const client = createClient();
  const page = await client.getByUID<ProjectPage>(PROJECT_PAGE, params.uid);

  // Sort feature icons by alt text
  if (prismic.isFilled.group(page.data.features)) {
    page.data.features = page.data.features.sort((a, b) =>
      (a.icon.alt || "").localeCompare(b.icon.alt || "")
    );
  }

  // Responsive image width (handled on client, so fallback to 800)
  const imageWidth = 800;
  const imageHeight = 400;

  return (
    <Box paddingX={2}>
      <Typography variant="h2" paddingY={2}>
        <Link href="/projects" passHref>
          <Tooltip title="Go Back" arrow placement="top">
            <IconButton>
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>
        <PrismicText field={page.data.title} fallback="null title" />
      </Typography>

      <Box display="flex" flexDirection="column">
        <PrismicNextImage
          field={page.data.image}
          width={imageWidth}
          style={{
            maxWidth: imageWidth,
            maxHeight: imageHeight,
          }}
        />
        <Box flex={1}>
          <CardHeader title="Tech Stack: " />
          <CardContent>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              justifyContent="space-around"
              alignItems={"center"}
            >
              {prismic.isFilled.group(page.data.features) &&
                page.data.features.map(({ icon }, index) => (
                  <Tooltip
                    title={icon.alt}
                    placement="top"
                    key={icon.alt || index}
                  >
                    <Box>
                      <PrismicNextImage field={icon} width={96} />
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
