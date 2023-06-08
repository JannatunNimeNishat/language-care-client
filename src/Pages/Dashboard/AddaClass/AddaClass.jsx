import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";

const AddaClass = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="min-h-screen w-full px-20 py-10">

            <h3 className="text-3xl font-semibold">Add a class: </h3>
            
            <div className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className=" p-10 border w-[600px] space-y-4">
                    {/* 1st */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class name*</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl "
                            {...register("class_name", { required: true })}
                        />
                    </div>

                    {/* 2nd */}
                    <input type="file" className="file-input w-full max-w-xl  "
                        {...register("img", { required: true })}
                    />

                    {/* 3rd */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor name*</span>

                        </label>
                        <input type="text" placeholder="Type here" value={user?.displayName} className="input input-bordered w-full max-w-xl"
                            {...register("instructor_name", { required: true })}
                        />
                    </div>
                    {/* 4th */}
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor email*</span>

                        </label>
                        <input type="email" placeholder="Type here" value={user?.email} className="input input-bordered w-full max-w-xl"
                            {...register("instructor_email", { required: true })}
                        />
                    </div>



                    {/*  */}
                    <div className="flex  max-w-xl">

                        <div className="form-control w-1/2  ">
                            <label className="label">
                                <span className="label-text">Available seats*</span>

                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                                {...register("available_seats", { required: true })}
                            />
                        </div>

                        <div className="form-control w-1/2 ml-3 max-w-xs">
                            <label className="label">
                                <span className="label-text">Price*</span>

                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                                {...register("price", { required: true })}
                            />
                        </div>

                    </div>

                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Status*</span>

                        </label>
                        <input type="text" placeholder="Type here" value={'pending'} className="input input-bordered w-full max-w-xs"
                                {...register("status", { required: true })}
                            />

                    </div>

                    <div className="w-full text-start mt-3">
                        <input className="mt-5 px-6 py-3 bg-blue-500 hover:bg-black text-white font-bold rounded-lg cursor-pointer" type="submit" value="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddaClass;