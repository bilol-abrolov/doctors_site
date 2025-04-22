import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaWindows } from "react-icons/fa6";
import { LuTableOfContents } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { PiFrameCorners } from "react-icons/pi";

const Shop = () => {
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
                            <h1 className='text-7xl font-semibold text-blue-950 pt-[30px]'>Shop Page</h1>
                        </div>
                        <div className='flex gap-2 items-center pt-[40px]'>
                            <h3 className='text-lg text-gray-400 font-bold'>Home</h3>/
                            <h3 className='text-lg text-red-600 font-bold'>Doctor</h3>
                        </div>
                    </div>
                </div>



                <div className='mt-[100px] flex mb-[50px] justify-around gap-[50px]'>
                    <div className='w-[350px] text-center h-[20px] border-[2px] pb-[40px] pt-[15px]'>
                        <h1 className='font-semibold text-gray-500 w-[350px] tracking-[3px]'>Showing 1–22 of 32 results</h1>
                    </div>
                    <div className='flex items-center gap-[15px]'>
                        <div>
                            <h1 className='w-[130px] text-center h-[5px] border-[2px] pb-[35px] pt-[13px] font-medium text-gray-500 text-sm tracking-[2px]'>SHOP BY</h1>
                        </div>
                        <div className='h-[45px] w-[45px] rounded-[60px] bg-green-700 flex justify-center pt-[15px] text-white'>
                            <FaWindows />
                        </div>
                        <div className='h-[45px] w-[45px] rounded-[60px] bg-gray-400 flex justify-center pt-[15px] text-white'>
                            <LuTableOfContents />
                        </div>
                    </div>
                </div>


                <div className='px-[100px] ml-[110px] grid grid-cols-3 gap-[40px]'>
                    <div>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img1.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[150px] text-green-700 font-bold tracking-[4px]'>CLOTHS</h3>
                        <h1 className='font-bold text-3xl ml-[60px] mt-[15px] text-gray-600'>Medidove Product</h1>
                        <div className='flex mt-5 gap-[10px] ml-[130px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                    <div>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img2.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[160px] text-green-700 font-bold tracking-[4px]'>CLOTHS</h3>
                        <h1 className='font-bold text-3xl ml-[90px] mt-[15px] text-gray-600'>Legend Product</h1>
                        <div className='flex mt-3 gap-[10px] ml-[150px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                    <div>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img3.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[170px] text-green-700 font-semibold tracking-[4px]'>TABLE</h3>
                        <h1 className='font-bold text-3xl ml-[105px] mt-[15px] text-gray-600'>Akari Product</h1>
                        <div className='flex mt-3 gap-[10px] ml-[150px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img4.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[160px] text-green-700 font-semibold tracking-[4px]'>CHAIR</h3>
                        <h1 className='font-bold text-3xl ml-[80px] mt-[15px] text-gray-600'>Bakari Product</h1>
                        <div className='flex mt-3 gap-[10px] ml-[140px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img5.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[160px] text-green-700 font-semibold tracking-[4px]'>CLOTHS</h3>
                        <h1 className='font-bold text-3xl ml-[80px] mt-[15px] text-gray-600'>Romada Product</h1>
                        <div className='flex mt-3 gap-[10px] ml-[140px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img6.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[170px] text-green-700 font-semibold tracking-[4px]'>LIGHT</h3>
                        <h1 className='font-bold text-3xl ml-[100px] mt-[15px] text-gray-600'>Sikkar Product</h1>
                        <div className='flex mt-3 gap-[10px] ml-[140px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img7.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[122px] text-green-700 font-semibold tracking-[4px]'>HEADPHONE</h3>
                        <h1 className='font-bold text-3xl ml-[65px] mt-[15px] text-gray-600'>Minners Product</h1>
                        <div className='flex mt-3 gap-[10px] ml-[120px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img8.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[170px] text-green-700 font-semibold tracking-[4px]'>TABLE</h3>
                        <h1 className='font-bold text-3xl ml-[80px] mt-[15px] text-gray-600'>Dolando Product</h1>
                        <div className='flex mt-3 gap-[10px] ml-[140px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                    <div className='mt-[50px]'>
                        <div className='relative inline-block group'>
                            <img className='w-[400px] h-[400px] object-cover' src="https://medi-dove.netlify.app/img/shop/img9.jpg" alt="" />
                            <div class="absolute inset-0 flex gap-3 pt-[320px] justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 ease-out">
                                <span class="text-xl h-[50px] p-[14px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white transition duration-150"><FaShoppingCart /></span>
                                <span className='text-xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 pr-5 rounded-[30px] hover:bg-red-600 hover:text-white'><FaHeart /></span>
                                <span><PiFrameCorners className='text-5xl h-[50px] p-[15px] w-[50px] bg-white text-gray-300 rounded-[30px] hover:bg-red-600 hover:text-white' /></span>
                            </div>
                        </div>
                        <h3 className='mt-[20px] ml-[150px] text-green-700 font-semibold tracking-[4px]'>CLOTHS</h3>
                        <h1 className='font-bold text-3xl ml-[80px] mt-[15px] text-gray-600'>Romada Product</h1>
                        <div className='flex mt-3 gap-[10px] ml-[140px] text-gray-500'>
                            <p className='font-medium'>$95.00</p><del className='font-light'>$120.00</del>
                        </div>
                    </div>
                </div>



                <div class="flex items-center space-x-2 mt-[80px] gap-1 justify-center">
                    <button class="w-14 h-14 flex items-center justify-center border rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition shadow-md hover:shadow-lg font-bold font-mono">
                        «
                    </button>

                    <button class="w-14 h-14 flex items-center justify-center border rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition shadow-md hover:shadow-lg font-bold font-mono">
                        01
                    </button>
                    <button class="w-14 h-14 flex items-center justify-center border rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition shadow-md hover:shadow-lg font-bold font-mono">
                        02
                    </button>
                    <button class="w-14 h-14 flex items-center justify-center border rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition shadow-md hover:shadow-lg font-bold font-mono">
                        03
                    </button>

                    <span class="w-14 h-14 flex items-center justify-center border rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition shadow-md hover:shadow-lg font-bold">...</span>

                    <button class="w-14 h-14 flex items-center justify-center border rounded-full text-gray-400 hover:bg-red-600 hover:text-white transition shadow-md hover:shadow-lg font-bold font-mono">
                        »
                    </button>
                </div>


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

            </main>


        </>
    )
}

export default Shop
