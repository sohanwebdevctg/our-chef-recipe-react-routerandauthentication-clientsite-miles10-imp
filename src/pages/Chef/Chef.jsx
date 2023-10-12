// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Chef.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

// eslint-disable-next-line react/prop-types
const Chef = ({chef}) => {


  // eslint-disable-next-line react/prop-types
  const {id, image, name, experience,number_of_recipes, likes} = chef;

  return (
    <div>
      {/* chef card section start */}
      <div className='px-2 md:px-0 bg-slate-100 pb-1 md:pb-0'>
        <LazyLoad>
          <img className='w-full md:h-56 h-full' src={image}></img>
        </LazyLoad>
        <div className='my-2 pl-2 md:py-3'>
          <p className='md:text-xl'><strong>Name:</strong> <i>{name}</i></p>
          <p className='md:text-xl'><strong>Experience:</strong> <i>{experience}</i></p>
          <p className='md:text-xl'><strong>Recipes:</strong> <i>{number_of_recipes}</i></p>
          <p className='md:text-xl'><strong>Likes:</strong> <i>{likes}</i></p>
          <div className='my-3 text-right mr-2'>
            <Link className='bg-red-500 py-2 px-4 rounded text-white' to={`/chef/${id}`}>View Details</Link>
          </div>
        </div>
      </div>
      {/* chef card section end */}
    </div>
  );
};

export default Chef;