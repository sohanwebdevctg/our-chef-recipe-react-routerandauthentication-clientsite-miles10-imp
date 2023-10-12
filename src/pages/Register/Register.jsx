// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { UseContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

  const {register, userDetails} = useContext(UseContext)

  const [show, setShow] = useState(false);
  const [error, setError] = useState('');

  const checkBox = (event) => {
    setShow(event.target.checked);
  }


  // registerBtn
  const registerBtn = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if(name === null){
      return setError('please provide your name')
    }
    if(email === null){
      return setError('please provide your email')
    }
    if(password === null && password < 6){
      return setError('please set your password')
    }
    if(photo === null){
      return setError('please set your photo url')
    }

    register(email, password)
    .then((result) => {
      const user = result.user;
      userDetails(result.user, name, photo)
      toast('success your registration')
    })
    .catch((error) => {
      setError('please try again')
      toast('please try again')
      return;
    })


    form.reset()

  }
  

  return (
    <div className='container mx-auto md:mt-10'>
      {/* register section start */}
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-black md:p-8 rounded-lg px-2 py-6'>
          <h1 className='text-white text-4xl mb-2 font-bold text-center'><em>Register</em></h1>
          <form onSubmit={registerBtn}>
            {/* name start */}
            <input type="text" name="name" id="name" placeholder='please enter your name' className='my-2 rounded p-2 md:w-80 w-72' required/><br></br>
            {/* name end */}
            {/* email start */}
            <input type="email" name="email" id="email" placeholder='please enter email address' className='my-2 rounded p-2 md:w-80 w-72' required/><br></br>
            {/* email end */}
            {/* photo url start */}
            <input type="text" name="photo" id="photo" placeholder='please enter photo url' className='my-2 rounded p-2 md:w-80 w-72' required/><br></br>
            {/* photo url end */}
            {/* password start */}
            <input type="password" name="password" id="password" placeholder='please enter password' className='my-2 rounded p-2 md:w-80 w-72' required/><br></br>
            <p className='text-xl text-red-700'></p>
            {/* password end */}
            {/* message section start */}
            <p className='text-lg text-red-600 my-2'>{error}</p>
            {/* message section end */}
            {/* terms and condition start */}
            <p className='flex gap-2 my-2 items-center'>
              <input type="checkbox" className='md:my-2 m-0' onClick={checkBox} />
              <span className='text-white'>Please! check the <Link className='text-blue-700' to="/terms">Terms and condition</Link></span>
            </p>
            {/* terms and condition end */}
            {/* submit button */}
              <button className='bg-red-600 w-full p-2 rounded text-white md:text-lg md:font-bold text-center' disabled={!show}>Register</button>
            {/* submit button */}
          </form>
          {/* login page section star */}
          <p className='text-white mt-2 text-sm md:text-base'>If you have any account, please! <Link to="/login" className='text-blue-500'>LogIn Page</Link></p>
          {/* login page section end */}
        </div>
      </div>
      {/* register section end */}
    </div>
  );
};

export default Register;