import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Reveal from "../../components/Reveal/Reveal";



const SingleInstructorCard = ({ instructor }) => {
    console.log(instructor);
    const { img, name, email } = instructor
    return (

        <>

            <Reveal>

                <div className="grid grid-cols-4   my-container px-16 ">
                    <div className="col-span-1  w-full px-10 py-16  text-center  mx-auto bg-[#f5f5f5]">
                        <figure className="w-[150px] mx-auto">
                            <img className="rounded-full h-[150px] w-[150px]" src={img} alt="" />
                        </figure>
                        <h3 className="text-xl font-bold mt-5 mb-3">{name}</h3>
                        <p><span className="font-semibold ">Email:</span> {email}</p>
                        <div className="flex justify-center space-x-3    mt-5">
                            <FaFacebook className="h-8 w-8 text-[#3b5998]" />
                            <FaTwitter className="h-8 w-8 text-[#00acee]" />
                            <FaLinkedin className="h-8 w-8  text-[#0072b1]" />
                        </div>
                    </div>
                    <div className="col-span-3 ml-16">
                        <p className="text-blue-500 capitalize font-bold">ABOUT ME</p>

                        <h3 className="text-4xl mt-3 font-bold">Hello, I'm <span className="text-blue-500">{name}</span></h3>

                        <p className="mt-8">My name is {name}, and I am passionate about education and inspiring young minds. As an experienced teacher with a background in elementary education, I believe that every child has the potential to succeed and thrive in a supportive learning environment.

                            I hold a Bachelor's degree in Education from XYZ University and have been teaching for over a decade. Throughout my career, I have had the privilege of working with students from diverse backgrounds, which has enriched my teaching approach and allowed me to foster a culturally inclusive classroom.</p>

                        <div className="bg-blue-500 text-center mt-8 px-8 py-5 flex text-white justify-between items-center">
                            <div className="font-bold">
                                <h3 className="text-3xl">4</h3>
                                <p className="capitalize text-2xl mt-1">Course Author</p>
                            </div>

                            <div className=" divider-horizontal h-[2px] bg-white"></div>


                            <div className="font-bold">
                                <h3 className="text-3xl">20</h3>
                                <p className="capitalize text-2xl mt-1">total rating</p>
                            </div>

                            <div className="  divider-horizontal h-[2px] bg-white"></div>

                            <div className="font-bold">
                                <h3 className="text-3xl">4.5</h3>
                                <p className="capitalize text-2xl mt-1">ave. rating</p>
                            </div>

                        </div>
                    </div>
                </div>

            </Reveal>
            <br />
            <br />
            <br />
            <br />
        </>



    );
};

export default SingleInstructorCard;