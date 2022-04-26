import { createClient, linkResolver } from 'src/lib/prismicio';
import * as prismicH from '@prismicio/helpers';
import * as prismicT from '@prismicio/types';
import { InferGetStaticPropsType } from 'next';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Icon,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PrismicNextImage from 'src/components/PrismicNextImage';
import type { ProjectPage } from 'src/lib/prismicio/types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';

const PROJECT_PAGE = 'project-page';

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType(PROJECT_PAGE);
  return {
    paths: documents.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}

export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getByUID<ProjectPage>(PROJECT_PAGE, params.uid);

  // sort feature icons by alt text, prismic doesn't support sorting on group fields
  page.data.features =
    prismicH.isFilled.group(page.data.features) &&
    page.data.features.sort((a, b) => a.icon.alt.localeCompare(b.icon.alt));

  return {
    props: { page },
    //revalidate: 10, // Will be passed to the page component as props
  };
};

const ProjectPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  page,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box paddingX={2}>
      <Typography variant="h2" paddingY={2}>
        <Link href="/Projects" passHref>
          <Tooltip title="Go Back" arrow placement="top">
            <IconButton>
              <ArrowBackIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Link>

        <PrismicText field={page.data.title} fallback="null title" />
      </Typography>

      <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }}>
        <PrismicNextImage
          image={page.data.image}
          width={matches ? 800 : null}
          preserveAspectRatio
        />
        <Box flex={1}>
          <CardHeader title="Tech Stack: " />
          <CardContent>
            <Stack
              direction={'row'}
              flexWrap={'wrap'}
              justifyContent="space-around"
              alignItems={'center'}
            >
              {prismicH.isFilled.group(page.data.features) &&
                page.data.features.map(({ icon }, index) => (
                  <Tooltip title={icon.alt} placement="top" key={icon.alt}>
                    <Box>
                      <PrismicNextImage
                        image={icon}
                        preserveAspectRatio
                        width={96}
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
};

export default ProjectPage;
