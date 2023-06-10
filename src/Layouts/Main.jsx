import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Loading from "../Pages/Loading/Loading";


const Main = () => {
    const navigation = useNavigation()

    return (
        <div>

            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <Loading/> : ''
            }
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;