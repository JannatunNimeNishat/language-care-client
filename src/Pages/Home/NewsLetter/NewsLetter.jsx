import Reveal from "../../../components/Reveal/Reveal";


const NewsLetter = () => {
    return (
        <>
            <Reveal>
                <div className="bg-[#525fe1] lg:h-[60vh] flex justify-center items-center text-center ">
                    <div className="lg:px-20 py-20">
                        <p className="uppercase text-white font-bold">SUBSCRIBE NEWSLETTER</p>
                        <h3 className="text-4xl font-bold mt-3 text-white">Get Every Latest News</h3>


                        <div className="lg:flex justify-center items-center mt-10 ">
                            <input className="  lg:px-44 py-3  border rounded text-left" placeholder='Enter Your Email Address' type="text" name="" id="" />
                            <button className=" px-5 py-3  border text-white hover:bg-black rounded ">Subscribe</button>
                        </div>


                    </div>
                </div>
            </Reveal>
        </>
    );
};

export default NewsLetter;