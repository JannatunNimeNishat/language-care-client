import { useContext } from "react";
import { BsPeople } from "react-icons/bs";
import { FaArrowRight, FaClock } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSelectedClass from "../../hooks/useSelectedClass";



const SingleClassCard = ({ item }) => {
    const { img, class_name, duration, price, total_enrolled_students, instructor_name, available_seats } = item
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const [axiosSecure] = useAxiosSecure()
   const [, refetch] = useSelectedClass()
    const handleSelectCourse = (item) => {
        console.log('rached');
        if (!user) {
            Swal.fire({
                title: 'You have to login in first',
                text: "",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => { 
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
        else{
            const addCourse = {course_id: item._id , img: item.img,instructor_name:item.instructor_name ,class_name: item.class_name, price: item.price, email: user?.email}
            // console.log(addCourse);

         axiosSecure.post(`/selected-class/${user?.email}`, addCourse)
         .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully Selected',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
         })
        }
    }



    return (
        <div>

            <div className={` ${available_seats === 0 ? 'bg-red-500' : 'bg-base-300'} card h-[600px]  shadow-xl`}>

                <figure className='overflow-hidden h-1/2'><img className='object-cover ' src={img} alt="Shoes" /></figure>

                <div className="card-body h-1/2">

                    <h2 className="card-title text-blue-500">${price}</h2>


                    <p className='text-xl font-semibold mt-3'>Course Name: <span className='text-blue-500'>Learn {class_name}</span></p>
                    <p><span className="font-semibold">Instructor:</span> {instructor_name}</p>
                    <p><span className="font-semibold">Available Seats:</span> {available_seats}</p>
                    <div className='flex'>
                        <p> <FaClock className='inline' /> {duration}</p>
                        <p> <BsPeople className='inline' />  {total_enrolled_students}</p>
                    </div>
                    <div className="card-actions justify-start mt-4">
                        <button onClick={() => handleSelectCourse(item)} className="btn text-blue-500 font-bold"
                       disabled={available_seats === 0  ? true: false}
                        >Enroll Now
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;