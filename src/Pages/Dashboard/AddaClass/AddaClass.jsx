import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddaClass = () => {

   
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit } = useForm();


    const onSubmit =  data =>{

        const newClass = {class_name:data.class_name, img:data.img, instructor_name: data.instructor_name,
        instructor_email: data.instructor_email,
        available_seats: parseInt(data.available_seats),
        price: parseFloat(data.price),
        duration: data.duration,
        status: 'pending',
        feedback: ''
    }
        console.log(newClass);
        axiosSecure.post('/add-class', newClass)
        .then(res =>{
            console.log(res.data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
            
        })
       
        
    };
    
    
    // console.log(formData.get("img"))

    return (
        <>
         <Helmet>
                <title>LanguageCare | Add a class</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
        
        <div className="min-h-screen w-full px-20 py-10">

            <h3 className="text-3xl font-semibold">Add a class: </h3>

            <div className="mt-4">
                <form onSubmit={handleSubmit(onSubmit)} className=" p-10 border border-blue-500  w-[600px] space-y-4">
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
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image URL*</span>

                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl "
                            {...register("img", { required: true })}
                        />
                    </div>
                    

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
                   
                   

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Duration*</span>

                        </label>
                        <input type="text" placeholder="Type here"  className="input input-bordered w-full max-w-xl"
                            {...register("duration", { required: true })}
                        />
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
                        <input className="mt-5 px-6 py-3 bg-blue-500 hover:bg-black text-white font-bold rounded-lg cursor-pointer" type="Submit" value="submit" />
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default AddaClass;