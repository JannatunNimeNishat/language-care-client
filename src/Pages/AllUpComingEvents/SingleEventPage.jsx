import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useGetUpComingEvents from "../../hooks/useGetUpComingEvents";
import { BsCash, BsFillCalendarCheckFill, BsFillClockFill, BsFillPinMapFill, BsFillPeopleFill, BsFillLockFill } from "react-icons/bs";
import { BiFace } from "react-icons/bi";
import LgButton from "../../components/Buttons/LgButton";

const SingleEventPage = () => {
    const { id } = useParams();
    const [getUpComingEvents] = useGetUpComingEvents(id || '');
    console.log(getUpComingEvents);
    const { _id, eventTitle, eventImg, description, speakers, cost, eventDate, eventTime, location, organizer, bookedSlot, totalSlot } = getUpComingEvents || {};



    return (
        <>
            <Helmet>
                <title>{getUpComingEvents?.eventTitle}</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="px-5  lg:py-28 my-container ">
                <div>
                    <h3 className="text-6xl text-center pb-8 font-semibold">{eventTitle}</h3>
                    <img className=" w-[65%] mx-auto" src={eventImg} alt="" />
                </div>

                <div className="grid grid-cols-9 gap-8 py-8">

                    <div className="col-span-6  ">
                        {/* about */}
                        <div className="bg-[#FFF6F4] px-10 py-10">
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
                        <br />
                        {/* Our Speaker */}
                        <div className="bg-[#FFF6F4] px-10 py-10">
                            <h3 className="text-3xl font-semibold pb-4 ">Our Speaker</h3>
                            {
                                speakers?.map((singleSpeaker, index) => <div
                                    key={index}
                                    className="flex items-center gap-5 mt-3"
                                >
                                    <img className="h-[150px] w-[150px] rounded-full" src={singleSpeaker?.speakerImg} alt="" />
                                    <div>
                                        <p className="text-xl font-semibold">{singleSpeaker?.speakerName}</p>
                                        <p className="py-2">{singleSpeaker?.title}</p>
                                        <p className="py-3 text-justify">{singleSpeaker?.about}</p>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>

                    <div className="col-span-3 px-8 py-5 bg-[#FFF6F4]">

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

                        <div className="pt-5 flex justify-center items-center">
                            <LgButton btn_text={'Register'} />
                        </div>


                    </div>
                </div>


            </div>

        </>
    );
};

export default SingleEventPage;