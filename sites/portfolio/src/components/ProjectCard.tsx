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
} from '@mui/material';
import { PrismicText, PrismicRichText } from '@prismicio/react';
import React, { Suspense } from 'react';
import { LinkedProject, ProjectListPageData } from 'src/lib/prismicio/types';
import PrismicNextImage from './PrismicNextImage';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import * as prismicH from '@prismicio/helpers';

type Props =
  | {
      project?: never;
      isComingSoon?: true;
    }
  | {
      project: LinkedProject;
      isComingSoon?: false;
    };

const ProjectCard: React.FC<Props> = ({ project, isComingSoon }) => {
  if (
    !isComingSoon &&
    prismicH.isFilled.link<string, string, ProjectListPageData>(project) &&
    project.link_type === 'Document'
  ) {
    return (
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia>
          <Suspense
            fallback={
              <Skeleton
                height={project.data.image.dimensions.height}
                width={project.data.image.dimensions.width}
              />
            }
          >
            <PrismicNextImage image={project.data.image} preserveAspectRatio />
          </Suspense>
        </CardMedia>
        <CardHeader
          title={
            <PrismicText field={project.data.title} fallback="coming soon" />
          }
        />
        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Box>
            {/* allow 2 line wraps before applying the '...' ellipsis */}
            <Box
              sx={{
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}
            >
              <PrismicRichText
                field={project.data.description}
                fallback={<p>Working on it...</p>}
              />
            </Box>
          </Box>

          <Box marginTop={'auto'}>
            <Stack direction="row" alignItems={'center'}>
              <Tooltip title="Project Website" enterDelay={300}>
                <IconButton
                  component="a"
                  href={project.data.url.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenInNewIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              {project.data.source?.url && (
                <Tooltip title="Github Repo" enterDelay={300}>
                  <IconButton
                    component="a"
                    href={project.data.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Tooltip>
              )}
              <Box marginLeft={'auto'}>
                <Button variant="contained" href={`/Projects/${project.slug}`}>
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
