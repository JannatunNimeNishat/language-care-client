

import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import SocialLogin from "../Pages/Shared/SocialLogin/SocialLogin";

import loginAnimation from '../assets/login/login.json'

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { singUp, updateUser,} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        singUp(data.email, data.password)
        .then(result =>{
            console.log(result.user);

            updateUser(data.name, data.photoURL)

            .then(result =>{
                console.log(result.user);
            })
            .then(error=>{
                console.log(error.message);
            })
        })

        .catch(error =>{
            console.log(error.message);
        })
        
    };

    return (
        <div className=' md:flex justify-center items-center mt-5 mb-5'>

            <div className="lg:w-1/2  ">
                <Lottie className="h-full" animationData={loginAnimation} loop={true} />;
            </div>

            <div className='border w-full lg:w-96  px-12 lg:px-8 py-3 rounded '>

                <h3 className='text-2xl font-semibold mt-3'>Sign Up</h3>


                <form onSubmit={handleSubmit(onSubmit)} className='mt-8 flex flex-col '>


                    <label >Name</label>
                    <input className='border-2  rounded mt-1 pl-2 py-1' placeholder='Enter your Name' type="text" name="name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-red-500 mt-1">This name is required</span>}

                    <label className="mt-3">Email</label>
                    <input className='border-2  rounded mt-1 pl-2 py-1' placeholder='Enter your email' type="email" name="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-500 mt-1">Email is required</span>}

                    <label className='mt-3'>password</label>
                    <input className='border-2 rounded mt-1 pl-2 py-1' placeholder='Enter your password'
                        type='password' name="password"

                        {...register("password",
                            {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })}
                    />
                    {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one upper case and one special character</p>}

                    <label className='mt-3'> Confirm password</label>

                    <input className='border-2 rounded mt-1 pl-2 py-1' placeholder='Confirm password'
                        type='password' name="confirmPassword"
                       
                           {...register('confirm_password',{
                            validate: (value) => value === watch("password") || 'Password do not match'
                           } )}

                    />
                         {errors.confirm_password && <p className="text-red-500">Password do not match</p>}


                    <label className="mt-3">Photo URL</label>
                    <input className='border-2  rounded mt-1 pl-2 py-1' placeholder='Enter your Photo URL' type="text" name="photoURL"
                      {...register("photoURL", { required: true })}
                    />
                     {errors.photoURL && <span className="text-red-500 mt-1">This photoURL is required</span>}

                    <input className='mt-5 rounded py-2 text-white font-semibold  primary-bg-color  cursor-pointer' type="submit" value="Register" />

                    <p className='mt-3 text-center'><small>Already have an account ? <Link to='/login' className='font-semibold text-blue-600'>Login</Link></small></p>
                </form>
                <div className="divider mb-8 mt-8">OR</div>

                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Register;