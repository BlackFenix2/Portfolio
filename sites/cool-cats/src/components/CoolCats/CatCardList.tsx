import React from 'react';
import styled from '@emotion/styled';
import CatCard from './CatCard';

const GridContainer = styled.div`
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

const CatCardList = ({ catList }) => <GridContainer>
    {catList.map((item) => (
        <div key={item.id}>
          <CatCard item={item} />
        </div>
      ))}
  </GridContainer>

export default CatCardList;
