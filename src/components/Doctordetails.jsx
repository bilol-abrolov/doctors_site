import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import axiosInstance from '../axiosInstance';

const Doctordetails = () => {
    const [doctors, setDoctors] = useState([]);
    const {id} = useParams()
    
    const getAllDoctors = async () => {
        try {
          const res = await axiosInstance.get(`/doctors/get/${id}`);
          console.log(res);
    
          setDoctors(res.data); // Do'ktonlar ro'yxatini o'zgartiradi
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(()=>{
          getAllDoctors()
      },[])
    return (
        <>
            <header className='fixed top-0 left-0 w-full bg-white text-center p-4 shadow-lg z-50 hidden-header'>
                <div className='flex justify-around'>
                    <img src="https://medi-dove.netlify.app/img/logo/logo.png" alt="" />
                    <div className='flex gap-5 text-[17px] text-gray-500 font-bold items-center'>
                        <Link to="/">
                            Home+
                        </Link>
                        <h1>Department+</h1>
                        <Link to="/doctor">
                            Doctors+
                        </Link>
                        <Link to="/shop">
                            Shop
                        </Link>
                        <h1>News+</h1>
                        <h1>Pages+</h1>
                        <FaFacebookF />
                        <FaBehance />
                        <FaYoutube />
                        <FaInvision />
                        <FaPinterest />
                        <img className='h-[60px] w-[60px]' src="https://medi-dove.netlify.app/img/icon/lang.png" alt="" />
                        <select name="" id="">
                            <option value="">Eng</option>
                            <option value="">Uzb</option>
                            <option value="">Spain</option>
                        </select>
                    </div>
                </div>
            </header>




            <main>
                <div class="relative w-full h-[580px]">
                    <img src="https://medi-dove.netlify.app/static/media/page-bg.19c1fbc541073bd8ef07.jpg" alt="" className='mt-[110px] w-full h-full object-cover' />
                    <div class="absolute inset-0 flex items-center justify-around gap-[400px]">
                        <div>
                            <h3 className='text-xl font-semibold text-gray-500'>We are here for your care.</h3>
                            <h1 className='text-7xl font-semibold text-blue-950 pt-[30px]'>Doctor Details</h1>
                        </div>
                        <div className='flex gap-2 items-center pt-[40px]'>
                            <h3 className='text-lg text-gray-400 font-bold'>Home</h3>/
                            <h3 className='text-lg text-red-600 font-bold'>Details</h3>
                        </div>
                    </div>
                </div>



                <div>
                    {/* Doctor Info Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-16 px-8 py-24 max-w-7xl mx-auto">

                        {/* Text Part (Left Side) */}
                        <div className="lg:w-2/3 w-full relative">
                            {/* Background Icon */}
                            <div className="absolute -top-20 -left-10 opacity-10 -z-10">
                                <img src="https://medi-dove.netlify.app/img/section/section-back-icon.png" alt="" className="w-48 h-48" />
                            </div>

                            <p className="text-green-600 font-semibold text-sm mb-4 uppercase">Introducing My Self</p>

                            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                                There Is Nothing To <br /> Show Something.
                            </h1>

                            <div className="flex items-center gap-2 mb-6">
                                <span className="w-8 h-1 bg-red-500"></span>
                                <span className="w-4 h-1 bg-red-500"></span>
                                <span className="w-8 h-1 bg-red-500"></span>
                            </div>

                            <p className="text-gray-500 text-lg leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>

                        {/* Doctor Card (Right Side) */}
                        <div className="lg:w-1/3 w-full bg-white shadow-lg rounded-lg p-6 text-center">
                            <img
                                src={doctors.photo}
                                alt="Doctor"
                                className="w-full h-[400px] object-cover rounded-md"
                            />
                            <h2 className="text-2xl font-bold text-gray-800 mt-6">{doctors.name}</h2>
                            <p className="text-red-600 font-semibold mt-2 tracking-wide uppercase">{doctors.profession}</p>

                            {/* Social Icons */}
                            <div className="flex justify-center gap-4 mt-4 text-gray-500 text-xl">
                                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                                <FaBehance className="hover:text-blue-400 cursor-pointer" />
                                <FaInvision className="hover:text-pink-500 cursor-pointer" />
                                <FaPinterest className="hover:text-red-600 cursor-pointer" />
                                <FaYoutube className="hover:text-red-500 cursor-pointer" />
                            </div>
                        </div>
                    </div>


                    <div className="container mx-auto px-4 py-10">
                        <div className="flex flex-wrap lg:flex-nowrap gap-8">
                            {/* Left Section */}
                            <div className="lg:w-2/3 w-full">
                                {/* Title */}
                                <p className="text-red-500 font-semibold text-sm mb-2 uppercase">Here Is Skills</p>
                                <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                                    Here Is Skills
                                </h1>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-8 h-1 bg-red-500"></span>
                                    <span className="w-4 h-1 bg-red-500"></span>
                                    <span className="w-8 h-1 bg-red-500"></span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                </p>

                                {/* Skills Section */}
                                <div className="flex">
                                    {/* Personal Care */}
                                    <div className="flex flex-col items-start lg:w-1/2 w-full">
                                        <img
                                            src="https://medi-dove.netlify.app/img/services/ser-fea-icon-1.png"
                                            alt="Personal Care Icon"
                                            className="w-12 h-12 mb-4"
                                        />
                                        <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase">Personal Care</h2>
                                        <ul className="text-gray-500 space-y-2">
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✔</span>
                                                Cillum dolore eu fugiat nulla.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✔</span>
                                                Lorem ipsum dolor sit amet.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✔</span>
                                                Consectetur adipisicing elit.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✔</span>
                                                Sed do eiusmod tempor inci.
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Lifestyle Support */}
                                    <div className="flex flex-col items-start lg:w-1/2 w-full">
                                        <img
                                            src="https://medi-dove.netlify.app/img/services/ser-fea-icon-2.png"
                                            alt="Lifestyle Support Icon"
                                            className="w-12 h-12 mb-4"
                                        />
                                        <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase">Lifestyle Support</h2>
                                        <ul className="text-gray-500 space-y-2">
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✔</span>
                                                Didunt ut labore et dolore magna.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✔</span>
                                                Aliqua. Ut enim ad minim veniam.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✔</span>
                                                Quis nostrud exercitation ullamco.
                                            </li>
                                            <li className="flex items-center">
                                                <span className="text-green-500 mr-2">✔</span>
                                                Laboris nisi ut aliquip ex ea.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/3 w-full">
                                <div className="bg-white shadow-md rounded-lg p-8 max-w-sm mx-auto">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Qualifications</h2>
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-16 h-16 flex-shrink-0">
                                                <img
                                                    src="https://medi-dove.netlify.app/img/services/more-ser-1.png"
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700">Master Of Science</h3>
                                                <p className="text-sm text-gray-500">Oxford University (2011 - 2014)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-16 h-16 flex-shrink-0">
                                                <img
                                                    src="https://medi-dove.netlify.app/img/services/more-ser-5.png"
                                                    alt=""
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-700">Neurology Test</h3>
                                                <p className="text-sm text-gray-500">Stanford University (2015 - 2021)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 py-10">
                        <div className="flex flex-wrap lg:flex-nowrap gap-8">
                            {/* Left Section */}
                            <div className="lg:w-1/2 w-full">
                                <p className="text-red-500 font-semibold text-sm mb-2 uppercase">Care Coverage</p>
                                <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                                    Care Coverage
                                </h1>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="w-8 h-1 bg-red-500"></span>
                                    <span className="w-4 h-1 bg-red-500"></span>
                                    <span className="w-8 h-1 bg-red-500"></span>
                                </div>

                                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                                </p>

                                {/* Map Section */}
                                <div className="rounded-lg overflow-hidden shadow-md w-[1250px] mt-[70px]">
                                    <img
                                        src="https://developers.google.com/static/codelabs/maps-platform/maps-platform-101-js/img/e52623cb8578d625.png"
                                        alt="Map"
                                        className="w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="lg:w-1/2 w-full">
                                <div className="bg-white shadow-md rounded-lg p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Some Advice?</h2>
                                    <form>
                                        <div className="mb-4">
                                            <label className="block text-gray-600 text-sm mb-2" htmlFor="name">
                                                Enter your name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">
                                                Enter your email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-600 text-sm mb-2" htmlFor="care">
                                                Select type of care
                                            </label>
                                            <select
                                                id="care"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                            >
                                                <option value="">Select type of care</option>
                                                <option value="personal">Personal Care</option>
                                                <option value="lifestyle">Lifestyle Support</option>
                                            </select>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                                        >
                                            Request for Call
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <footer>
                <div className='relative mt-[120px] flex justify-center gap-[100px] bg-blue-950 pb-[130px] text-white'>
                    <img
                        src="https://medi-dove.netlify.app/static/media/map.54de82487cec37de8695.png"
                        alt="Background Map"
                        className="absolute inset-0 w-full h-full object-cover opacity-350"
                    />
                    <div className='pt-[60px]'>
                        <div>
                            <img src="https://medi-dove.netlify.app/img/logo/footer-logo-3.png" alt="" />
                            <p className='w-[300px] pt-[30px] text-lg font-medium text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                            <h3 className='pt-[30px]'>info@examplemedical.com</h3>
                            <h3 className='pt-[10px]'>examplemedical.com</h3>
                            <h3 className='pt-[10px]'>227 Marion Street, Columbia</h3>
                        </div>
                    </div>

                    <div className='flex mt-[30px] gap-[40px]'>
                        <div className='pt-[45px]'>
                            <h1 className='text-3xl pb-[60px] font-bold'>Departments</h1>
                            <h2 className='text-lg text-gray-300 font-medium'>Surgery and Radiology</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Family Medicine</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Women’s Health</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Optician</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Pediatrics</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Dermatology</h2>
                        </div>
                        <div className='pt-[120px]'>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Departments</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Our Doctors</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>News</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Contact Us</h2>
                            <h2 className='text-lg text-gray-300 font-medium pt-[20px]'>Book an Appointment</h2>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-3xl font-bold pt-[70px]'>News Feeds</h1>
                        <div className='flex pt-[50px] gap-3 text-gray-300'>
                            <img src="https://medi-dove.netlify.app/img/blog/feeds-thumb-1.jpg" alt="" />
                            <h1 className='w-[200px] font-bold'>Lorem ipsum dolor sit am et, consectetur.
                                <p className='font-thin pt-2'>14 Feb 2022</p>
                            </h1>
                        </div>
                        <div className='flex pt-[30px] gap-3 text-gray-300'>
                            <img src="https://medi-dove.netlify.app/img/blog/feeds-thumb-1.jpg" alt="" />
                            <h1 className='w-[200px] font-bold'>Lorem ipsum dolor sit am et, consectetur.
                                <p className='font-thin pt-2'>14 Feb 2022</p>
                            </h1>
                        </div>
                        <div className='flex pt-[30px] gap-3 text-gray-300'>
                            <img src="https://medi-dove.netlify.app/img/blog/feeds-thumb-1.jpg" alt="" />
                            <h1 className='w-[200px] font-bold'>Lorem ipsum dolor sit am et, consectetur.
                                <p className='font-thin pt-2'>14 Feb 2022</p>
                            </h1>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Doctordetails
