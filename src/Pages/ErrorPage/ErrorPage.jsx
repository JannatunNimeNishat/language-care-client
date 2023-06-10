

import { Link } from 'react-router-dom';
import errorAnimation from '../../assets/Error/erroranimation.json'
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <div className='relative min-h-screen flex items-center justify-center'>
            <Link to='/' className='absolute top-0 left-10 flex items-center '>

                <p className='text-3xl font-semibold -ml-4 hover:text-blue-500'>Back to Home</p>
            </Link>
            <Lottie className='' animationData={errorAnimation} loop={true} />
        </div>
    );
};
{/* <Lottie className='h-20 w-20' animationData={errorAnimation}/> */}

export default ErrorPage;