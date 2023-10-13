import {createBrowserRouter,} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Terms from "../pages/Terms/Terms";
import ChefDetails from "../pages/Chefdetails/Chefdetails";
import Private from "./Private";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path : '/',
    element : <MainLayout></MainLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('https://chef-server-58tybfoup-sohanwebdevctgs-projects.vercel.app/chef')
      },
      {
        path : '/chef/:id',
        element : <Private><ChefDetails></ChefDetails></Private>,
        loader : ({params}) => fetch(`https://chef-server-58tybfoup-sohanwebdevctgs-projects.vercel.app/chef/${params.id}`)
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      },
      {
        path : '/aboutus',
        element : <AboutUs></AboutUs>
      },
      {
        path : '/terms',
        element : <Terms></Terms>
      },
      {
        path : '/login',
        element : <LogIn></LogIn>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
    ]
  }
])

export default router;