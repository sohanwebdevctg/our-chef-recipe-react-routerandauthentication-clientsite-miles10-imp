// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Gallery.css';
import gallery1 from '../../../public/gallery1.jpg'
import gallery2 from '../../../public/gallery2.jpg'
import gallery3 from '../../../public/gallery3.jpg'
import gallery4 from '../../../public/gallery4.jpg'
import gallery5 from '../../../public/gallery5.jpg'
import gallery6 from '../../../public/gallery6.jpg'
import gallery7 from '../../../public/gallery7.jpg'
import gallery8 from '../../../public/gallery8.jpg'
import gallery9 from '../../../public/gallery9.jpg'
import gallery10 from '../../../public/gallery10.jpg'
import gallery11 from '../../../public/gallery11.jpg'
import gallery12 from '../../../public/gallery12.jpg'
import gallery13 from '../../../public/gallery13.jpg'

const Gallery = () => {
  return (
    <div className='mt-10'>
      <div className='container mx-auto text-center'>
        {/* title section start */}
        <div className='p-2 md:p-0'>
          <h1 className='md:text-4xl font-extrabold'>Our Foods Gallery</h1>
          <div className='my-5'>
            <p className='text-base md:text-xl text-gray-500'><em>If you’re like most restaurant owners, creating menu descriptions is probably <br className='hidden md:block'></br>not your favorite task. It can be hard to come up with phrases that make diners feel <br className='hidden md:block'></br>like they’re genuinely getting a taste of what they’ll experience.</em></p>
            <p className='text-red-500'>--------------------::--------------------</p>
          </div>
        </div>
        {/* title section end */}
      </div>
      <div className='grid gird-cols-2 md:grid-cols-7'>
      {/* gallery section start */}
      <div>
        <img src={gallery1}></img>
      </div>
      <div>
        <img src={gallery2}></img>
      </div>
      <div>
        <img src={gallery3}></img>
      </div>
      <div>
        <img src={gallery4}></img>
      </div>
      <div>
        <img src={gallery5}></img>
      </div>
      <div>
        <img src={gallery6}></img>
      </div>
      <div>
        <img src={gallery7}></img>
      </div>
      <div>
        <img src={gallery8}></img>
      </div>
      <div>
        <img src={gallery9}></img>
      </div>
      <div>
        <img src={gallery10}></img>
      </div>
      <div>
        <img src={gallery11}></img>
      </div>
      <div>
        <img src={gallery12}></img>
      </div>
      <div>
        <img src={gallery13}></img>
      </div>
      <div>
        <img src={gallery11}></img>
      </div>

      {/* gallery section end */}
      </div>
    </div>
  );
};

export default Gallery;