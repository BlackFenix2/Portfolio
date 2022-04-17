import * as React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  Collapse,
  Divider,
} from '@mui/material';

interface Props {
  name: string;
  loading: boolean;
  children: React.ReactNode;
}

const DomainCard: React.FC<Props> = (props) => (
  <Card raised>
    <CardHeader
      title={props.name}
      action={
        <CircularProgress
          color="inherit"
          variant={props.loading ? 'indeterminate' : 'determinate'}
          value={100}
        />
      }
    />
    <Divider />

    <CardContent>
      <Collapse in={!props.loading}>{props.children}</Collapse>
    </CardContent>
  </Card>
);

export default DomainCard;
