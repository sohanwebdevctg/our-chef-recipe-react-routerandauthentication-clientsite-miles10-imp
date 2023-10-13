/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Recipe.css'
import { HiHeart } from "react-icons/hi";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const Recipe = ({recipe}) => {

  // eslint-disable-next-line react/prop-types
  const { image,ingredients,methodOfCooking,recipeName} = recipe;
  const [select, setSelect] = useState(false)

  const selectBtn = () => {
    toast('success your selected recipe')
    setSelect(true)
  }


  return (
    <div className='px-2 md:px-0'>
      {/* recipe card section start */}
      <div className='px-2 md:px-0 bg-slate-100 pb-1 md:pb-0 md:h-[580px] flex flex-col'>
        <img className='w-full md:h-56 h-full' src={image}></img>
        <div className='my-2 pl-3 md:py-3'>
          <p className='md:text-lg'><strong>RecipeName:</strong> <i>{recipeName}</i></p>
          <p className='md:text-lg'><strong>Ingredients:</strong> <i>{ingredients}</i></p>
          {/* // eslint-disable-next-line react/prop-types */}
          <p className='md:text-lg'><strong>MethodOfCooking:</strong> <i>{methodOfCooking.map((value, index) => <p key={index}>{++index}.{value}</p>)}</i></p>
          {/* <p className='md:text-xl'><strong>Recipes:</strong> <i>{number_of_recipes}</i></p>
          <p className='md:text-xl'><strong>Likes:</strong> <i>{likes}</i></p> */}
        </div>
        <div onClick={selectBtn} className=' flex justify-end pr-5 mt-auto mb-4'>
          {
            select ?
            ""
            :
            <HiHeart className='md:w-7 md:h-7 text-red-500'></HiHeart>
          }
        </div>
      </div>
      {/* recipe card section end */}
    </div>
  );
};

export default Recipe;