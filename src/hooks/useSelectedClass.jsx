import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"


const useSelectedClass = ()=>{
    const {user,loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    
    const {data: selectedClass=[], refetch} = useQuery({
        queryKey:['selectedClass', user?.email],
        enabled:!loading && !!user,
        queryFn: async ()=>{
          
            const res = await axiosSecure.get(`/selected-class/${user?.email}`) 
                return res.data
        }
    })
    return [selectedClass,refetch]

}

export default useSelectedClass;