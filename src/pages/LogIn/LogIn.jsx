// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './LogIn.css'
import { Link,  } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {




  //loginBtn
  const loginBtn = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;



    form.reset()
  }



  return (
    <div className='container mx-auto md:mt-10'>
      {/* register section start */}
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-black md:p-8 rounded-lg px-2 py-6'>
          <h1 className='text-white text-4xl mb-2 font-bold text-center'><em>LogIn Page</em></h1>
          <form onSubmit={loginBtn}>
            {/* email start */}
            <input type="email" name="email" id="email" placeholder='please enter email address' className='my-2 rounded p-2 md:w-80 w-72' required/><br></br>
            {/* email end */}
            {/* password start */}
            <input type="password" name="password" id="password" placeholder='please enter password' className='my-2 rounded p-2 md:w-80 w-72' required/><br></br>
            <p className='text-base text-red-700 mb-2'></p>
            {/* password end */}
            {/* submit button */}
            <button type='submit' className='bg-red-600 w-full p-2 rounded text-white md:text-lg md:font-bold'>Register</button>
            {/* submit button */}
          </form>
          {/* socialMedia section start */}
          <div className='grid md:grid-cols-2 grid-cols-1 md:gap-5 mt-2'>
            <button className='border-2 border-blue-500 text-blue-500 text-sm md:w-[150px] w-full rounded py-1 flex items-center gap-1 justify-center hover:bg-blue-500 hover:text-black duration-300'><FaGoogle className='w-3 h-3'></FaGoogle>LogIn Via Google</button>
            <button className='border-2 border-slate-300 text-slate-300 text-sm md:w-[150px] w-full rounded py-1 flex items-center gap-1 justify-center hover:bg-slate-300 hover:text-black duration-300 mt-2 md:mt-0'><FaGithub className='w-3 h-3'></FaGithub>LogIn Via GitHub</button>
          </div>
          {/* socialMedia section end */}
          {/* login page section star */}
          <p className='text-white mt-2 text-sm md:text-base'>If you have no account, please! <Link to="/register" className='text-blue-500'>Register Page</Link></p>
          {/* login page section end */}
        </div>
      </div>
      {/* register section end */}
    </div>
  );
};

export default LogIn;