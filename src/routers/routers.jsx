import {createBrowserRouter,} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
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