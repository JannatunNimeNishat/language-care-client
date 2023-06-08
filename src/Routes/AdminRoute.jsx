import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useCheckRole from "../hooks/useCheckRole";
import { Navigate, useLocation } from "react-router-dom";



const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
   const [role, roleLoading] = useCheckRole()
   const location = useLocation()
    if(loading || roleLoading){
        return <h3 className="text-3xl">Loading</h3>
    }
    if(user && role === 'admin'){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};

export default AdminRoute;