import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useApprovedClass = () => {
    const {user, loading} = useContext(AuthContext)

    const { data: approvedClasses = [], isLoading: isApprovedClassesLoading, refetch } = useQuery({
        queryKey: ['approvedClasses'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axios.get('https://language-care-server.vercel.app/approved-classes')
            return res.data;
        }
    })
    return [approvedClasses,isApprovedClassesLoading]
}

export default useApprovedClass
