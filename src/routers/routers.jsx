import {createBrowserRouter,} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      }
    ]
  }
])

export default router;