import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(()=>{
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div onClick={handleGoogleSignIn}  className='mt-3 border-slate-300 border-2 py-2 rounded-xl flex cursor-pointer hover:bg-blue-500 hover:text-white'>
                    <FaGoogle className='h-6 w-6' />
                    <p className=' w-full text-center'>Continue with Google</p>
                </div>
    );
};

export default SocialLogin;