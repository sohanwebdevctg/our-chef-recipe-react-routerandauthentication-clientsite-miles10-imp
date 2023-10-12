// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import { UseContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

  const {userData, logOut} = useContext(UseContext)
  const [show, setShow] = useState(false)
  console.log(userData)


  const signOut = () => {
    toast('your are logout')
    logOut()
  }
  

  return (
    <div>
      {/* desktop section start */}
      <div className='bg-red-600 md:fixed md:top-0 md:z-10 md:w-full md:block hidden'>
        <div className='container mx-auto'>
          <div className='md:flex md:justify-between md:items-center md:h-20'>
            {/* website logo section start */}
            <div>
              <Link to="/"><h1 className='text-2xl font-bold text-white'><i>OurChefRecipe</i></h1></Link>
            </div>
            {/* website logo section end */}
            {/* link section start */}
            <div className='md:flex gap-5'>
              <NavLink to="/" className={({ isActive}) => isActive ? "text-white text-xl font-semibold" : "text-black text-xl" }>Home</NavLink>
              <NavLink to="/blog" className={({ isActive}) => isActive ? "text-white text-xl font-semibold" : "text-black text-xl" }>Blog</NavLink>
            </div>
            {/* link section end */}
            <div>
              {
                userData ?
                <div className='flex gap-5 items-center'>
                  <div title={userData.displayName}>
                  <img className='w-10 h-10 rounded-2xl' src={userData.photoURL}></img>
                  </div>
                 <button onClick={signOut} className='bg-black text-white px-4 py-2 rounded'>logOut</button>
                </div>
                :
                <Link to="/login">
                <button className='bg-black text-white px-4 py-2 rounded'>logIn</button>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div className='md:hidden'>
        {/* title section start */}
        <div className='bg-red-600 h-16 flex items-center px-1 justify-between relative'>
          <div>
            <Link to="/"><h1 className='text-xl font-bold text-white'><i>OurChefRecipe</i></h1></Link>
          </div>
          <div>
            {
              show ? <button onClick={() => {setShow(false)}}><FaTimes className='text-white w-6 h-6'></FaTimes></button> : <button onClick={() => {setShow(true)}}><FaBars className='text-white w-6 h-6'></FaBars></button>
            }
          </div>
        </div>
        {/* title section end */}
        {/* navItem section start */}
        <div className={`absolute ${show ? 'top-16': '-top-96'} z-10 bg-red-600 w-full duration-700`}>
          {/* link section start */}
            <div className='md:flex gap-5 text-center'>
              <p className='mt-2'>
                <NavLink to="/" className={({ isActive}) => isActive ? "text-white text-xl font-semibold" : "text-black text-xl" }>Home</NavLink>
              </p>
              <p className='mt-2'>
                <NavLink to="/blog" className={({ isActive}) => isActive ? "text-white text-xl font-semibold" : "text-black text-xl" }>Blog</NavLink>
              </p>
            </div>
            <div>
            {
                userData ?
                <div className='flex my-2 justify-center'>
                  <div>
                    <div className='my-2 ml-5'>
                    <img className='w-10 h-10 rounded-2xl text-center' src={userData.photoURL}></img>
                    </div>
                 <button onClick={signOut} className='bg-black text-white px-4 py-2 rounded'>logOut</button>
                  </div>
                </div>
                :
                <div className='flex my-2'>
                  <Link className='mx-auto' to="/login">
                    <button className='bg-black text-white px-4 py-2 rounded'>logIn</button>
                  </Link>
                </div>
              }
            </div>
            {/* link section end */}
        </div>
        {/* navItem section end */}
      </div>
      {/* mobile section end */}
    </div>
  );
};

export default Navbar;