import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const AddaEvent = () => {

    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        const newClass = {
            eventTitle: data.event_title,
            eventImg: data.event_img,
            speakers: [
                {
                    speakerName: data.speaker_name,
                    speakerImg: data.speaker_img,
                    title: data.speaker_title,
                    about: data.speaker_about,
                }
            ],
            cost: data.cost,
            eventDate: data.date,
            eventTime: data.time,
            location: data.location,
            organizer: data.organizer_name,
            totalSlot: parseInt(data.total_slot),
            bookedSlot: parseInt(data.booked_slot),
            description: data.description,
            registeredStudentsId: []

        }
        console.log(newClass.bookedSlot, typeof (bookedSlot));
        axiosSecure.post('/add-event', newClass)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        reset()


    };

    return (
        <>
            <Helmet>
                <title>LanguageCare | Add a event</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className="min-h-screen w-full px-20 py-10">

                <h3 className="text-3xl font-semibold">Add a event: </h3>

                <div className="mt-4">
                    <form onSubmit={handleSubmit(onSubmit)} className=" p-10 border border-blue-500  w-[600px] space-y-4">
                        {/* 1st */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Event Title*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl "
                                {...register("event_title", { required: true })}
                            />
                        </div>

                        {/* 2nd */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Event Image URL*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl "
                                {...register("event_img", { required: true })}
                            />
                        </div>


                        {/* 3rd Speaker */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Speaker name*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl"
                                {...register("speaker_name", { required: true })}
                            />
                        </div>


                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Speaker Image URL*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl "
                                {...register("speaker_img", { required: true })}
                            />
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Speaker title*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl"
                                {...register("speaker_title", { required: true })}
                            />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Speaker about*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl"
                                {...register("speaker_about", { required: true })}
                            />
                        </div>

                        {/* cost */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Cost*</span>

                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-full"
                                {...register("cost", { required: true })}
                            />
                        </div>

                        {/* date */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date*</span>

                            </label>
                            <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-full"
                                {...register("date", { required: true })}
                            />
                        </div>

                        {/* time */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Time*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full"
                                {...register("time", { required: true })}
                            />
                        </div>

                        {/* location */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full"
                                {...register("location", { required: true })}
                            />
                        </div>

                        {/* organizer name*/}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Organizer Name*</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full"
                                {...register("organizer_name", { required: true })}
                            />
                        </div>


                        {/* total slot */}
                        <div className="flex  w-full">

                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">Total Slot*</span>

                                </label>
                                <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-full"
                                    {...register("total_slot", { required: true })}
                                />
                            </div>

                        </div>

                        {/* booked slot */}
                        <div className="flex  w-full">

                            <div className="form-control w-full  ">
                                <label className="label">
                                    <span className="label-text">Booked Slot*</span>

                                </label>
                                <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-full"
                                    {...register("booked_slot", { required: true })}
                                />
                            </div>

                        </div>

                        {/* Description */}
                        <div className="flex  max-w-xl">

                            <div className="form-control  w-full ">
                                <label className="label">
                                    <span className="label-text">Description*</span>

                                </label>
                                <textarea className="border rounded-xl px-2 py-2" name="" id="" cols="30" rows="10"
                                    {...register("description", { required: true })}
                                ></textarea>

                            </div>

                        </div>




                        <div className="w-full text-start mt-3">
                            <input className="mt-5 px-6 py-3 bg-blue-500 hover:bg-black text-white font-bold rounded-lg cursor-pointer" type="Submit" value="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddaEvent;