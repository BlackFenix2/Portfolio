import { Box, Typography, Grid, Fade } from "@mui/material";
import { createClient } from "@/lib/prismicio";
import { PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { ProjectListPage } from "@/lib/prismicio/types";
import ProjectCard from "@/components/ProjectCard";

export default async function Page() {
  const client = createClient();

  const page = await client.getSingle<ProjectListPage>("projects", {
    fetchLinks: [
      "project-page.title",
      "project-page.image",
      "project-page.description",
      "project-page.url",
      "project-page.source",
    ],
  });

  return (
    <Box>
      <Typography variant="h2" paddingY={2}>
        <PrismicText field={page.data.title} />
      </Typography>

      <Grid container spacing={2}>
        {prismic.isFilled.group(page.data.project_list) &&
          page.data.project_list.map(({ project }, index) => (
            <Fade
              in
              key={index}
              timeout={{
                enter: (index + 1) * 400,
                exit: (index + 1) * 400,
              }}
            >
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <ProjectCard project={project}></ProjectCard>
              </Grid>
            </Fade>
          ))}
      </Grid>
    </Box>
  );
}
