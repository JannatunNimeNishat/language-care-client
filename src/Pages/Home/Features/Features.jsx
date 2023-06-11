
import { FaLaptop } from 'react-icons/fa';
import { RiBaseStationLine,RiBookLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import featuresImg from '../../../assets/home/features.jpg'

const Features = () => {
    return (
        <div className=" bg-[#f7f0ea]  min-h-screen">

            <div className="my-container lg:flex gap-3 py-32 px-3 lg:px-0">
                <div className='lg:w-1/2'>
                    <div>
                        <p className="uppercase text-blue-500 font-bold">WHY CHOOSE US </p>
                        <h3 className="text-3xl lg:text-4xl font-bold mt-3">Our Core Features</h3>
                    </div>
                   
                    <div className='mt-10 grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 gap-3 space-y-3'>
                         {/* 1st */}
                        <div className='w-4/5'>
                            <FaLaptop className='h-12 w-12 text-[#f86f03] mx-auto lg:mx-0' />
                            <div className='mt-3'>
                                <h3 className='text-xl font-semibold'>Flexible Classes</h3>
                                <p>You can make your own  schedule. We are have flexible time schedule</p>
                            </div>
                        </div>
                         {/* 2nd */}
                        <div className='w-4/5'>
                            <RiBaseStationLine className='h-12 w-12 text-[#f86f03]  mx-auto  lg:mx-0' />
                            <div className='mt-3'>
                                <h3 className='text-xl font-semibold'>Online Mode</h3>
                                <p>Full course will be held on online. <br /> You can attend from anywhere in <br /> the world.</p>
                            </div>
                        </div>
                         {/* 3rd */}
                        <div className='w-4/5'>
                            <RiBookLine className='h-12 w-12 text-[#f86f03]  mx-auto lg:mx-0' />
                            <div className='mt-3'>
                                <h3 className='text-xl font-semibold'>Flexible Learning</h3>
                                <p>We do not enforce anything on our students. Our class is always light and casual </p>
                            </div>
                        </div>
                         {/* 4th */}
                        <div className='w-4/5'>
                            <BiSupport className='h-12 w-12 text-[#f86f03]  mx-auto lg:mx-0' />
                            <div className='mt-3'>
                                <h3 className='text-xl font-semibold'>Educator Support</h3>
                                <p>You can contact us anytime. We give 24/7 online support </p>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='lg:w-1/2 mt-5 lg:mt-0'>
                    <img className=' rounded-tl-full ' src={featuresImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;