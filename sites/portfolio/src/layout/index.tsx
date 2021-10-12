import * as React from 'react';

import { Toolbar, Box } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import IconButton from '@mui/material/IconButton';
import {
  Root,
  Header as MuiHeader,
  EdgeTrigger,
  EdgeSidebar,
  SidebarContent,
  Content as MuiContent,
  Footer as MuiFooter,
  getContentBasedScheme,
  Scheme,
} from '@mui-treasury/layout';

import { css } from '@emotion/css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

const scheme: Scheme = {
  header: {
    config: {
      xs: {
        height: 58,
        position: 'sticky',
      },
      md: {
        height: 64,
        position: 'sticky',
      },
    },
  },
  leftEdgeSidebar: {
    config: {
      xs: {
        width: 256,
        variant: 'temporary',
      },
      sm: {
        width: 256,
        variant: 'temporary',
      },
    },
  },
};
const Layout: React.FC = ({ children }) => (
  // TODO wrap in React.Strict to detect depreciating practices

  <AppLayout>{children}</AppLayout>
);

const AppLayout = ({ children }) => (
  <Root scheme={scheme}>
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <MuiHeader position="sticky" elevation={4} color="primary">
        <Toolbar>
          <EdgeTrigger target={{ anchor: 'left', field: 'open' }}>
            {(open, setOpen) => (
              <IconButton
                onClick={() => setOpen(!open)}
                edge="start"
                color="inherit"
              >
                {open ? <KeyboardArrowLeft /> : <Menu />}
              </IconButton>
            )}
          </EdgeTrigger>
          <Header />
        </Toolbar>
      </MuiHeader>
      <EdgeSidebar anchor="left">
        <SidebarContent>
          <Sidebar />
        </SidebarContent>
      </EdgeSidebar>
      <MuiContent
        className={css`
          flex-grow: 1;
        `}
      >
        <Body>{children}</Body>
      </MuiContent>
      <MuiFooter>
        <Footer />
      </MuiFooter>
    </Box>
  </Root>
);

export default Layout;
