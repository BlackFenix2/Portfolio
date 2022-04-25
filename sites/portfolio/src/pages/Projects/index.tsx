import React, { Suspense } from 'react';
import { InferGetStaticPropsType } from 'next';
import { Box, Typography, Grid, CircularProgress, Fade } from '@mui/material';
import { createClient } from 'src/lib/prismicio';
import { PrismicText } from '@prismicio/react';
import * as prismicH from '@prismicio/helpers';

import { ProjectListPage } from 'src/lib/prismicio/types';
import ProjectCard from 'src/components/ProjectCard';

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getSingle<ProjectListPage>('projects', {
    fetchLinks: [
      'project-page.title',
      'project-page.image',
      'project-page.description',
      'project-page.url',
      'project-page.source',
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
  return (
    <Box p={2}>
      <Typography variant="h2" paddingY={2}>
        <PrismicText field={page.data.title} />
      </Typography>

      <Grid container spacing={2}>
        {/* check that project list is filled so typescript knows the return type is not 'never' */}
        {prismicH.isFilled.group(page.data.project_list) &&
          page.data.project_list.map(({ project }, index) => (
            <Fade
              in
              key={index}
              timeout={{
                enter: (index + 1) * 400,
                exit: (index + 1) * 400,
              }}
            >
              <Grid item xs={12} sm={6} lg={3} display={'flex'}>
                <ProjectCard project={project}></ProjectCard>
              </Grid>
            </Fade>
          ))}
      </Grid>
    </Box>
  );
};

export default Projects;
