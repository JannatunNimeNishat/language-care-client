import { Link, Outlet } from "react-router-dom";
import useCheckRole from "../../../hooks/useCheckRole";


const Dashboard = () => {
    const [role, roleLoading] = useCheckRole()
    console.log('role',role);
    if(roleLoading){
        return <p>loading</p>
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                
                 <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                    {/* Sidebar content here */}

                   {
                    role === 'student' && <>
                    <li><Link to='/dashboard/studenthome'>Student Home</Link></li>
                    <li><Link to='/dashboard/myselectedclasses'>My Selected Classes</Link></li>
                    <li><Link to='#'>My Enrolled Class</Link></li>
                    <li><Link to='#'>Payment History Page</Link></li>
                    </>
                   }
                   {
                    role === 'instructor' && <>
                    <li><Link to='/dashboard/instructorhome'>Instructor Home</Link></li>
                    <li><Link to='#'>Add a Class</Link></li>
                    <li><Link to='#'>My Classes</Link></li>
                    <li><Link to='#'>Payment History Page</Link></li>
                    </>
                   }
                   {
                    role === 'admin' && <>
                    <li><Link to='/dashboard/instructorhome'>Admin Home</Link></li>
                    <li><Link to='#'>Manage Classes</Link></li>
                    <li><Link to='#'>Manage Users</Link></li>
                    </>
                   }
                    <li><Link to='/'>Home</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;