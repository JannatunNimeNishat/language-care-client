import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const notShow = location.pathname.includes('/login')
    // console.log(location.pathname        );
    return (
        <div>
            {
               /*  notShow || <Navbar></Navbar> */
            }
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;