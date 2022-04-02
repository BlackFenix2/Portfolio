import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
} from '@mui/material';
import Image from 'next/image';
import { css } from '@emotion/css';

type Project = {
  title: string;
  url: string;
};

const Projects = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);

  return (
    <Box p={2}>
      <Typography variant="h2">Projects</Typography>
      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <Card>
            <CardHeader title="React Showcase" />
            <CardContent>
              <a
                href="https://react.erniefrancisiv.com/Shows"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={css`
                    object-fit: crop;
                  `}
                  src="/React-Showcase.png"
                  alt="React Showcase"
                  width={425}
                  height={265}
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
                <Image
                  src="/screencapture-svelte-erniefrancisiv-games-cameoparison-2022-04-02-15_30_22.png"
                  alt="Svelte Showcase"
                  width={425}
                  height={265}
                />
              </a>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={3} xs={12}>
          <Card>
            <CardHeader title="Domain Lookup" />
            <CardContent>
              <a
                href="https://domain-lookup.ordereze.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/screencapture-domain-lookup-ordereze-2022-04-02-16_51_29.png"
                  alt="Domain Lookup"
                  width={425}
                  height={265}
                />
              </a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <CardHeader title="Fuku TV" />
            <CardContent>
              <a href="https://fuku.tv" target="_blank" rel="noreferrer">
                <Image
                  src="/screencapture-fuku-tv-2022-04-02-15_29_43.png"
                  alt="Fuku TV"
                  width={425}
                  height={265}
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
                <Image
                  src="/screencapture-donutwall-erniefrancisiv-WallOfDonuts-2022-04-02-16_55_57.png"
                  alt="Wall of Donuts"
                  width={425}
                  height={265}
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
                <Image
                  src="/screencapture-coolcats-erniefrancisiv-2022-04-02-16_52_44.png"
                  alt="Cool Cats"
                  width={425}
                  height={265}
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
