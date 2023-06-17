
import logo from '../../../assets/logo.jpg'


import { CiLocationOn, CiPhone } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-base-200'>
            <footer className="footer p-10 bg-base-200 text-base-content ">
                <div>
                    <img className='w-40' src={logo} alt="" />
                    <p className='text-xl font-bold'>Language-care</p>
                    
                    <div className="flex justify-center space-x-3    mt-5">
                        <FaFacebook className="h-8 w-8 text-[#3b5998] cursor-pointer" />
                        <FaTwitter className="h-8 w-8 text-[#00acee] cursor-pointer" />
                        <FaLinkedin className="h-8 w-8  text-[#0072b1] cursor-pointer" />
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Useful links</span>
                    <Link to='/instructors' className="link link-hover">Instructors</Link>
                    <Link to='/classes' className="link link-hover">Classes</Link>
                    <Link to='/blogs' className="link link-hover">Blogs</Link>
                    <Link to='/contacts' className="link link-hover">Contact</Link>
                    <a className="link link-hover">Home</a>
                </div>
                <div className=''>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover flex gap-2">
                        <CiLocationOn className='w-6 h-6'/>
                        <p>113 Maiden Ave. <br />
                        Buffalo, NY 14215</p>
                           
                    </a>
                    <a className="link link-hover flex gap-2">
                        <CiPhone className='w-6 h-6'/>
                        + 1 (237) 382-2839</a>
                    <a className="link link-hover flex gap-2">
                        <AiOutlineMail className='w-6 h-6'/>
                        LanguageCare@language-care.com</a>
                </div>

            </footer>
            <p className='text-center mb-3'>Copyright © 2023 LanguageCare designed by Ni7. All right reserved</p>
        </div>
    );
};

export default Footer;