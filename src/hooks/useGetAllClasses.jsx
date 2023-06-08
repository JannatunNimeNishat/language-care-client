import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllClasses = () =>{

    const [axiosSecure] = useAxiosSecure()

    const {data: allClasses=[], isLoading:allClassesLoading, refetch} = useQuery({
        queryKey:['allClasses'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/allClasses')
            return res.data
        }
        
    })
    return [allClasses,allClassesLoading,refetch]

}

export default useGetAllClasses;