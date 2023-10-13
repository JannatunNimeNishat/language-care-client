import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

import MessengerChat from "../components/MessengerChat/MessengerChat";


const Main = () => {

    return (
        <>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <MessengerChat />
                <Footer></Footer>

            </div>

        </>
    );
};

export default Main;