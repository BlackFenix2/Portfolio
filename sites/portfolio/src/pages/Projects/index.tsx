import React from 'react';
import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
} from '@mui/material';
import { createClient } from 'src/lib/prismicio';
import { useEffect } from 'react';
import {
  PrismicText,
  PrismicLink,
  PrismicRichText,
  PrismicImage,
} from '@prismicio/react';
import * as prismicT from '@prismicio/types';
import * as prismicH from '@prismicio/helpers';

import PrismicNextImage from 'src/components/PrismicNextImage';

// custom type to fix 'never' type for data, issue referenced at https://github.com/prismicio/prismic-types/issues/1
type ProjectListPageData = {
  title: prismicT.TitleField;
  description: prismicT.RichTextField;
  image: prismicT.ImageField;
};

// Build a type for each Custom Type
type ProjectListPage = prismicT.PrismicDocument<{
  uid: string;
  title: prismicT.TitleField;
  project_list: prismicT.GroupField<{
    project: prismicT.RelationField<ProjectListPageData>;
  }>;
}>;

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getSingle<ProjectListPage>('projects', {
    fetchLinks: [
      'project-page.title',
      'project-page.image',
      'project-page.description',
    ],
  });

  return {
    props: { page },
    //revalidate: 10, // Will be passed to the page component as props
  };
};

const Projects: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  page,
}) => {
  useEffect(() => {
    console.info(page);
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h2">
        <PrismicText field={page.data.title} />
      </Typography>
      <Grid container spacing={2}>
        {/* check that project list is filled so typescript knows the return type is not 'never' */}
        {prismicH.isFilled.group(page.data.project_list) &&
          page.data.project_list.map(({ project }, index) => {
            // check if project is filled
            // manually added 'ProjectListPageData' type to fix stuck 'never' type for data
            if (
              prismicH.isFilled.link<string, string, ProjectListPageData>(
                project
              ) &&
              project.link_type === 'Document'
            ) {
              return (
                <Grid item xs={3} key={index}>
                  <Card
                    sx={{
                      height: 500,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia>
                      <PrismicNextImage
                        image={project.data.image}
                        preserveAspectRatio
                        width={1000}
                      />
                    </CardMedia>
                    <CardHeader
                      title={
                        <PrismicText
                          field={project.data.title}
                          fallback="null title"
                        />
                      }
                    />
                    <CardContent
                      sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                    >
                      <Box>
                        <PrismicRichText
                          field={project.data.description}
                          fallback={<p>No content</p>}
                        />
                      </Box>

                      <Box marginTop={'auto'}>
                        <PrismicLink href={`/Projects/${project.slug}`}>
                          {project.slug}
                        </PrismicLink>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          })}
      </Grid>
    </Box>
  );
};

export default Projects;
