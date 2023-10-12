import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useGetSingleUpComingEvents = (id) => {
    const [axiosSecure] = useAxiosSecure();
    console.log('id', id);

    const { data: getSingleUpComingEvents = [],  refetch, isLoading:singleEventLoading } = useQuery({
    /* const { data: getSingleUpComingEvents = [], isLoading: SingleUpComingEventsLoading, refetch } = useQuery({ */
        queryKey: ['getSingleUpComingEvents'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/single_upcoming_events/${id}`)
            return res.data
        }
    })
    return [getSingleUpComingEvents, refetch,singleEventLoading]
};

export default useGetSingleUpComingEvents;