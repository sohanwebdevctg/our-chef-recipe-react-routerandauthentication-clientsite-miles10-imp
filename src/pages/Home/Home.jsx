// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Ingredient from '../Ingredient/Ingredient';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const Home = () => {

  // loading data
  const data = useLoaderData();

  return (
    <div>
      {/* banner section start */}
      <Banner></Banner>
      {/* banner section end */}
      {/* main section start */}
      <div className='container mx-auto my-20'>
        {/* title section start */}
        <div className='p-3 md:p-0 text-center'>
          <h1 className='md:text-4xl font-extrabold'>Our Chef</h1>
          <div className='my-5'>
            <p className='text-base md:text-xl text-gray-500'><em>If you’re like most restaurant owners, creating menu descriptions is probably <br className='hidden md:block'></br>not your favorite task. It can be hard to come up with phrases that make diners feel.</em></p>
            <p className='text-red-500'>--------------------::--------------------</p>
          </div>
        </div>
        {/* title section end */}
        {/* chef section start */}
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-5'>
          {
            data.map((chef) => <Chef
            key={chef.id}
            chef={chef}
            ></Chef>)
          }
        </div>
        {/* chef section end */}
      </div>
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