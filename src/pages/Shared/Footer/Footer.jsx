// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black'>
      {/* footer section start */}
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-4 grid-cols-1 py-10'>
          {/* logo and social section start */}
          <div className='flex justify-center md:flex-none md:justify-start'>
            <div>
              <h1 className='text-slate-300 text-2xl mb-3'><i>OurChefRecipe</i></h1>
              <span className='flex gap-5'>
                <FaFacebook className='w-6 h-6 text-white'></FaFacebook>
                <FaInstagramSquare className='w-6 h-6 text-white'></FaInstagramSquare>
                <FaTwitter className='w-6 h-6 text-white'></FaTwitter>
                <FaYoutube className='w-6 h-6 text-white'></FaYoutube>
              </span>
            </div>
          </div>
          {/* logo and social section end */}
          {/* support section start */}
          <div className='mt-6 md:mt-0 flex justify-center md:flex-none md:justify-start text-center md:text-left'>
            <div>
              <h2 className='text-slate-400 text-2xl mb-3 font-semibold'>Support</h2>
              <div>
                <p className='text-white hover:text-red-500 duration-300'>Contact Us</p>
                <p className='text-white hover:text-red-500 duration-300'>FAQ</p>
                <p className='text-white hover:text-red-500 duration-300'>Download</p>
                <p className='text-white hover:text-red-500 duration-300'>Location</p>
                <p className='text-white hover:text-red-500 duration-300'>product Registration</p>
              </div>
            </div>
          </div>
          {/* support section end */}
          {/* furrion section start */}
          <div  className='mt-6 md:mt-0 flex justify-center md:flex-none md:justify-start text-center md:text-left'>
            <div>
              <h2 className='text-slate-400 text-2xl mb-3 font-semibold'>Furrion</h2>
                <div>
                  <p className='text-white hover:text-red-500 duration-300'>About Furrion</p>
                  <p className='text-white hover:text-red-500 duration-300'>Unique Foods</p>
                  <p className='text-white hover:text-red-500 duration-300'>Other Country</p>
                  <p className='text-white hover:text-red-500 duration-300'>Sea Foods</p>
                  <p className='text-white hover:text-red-500 duration-300'>Access Foods</p>
                </div>
            </div>
          </div>
          {/* furrion section end */}
          {/* form section start */}
          <div  className='mt-6 md:mt-0 flex justify-center md:flex-none md:justify-start text-center md:text-left'>
            <div>
              <h2 className='text-slate-400 text-xl mb-3 font-semibold'>Stay up to date on <br className='block md:hidden'></br>the latest form</h2>
                <div>
                  <p className='text-white hover:text-red-500 duration-300'>Enter your email Address</p>
                  <input type='email' className='my-2 w-60 p-1'></input>
                  <button className='bg-red-600 py-2 px-4 w-60'>Submit</button>
                </div>
            </div>
          </div>
          {/* form section end */}
        </div>
        <div className='gird grid-cols-1 pb-6 px-10'>
          <div>
            <hr className='mb-5'></hr>
            <p className='text-white text-center'>&copy;Copyright.All rights reserved.</p>
          </div>
        </div>
      </div>
      {/* footer section end */}
    </div>
  );
};

export default Footer;