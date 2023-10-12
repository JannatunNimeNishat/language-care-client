import useGetUpComingEvents from "../../../hooks/useGetUpComingEvents";



const UpComingEvents = () => {
    const [getUpComingEvents] = useGetUpComingEvents('')
    console.log(getUpComingEvents);
    return (
        <div>

        </div>
    );
};

export default UpComingEvents;