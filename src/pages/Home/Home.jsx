// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Ingredient from '../Ingredient/Ingredient';

const Home = () => {
  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* main section start */}
      {/* main section end */}
      {/* ingredient section start */}
      <Ingredient></Ingredient>
      {/* ingredient section end */}
      {/* gallery section start */}
      <Gallery></Gallery>
      {/* gallery section end */}
    </div>
  );
};

export default Home;