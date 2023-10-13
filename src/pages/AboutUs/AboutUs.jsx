// eslint-disable-next-line no-unused-vars
import React from 'react';
import './AboutUs.css'
import aboutus from '../../../public/aboutus.jpg';
import chef from '../../../public/chef.jpg';
import chef1 from '../../../public/chef1.jpg';
import chef2 from '../../../public/chef3.jpg';
import { FaArrowRight } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className='md:container md:mx-auto '>
      {/* aboutus banner section start */}
      <div className='md:flex md:justify-between md:items-center h-screen w-auto'>
        <div className='px-3 md:px-0 my-5 md:my-0'>
          {/* title section start */}
          <div className='text-center md:text-left'>
            <p className='text-3xl font-bold md:text-7xl md:font-black text-slate-700'>ABOUT US</p>
            <p className='text-3xl font-bold md:text-7xl md:font-black text-slate-700'>KNOWLEDGE</p>
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
            <button className='bg-red-600 px-4 py-2 rounded md:text-xl text-white md:font-semibold flex items-center gap-3'>SHOW OUR SERVICE <FaArrowRight></FaArrowRight></button>
          </div>
          {/* button section end */}
        </div>
        <div className='my-3 md:my-0'>
          <img className='rounded-m-full rounded-s-full' src={aboutus}></img>
        </div>
      </div>
      {/* aboutus banner section end */}
      {/* our founded section start */}
      <div className='mb-20'>
        <div className='text-center md:text-left my-2'>
          <h1 className='text-2xl font-extrabold'>Our Founder</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div>
            <img className='w-full h-80' src={chef}></img>
            <div>
              <h1 className='text-base font-bold'>Randy orton</h1>
              <p className='text-xl'><em>Ceo of founder</em></p>
            </div>
          </div>
          <div>
            <img className='w-full h-80' src={chef1}></img>
            <div>
              <h1 className='text-base font-bold'>John Cena</h1>
              <p className='text-xl'><em>executive director</em></p>
            </div>
          </div>
          <div>
            <img className='w-full h-80' src={chef2}></img>
            <div>
              <h1 className='text-base font-bold'>Under Taker</h1>
              <p className='text-xl'><em>Lieutenant/Director</em></p>
            </div>
          </div>
        </div>
      </div>
      {/* our founded section end */}
      {/* grow section start */}
      <div className='flex justify-center items-center my-10'>
        <div>
          <h1 className='text-center md:text-2xl text-base font-extrabold'>
            <span>Grow Up Our Work</span><br></br>
            <span>Speed</span>
          </h1>
          <div className='my-5 text-center'>
            <p className='text-base md:text-xl text-gray-500'><em>If you’re like most restaurant owners, creating menu descriptions is probably <br className='hidden md:block'></br>not your favorite task. It can be hard to come up with phrases that make diners feel.</em></p>
            <p className='text-red-500'>--------------------::--------------------</p>
          </div>
          <div className='grid grid-1 md:grid-cols-6 md:gap-20 gap-5'>
            <div className='text-center'>
              <h4 className='text-red-500 text-4xl font-black'>227,74</h4>
              <p className='text-base text-slate-500'>our chef</p>
            </div>
            <div className='text-center'>
              <h4 className='text-red-500 text-4xl font-black'>3903.93</h4>
              <p className='text-base text-slate-500'>our chef</p>
            </div>
            <div className='text-center'>
              <h4 className='text-red-500 text-4xl font-black'>90%</h4>
              <p className='text-base text-slate-500'>our chef</p>
            </div>
            <div className='text-center'>
              <h4 className='text-red-500 text-4xl font-black'>00.308</h4>
              <p className='text-base text-slate-500'>our chef</p>
            </div>
            <div className='text-center'>
              <h4 className='text-red-500 text-4xl font-black'>345/983</h4>
              <p className='text-base text-slate-500'>our chef</p>
            </div>
            <div className='text-center'>
              <h4 className='text-red-500 text-4xl font-black'>11121%</h4>
              <p className='text-base text-slate-500'>our chef</p>
            </div>
          </div>
        </div>
      </div>
      {/* grow section end */}
    </div>
  );
};

export default AboutUs;