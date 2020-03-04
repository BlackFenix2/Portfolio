import React from 'react';
import { Row, Col } from 'antd';
import { css } from 'linaria';
import CatCard from './CatCard';

const gridTest = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(600px, 1fr));
  grid-gap: 10px;

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    & > * {
      padding-top: 20px;
    }
  }
`;

const CatCardListTest = ({ catList }) => (
  <Row gutter={16}>
    {catList.map(item => (
      <Col
        key={item.id}
        span={8}
        xs={24}
        sm={24}
        md={8}
        lg={8}
        xl={8}
        className={css`
          padding-top: 20px;
        `}
      >
        <CatCard {...item} />
      </Col>
    ))}
  </Row>
);

const CatCardList = ({ catList }) => (
  <div className={gridTest}>
    {catList.map(item => (
      <div key={item.id}>
        <CatCard {...item} />
      </div>
    ))}
  </div>
);

export default CatCardList;
