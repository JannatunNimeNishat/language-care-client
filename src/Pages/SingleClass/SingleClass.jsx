
import german from '../../assets/classes/learn-german-language.jpg'

import { FaArrowRight, FaClock } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const SingleClass = ({ item }) => {
    console.log(item);
    const { img, class_name, duration, price, rating, total_enrolled_students } = item
    return (
        // <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card bg-base-100 shadow-xl">

            <figure className='overflow-hidden h-1/2'><img className='object-cover ' src={img} alt="Shoes" /></figure>

            <div className="card-body h-1/2">
                <h2 className="card-title text-blue-500">${price}</h2>
                <p className='text-xl font-semibold mt-3'>Learn <span className='text-blue-500'>{class_name}</span></p>
                <div className='flex'>
                    <p> <FaClock className='inline'/> {duration}</p>
                    <p> <BsPeople className='inline'/>  {total_enrolled_students}</p>
                </div>
                <div className="card-actions justify-start mt-4">
                    <button className="btn text-blue-500 font-bold">Enroll Now 
                    <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;