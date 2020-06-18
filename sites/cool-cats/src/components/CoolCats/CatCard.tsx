import React from 'react';
import { Card } from 'antd';
import { LikeFilled, DislikeFilled, EllipsisOutlined } from '@ant-design/icons';

interface Props {
  item: {
    img: unknown;
    description: string;
    urls: { full: string };
    user: { name: React.ReactNode };
  };
}
const CatCard = ({ item }: Props) => (
  <Card
    cover={<img src={item.urls.full} alt={item.description} />}
    actions={[
      <LikeFilled key="like" type="like" />,
      <DislikeFilled key="dislike" type="dislike" />,
      <EllipsisOutlined key="elip" type="ellipsis" />,
    ]}
  >
    <Card.Meta title={item.user.name} description={item.description} />
  </Card>
);

export default CatCard;
