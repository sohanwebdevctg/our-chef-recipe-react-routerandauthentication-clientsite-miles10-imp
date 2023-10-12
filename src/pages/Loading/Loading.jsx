// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className='bg-black h-screen flex items-center justify-center'>
      <div className='md:container md:mx-auto'>
      <div className='md:h-screen flex justify-center items-center text-center'>
      {/* description section start */}
        <div className='flex'>
          <p className='text-white text-6xl'>L</p>
          <div className='border-4 border p-7 border-dotted rounded-full animate-spin'></div>
          <p className='text-white text-6xl'>ading....</p>
        </div>
      {/* description section end */}
      </div>
      {/* items section start */}
    </div>
    </div>
  );
};

export default Loading;