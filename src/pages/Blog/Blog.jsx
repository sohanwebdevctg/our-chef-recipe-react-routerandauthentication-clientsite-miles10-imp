// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Blog.css'
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';

const Blog = () => {
  // print the use ref
  const ref = useRef()

  return (
    <div className='container mx-auto'>
      {/* blog section start */}
      <div className='flex items-center p-3 min-h-[920px] md:min-h-[540px]'>
        {/* print section */}
        <div ref={ref}>
          <div>
            <h1 className='md:text-2xl font-bold'>1.Tell us the differences between uncontrolled and controlled components.</h1>
            <p>
              <span><strong>Uncontrolled:</strong> Uncontrolled components refer to components that manage their own state internally.</span><br></br>
              <span><strong>Controlled:</strong>controlled components refer to components that have their state and behavior controlled by the parent component</span>
            </p>
          </div>
          <div>
            <h1 className='md:text-2xl font-bold'>2.How to validate React props using PropTypes</h1>
            <p>
            Setting the propTypes property of the FooComponent component to an object that has the names of the props to validate as the keys.<br></br>And the corresponding values are the data type of the props.
            </p>
          </div>
          <div>
            <h1 className='md:text-2xl font-bold'>3.Tell us the difference between nodejs and express js</h1>
            <p>
              <span><strong>NodeJs:</strong>NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using<br></br> a single-threaded approach for web loading and asynchronous programming, the framework has<br></br>achieved great success in being highly-performant and scalable.</span><br></br>
              <span><strong>ExpressJs:</strong>ExpressJS is a framework for developing web applications with NodeJS.</span>
            </p>
          </div>
          <div>
            <h1 className='md:text-2xl font-bold'>3.What is a custom hook, and why will you create a custom hook?</h1>
            <p>When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
            <p>Custom Hooks start with "use".</p>
          </div>
        </div>
        {/* print section */}
        
      </div>
      {/* blog section end */}
      <div className='flex md:justify-end justify-center my-5'>
        <ReactToPrint trigger={()=> <button className='bg-red-500 px-4 py-2 rounded'>Print</button>} content={()=>ref.current}></ReactToPrint>
      </div>
    </div>
  );
};

export default Blog;