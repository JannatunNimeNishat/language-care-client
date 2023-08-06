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
import AddaClass from "../Pages/Dashboard/AddaClass/AddaClass";
import InstructorClasses from "../Pages/Dashboard/Dashboard/InstructorClasses/InstructorClasses";
import AdminRoute from "./AdminRoute";
import ManageAdminClasses from "../Pages/Dashboard/ManageAdminClasses/ManageAdminClasses";
import GiveFeedback from "../Pages/Dashboard/ManageAdminClasses/GiveFeedback";
import ManageAdminUsers from "../Pages/Dashboard/ManageAdminUsers/ManageAdminUsers";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import Contacts from "../Pages/Contacts/Contacts";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        // errorElement:<ErrorPage></ErrorPage>,
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
               
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/contacts',
                element:<Contacts></Contacts>
            }

        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            // students routes
            {
                path:'studenthome',
                element:<StudentsRoute><StudentHome></StudentHome></StudentsRoute>
            },
            {
                path:'selectedclasses',
                element:<StudentsRoute><MySelectedClasses></MySelectedClasses></StudentsRoute>
            },
            {
                path:'payment',
                element:<StudentsRoute><Payment></Payment></StudentsRoute>
            },
            {
                path:'enrolledclasses',
                element:<StudentsRoute><EnrolledClasses></EnrolledClasses></StudentsRoute>
            },
            {
                path:'paymnethistory',
                element:<StudentsRoute><PaymentHistory></PaymentHistory></StudentsRoute>
            },
            // instructors route
            {
                path:'instructorhome',
                element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path:'addaclass',
                element:<InstructorRoute><AddaClass></AddaClass></InstructorRoute>
            },
            {
                path:'instructor-classes',
                element:<InstructorRoute><InstructorClasses></InstructorClasses></InstructorRoute>
            },
            //admin routes
            {
                path:'adminhome',
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'manageadminclasses',
                element:<AdminRoute><ManageAdminClasses></ManageAdminClasses></AdminRoute>
            },
            {
                path:'givefeedback/:id',
                element:<AdminRoute><GiveFeedback></GiveFeedback></AdminRoute>
            },
            {
                path:'manageadminusers',
                element:<AdminRoute><ManageAdminUsers></ManageAdminUsers></AdminRoute>
            }

        ]
    }
])
export default router;