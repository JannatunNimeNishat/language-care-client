import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useGetUpComingEvents = () => {
    const [axiosSecure] = useAxiosSecure();
    
   
    const { data: getUpComingEvents = [], isLoading: UpComingEventsLoading, refetch } = useQuery({
        queryKey: ['getUpComingEvents'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/upcoming_events`)
            return res.data
        }
    })
    return [getUpComingEvents, UpComingEventsLoading, refetch]
};

export default useGetUpComingEvents;