import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCheckRole = () =>{

    const {user,loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    /* if(!user){
        return 'user'
    } */
    const {data: role = 'user',isLoading:roleLoading} = useQuery({
        queryKey:['role', user?.email],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/users/role/${user?.email}`)
            console.log(res.data);
            return res.data
        }
    
    })
    return [role, roleLoading]


}

export default useCheckRole;