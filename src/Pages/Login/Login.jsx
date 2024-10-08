import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import loginAnimation from '../../assets/login/login.json'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";

const defaultValues = {
    adminDefaultValues: { email: "admin@admin.com", password: "Admin!123" },
    teacher: { email: "instructor@gmail.com", password: "Abc!@#1996" },
    student: { email: "student@gmail.com", password: "Abc!@#1996" },
  };

const Login = () => {
    const [isPasswordField, setIsPasswordField] = useState(true)
    const [loginOptions, setLoginOptions] = useState(defaultValues.adminDefaultValues);
    const [loginError, setLoginError] = useState('')
    const { signIn } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    //console.log(from);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        setLoginError('')
        // console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                // console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                // console.log(error.message);
                setLoginError(error.message);
            })
    };

    const handleLoginOption = (role) => {
        const selectedOptions = defaultValues[role];
        setLoginOptions(selectedOptions);
        reset(selectedOptions); // Reset form values with new default values
    };


    return (
        <div className=' md:flex justify-center items-center '>

            <div className="lg:w-1/2 ">
                <Lottie className="h-full" animationData={loginAnimation} loop={true} />;
            </div>

            <div className='border w-full lg:w-96  px-12 lg:px-8 py-3 rounded relative'>
               <div className="flex  items-center justify-between">
               <h3 className='text-2xl font-semibold mt-3'>Sign In</h3>
                <div className="flex justify-center gap-2 absolute -top-8 right-0 ">
                    <button onClick={() => handleLoginOption("adminDefaultValues")} className="px-3 py-1 bg-blue-500 text-white rounded">Admin</button>
                    <button onClick={() => handleLoginOption("teacher")} className="px-2 py-1 bg-blue-500 text-white rounded">Teacher</button>
                    <button onClick={() => handleLoginOption("student")} className="px-2 py-1 bg-blue-500 text-white rounded">Student</button>
                </div>
               </div>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col '>
                    <label >Email</label>
                    <input className='border-2  rounded mt-1 pl-2 py-1' placeholder='Enter your email' type="email" name="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-500 mt-1">Email is required</span>}

                    <label className='mt-3'>password</label>
                    <input className='border-2 rounded mt-1 pl-2 py-1' placeholder='Enter your password'
                        type={isPasswordField ? 'password' : 'text'} name="password"

                        {...register("password", { required: true })}
                    />
                    {errors.password && <span className="text-red-500 mt-1">password is required</span>}

                    <p className="-mt-6 ml-72 cursor-pointer" onClick={() => setIsPasswordField(!isPasswordField)}>
                        {
                            isPasswordField ?
                                <FaEye />
                                :
                                <FaEyeSlash />

                        }

                    </p>

                    <small className="text-red-600 font-bold mt-2">{loginError && loginError}</small>
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