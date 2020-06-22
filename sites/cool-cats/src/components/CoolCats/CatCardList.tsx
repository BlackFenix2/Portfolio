import React from 'react';
import { css } from '@emotion/core';
import CatCard from './CatCard';

const gridTest = css`
  column-width: 30vw;

  & > div {
    padding-top: 20px;
    display: inline-block;
  }

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    & > div {
      padding-top: 20px;
    }
  }
`;

const CatCardList = ({ catList }) => (
  <div css={gridTest}>
    {catList.map((item) => {
      return (
        <div key={item.id}>
          <CatCard item={item} />
        </div>
      );
    })}
  </div>
);

export default CatCardList;
