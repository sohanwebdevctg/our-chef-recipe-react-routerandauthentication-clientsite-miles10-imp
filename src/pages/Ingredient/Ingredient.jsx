// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Ingredient.css'
import chefImg from '../../../public/chefImg.png'
import { FaBolt, FaWineGlass, FaWineGlassAlt, FaShoppingBag, FaCookieBite, FaConciergeBell } from 'react-icons/fa';

const Ingredient = () => {
  return (
    <div>
      {/* our ingredient section start */}
      <div className='container mx-auto my-10'>
        {/* title section start */}
        <div className='p-3 md:p-0 text-center'>
          <h1 className='md:text-4xl font-extrabold'>Our Ingredient</h1>
          <div className='my-5'>
            <p className='text-base md:text-xl text-gray-500'><em>If you’re like most restaurant owners, creating menu descriptions is probably <br className='hidden md:block'></br>not your favorite task. It can be hard to come up with phrases that make diners feel.</em></p>
            <p className='text-red-500'>--------------------::--------------------</p>
          </div>
        </div>
        {/* title section end */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {/* banner image section start */}
          <div className='p-2 md:p-0'>
            <img className='md:h-96 md:w-96 mx-auto' src={chefImg}></img>
          </div>
          {/* banner image section end */}
          {/* ingredient section start */}
          <div className='grid grid-cols-2 items-center my-3 md:my-0'>
            <div className='text-center mb-2 md:mb-0'>
              <FaBolt className='mx-auto md:w-8 md:h-8 text-red-800'></FaBolt>
              <h1 className='md:text-base text-red-500 md:font-bold'>Salubrious Snacks</h1>
              <p className='md:text-xl text-gray-500'><em>snack are very delicious</em></p>
            </div>
            <div className='text-center mb-2 md:mb-0'>
              <FaWineGlass className='mx-auto md:w-8 md:h-8 text-red-800'></FaWineGlass>
              <h1 className='md:text-base text-red-500 md:font-bold'>Health Drinks</h1>
              <p className='md:text-xl text-gray-500'><em>Drinks are so comfortable</em></p>
            </div>
            <div className='text-center mb-2 md:mb-0'>
              <FaShoppingBag className='mx-auto md:w-8 md:h-8 text-red-800'></FaShoppingBag>
              <h1 className='md:text-base text-red-500 md:font-bold'>Packaged Foods</h1>
              <p className='md:text-xl text-gray-500'><em>Your can carry on this food</em></p>
            </div>
            <div className='text-center mb-2 md:mb-0'>
              <FaCookieBite className='mx-auto md:w-8 md:h-8 text-red-800'></FaCookieBite>
              <h1 className='md:text-base text-red-500 md:font-bold'>Chocolate Desserts</h1>
              <p className='md:text-xl text-gray-500'><em>Desserts is a healthy food</em></p>
            </div>
            <div className='text-center'>
            <FaConciergeBell className='mx-auto md:w-8 md:h-8 text-red-800'></FaConciergeBell>
              <h1 className='md:text-base text-red-500 md:font-bold'>Spicy Stuff</h1>
              <p className='md:text-xl text-gray-500'><em>Chicken Spicy and meal</em></p>
            </div>
            <div className='text-center'>
              <FaWineGlassAlt className='mx-auto md:w-8 md:h-8 text-red-800'></FaWineGlassAlt>
              <h1 className='md:text-base text-red-500 md:font-bold'>Soft Drinks</h1>
              <p className='md:text-xl text-gray-500'><em>Soft drinks for children</em></p>
            </div>
          </div>
          {/* ingredient section end */}
        </div>
      </div>
      {/* our ingredient section end */}
    </div>
  );
};

export default Ingredient;