import { Link } from "react-router-dom";
import LgButton from "../../../components/Buttons/LgButton";

import b1 from '../../../assets/blogsAndNews/b1.jpg'
import b2 from '../../../assets/blogsAndNews/b2.jpg'
import { SlCalender, SlPeople } from "react-icons/sl";
const BlogAndNews = () => {
    return (
        <div className="pt-20 pb-14 lg:min-h-[100vh] bg-[#fff6f4] " id="blog&News">
            <div className=" px-10  py-10 lg:px-28 lg:py-20">
                <div className="lg:flex justify-between items-center">
                    <div className="space-y-3 lg:space-y-0 mb-5 lg:mb-0">
                        <p className="uppercase text-blue-500 font-bold">BLOG & NEWS</p>
                        <h3 className="text-4xl font-bold  lg:mt-3 pt-1">Trending on Our Blogs</h3>
                    </div>
                    <Link to='/classes'><LgButton btn_text='Read More Blogs'></LgButton></Link>

                </div>

                <div className="mt-16 lg:flex items-center justify-center gap-8">

                    <div className="lg:w-1/2 bg-white text-black px-5 py-8 rounded-xl">
                        <h3 className="text-blue-500 font-bold">EDUCATION</h3>
                        <h2 className="text-3xl font-semibold pt-5">10 Things Successful Which Makes You Different From Others</h2>

                        <div className="mt-8">
                            <div >
                                <div className="lg:flex items-center">
                                    <p className="flex items-center gap-3">
                                        <SlCalender /> 06 Nov, 2023
                                    </p>
                                    <p className="flex items-center gap-3 lg:ml-5">
                                        <SlPeople /> Posted By <span className="text-blue-500">Admin</span>
                                    </p>
                                </div>

                                <img className="mt-8 rounded-xl " src={b1} alt="" />
                            </div>


                        </div>

                    </div>

                    <div className="lg:w-1/2 mt-5 lg:mt-0  bg-white text-black px-5 py-8 rounded-xl">
                        <h3 className="text-blue-500 font-bold">EDUCATION</h3>
                        <h2 className="text-3xl font-semibold pt-5">How To Start Learn Online Study From Your Home</h2>
                        <div className="mt-8">
                            <div >
                                <div className="lg:flex items-center">
                                    <p className="flex items-center gap-3">
                                        <SlCalender /> 06 Nov, 2023
                                    </p>
                                    <p className="flex items-center gap-3 lg:ml-5">
                                        <SlPeople /> Posted By <span className="text-blue-500">Admin</span>
                                    </p>
                                </div>
                            </div>
                            <img className="rounded-xl mt-8" src={b2} alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BlogAndNews;