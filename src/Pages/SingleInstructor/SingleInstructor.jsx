import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";


const SingleInstructor = ({ instructor }) => {
    console.log(instructor);
    const { name, img } = instructor
    return (
        <div className="card h-[400px] card-compact bg-base-100 shadow-xl relative hover:opacity-80 transition duration-200">
            <figure className="h-[300px] "><img className="w-full h-full " src={img} alt="Shoes" /></figure>
            <div className="card-body h-[100] flex justify-center items-center w-full border">
                <h2 className="card-title text-center ">{name}</h2>
            </div>
            <div className="flex justify-center space-x-3   absolute  top-60 right-2 bottom-10 left-0  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-y-2 ">
                <FaFacebook className="h-8 w-8 text-[#3b5998]"/>
                <FaTwitter className="h-8 w-8 text-[#00acee]"/>
                <FaLinkedin className="h-8 w-8  text-[#0072b1]"/>
            </div>
        </div>
    );
};

export default SingleInstructor;