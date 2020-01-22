import React, { useEffect, useState } from 'react';
import SEO from 'src/components/SEO';
import { getCats } from 'src/services/api/unsplash';
import CatCardList from 'src/components/CoolCats/CatCardList';

const CoolCats = () => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    getCats().then(data => setCatList(data.results));

    return () => {};
  }, []);

  return (
    <>
      <SEO title="Cool Cats List" />
      <CatCardList catList={catList} />
    </>
  );
};

export default CoolCats;
