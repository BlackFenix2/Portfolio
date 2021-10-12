import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';

const Projects = () => {
  return (
    <Box p={2}>
      <Typography variant="h2">Projects</Typography>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Card>
            <CardHeader title="React Showcase" />
            <CardContent>
              <a
                href="https://react.erniefrancisiv.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5f2e3aa02ba175000828af2e/screenshot.png"
                  alt="Svelte Showcase"
                  width="100%"
                  height="100%"
                />
              </a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <CardHeader title="Svelte Showcase" />
            <CardContent>
              <a
                href="https://svelte.erniefrancisiv.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5f2e440e544c5f00086c90e2/screenshot.png"
                  alt="Svelte Showcase"
                  width="100%"
                  height="100%"
                />
              </a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <CardHeader title="Wall of Donuts" />
            <CardContent>
              <a
                href="https://donutwall.erniefrancisiv.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d1cd5dbb9d2e00008dd840a/screenshot.png"
                  alt="Svelte Showcase"
                  width="100%"
                  height="100%"
                />
              </a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <CardHeader title="Cool Cats" />
            <CardContent>
              <a
                href="https://coolcats.erniefrancisiv.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5f2e368fdcb44c000773b8cc/screenshot.png"
                  alt="Svelte Showcase"
                  width="100%"
                  height="100%"
                />
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
