import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Props {
  children?: React.ReactNode;
  title: string;
}

const cardStyle = {
  height: '100%',
};

const ResumeCard: React.FC<Props> = (props) => (
  <Card style={cardStyle}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {props.title}
      </Typography>

      <Typography component="span">{props.children}</Typography>
    </CardContent>
  </Card>
);

export default ResumeCard;
