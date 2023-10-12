import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { BsCash, BsFillCalendarCheckFill, BsFillClockFill, BsFillPinMapFill, BsFillPeopleFill, BsFillLockFill } from "react-icons/bs";
import { BiFace } from "react-icons/bi";
import LgButton from "../../components/Buttons/LgButton";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

import useGetSingleUpComingEvents from "../../hooks/useGetSingleUpComingEvent";
import Loading from "../Loading/Loading";

const SingleEventPage = () => {

    const { id } = useParams();

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()

    const navigate = useNavigate();
    const currentLocation = useLocation()

    const [getUpComingEvents, refetch, singleEventLoading] = useGetSingleUpComingEvents(id);

    const { _id, eventTitle, eventImg, description, speakers, cost, eventDate, eventTime, location, organizer, bookedSlot, totalSlot } = getUpComingEvents || {};


    if (singleEventLoading) {
        return <Loading />
    }


    const handleEventRegister = (id) => {
        console.log('click', id);
        const data = {
            email: user?.email,
            event_id: id
        }
        if (user) {


            axiosSecure.patch(`/register_event/`, data)
                .then(res => {

                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your have been registered successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    } else {
                        Swal.fire('You have already registered to this event')
                    }
                })
        } else {
            Swal.fire({
                title: 'You have to login first',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: currentLocation } })
                }
            })
        }

    }


    return (
        <>
            <Helmet>
                <title>{getUpComingEvents?.eventTitle}</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="px-5 py-20  lg:py-28 my-container ">
                <div>
                    <h3 className="text-2xl lg:text-6xl text-center pb-3 lg:pb-8 font-semibold">{eventTitle}</h3>
                    <img className=" lg:w-[65%] mx-auto" src={eventImg} alt="" />
                </div>

                <div className="grid lg:grid-cols-9 lg:gap-8 py-8">

                    <div className="w-full  lg:col-span-6  ">
                        {/* about */}
                        <div className="bg-[#FFF6F4] px-3 lg:px-10 py-3 lg:py-12">
                            <h3 className="text-3xl font-semibold pb-4 ">About the Event</h3>
                            <p className="text-justify">{description}</p>
                            <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eos blanditiis tempora culpa hic ipsum ipsa minus mollitia? Ipsam magni ratione dignissimos asperiores incidunt totam,
                                <br />
                                <br />
                                eum debitis voluptate exercitationem quo illum accusamus fuga, molestias eveniet veritatis minima? Dolorem, deserunt cumque explicabo minima laboriosam, rem veritatis eveniet debitis nihil molestiae, unde cupiditate quae eligendi modi necessitatibus vitae illo amet fuga. <br /> Veniam iusto corrupti fuga at perferendis tempore placeat dolorum sunt impedit tenetur saepe, quos autem ullam dolorem soluta a suscipit explicabo sapiente possimus amet sequi vitae. Debitis, maiores reprehenderit vel similique veritatis iure perferendis unde. Totam explicabo non nihil quae blanditiis beatae magni, quis velit ab voluptatibus odio quaerat sit? Quisquam vitae officia aliquid doloribus voluptatem, minima laborum sapiente autem velit voluptatibus adipisci, praesentium quia dolore, delectus magni iste. Perspiciatis numquam ullam dolor harum eius sit adipisci illo voluptatem tenetur unde tempore est necessitatibus, quia alias? Sit enim, eum reiciendis reprehenderit aut ducimus magni possimus iusto sint corrupti,
                                <br />
                                <br />
                                quis odit recusandae fugit rem nulla quibusdam perspiciatis dolorum quisquam provident dicta praesentium voluptatum fugiat eveniet. Ipsa consequuntur assumenda veritatis, nihil exercitationem autem maxime repellat sunt dolore nobis consequatur est repudiandae id quas unde impedit harum magni perspiciatis cupiditate corporis excepturi architecto corrupti.</p>

                        </div>


                    </div>

                    <div className="lg:col-span-3 mt-5 lg:mt-0 px-8 py-5 bg-[#FFF6F4]">

                        <div className="flex justify-between py-2">
                            <p className="flex items-center gap-3">
                                <BsCash className="h-6 w-6 text-blue-500" />
                                <span className="font-semibold">Cash</span>
                            </p>
                            <h3 className="text-blue-500 font-semibold text-4xl">{cost === 0 ? <span>Free</span> : <span className="text-3xl">${cost}</span>}</h3>
                        </div>

                        <hr />
                        <div className="flex justify-between py-6">
                            <p className="flex items-center gap-3">
                                <BsFillCalendarCheckFill className="h-5 w-5 text-blue-500" />
                                <span className="font-semibold">Event data</span>
                            </p>
                            <h3 className="">{eventDate}</h3>
                        </div>

                        <hr />

                        <div className="flex justify-between py-6">
                            <p className="flex items-center gap-3">
                                <BsFillClockFill className="h-5 w-5 text-blue-500" />
                                <span className="font-semibold">Event time</span>
                            </p>
                            <h3 className="">{eventTime}</h3>
                        </div>

                        <hr />
                        <div className="flex justify-between py-6">
                            <p className="flex items-center gap-3">
                                <BsFillPinMapFill className="h-5 w-5 text-blue-500" />
                                <span className="font-semibold">Location</span>
                            </p>
                            <h3 className="">{location}</h3>
                        </div>

                        <hr />

                        <div className="flex justify-between py-6">
                            <p className="flex items-center gap-3">
                                <BiFace className="h-5 w-5 text-blue-500" />
                                <span className="font-semibold">Organiser</span>
                            </p>
                            <h3 className="">{organizer}</h3>
                        </div>

                        <hr />
                        <div className="flex justify-between py-6">
                            <p className="flex items-center gap-3">
                                <BsFillPeopleFill className="h-5 w-5 text-blue-500" />
                                <span className="font-semibold">Total Slot</span>
                            </p>
                            <h3 className="">{totalSlot}</h3>
                        </div>

                        <hr />
                        <div className="flex justify-between py-6">
                            <p className="flex items-center gap-3">
                                <BsFillLockFill className="h-5 w-5 text-blue-500" />
                                <span className="font-semibold">Booked Slot</span>
                            </p>
                            <h3 className="">{bookedSlot}</h3>
                        </div>

                        <div
                            onClick={() => handleEventRegister(_id)}
                            className="pt-8 flex justify-center items-center">
                            <LgButton btn_text={'Register'} />
                        </div>


                    </div>
                </div>
                {/* Our Speaker */}
                <div className="bg-[#FFF6F4] px-10 py-10 ">
                    <h3 className="text-3xl font-semibold pb-4 ">Our Speaker</h3>
                    {
                        speakers?.map((singleSpeaker, index) => <div
                            key={index}
                            className="block lg:flex items-center gap-5 my-6"
                        >
                            <img className="h-[130px] w-[130px] mx-auto lg:mx-0  rounded-full" src={singleSpeaker?.speakerImg} alt="" />
                            <div className="text-center lg:text-left">
                                <p className="text-xl font-semibold">{singleSpeaker?.speakerName}</p>
                                <p className="py-2">{singleSpeaker?.title}</p>
                                <p className="py-3 text-justify">{singleSpeaker?.about}</p>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </>
    );
};

export default SingleEventPage;