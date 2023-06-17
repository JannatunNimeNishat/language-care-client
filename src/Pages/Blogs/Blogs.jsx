
import { SlCalender, SlPeople } from 'react-icons/sl';
import b1 from '../../assets/blogsAndNews/b1.jpg'
import b2 from '../../assets/blogsAndNews/b2.jpg'
import b3 from '../../assets/blogsAndNews/b3.jpg'
import b4 from '../../assets/blogsAndNews/b4.jpg'

import { BsChatLeftText } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";

const Blogs = () => {
    return (
        <div className=" px-5 py-8 lg:px-20 lg:py-20 ">
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 pt-10'>

                <div className='col-span-3'>

                    <div className=''>
                        <img className='' src={b1} alt="" />

                        <div className='py-10 px-5 bg-gray-200'>
                            <div className="lg:flex items-center">

                                <p className="flex items-center gap-3 ">
                                    <BsChatLeftText /> 232 View
                                </p>
                                <p className="flex items-center gap-3 lg:ml-5">
                                    <AiFillEye className='h-5 w-5' />02 Comments
                                </p>
                                <p className="flex items-center gap-3 lg:ml-5">
                                    <SlPeople /> Posted By <span className="text-blue-500">Admin</span>
                                </p>
                            </div>
                            <h3 className='text-3xl font-semibold mt-8'>How To Start Learn Online Study From Your Home</h3>
                            <p className='pt-5'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit.</p>
                        </div>
                    </div>
                    <br />

                    <div className=''>
                        <img className='' src={b2} alt="" />

                        <div className='py-10 px-5 bg-gray-200'>
                            <div className="lg:flex items-center">

                                <p className="flex items-center gap-3 ">
                                    <BsChatLeftText /> 200 View
                                </p>
                                <p className="flex items-center gap-3 lg:ml-5">
                                    <AiFillEye className='h-5 w-5' />05 Comments
                                </p>
                                <p className="flex items-center gap-3 lg:ml-5">
                                    <SlPeople /> Posted By <span className="text-blue-500">John</span>
                                </p>
                            </div>
                            <h3 className='text-3xl font-semibold mt-8'>Embracing the sadness is simpler during church service</h3>
                            <p className='pt-5'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit.</p>
                        </div>
                    </div>

                    <br />

                    <div className=''>
                        <img className='border' src={b3} alt="" />

                        <div className='py-10 px-5 bg-gray-200'>
                            <div className="lg:flex items-center">

                                <p className="flex items-center gap-3 ">
                                    <BsChatLeftText /> 300 View
                                </p>
                                <p className="flex items-center gap-3 lg:ml-5">
                                    <AiFillEye className='h-5 w-5' />10 Comments
                                </p>
                                <p className="flex items-center gap-3 lg:ml-5">
                                    <SlPeople /> Posted By <span className="text-blue-500">David</span>
                                </p>
                            </div>
                            <h3 className='text-3xl font-semibold mt-8'>Education Is About Academic Excellence And Cultural Diversity.</h3>
                            <p className='pt-5'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit.</p>
                        </div>
                    </div>
                    <br />

                    <div className=''>
                        <img className='border' src={b4} alt="" />

                        <div className='py-10 px-5 bg-gray-200'>
                            <div className="lg:flex items-center">

                                <p className="flex items-center gap-3 ">
                                    <BsChatLeftText /> 200 View
                                </p>
                                <p className="flex items-center gap-3 lg:ml-5">
                                    <AiFillEye className='h-5 w-5' />5 Comments
                                </p>
                                <p className="flex items-center gap-3 lg:ml-5">
                                    <SlPeople /> Posted By <span className="text-blue-500">Admin</span>
                                </p>
                            </div>
                            <h3 className='text-3xl font-semibold mt-8'>Education Is About Academic Excellence And Cultural Diversity.</h3>
                            <p className='pt-5'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. nemo enim ipsam voluptatem, quia voluptas sit.</p>
                        </div>
                    </div>


                </div>




                <div className='col-span-1 '>
                    {/* search */}
                    <div className='bg-gray-200 py-8 px-5 rounded'>
                        <h3 className='text-2xl font-semibold'>Search Here</h3>

                        <div className="form-control   mx-auto mt-5">
                            <div className="input-group ">
                                <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Category */}
                    <div className='bg-gray-200 py-8 px-5 rounded mt-10'>
                        <h3 className='text-2xl font-semibold'>Category</h3>

                        <div className=" mt-5">

                            <div className="flex justify-between bg-white py-3 px-3">
                                <p>Business</p>
                                <p>(8)</p>
                            </div>
                           
                            <div className="flex justify-between bg-white py-3 px-3 mt-3">
                                <p>Education</p>
                                <p>(13)</p>
                            </div>
                            <div className="flex justify-between bg-white py-3 px-3 mt-3">
                                <p>Online Learning</p>
                                <p>(9)</p>
                            </div>
                            <div className="flex justify-between bg-white py-3 px-3 mt-3">
                                <p>French</p>
                                <p>(5)</p>
                            </div>
                            <div className="flex justify-between bg-white py-3 px-3 mt-3">
                                <p>Arabic</p>
                                <p>(8)</p>
                            </div>

                        </div>

                    </div>
                    {/* Latest Post */}
                    <div className='bg-gray-200 py-8 px-2 lg:px-5 rounded mt-10'>
                        <h3 className='text-2xl font-semibold'>Latest Post</h3>

                        <div className=" mt-5">

                            <div className="flex  gap-3">
                                <img className='w-1/2' src={b4} alt="" />
                                <div>
                                    <p>22 Nov, 2023</p>
                                    <h3 className=' font-semibold'>Open Source Job Report Show More</h3>
                                </div>
                            </div>
                            <div className="flex  gap-3 mt-5">
                                <img className='w-1/2' src={b3} alt="" />
                                <div>
                                    <p>22 Nov, 2023</p>
                                    <h3 className=' font-semibold'>We’ll Provide World Class Education</h3>
                                </div>
                            </div>
                            <div className="flex  gap-3 mt-5">
                                <img className='w-1/2' src={b2} alt="" />
                                <div>
                                    <p>22 Nov, 2023</p>
                                    <h3 className=' font-semibold'>Future Skills Need In Your Career</h3>
                                </div>
                            </div>
                           
                            

                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Blogs;