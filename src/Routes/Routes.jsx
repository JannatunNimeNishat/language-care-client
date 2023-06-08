import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";

import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses/MySelectedClasses";
import StudentsRoute from "./StudentsRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/instructors',
                element:<AllInstructors></AllInstructors>
            },
            {
                path:'/classes',
                element:<AllClasses></AllClasses>
            }

        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'studenthome',
                element:<StudentsRoute><StudentHome></StudentHome></StudentsRoute>
            },
            {
                path:'selectedclasses',
                element:<StudentsRoute><MySelectedClasses></MySelectedClasses></StudentsRoute>
            },
            {
                path:'instructorhome',
                element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path:'adminhome',
                element:<AdminHome></AdminHome>
            }

        ]
    }
])
export default router;