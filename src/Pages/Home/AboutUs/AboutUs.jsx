
import { Link } from 'react-router-dom';
import a3 from '../../../assets/aboutUs/a3.jpg'
import a5 from '../../../assets/aboutUs/a5.png'
import LgButton from '../../../components/Buttons/LgButton';

const AboutUs = () => {
    return (
        <div className="   lg:pt-20  lg:pb-14 lg:min-h-[100vh] bg-[#fff6f4]">
            <div className=" px-10  py-10 lg:px-28 lg:py-28 lg:flex items-center">
                <div className='lg:w-1/2'>
                    <img className='lg:h-[500px] ' src={a3} alt="" />
                    <img className=' mt-5  lg:w-[180px] lg:h-[180px] lg:-mt-32 lg:ml-96' src={a5} alt="" />
                </div>
                <div className='lg:w-1/2 mt-5 lg:mt-0 lg:ml-20'>
                    <p className="uppercase text-blue-500 font-bold">ABOUT US</p>
                    <h3 className="text-4xl font-bold  lg:mt-3 pt-1">Creating A Community Of Life Long Learners</h3>
                    <p className='mt-8 mb-8'>We believe in a communicative and interactive approach to language learning. Our lessons are designed to engage learners in meaningful conversations, allowing them to practice real-life language skills from the very beginning.</p>
                    <h3 className='text-2xl font-bold'>People Love To Learn With Us</h3>
                    <div className='mt-5 lg:flex items-center'>
                        <div>
                            <h3 className='text-orange-600 text-4xl font-bold'>90%</h3>
                            <p className='mt-3'>90% of students see their course through to completion</p>
                        </div>
                        <div>
                            <h3 className='text-orange-600 text-4xl font-bold'>9/10</h3>
                            <p className='mt-3'>9/10 users reported better learning outcomes.</p>
                        </div>
                    </div>
                    <br />
                   <Link className='pt-5 border'> <LgButton btn_text='Learn More'></LgButton></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;