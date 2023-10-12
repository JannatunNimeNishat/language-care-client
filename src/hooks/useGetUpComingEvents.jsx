import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useGetUpComingEvents = (id = '') => {
    const [axiosSecure] = useAxiosSecure();
    console.log('id', id);
    const { data: getUpComingEvents = [], isLoading: UpComingEventsLoading, refetch } = useQuery({
        queryKey: ['getUpComingEvents'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/upcoming_events/${id}`)
            return res.data
        }
    })
    return [getUpComingEvents, UpComingEventsLoading, refetch]
};

export default useGetUpComingEvents;