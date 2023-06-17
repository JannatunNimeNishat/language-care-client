import { TfiWorld } from "react-icons/tfi";
import { FiPhoneCall, FiMail } from "react-icons/fi";

import { MdLocationOn } from "react-icons/md";

const Contacts = () => {
    return (
        <div className="py-28 px-10 lg:px-20">
            <p className="uppercase text-blue-500 font-bold text-center">NEED HELP ?</p>
            <h3 className="text-4xl font-bold mt-3 text-center">Get In Touch With us</h3>

            <div className="lg:flex pt-16">
                <div className="lg:w-1/2">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        <div className=" py-5 px-2 lg:py-10 lg:px-8 text-center shadow-lg rounded-lg hover:bg-orange-500 hover:text-white ">

                            <TfiWorld className="w-10 h-10 mx-auto " />
                            <p className="font-semibold mt-4">Our Website</p>
                            <p className="mt-2">www.language-care.web.app</p>
                            <p>www.my-portfolio-685d1.web.app</p>
                        </div>
                        <div className="  py-5 px-2 lg:py-10 lg:px-8 text-center shadow-lg rounded-lg hover:bg-orange-500 hover:text-white ">

                            <FiPhoneCall className="w-10 h-10 mx-auto " />
                            <p className="font-semibold mt-5">Call Us On</p>
                            <p className="mt-4">+8801743607289</p>
                            <p>+8801521404824</p>
                        </div>
                        <div className="  py-5 px-2 lg:py-10 lg:px-8 text-center shadow-lg rounded-lg hover:bg-orange-500 hover:text-white ">

                            <FiMail className="w-10 h-10 mx-auto " />
                            <p className="font-semibold mt-5">Email Us</p>
                            <p className="mt-4">nishatnime100@gmail.com</p>
                            <p>language-care@language-care.com</p>
                        </div>
                        <div className=" py-5 px-2 lg:py-10 lg:px-8 text-center shadow-lg rounded-lg hover:bg-orange-500 hover:text-white ">

                            <MdLocationOn className="w-10 h-10 mx-auto " />
                            <p className="font-semibold mt-5">Our Location</p>
                            <p className="mt-4">113 Maiden Ave.
                                Buffalo, NY 14215</p>
                            <p>Buffalo, NY 14215</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <form className=" lg:px-10    space-y-4">
                        {/* 1st */}
                        <div className="form-control w-full ">
                            
                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xl "
                               
                            />
                        </div>

                        {/* 2nd */}
                        <div className="form-control w-full ">
                            
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xl "
                               
                            />
                        </div>


                        {/* 3rd */}
                        <div className="form-control w-full ">
                            
                            <input type="text" placeholder="Phone"  className="input input-bordered w-full max-w-xl"
                               
                            />
                        </div>
                        {/* 4th */}
                        <div className="form-control w-full ">
                            
                            <input type="email" placeholder="Subject"  className="input input-bordered w-full max-w-xl"
                               
                            />
                        </div>

                        <div className="form-control w-full ">
                            
                            <textarea className="border px-5 py-5 rounded-lg" placeholder="your message" name="" id="" cols="30" rows="7"></textarea>
                        </div>



                        {/*  */}
                        



                        <div className="w-full  mt-3">
                            <input className="mt-5 w-full px-6 py-3 bg-blue-500 hover:bg-black text-white font-bold rounded-lg cursor-pointer" type="Submit" value="submit" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contacts;