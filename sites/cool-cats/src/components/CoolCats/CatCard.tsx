import React from 'react';
import { Card } from 'antd';
import { LikeFilled, DislikeFilled, EllipsisOutlined } from '@ant-design/icons';

interface Props {
  img: unknown;
  description: string;
  urls: { full: string };
  user: { name: React.ReactNode };
}
const CatCard = (props: Props) => (
  <Card
    cover={<img src={props.urls.full} alt={props.description} />}
    actions={[
      <LikeFilled key="like" type="like" />,
      <DislikeFilled key="dislike" type="dislike" />,
      <EllipsisOutlined key="elip" type="ellipsis" />,
    ]}
  >
    <Card.Meta title={props.user.name} description={props.description} />
  </Card>
);

export default CatCard;
