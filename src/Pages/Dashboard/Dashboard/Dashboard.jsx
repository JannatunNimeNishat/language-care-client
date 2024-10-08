import { Link, NavLink, Outlet } from "react-router-dom";
import useCheckRole from "../../../hooks/useCheckRole";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdOutlineClass, MdPayment } from "react-icons/md";

import { SiGoogleclassroom } from "react-icons/si";

import { BsCalendar2Event } from "react-icons/bs";

import Loading from "../../Loading/Loading";

const Dashboard = () => {
    const [role, roleLoading] = useCheckRole()

    if (roleLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="lg:hidden w-full"><IoReorderThreeSharp className="h-10 w-10" /></label>
                {/* Page content here */}

                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full   bg-blue-500 text-white font-semibold">

                    {/* Sidebar content here */}
                    {
                        role === 'student' && <>
                            <li><NavLink to='/dashboard/studenthome' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}  >
                                <FaHome className="h-5 w-5" />

                                Student Home
                            </NavLink></li>
                            <li><NavLink to='/dashboard/selectedclasses' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <MdOutlineClass className="h-5 w-5" />
                                My Selected Classes</NavLink></li>

                            <li><NavLink to='/dashboard/enrolledclasses' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <SiGoogleclassroom className="h-5 w-5" />
                                My Enrolled Class
                            </NavLink></li>

                            <li><NavLink to='/dashboard/paymnethistory' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <MdPayment className="h-5 w-5" />
                                Payment History Page</NavLink></li>

                            <li><NavLink to='/dashboard/registered_events' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <BsCalendar2Event className="h-5 w-5" />
                                Events</NavLink></li>
                        </>
                    }
                    {
                        role === 'instructor' && <>
                            <li><NavLink to='/dashboard/instructorhome' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <FaHome className="h-5 w-5" />
                                Instructor Home</NavLink></li>
                            <li><NavLink to='/dashboard/addaclass' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <MdOutlineClass className="h-5 w-5" />
                                Add a Class</NavLink></li>
                            <li><NavLink to='/dashboard/instructor-classes' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <SiGoogleclassroom className="h-5 w-5" />
                                My Classes</NavLink></li>
                        </>
                    }
                    {
                        role === 'admin' && <>
                            <li><NavLink to='/dashboard/adminhome' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <FaHome className="h-5 w-5" />
                                Admin Home
                            </NavLink></li>

                        {/* manage classes */}
                            <li><NavLink to='/dashboard/manageadminclasses' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <MdOutlineClass className="h-5 w-5" />
                                Manage Classes

                            </NavLink></li>

                            {/* manage user */}
                            <li><NavLink to='/dashboard/manageadminusers' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <FaUsers className="h-5 w-5" />
                                Manage Users
                            </NavLink></li>
                            

                            {/* add event */}
                            <li><NavLink to='/dashboard/add_event' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <BsCalendar2Event className="h-5 w-5" />
                                Add Event
                            </NavLink></li>


                            {/* manage events */}
                            <li><NavLink to='/dashboard/manage_events' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>
                                <BsCalendar2Event className="h-5 w-5" />
                                Manage Events
                            </NavLink></li>


                        </>
                    }

                    <div className="divider"></div>

                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/instructors'>Instructors</Link></li>
                    <li><Link to='/classes'>Classes</Link></li>



                </ul>

            </div>
        </div>
    );
};

export default Dashboard;