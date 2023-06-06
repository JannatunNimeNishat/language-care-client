import { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import loginAnimation from '../../assets/login/login.json'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const [isPasswordField, setIsPasswordField] = useState(true)
    
    return (
        <div className='lg:h-[calc(100vh-76px)] md:flex justify-center items-center mt-5'>
            
            <div className="lg:w-1/2 ">
            <Lottie className="h-full" animationData={loginAnimation} loop={true} />;
            </div>

            <div className='border w-full lg:w-96 lg:h-[450px] px-12 lg:px-8 py-3 rounded '>
                <h3 className='text-2xl font-semibold mt-3'>Sign In</h3>
                <form  className='mt-8 flex flex-col '>
                    <label >Email</label>
                    <input className='border-2  rounded mt-1 pl-2 py-1' placeholder='Enter your email' type="email" name="email"
                       
                    />

                    <label className='mt-3'>password</label>
                    <input className='border-2 rounded mt-1 pl-2 py-1' placeholder='Enter your password' 
                    type={ isPasswordField ? 'password' : 'text' } name="password"  
                    />

                    <p className="-mt-6 ml-72 cursor-pointer" onClick={()=> setIsPasswordField(!isPasswordField)}>
                        {
                            isPasswordField ? 
                            <FaEye/>
                            :
                            <FaEyeSlash/>

                        }
                        
                        </p>


                    <input className='mt-5 rounded py-2 text-white font-semibold  primary-bg-color  cursor-pointer' type="submit" value="Login" />
                  
                    <p className='mt-2 text-center'><small>Do not have an account ? <Link to='/register' className='font-semibold text-blue-600'>Register</Link></small></p>
                </form>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
               
            </div>
        </div>
    );
};

export default Login;