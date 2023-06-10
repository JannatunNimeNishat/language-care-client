import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const AdminHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
         <Helmet>
                <title>LanguageCare | Admin Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
        
        <div>
            <h3 className="text-4xl ">Welcome <span className="font-bold text-blue-500">{user?.displayName}</span></h3>
        </div>
        </>
    );
};

export default AdminHome;