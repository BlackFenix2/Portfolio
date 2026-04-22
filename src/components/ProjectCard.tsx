"use client";
import {
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Box,
  Stack,
  Tooltip,
  IconButton,
  Button,
  Skeleton,
} from "@mui/material";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import React, { Suspense } from "react";
import { LinkedProject, ProjectListPageData } from "@/lib/prismicio/types";

import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type Props =
  | {
      project?: never;
      isComingSoon?: true;
      priority?: never;
    }
  | {
      project: LinkedProject;
      isComingSoon?: false;
      priority?: boolean;
    };

const ProjectCard: React.FC<Props> = ({ project, isComingSoon, priority }) => {
  const filledProject =
    !isComingSoon && project && project.link_type === "Document" && project.data
      ? (project as prismic.FilledContentRelationshipField<
          string,
          string,
          ProjectListPageData
        >)
      : null;

  if (filledProject) {
    const project = filledProject;
    const data = project.data as ProjectListPageData;
    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia>
          <Suspense
            fallback={
              <Skeleton
                height={data.image.dimensions?.height}
                width={data.image.dimensions?.width}
              />
            }
          >
            <PrismicNextImage
              field={data.image}
              fallbackAlt=""
              priority={priority}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Suspense>
        </CardMedia>
        <CardHeader
          title={<PrismicText field={data.title} fallback="coming soon" />}
        />
        <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box>
            {/* allow 2 line wraps before applying the '...' ellipsis */}
            <Box
              sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
              }}
            >
              <PrismicRichText
                field={data.description}
                fallback={<p>Working on it...</p>}
              />
            </Box>
          </Box>

          <Box sx={{ mt: "auto" }}>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Tooltip title="Project Website" enterDelay={300}>
                <IconButton
                  component="a"
                  href={data.url.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenInNewIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              {data.source?.url && (
                <Tooltip title="Github Repo" enterDelay={300}>
                  <IconButton
                    component="a"
                    href={data.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}
              <Box sx={{ ml: "auto" }}>
                <Button variant="contained" href={`/projects/${project.slug}`}>
                  Details
                </Button>
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    );
  }
};

export default ProjectCard;
