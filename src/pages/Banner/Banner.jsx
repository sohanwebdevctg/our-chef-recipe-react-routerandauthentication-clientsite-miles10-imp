// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Banner.css'
import { FaArrowRight } from 'react-icons/fa';


const Banner = () => {
  return (
    <div className='bg-black banner_section'>
      {/* banner section start */}
      <div className='md:container md:mx-auto flex items-center h-screen w-auto'>
        <div className='px-3 md:px-0'>
          {/* title section start */}
          <div className='text-center md:text-left'>
            <p className='text-3xl font-bold md:text-7xl md:font-black text-white'>BEST QUALITY</p>
            <p className='text-3xl font-bold md:text-7xl md:font-black text-white'>Food</p>
          </div>
          {/* title section end */}
          {/* description section start */}
          <div className='text-center md:text-left'>
            <p className='text-lg text-gray-500 md:my-3'>
              <em>If you’re like most restaurant owners, creating menu descriptions<br className='hidden md:block'></br> is probably not your favorite task. It can be hard to come up with <br className='hidden md:block'></br>phrases that make diners feel like they’re genuinely getting a <br className='hidden md:block'></br>taste of what they’ll experience.</em>
            </p>
          </div>
          {/* description section end */}
          {/* button section start */}
          <div className='text-center md:text-left flex justify-center md:flex-none md:justify-start'>
            <button className='bg-red-600 px-4 py-2 rounded md:text-xl text-white md:font-semibold flex items-center gap-3'>SHOW FOOD RECIPE <FaArrowRight></FaArrowRight></button>
          </div>
          {/* button section end */}
        </div>
      </div>
      {/* banner section end */}
    </div>
  );
};

export default Banner;