import * as React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  Collapse,
  Divider,
} from '@material-ui/core';

interface Props {
  name: string;
  loading: boolean;
}

const DomainCard: React.FC<Props> = (props) => (
  <Card raised>
    <CardHeader
      title={props.name}
      action={
        <CircularProgress
          color="inherit"
          variant={props.loading ? 'indeterminate' : 'static'}
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
