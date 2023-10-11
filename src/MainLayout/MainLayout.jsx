// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../pages/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      {/* this is navbar section start */}
      <h1>navbar section start</h1>
      {/* this is navbar section end */}
      {/* this is home section start */}
      <Outlet></Outlet>
      {/* this is home section end */}
      {/* this is footer section start */}
      <Footer></Footer>
      {/* this is footer section end */}
    </div>
  );
};

export default MainLayout;