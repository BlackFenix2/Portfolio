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
  Tooltip,
  Typography,
} from '@mui/material';
import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/react';
import Logo from 'react-svgporn';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PrismicNextImage from 'src/components/PrismicNextImage';

const PROJECT_PAGE = 'project-page';

// Build a type for each Custom Type
type ProjectPage = prismicT.PrismicDocument<{
  uid: string;
  title: prismicT.TitleField;
  description: prismicT.RichTextField;
  image: prismicT.ImageField;
  url: prismicT.FilledLinkToWebField;
  source: prismicT.FilledLinkToWebField;
}>;

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

  return {
    props: { page },
    //revalidate: 10, // Will be passed to the page component as props
  };
};

const ProjectPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  page,
}) => {
  return (
    <Box p={2}>
      <Card>
        <CardHeader
          title={<PrismicText field={page.data.title} fallback="null title" />}
        ></CardHeader>

        <CardContent>
          <PrismicNextImage
            image={page.data.image}
            width={1500}
            preserveAspectRatio
          />
          <PrismicRichText
            field={page.data.description}
            fallback={<p>No content</p>}
          />
          <Tooltip title="Project Website" enterDelay={300}>
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
            <Tooltip title="Github Repo" enterDelay={300}>
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectPage;
