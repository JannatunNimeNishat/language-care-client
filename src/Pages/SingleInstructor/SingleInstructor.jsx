import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Reveal from "../../components/Reveal/Reveal";


const SingleInstructor = ({ instructor }) => {

    const { name, img } = instructor
    return (
        <>
            <Reveal>
                <div className="card  card-compact bg-base-100 shadow-xl relative hover:opacity-100 transition duration-200">

                    <figure className="h-[250px] lg:h-[400px] "><img className="w-full h-full " src={img} alt="Shoes" /></figure>

                    <div className="card-body h-[100px] lg:h-[150px] bg-white  flex justify-center items-center w-full border absolute top-40  lg:top-64 right-2 bottom-10 left-5  opacity-0 hover:opacity-100 transition duration-200 transform hover:-translate-10 hover:-translate-10 rounded-xl ">
                        <div className="">
                            <h2 className="card-title text-center text-blue-500">{name}</h2>
                            <div className="flex justify-center space-x-3    mt-2">
                                <FaFacebook className="h-8 w-8 text-[#3b5998]" />
                                <FaTwitter className="h-8 w-8 text-[#00acee]" />
                                <FaLinkedin className="h-8 w-8  text-[#0072b1]" />
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </>

    );
};

export default SingleInstructor;