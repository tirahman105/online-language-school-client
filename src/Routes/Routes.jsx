import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyBookedClasses from "../Pages/Dashboard/MyBookedClasses";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'instructors',
          element: <AllInstructor></AllInstructor>,
        },
        {
          path:'allclasses',
          element: <AllClasses></AllClasses>,
          loader: () => fetch('http://localhost:5000/classes')
      },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>,
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>, 
      children: [
        {
          path: 'mybookedclasses', 
          element: <MyBookedClasses></MyBookedClasses>
        },
        {
          path: 'addclass', 
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'manageclasses', 
          element: <InstructorRoute><ManageClasses></ManageClasses></InstructorRoute>
        },
        {
          path: 'allusers', 
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
      ]
    }
  ]);


export default router;