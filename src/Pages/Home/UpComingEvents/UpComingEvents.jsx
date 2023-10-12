import useGetUpComingEvents from "../../../hooks/useGetUpComingEvents";


import Reveal from "../../../components/Reveal/Reveal";
import LgButton from "../../../components/Buttons/LgButton";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const UpComingEvents = () => {
    const [getUpComingEvents, UpComingEventsLoading] = useGetUpComingEvents()
    //console.log(getUpComingEvents);
    if (UpComingEventsLoading) {
        return <Loading />
    }
    return (
        <>
            <Reveal>
                <div className="my-container py-10 lg:py-28 px-3">

                    <div className="lg:flex justify-between items-center">
                        <div className="space-y-2 lg:space-y-0 mb-5 lg:mb-0">
                            <p className="uppercase text-blue-500 font-bold">Events & News</p>
                            <h3 className="text-xl lg:text-4xl font-bold  lg:mt-3 pt-1">Up Coming Events</h3>
                        </div>
                        <Link to='/allUpComingEvents'><LgButton btn_text='Browse More Events'></LgButton></Link>

                    </div>


                    <div className='mt-16 lg:grid grid-cols-6 pb-5 lg:pb-12 gap-5'>
                        {/* 1st */}
                        <Link to={`/singleEvent/${getUpComingEvents[0]?._id}`}
                            style={{ '--image-url': `url(${getUpComingEvents[0]?.eventImg})` }}
                            className='bg-[image:var(--image-url)]  lg:h-[355px] lg:w-[600px] bg-cover bg-center col-span-3 
                            transition ease-in-out delay-100 bg-blue-500  hover:scale-95 hover:bg-indigo-500 duration-300
                            '
                        >
                            <div className='h-full w-full backdrop-brightness-50 text-white flex flex-col justify-center items-center'>
                                <p className='bg-blue-500 px-3 py-2 font-bold mt-12'>{getUpComingEvents[0]?.eventDate}</p>
                                <h3 className='text-3xl font-semibold px-16 mt-5  hover:text-blue-500 cursor-pointer'>{getUpComingEvents[0]?.eventTitle}</h3>
                                <small className='mt-20'>{getUpComingEvents[0]?.eventTime}</small>
                            </div>
                        </Link>
                        {/* 2nd */}
                        <div className='col-span-3  lg:flex gap-5  justify-between '>
                            {
                                getUpComingEvents && getUpComingEvents?.slice(1, 3)?.map(event => <Link
                                    key={event?.id}
                                    to={`/singleEvent/${event?._id}`}
                                    className=' text-white relative border  shadow-xl hover:shadow-2xl 
                                    transition ease-in-out delay-75   hover:scale-95  duration-200
                                    '
                                >
                                    <img className='w-full lg:h-[220px] ' src={event?.eventImg || ''} alt='' />
                                    {/* <img className='w-full lg:h-[220px] ' src={''} alt='' /> */}
                                    <p className='bg-blue-500   text-center  px-2  py-1 font-bold absolute bottom-[120px] left-24'>{event?.eventDate}</p>
                                    <div className='mt-8 text-center'>
                                        <h3 className='text-xl text-black hover:text-blue-500 cursor-pointer'>{event?.eventTitle}</h3>
                                        <small className='text-black mt-5'>{event?.eventTime}</small>
                                    </div>
                                </Link >)
                            }
                        </div>
                    </div>
                </div>


            </Reveal>
        </>
    );
};

export default UpComingEvents;