import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useCheckRole from "../hooks/useCheckRole";
import { Navigate, useLocation } from "react-router-dom";


const StudentsRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [role,roleLoading] = useCheckRole()
    // console.log('role:',role);
    console.log('user loading:',loading);
    const location = useLocation()
    if(loading || roleLoading){
        return <h3 className="text-4xl">Loading</h3>
    }

    if(user && role === 'student'){
        return children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default StudentsRoute;