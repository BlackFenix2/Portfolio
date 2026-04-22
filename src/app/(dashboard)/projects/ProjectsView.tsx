"use client";
import { Box, Typography, Grid, Fade } from "@mui/material";
import { PrismicText } from "@prismicio/react";
import { LinkedProject } from "@/lib/prismicio/types";
import ProjectCard from "@/components/ProjectCard";
import * as prismic from "@prismicio/client";

type Props = {
  title: prismic.TitleField;
  projectList: { project: LinkedProject }[];
};

export default function ProjectsView({ title, projectList }: Props) {
  return (
    <Box>
      <Typography variant="h2" sx={{ py: 2 }}>
        <PrismicText field={title} />
      </Typography>

      <Grid container spacing={2}>
        {projectList.length > 0 &&
          projectList.map(({ project }, index) => (
            <Fade
              in
              key={index}
              timeout={{
                enter: (index + 1) * 400,
                exit: (index + 1) * 400,
              }}
            >
              <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
                <ProjectCard project={project} priority={index === 0}></ProjectCard>
              </Grid>
            </Fade>
          ))}
      </Grid>
    </Box>
  );
}
