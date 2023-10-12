// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from '../pages/Loading/Loading';

const MainLayout = () => {

  //loading
  const navigation = useNavigation();

  return (
    <div>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* loading section start */}
      {navigation.state === 'loading' ? <Loading></Loading> : ''}
      {/* loading section end */}
      {/* main section start */}
      <Outlet></Outlet>
      {/* main section end */}
      {/* navbar section start */}
      <Footer></Footer>
      {/* footer section end */}
    </div>
  );
};

export default MainLayout;