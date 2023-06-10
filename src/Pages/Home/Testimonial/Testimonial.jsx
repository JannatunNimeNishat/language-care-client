
import tesimonialImg2 from '../../../assets/home/tesimonialImg2.png'
import { RiDoubleQuotesL } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';

const Testimonial = () => {
    return (
        <div className="  bg-gradient-to-r from-pink-100  to-indigo-100">
            <div className="my-container py-28">
                <div className="text-center">
                    <p className="uppercase text-blue-500 font-bold">TESTIMONIAL</p>
                    <h3 className="text-4xl font-bold mt-3">What Our Student Says</h3>

                    <div className="lg:flex gap-5 mt-8 lg:h-[100vh] items-center ">
                        <div className="lg:w-1/2 ">
                            <img className='h-full w-full ' src={tesimonialImg2} alt="" />
                        </div>

                        <div className="lg:w-1/2 lg:h-[100vh] ">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                spaceBetween={50}
                                slidesPerView={1}

                                autoplay='true'
                                pagination={{ clickable: true }}

                            >
                                <SwiperSlide className='  lg:py-20'>

                                    <RiDoubleQuotesL className='h-16 w-16 text-blue-500' />

                                    <p className='mt-8 text-left text-xl'>I recently enrolled in an online language course, and I must say it has been a fantastic experience. The course is designed for beginners like me, and it provides a comprehensive introduction to the language. The lessons are well-structured, starting with basic vocabulary and grammar and gradually building up to more complex topics.

                                        The course platform is user-friendly and intuitive, making it easy to navigate through the different modules and exercises. The lessons are interactive, with audio recordings and exercises that help improve pronunciation and comprehension. The course also includes quizzes and tests to assess your progress. </p>

                                    <div className='flex items-center gap-3  lg:mt-12  '>
                                        <div className="">
                                            <img src="https://i.ibb.co/VBfVkZt/c2.jpg" alt="..." className="  shadow-lg rounded-full max-w-full h-[80px] align-middle border-none" />
                                        </div>
                                        <div className='text-left'>
                                            <h3 className='text-xl font-bold'>David Bard</h3>
                                            <p className='text-blue-500'> Western Australia</p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide className=' py-20'>

                                    <RiDoubleQuotesL className='h-16 w-16 text-blue-500' />

                                    <p className='mt-8 text-left text-xl'>I have just completed an online language course, and I am thrilled with the results. This course provided me with an excellent learning experience, and I would highly recommend it to anyone looking to learn a new language.

                                        The course structure was well-organized and progressive. It started with the basics and gradually introduced more advanced concepts, ensuring a smooth learning curve. Each lesson was accompanied by interactive exercises, audio recordings, and engaging activities that helped reinforce what I had learned.

                                        .</p>

                                    <div className='flex items-center gap-3  mt-12'>
                                        <div className="">
                                            <img src="https://i.ibb.co/bPPTN4v/c1.jpg" alt="..." className="  shadow-lg rounded-full max-w-full h-[80px] align-middle border-none" />
                                        </div>
                                        <div className='text-left'>
                                            <h3 className='text-xl font-bold'>David Bard</h3>
                                            <p className='text-blue-500'> Western Australia</p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide className=' py-20'>

                                    <RiDoubleQuotesL className='h-16 w-16 text-blue-500' />

                                    <p className='mt-8 text-left text-xl'>I recently tried an online language course, and unfortunately, it didn't live up to my expectations. While the course had some positive aspects, overall, I found it lacking in several areas.

                                        Firstly, the course content was quite basic. It covered only the most fundamental vocabulary and grammar, and I was hoping for a more comprehensive approach. I felt that the course didn't provide enough depth or detail to truly grasp the language.
                                        Another issue I encountered was the lack of interactive exercises and engaging activities..
                                    </p>

                                    <div className='flex items-center gap-3  mt-12'>
                                        <div className="">
                                            <img src="https://i.ibb.co/dt5YQ2b/c5.jpg" alt="..." className="  shadow-lg rounded-full max-w-full h-[80px] align-middle border-none" />
                                        </div>
                                        <div className='text-left'>
                                            <h3 className='text-xl font-bold'>David Bard</h3>
                                            <p className='text-blue-500'> Western Australia</p>
                                        </div>
                                    </div>

                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;