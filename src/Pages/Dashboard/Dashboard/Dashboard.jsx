import { Link, NavLink, Outlet } from "react-router-dom";
import useCheckRole from "../../../hooks/useCheckRole";


const Dashboard = () => {
    const [role, roleLoading] = useCheckRole()
    
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <Outlet></Outlet>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full   bg-blue-500 text-white font-semibold">

                    {/* Sidebar content here */}
                    {/* <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink> */}
                    {
                        role === 'student' && <>
                            <li><NavLink to='/dashboard/studenthome' className={({ isActive }) => isActive ? 'active' : ''}  >Student Home</NavLink></li>
                            <li><NavLink to='/dashboard/selectedclasses' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>My Selected Classes</NavLink></li>

                            <li><NavLink to='/dashboard/enrolledclasses' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>My Enrolled Class</NavLink></li>

                            <li><NavLink to='/dashboard/paymnethistory' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>Payment History Page</NavLink></li>
                        </>
                    }
                    {
                        role === 'instructor' && <>
                            <li><NavLink to='/dashboard/instructorhome' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>Instructor Home</NavLink></li>
                            <li><NavLink to='/dashboard/addaclass' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>Add a Class</NavLink></li>
                            <li><NavLink to='/dashboard/instructor-classes' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>My Classes</NavLink></li>
                        </>
                    }
                    {
                        role === 'admin' && <>
                            <li><NavLink to='/dashboard/adminhome' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/manageadminclasses' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/manageadminusers' className={({ isActive }) => isActive ? 'active-dashboard-route' : ''}>Manage Users</NavLink></li>
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