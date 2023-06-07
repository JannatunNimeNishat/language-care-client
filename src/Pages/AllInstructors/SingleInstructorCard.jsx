import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import LgButton from "../../components/Buttons/LgButton";


const SingleInstructorCard = ({ instructor }) => {
    console.log(instructor);
    const { img, name, email } = instructor
    return (
        <div className="card h-[400px] flex  card-side bg-base-100 shadow-xl mx-10 my-20">
            <figure className="">
                <img className=" h-full w-full object-cover" src={img} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>
                <p className="flex   ">
                    <FaFacebook className="h-8 w-8 text-[#3b5998]" />
                    <FaTwitter className="h-8 w-8 text-[#00acee]" />
                    <FaLinkedin className="h-8 w-8  text-[#0072b1]" />
                </p>
            </div>
            <div className="card-actions justify-end items-center mr-10">
               <LgButton btn_text='see classes'></LgButton>
            </div>

        </div>
    );
};

export default SingleInstructorCard;