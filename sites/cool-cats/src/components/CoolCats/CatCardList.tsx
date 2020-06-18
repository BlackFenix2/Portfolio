import React from 'react';
import { css } from '@emotion/core';
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

const CatCardList = ({ catList }) => (
  <div css={gridTest}>
    {catList.map((item) => (
      <div key={item.id}>
        <CatCard item={item} />
      </div>
    ))}
  </div>
);

export default CatCardList;
