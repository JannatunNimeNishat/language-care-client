import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";

const GiveFeedback = () => {
    
    const { id } = useParams()

    const [axiosSecure] = useAxiosSecure()

    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {

        const feedBack ={feedback: data.feedBack}
        console.log(feedBack);
        axiosSecure.patch(`/admin-feedback/${id}`, feedBack )
            .then(res => {
                console.log(res.data);
                if (res.data. modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your feedback added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      reset()
                }
            })
    }
    

    return (
        <div className="w-3/4 mx-auto">
            <Link to='/dashboard/manageadminclasses'> {'<'} Back</Link>
            <h3 className="text-2xl font-semibold">Give a feedback:</h3>


            <form onSubmit={handleSubmit(onSubmit)}>

                <textarea placeholder="" className="textarea textarea-info textarea-bordered textarea-lg w-full max-w-3xl mt-2" name="feedBack"
                {...register("feedBack", { required: true })}
                ></textarea>

                <input className="bg-blue-500 text-white font-semibold rounded-lg font-white px-5 py-2 cursor-pointer" type="submit" value="submit" />

            </form>
        </div>
    );
};

export default GiveFeedback;