// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './ChefDetails.css';
import { Link, useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const ChefDetails = () => {

  //chef-details data
  const data = useLoaderData();

  //recipe section data
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    fetch('https://chef-server-58tybfoup-sohanwebdevctgs-projects.vercel.app/recipe')
    .then((res) => res.json())
    .then(data => setRecipes(data))
  }, [])


  return (
    <div className='container mx-auto md:my-24 my-5'>
      {/* chefDetails section start */}
      <div className='grid gird-cols-1 md:grid-cols-2 md:gap-20 gap-10 p-2'>
        <div>
          <img className='w-full md:h-96 h-56' src={data[0].image}></img>
        </div>

        <div className='my-2 pl-2 md:py-3'>
          <p className='md:text-xl'><strong>Name:</strong> <i>{data[0].name}</i></p>
          <p className='md:text-xl my-1'><strong>Details:</strong> <i>{data[0].description}</i></p>
          <p className='md:text-xl'><strong>Experience:</strong> <i>{data[0].experience}</i></p>
          <p className='md:text-xl my-1'><strong>Recipes:</strong> <i>{data[0].number_of_recipes}</i></p>
          <p className='md:text-xl mb-1'><strong>Likes:</strong> <i>{data[0].likes}</i></p>
          <div className='my-3 mr-2'>
            <Link className='bg-red-500 py-2 px-4 rounded text-white' to={'/'}>chef item</Link>
          </div>

        </div>
        
      </div>
      {/* chefDetails section end */}
      {/* recipe section start */}
      <div className='container mx-auto my-20'>
        {/* title section start */}
        <div className='p-3 md:p-0 text-center'>
          <h1 className='md:text-4xl font-extrabold'>Chef Recipe</h1>
          <div className='my-5'>
            <p className='text-base md:text-xl text-gray-500'><em>If you’re like most restaurant owners, creating menu descriptions is probably <br className='hidden md:block'></br>not your favorite task. It can be hard to come up with phrases that make diners feel.</em></p>
            <p className='text-red-500'>--------------------::--------------------</p>
          </div>
        </div>
        {/* title section end */}
        {/* chef section start */}
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-5'>
          {
            recipes.map((recipe) => <Recipe
            key={recipe.id}
            recipe={recipe}
            ></Recipe>)
          }
        </div>
        {/* chef section end */}
      </div>
      {/* recipe section end */}
    </div>
  );
};

export default ChefDetails;