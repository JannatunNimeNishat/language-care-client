import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const AdminHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h3 className="text-4xl ">Welcome <span className="font-bold text-blue-500">{user?.displayName}</span></h3>
        </div>
    );
};

export default AdminHome;