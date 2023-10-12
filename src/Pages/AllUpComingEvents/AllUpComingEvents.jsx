import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import useGetUpComingEvents from "../../hooks/useGetUpComingEvents";


const AllUpComingEvents = () => {
    const [getUpComingEvents] = useGetUpComingEvents('')
    console.log(getUpComingEvents);
    return (
        <>
            <Helmet>
                <title>LanguageCare | Events</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="px-5 lg:px-20 py-20 ">
                {/* search */}
                <div className="form-control  lg:w-1/2 mx-auto">
                    <div className="input-group ">
                        <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 py-12 gap-8">
                    {
                        getUpComingEvents?.map(event => <Link
                            key={event?.id}
                            to={`/singleEvent/${event?._id}`}
                            className=' text-white relative border  shadow-xl hover:shadow-2xl 
                                    transition ease-in-out delay-75   hover:scale-95  duration-200 bg-white
                                    '
                        >
                            <img className='w-full lg:h-[220px] ' src={event?.eventImg || ''} alt='' />
                           
                            <p className='bg-blue-500   text-center  px-2  py-1 font-bold  absolute -mt-4 left-32'>{event?.eventDate}</p>

                            <div className='my-8 text-center '>
                                <h3 className='text-xl text-black hover:text-blue-500 cursor-pointer'>{event?.eventTitle}</h3>
                                <small className='text-black mt-5'>{event?.eventTime}</small>
                            </div>
                        </Link >)
                    }
                </div>
            </div>
        </>
    );
};

export default AllUpComingEvents;