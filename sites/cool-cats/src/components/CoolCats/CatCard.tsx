import React from 'react';
import { Card, Icon } from 'antd';

interface Props {
  img: any;
  description: string;
  urls: any;
  user: any;
}
const CatCard = (props: Props) => (
  <Card
    cover={<img src={props.urls.full} alt={props.description} />}
    actions={[
      <Icon key="like" type="like" />,
      <Icon key="dislike" type="dislike" />,
      <Icon key="elip" type="ellipsis" />
    ]}
  >
    <Card.Meta
      title={props.user.name}
      description={props.description}
    ></Card.Meta>
  </Card>
);

export default CatCard;
