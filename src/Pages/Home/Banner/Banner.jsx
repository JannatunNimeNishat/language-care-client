import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import img4th from '../../../assets/banner/4th.jpg'

import b1 from '../../../assets/banner/b1.png'
import b2 from '../../../assets/banner/b2.jpg'


// swiper

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import LgButton from "../../../components/Buttons/LgButton";
import { Link } from "react-router-dom";
import Reveal from "../../../components/Reveal/Reveal";



const Banner = () => {
    return (

        <div className=' pt-20'>
            {/* <Reveal> */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={
                    {
                        delay: 4000
                    }
                }
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}


            >
                <SwiperSlide>

                    <div className='h-[88vh]  bg-cover bg-center' style={{ backgroundImage: `url("${b1}")` }}>
                        <div className='absolute top-0 bottom-0 w-[800px]  flex items-center  bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)] '>
                            <Reveal>

                                <div className=' pl-5 lg:pl-20 text-white  mt-3'>
                                    <h3 className=' text-xl lg:text-4xl font-bold '>Summer language <br /> programs for kids and teens.</h3>
                                    <p className='mt-1 lg:mt-5 mb-4'>Effective and engaging summer language programs.</p>

                                    <Link to='/classes' className=''>
                                        <LgButton btn_text='Enroll now' />
                                    </Link>


                                </div>

                            </Reveal>
                        </div>
                    </div>


                    {/*  <div className='h-[88vh]  bg-cover bg-center' style={{ backgroundImage: `url("${b1}")` }}>
                        <div className='absolute top-0 bottom-0 w-[800px]  flex items-center  bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)] '>

                            <div className=' pl-5 lg:pl-20 text-white  mt-3'>
                                <h3 className=' text-xl lg:text-4xl font-bold '>Summer language <br /> programs for kids and teens.</h3>
                                <p className='mt-1 lg:mt-5 mb-4'>Effective and engaging summer language programs.</p>

                                <Link to='/classes' className=''>
                                    <LgButton btn_text='Enroll now' />
                                </Link>


                            </div>

                        </div>
                    </div> */}
                </SwiperSlide>
                <SwiperSlide>

                    <div className='h-[88vh]  bg-cover ' style={{ backgroundImage: `url("${b2}")` }}>
                        <div className='absolute top-0 bottom-0 w-[700px]  flex items-center  bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)] '>
                            <Reveal>

                                <div className=' pl-8 lg:pl-24 text-white  mt-3'>
                                    <h3 className=' text-xl lg:text-5xl font-bold  '>English For You</h3>
                                    <p className='mt-1 lg:mt-3 mb-4'>Improve your language skills while living with a local family abroad. Make international friends and explore a different culture during your full immersion language camp.</p>

                                    <Link to='/classes' className=''>
                                        <LgButton btn_text='Enroll now' />
                                    </Link>


                                </div>
                            </Reveal>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='h-[88vh]  bg-cover bg-center' style={{ backgroundImage: `url("${img4th}")` }}>
                        <div className='absolute top-0 bottom-0 w-[700px]  flex items-center  bg-gradient-to-r from-black to-[rgba(21, 21, 21, 1)] '>
                            <Reveal>

                                <div className=' pl-8 lg:pl-24 text-white  mt-3'>
                                    <h3 className=' text-xl lg:text-5xl font-bold '>French For You</h3>
                                    <p className='mt-1 lg:mt-3'>Improve your language skills while living with a local family abroad. Make international friends and explore a different culture during your full immersion language camp.</p>

                                    <button className='mt-4'>
                                        <LgButton btn_text='Enroll now' />
                                    </button>


                                </div>
                            </Reveal>
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>
            {/* </Reveal> */}
        </div>

    );
};

export default Banner;