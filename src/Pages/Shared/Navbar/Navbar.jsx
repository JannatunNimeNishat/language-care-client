
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

import { FaShoppingCart } from 'react-icons/fa';
import useSelectedClass from '../../../hooks/useSelectedClass';
import useCheckRole from '../../../hooks/useCheckRole';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [selectedClass] = useSelectedClass();

    const [role] = useCheckRole()

    console.log(user);
    // console.log(selectedClass);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const navItems = <>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/instructors' className={({ isActive }) => isActive ? 'active' : ''}>Instructors</NavLink>
        </li>
        <li>
            <NavLink to='/classes' className={({ isActive }) => isActive ? 'active' : ''}>Classes</NavLink>
        </li>
        
        {
            user && <>
                <li>
                    <button className="">
                        <div className="badge ">
                            <FaShoppingCart className='h-5 w-5 mr-3 text-blue-500' />
                           
                            {selectedClass?.length || 0}
                            
                            </div>
                    </button>
                </li>
                <li className=''>
                    <div className="avatar">
                        <div className=" w-7 h-7 rounded-full">
                            <img className="" src={user?.photoURL} />
                        </div>
                    </div>

                </li>
                <li>
                   {
                   role === 'student' &&
                   <NavLink to={`/dashboard/studenthome`} className={({ isActive }) => isActive ? 'active' : ''}>
                         Dashboard
                    </NavLink>
                    
                    }
                   {
                   role === 'instructor' &&
                   <NavLink to={`/dashboard/instructorhome`} className={({ isActive }) => isActive ? 'active' : ''}>
                         Dashboard
                    </NavLink>
                    
                    }
                   {
                   role === 'admin' &&
                   <NavLink to={`/dashboard/adminhome`} className={({ isActive }) => isActive ? 'active' : ''}>
                         Dashboard
                    </NavLink>
                    
                    }





                    {/* <NavLink to={`/dashboard`} className={({ isActive }) => isActive ? 'active' : ''}>

                        Dashboard</NavLink> */}
                </li>
            </>
        }
       



    </>

    return (
        <div className="navbar bg-base-100 my-container font-semibold ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className=" w-40  ">
                    <img className='w-40' src={logo} alt="" />
                    
                </Link>
            </div>
            {/* <div className="navbar-center hidden lg:flex border items-center "> */}
            <div className="navbar-center hidden lg:flex    ">
                <ul className="menu menu-horizontal px-1 ">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <NavLink onClick={handleLogOut} to='/login' className="btn bg-blue-500 text-white hover:bg-black">Logout</NavLink>
                        :
                        <NavLink to='/login' className="btn ">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;