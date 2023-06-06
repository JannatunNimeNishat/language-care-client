import { FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div  className='mt-3 border-slate-300 border-2 py-2 rounded-xl flex cursor-pointer hover:bg-blue-500 hover:text-white'>
                    <FaGoogle className='h-6 w-6' />
                    <p className=' w-full text-center'>Continue with Google</p>
                </div>
    );
};

export default SocialLogin;