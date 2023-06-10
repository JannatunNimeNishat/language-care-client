import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useApprovedClass = () => {
    //const {user, loading} = useContext(AuthContext)

    const { data: approvedClasses = [], isLoading: isApprovedClassesLoading, refetch } = useQuery({
        queryKey: ['approvedClasses'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/approved-classes')
            return res.data;
        }
    })
    return [approvedClasses]
}

export default useApprovedClass
