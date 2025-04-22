import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInvision } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { VscDebugContinue } from "react-icons/vsc";
import { RiUserSharedLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { Link } from 'react-router-dom';
import { LuTableOfContents } from "react-icons/lu";

const Home = () => {
  return (
    <>
      <header className='bg-white w-full text-center p-4 shadow-lg z-50 lg:fixed'>
        <div className='flex justify-around'>
          <img src="https://medi-dove.netlify.app/img/logo/logo.png" alt="" />
          <div className='flex gap-5 text-[17px] text-gray-500 font-bold items-center xs:hidden sm:hidden md:hidden lg:flex '>
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
          <div className='block md:hidden pl-[250px] pt-[30px] text-2xl'>
            <LuTableOfContents />
          </div>
        </div>
      </header>
  

      <main>
        {/* {backgroundfoto} */}
        <div className='w-full h-[900px] pt-[110px] bg-[url("https://medi-dove.netlify.app/static/media/slider-bg-2in1.a274526164db40a919cb.jpg")] lg:bg-center sm:bg-left'>
          <div className=' w-[350px] pt-[80px] pl-[150px] xs:pl-[25px] sm:pl-[100px] md:pl-[150px] lg:pl-[200px]'>
            <h3 className='font-bold text-gray-500 xs:font-normal xs:text-[15px] sm:text-[20px] sm:w-[240px] md:text-[25px] md:w-[450px] lg:font-semibold'>We are here for your care</h3>
            <h1 className='text-8xl w-[680px] font-bold text-blue-950 pt-6 xs:text-[23px] sm:text-4xl md:text-[45px] lg:text-8xl'>Best Care & Better Doctor.</h1>
            <p className='w-[550px] pt-4 font-medium text-gray-500 xs:w-[300px] xs:text-[13px] sm:text-lg sm:w-[400px] lg:w-[450px] lg:text-[20px] lg:pt-[40px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint tempore consectetur quae distinctio.
              Ullam rem eligendi aut ducimus?</p>

            <div class="flex items-center space-x-4 mt-[50px] w-[500px]">

              <button class="flex items-center bg-red-600 text-white font-semibold text-sm 
                    rounded-full px-7 p-5  shadow-lg relative hover:bg-green-600 xs:text-[13px] xs:p-2 sm:text-[20px] sm:p-4 md:text-[25px] md:p-6">

                <div class="w-14 h-14 bg-white border-4 border-red-600 hover:border-green-600
                    rounded-full flex items-center justify-center absolute left-1 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:h-16 lg:w-14">
                  <span class="text-black text-2xl pb-1 font-bold">+</span>
                </div>

                <span class="ml-9">MAKE APPOINTMENT</span>
              </button>

              <button class="w-14 h-14 p-7 bg-green-600 flex items-center justify-center 
                   rounded-full shadow-lg hover:bg-red-700 md:w-14">
                <span class="text-white text-2xl"><VscDebugContinue /></span>
              </button>

            </div>
          </div>
        </div>

        {/*  About Us */}
        <div className="flex flex-col lg:flex-row mt-[250px] justify-center gap-[30px] md:pl-[100px]">
          <div>
            <img className='xs:w-[300px] xs:pl-6 sm:w-[550px] sm:pl-8 lg:w-[600px]' src="https://medi-dove.netlify.app/img/about/about-img.jpg" alt="" />
          </div>
          <div>
            <h3 className='mt-3 text-gray-400 font-bold text-2xl xs:text-[15px] xs:ml-6 sm:text-[25px] sm:ml-9'>About Us</h3>
            <h1 className='mt-5 font-bold text-blue-950 text-7xl w-[650px] xs:pl-5 xs:text-[25px] xs:w-[240px] sm:text-5xl sm:w-[450px] sm:pl-8'>Short Story About MediDove Clinic.</h1>
            <p className='w-[650px] font-medium text-gray-500 mt-[40px] text-lg xs:text-[15px] xs:w-[250px] xs:pl-6 sm:text-lg sm:w-[550px] sm:pl-9'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /><br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className='flex mt-[30px] gap-5 xs:pl-6 sm:pl-9'>
              <img src="https://medi-dove.netlify.app/img/about/author-ava.png" alt="" />
              <h2 className='font-semibold text-blue-950 text-2xl xs:text-[20px] xs:w-[150px] sm:text-[30px] sm:w-[350px]'>Rosalina D. Williamson
                <h3 className='mt-2 text-red-600 font-bold text-lg'>Founder</h3>
              </h2>
            </div>
          </div>
        </div>


        {/* {manage your} */}
        <div className='bg-gray-50 mt-[150px] pb-[200px]'>

          <div className='relative pl-[50px] flex justify-center pt-[80px]'>
            <img className='xs:w-32' src="https://medi-dove.netlify.app/img/section/section-back-icon.png" alt="" />
            <div className='absolute inset-0 text-center pl-[50px] pt-[130px]'>
              <h3 className='text-gray-500 font-semibold text-lg sm:text-[15px] xs:text-[15px]'>Departments
                <h1 className='text-blue-950 font-bold text-6xl sm:text-[30px] xs:text-2xl'>Managed Your</h1>
                <h1 className='text-blue-950 font-bold text-6xl sm:text-[40px] xs:text-3xl'>Heathcare Services</h1>
              </h3>
            </div>
          </div>

          <div className=' pt-[100px] w-full grid justify-center gap-8 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 '>

            <div className="flex flex-col items-center bg-white p-[50px] pt-[60px] w-full text-center hover:shadow-lg">
              <div className="w-18 h-16 flex items-center justify-center bg-red-100 rounded-full">
                <img
                  src="https://medi-dove.netlify.app/img/services/service1.png"
                  alt="Body Surgery Icon"
                  className=""
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 pt-[50px] hover:text-green-800">Body Surgery</h2>
              <p className="text-gray-500 pt-[20px] text-lsm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
              <button className="pt-[30px] text-gray-400 font-semibold hover:text-green-700">Read More</button>
            </div>


            <div className="flex flex-col items-center bg-white p-[50px] pt-[60px]  w-full text-center hover:shadow-lg">
              <div className="w-18 h-16 flex items-center justify-center bg-red-100 rounded-full">
                <img
                  src="https://medi-dove.netlify.app/img/services/service2.png"
                  alt="Body Surgery Icon"
                  className=""
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 pt-[50px] hover:text-green-800">Dental Care</h2>
              <p className="text-gray-500 pt-[20px] text-lsm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
              <button className="pt-[30px] text-gray-400 font-semibold hover:text-green-700">Read More</button>
            </div>


            <div className="flex flex-col items-center bg-white p-[50px] pt-[60px]  w-full text-center hover:shadow-lg">
              <div className="w-18 h-16 flex items-center justify-center bg-red-100 rounded-full">
                <img
                  src="https://medi-dove.netlify.app/img/services/service3.png"
                  alt="Body Surgery Icon"
                  className=""
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 pt-[50px] hover:text-green-800">service-content</h2>
              <p className="text-gray-500 pt-[20px] text-lsm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
              <button className="pt-[30px] text-gray-400 font-semibold hover:text-green-700">Read More</button>
            </div>


            <div className="flex flex-col items-center bg-white p-[50px] pt-[60px]  w-full text-center hover:shadow-lg">
              <div className="w-18 h-16 flex items-center justify-center bg-red-100 rounded-full">
                <img
                  src="https://medi-dove.netlify.app/img/services/service4.png"
                  alt="Body Surgery Icon"
                  className=""
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 pt-[50px] hover:text-green-800">Blood Cancer</h2>
              <p className="text-gray-500 pt-[20px] text-lsm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
              <button className="pt-[30px] text-gray-400 font-semibold hover:text-green-700">Read More</button>
            </div>


            <div className="flex flex-col items-center bg-white  p-[50px] pt-[60px]  w-full text-center hover:shadow-lg">
              <div className="w-18 h-16 flex items-center justify-center bg-red-100 rounded-full">
                <img
                  src="https://medi-dove.netlify.app/img/services/service5.png"
                  alt="Body Surgery Icon"
                  className=""
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 pt-[50px] hover:text-green-800">Neurology Sargery</h2>
              <p className="text-gray-500 pt-[20px] text-lsm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
              <button className="pt-[30px] text-gray-400 font-semibold hover:text-green-700">Read More</button>
            </div>


            <div className="flex flex-col items-center bg-white p-[50px] pt-[60px]  w-full text-center hover:shadow-lg">
              <div className="w-18 h-16 flex items-center justify-center bg-red-100 rounded-full">
                <img
                  src="https://medi-dove.netlify.app/img/services/service6.png"
                  alt="Body Surgery Icon"
                  className=""
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 pt-[50px] hover:text-green-800">Allergic Issue</h2>
              <p className="text-gray-500 pt-[20px] text-lsm">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
              </p>
              <button className="pt-[30px] text-gray-400 font-semibold hover:text-green-700">Read More</button>
            </div>
          </div>
        </div>


        {/* {professional} */}
        <div className='mt-[100px] flex flex-col justify-center gap-[250px] xs:mt-5 xs:flex-col xs:gap-[1px] xs:pl-[60px] sm:pl-[40px] sm:flex-row md:pl-[70px] lg:gap-[200px] lg:mt-[40px]'>
          <div className='relative w-[550px]'>
            <img className='w-[200px] xs:w-[150px] md:w-[170px] lg:w-[200px]' src="https://medi-dove.netlify.app/img/section/section-back-icon.png" alt="" />
            <div className='absolute inset-0'>
              <h3 className='font-bold text-gray-400 text-lg pt-[40px] xs:text-[15px] xs:pl-[40px] md:text-[20px]'>Our Team</h3>
              <h1 className='text-blue-950 font-bold text-6xl pt-5 xs:text-[30px] md:text-[40px] lg:text-[60px]'>A Professional &
              <h1>Care Provider</h1>
              </h1>
            </div>
            <div className="flex my-9">
              <div className="h-1 w-16 bg-red-500"></div>
              <div className="h-1 w-16 bg-red-500 mx-2"></div>
              <div className="h-1 w-16 bg-red-500"></div>
            </div>
          </div>

          <div className='pt-[100px] xs:pt-[40px] sm:pt-[80px]'>
            <button class="flex items-center bg-red-600 text-white font-semibold text-lg 
                    rounded-full px-7 py-3 shadow-lg relative hover:bg-green-600 xs:py-1 xs:text-[13px] sm:px-[8 0px] md:px-[50px] lg:px-[50px] lg:py-6 lg:text-[18px] md:py-4">

              <div class="w-12 h-12 bg-white border-4 border-red-600 hover:border-green-600
                    rounded-full flex items-center justify-center absolute left-1 xs:w-9 xs:h-9 sm:w-14 sm:h-14 lg:w-[60px] lg:h-[60px]">
                <span class="text-black text-2xl pb-1 font-bold">+</span>
              </div>

              <span class="ml-9">MAKE APPOINTMENT</span>
            </button>
          </div>
        </div>


        {/* {fotos} */}
        <div className='pt-[50px] inline-grid grid-cols-3 gap-[50px] ml-[180px] xs:mt-[10px] xs:ml-5 xs:grid-cols-2 sm:ml-[80px] md:grid-cols-3 lg:ml-[240px]'>
          <div className="flex flex-col items-center p-6 relative justify-center xs:p-2">

            <div className="relative">
              <div className="rounded-full overflow-hidden">
                <img
                  className="w-[300px] object-cover xs:h-[160px] xs:w-[200px] lg:w-[300px] lg:h-[300px]"
                  src="https://medi-dove.netlify.app/img/team/member1.png"
                  alt=""
                />
              </div>

              <button className="absolute bottom-2 right-0 bg-green-600 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md hover:bg-red-600 xs:w-8 xs:h-8 lg:w-[80px] lg:h-[80px]">
                <span className="text-white text-2xl">+</span>
              </button>
            </div>

            <h2 className="pt-[50px] text-3xl font-bold text-blue-950 xs:text-[20px] xs:pt-[10px] lg:text-3xl lg:pt-8">
              Rosalina D. Williamson
            </h2>
            <p className="text-lg text-red-500 font-bold pt-5 xs:text-[15px] lg:text-lg">FOUNDER</p>
          </div>
          <div className="flex flex-col items-center p-6 relative xs:p-2">

            <div className="relative">
              <div className="rounded-full overflow-hidden">
                <img
                  className="w-[300px] object-cover xs:h-[160px] xs:w-[200px] lg:w-[300px] lg:h-[300px]"
                  src="https://medi-dove.netlify.app/img/team/member2.png"
                  alt=""
                />
              </div>

              <button className="absolute bottom-2 right-0 bg-green-600 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md hover:bg-red-600 xs:w-8 xs:h-8 lg:w-[80px] lg:h-[80px]">
                <span className="text-white text-2xl">+</span>
              </button>
            </div>

            <h2 className="pt-[50px] text-3xl font-bold text-blue-950 xs:text-[17px] xs:pt-[10px] lg:text-3xl lg:pt-8">
              Diconda PIran Will
            </h2>
            <p className="text-lg text-red-500 font-bold p-5 xs:text-[15px] lg:text-lg">DENTIST</p>
          </div>
          <div className="flex flex-col items-center p-6 relative justify-center xs:p-2">

            <div className="relative">
              <div className="rounded-full overflow-hidden">
                <img
                  className="w-[300px] object-cover xs:h-[160px] xs:w-[200px] lg:w-[300px] lg:h-[300px]"
                  src="https://medi-dove.netlify.app/img/team/member3.png"
                  alt=""
                />
              </div>

              <button className="absolute bottom-2 right-0 bg-green-600 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md hover:bg-red-600 xs:w-8 xs:h-8 lg:w-[80px] lg:h-[80px]">
                <span className="text-white text-2xl">+</span>
              </button>
            </div>
 
            <h2 className="pt-[50px] text-3xl font-bold text-blue-950 xs:text-[20px] xs:pt-[10px] lg:text-3xl lg:pt-8">
              Hulk M. Kenbon
            </h2>
            <p className="text-lg text-red-500 font-bold pt-5 xs:text-[15px] lg:text-lg">NEUROLOGIST</p>
          </div>
          <div className="flex flex-col items-center p-6 relative justify-center xs:p-2">

            <div className="relative">
              <div className="rounded-full overflow-hidden">
                <img
                  className="w-[300px] object-cover xs:h-[160px] xs:w-[200px] lg:w-[300px] lg:h-[300px]"
                  src="https://medi-dove.netlify.app/img/team/member4.png"
                  alt=""
                />
              </div>

              <button className="absolute bottom-2 right-0 bg-green-600 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md hover:bg-red-600 xs:w-8 xs:h-8 lg:w-[80px] lg:h-[80px]">
                <span className="text-white text-2xl">+</span>
              </button>
            </div>

            <h2 className="pt-[50px] text-3xl font-bold text-blue-950 xs:text-[20px] xs:pt-[10px] lg:text-3xl lg:pt-8">
              Haliam Z. Dicolaz
            </h2>
            <p className="text-lg text-red-500 font-bold pt-5 xs:text-[15px] lg:text-lg">CONSULTANT</p>
          </div>
          <div className="flex flex-col items-center p-6 relative justify-center xs:p-2">

            <div className="relative">
              <div className="rounded-full overflow-hidden">
                <img
                  className="w-[300px] object-cover xs:h-[160px] xs:w-[200px] lg:w-[300px] lg:h-[300px]"
                  src="https://medi-dove.netlify.app/img/team/member5.png"
                  alt=""
                />
              </div>

              <button className="absolute bottom-2 right-0 bg-green-600 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md hover:bg-red-600 xs:w-8 xs:h-8 lg:w-[80px] lg:h-[80px]">
                <span className="text-white text-2xl">+</span>
              </button>
            </div>

            <h2 className="pt-[50px] text-3xl font-bold text-blue-950 xs:text-[20px] xs:pt-[10px] lg:text-3xl lg:pt-8">
              Nicolas D. Case
            </h2>
            <p className="text-lg text-red-500 font-bold pt-5 xs:text-[15px] lg:text-lg">DENTIST</p>
          </div>
          <div className="flex flex-col items-center p-6 relative justify-center xs:p-2">

            <div className="relative">
              <div className="rounded-full overflow-hidden">
                <img
                  className="w-[300px] object-cover xs:h-[160px] xs:w-[200px] lg:w-[300px] lg:h-[300px]"
                  src="https://medi-dove.netlify.app/img/team/member6.png"
                  alt=""
                />
              </div>

              <button className="absolute bottom-2 right-0 bg-green-600 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-md hover:bg-red-600 xs:w-8 xs:h-8 lg:w-[80px] lg:h-[80px]">
                <span className="text-white text-2xl">+</span>
              </button>
            </div>

            <h2 className="pt-[50px] text-3xl font-bold text-blue-950 xs:text-[20px] xs:pt-[10px] lg:text-3xl lg:pt-8">
              Phumdon H. Norman
            </h2>
            <p className="text-lg text-red-500 font-bold pt-5 xs:text-[15px] lg:text-lg">NEUROLOGIST</p>
          </div>
        </div>



        {/* {we are 24/7} */}
        <div className='relative mt-[100px] justify-center gap-[100px] bg-blue-950 pb-[150px] lg:flex'>
          <img
            src="https://medi-dove.netlify.app/static/media/map.54de82487cec37de8695.png"
            alt="Background Map"
            className="absolute inset-0 w-full h-full object-cover opacity-350"
          />
          <div className='pt-[150px]'>
            <h2 className='font-medium text-xl text-gray-500 xs:text-[15px] xs:pl-[30px] md:text-xl '>We are available 24/7</h2>
            <h1 className='font-bold text-white text-8xl mt-5 mb-[60px] xs:text-[50px] xs:pl-[30px] md:text-7xl'>We Always Ready
              <h1>For A Challenge.</h1>
            </h1>
            <button class="flex items-center bg-red-600 text-white font-semibold text-lg 
                    rounded-full px-7 py-3 shadow-lg relative hover:bg-green-600 xs:ml-[30px]">

              <div class="w-12 h-12 bg-white border-4 border-red-600 hover:border-green-600
                    rounded-full flex items-center justify-center absolute left-1">
                <span class="text-black text-2xl pb-1 font-bold">+</span>
              </div>

              <span class="ml-9">MAKE APPOINTMENT</span>
            </button>
          </div>


          <div className='pt-[160px] xs:pt-[10px] sm:flex lg:flex-col'>
            <div className='flex-col flex w-[500px] gap-7 mt-9 xs:flex-col xs:pl-[40px] md:pl-[80px] lg:flex-row lg:pt-[80px]'>
              <h1 className='text-7xl text-green-700 font-bold mt-6'>1M+</h1>
              <div>
                <h1 className='flex text-2xl font-semibold pb-4 gap-3 text-white'><RiUserSharedLine className='w-[30px] h-[30px]' />Satisfied Patients</h1>
                <p className='text-gray-400 xs:w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae qui deserunt nisi praesentium tempora et.</p>
              </div>
            </div>
            <div className='flex-col flex w-[500px] gap-6 mt-[50px] xs:flex-col xs:pl-[40px] sm:mt-[40px] lg:flex-row lg:pl-[80px] lg:pt-5'>
              <h1 className='text-7xl text-green-700 font-bold mt-6'>100+</h1>
              <div>
                <h1 className='flex text-2xl font-semibold pb-4 gap-3 text-white'><BiLike className='w-[30px] h-[30px]' />Satisfied Patients</h1>
                <p className='text-gray-400 xs:w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae qui deserunt nisi praesentium tempora et.</p>
              </div>
            </div>
          </div>

        </div>



        {/* {monthly and yearly} */}
        <div className='bg-gray-100 pb-[150px] xs:mt-5 xs:pl-[40px] xs:pb-2'>
          <div className='flex justify-around pt-[100px] xs:flex-col lg:flex-row'>
            <div className='relative w-[550px]'>
              <img className='w-[200px] xs:w-[150px] lg:w-[200px]' src="https://medi-dove.netlify.app/img/section/section-back-icon.png" alt="" />
              <div className='absolute inset-0'>
                <h3 className='font-bold text-gray-400 text-lg pt-[40px] xs:text-[20px] lg:text-[25px]'>Our Team</h3>
                <h1 className='text-blue-950 font-bold text-6xl pt-5 xs:text-[30px] lg:text-6xl'>A Professional &
                  <h1>Care Provider</h1>
                </h1>
              </div>
              <div className="flex my-9">
                <div className="h-1 w-16 bg-red-500"></div>
                <div className="h-1 w-16 bg-red-500 mx-2"></div>
                <div className="h-1 w-16 bg-red-500"></div>
              </div>
            </div>

            <div class="flex mt-[130px] xs:mt-4 sm:pt-10 lg:pt-[100px]">
              <div class="rounded-full p-1">
                <button class="px-8 py-5 text-lg font-semibold rounded-full bg-red-600 text-white shadow-md xs:text-sm lg:text-[20px]">
                  MONTHLY
                </button>
                <button class="px-8 py-5 text-lg font-semibold rounded-full text-gray-600 lg:text-[20px]">
                  YEARLY
                </button>
              </div>
            </div>
          </div>


          {/* {fotos-2} */}
          <div className='grid grid-cols-3 justify-center mt-[80px] mb-[50px] gap-[50px] ml-[30px] xs:grid-cols-1 xs:ml-1 sm:grid-cols-2 lg:grid-cols-3 lg:p-[120px] lg:pt-5'>
            <div className='w-[380px] h-[550px] p-12 bg-white xs:w-[280px] xs:h-[430px] xs:p-10 sm:w-[280px] lg:w-[380px] lg:h-[550px]'>
              <img className='xs:w-[80px] xs:h-[100px] lg:w-[150px] lg:h-[200px]' src="https://medi-dove.netlify.app/img/pricing/pricing-thumb-1.png" alt="" />
              <h1 className='text-blue-950 font-bold text-5xl pt-5 xs:text-[20px] lg:text-5xl'>Professional</h1>
              <p className='pt-4 text-gray-500 w-[300px] xs:w-[200px] lg:w-[300px]'>Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              <button class="flex items-center bg-red-600 text-white font-semibold text-lg 
                    rounded-full px-5 shadow-lg relative hover:bg-green-600 ml-7 p-5 w-[250px] mt-8 justify-center xs:p-3 xs:w-[200px] xs:pr-5 lg:w-[250px] lg:p-5">

                <div class="w-12 h-12 bg-white border-4 border-red-600 hover:border-green-600
                    rounded-full flex items-center justify-center absolute left-1">
                  <span class="text-black text-2xl pb-1 font-bold">+</span>
                </div>

                <span class="ml-9">Price: $425.00</span>
              </button>
            </div>

            <div className='w-[380px] h-[550px] p-12 bg-white xs:w-[280px] xs:h-[430px] xs:p-10 sm:w-[263px] lg:w-[380px] lg:h-[550px]'>
              <img className='xs:w-[80px] xs:h-[100px] lg:w-[150px] lg:h-[200px]' src="https://medi-dove.netlify.app/img/pricing/pricing-thumb-2.png" alt="" />
              <h1 className='text-blue-950 font-bold text-5xl pt-5 xs:text-[20px] lg:text-5xl'>Advanced</h1>
              <p className='pt-4 text-gray-500 w-[300px] xs:w-[200px] lg:w-[300px]'>Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              <button class="flex items-center bg-red-600 text-white font-semibold text-lg 
                    rounded-full px-5 shadow-lg relative hover:bg-green-600 p-5 ml-7 w-[250px] mt-8 justify-center xs:p-3 xs:w-[200px] xs:pr-5 lg:w-[250px] lg:p-5">

                <div class="w-12 h-12 bg-white border-4 border-red-600 hover:border-green-600
                    rounded-full flex items-center justify-center absolute left-1">
                  <span class="text-black text-2xl pb-1 font-bold">+</span>
                </div>

                <span class="ml-9">Price: $455.00</span>
              </button>
            </div>

            <div className='w-[380px] h-[550px] p-12 bg-white xs:w-[280px] xs:h-[430px] xs:p-10 lg:w-[380px] lg:h-[550px]'>
              <img className='xs:w-[80px] xs:h-[100px] lg:w-[150px] lg:h-[200px]' src="https://medi-dove.netlify.app/img/pricing/pricing-thumb-3.png" alt="" />
              <h1 className='text-blue-950 font-bold text-5xl pt-5 xs:text-[20px] lg:text-5xl'>Advantage</h1>
              <p className='pt-4 text-gray-500 w-[300px] xs:w-[200px] lg:w-[300px]'>Ut enim ad minim veniam, quis istomw nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
              <button class="flex items-center bg-red-600 text-white font-semibold text-lg 
                    rounded-full px-5 shadow-lg relative hover:bg-green-600 ml-7 p-5 w-[250px] mt-8 justify-center xs:p-3 xs:w-[200px] xs:pr-5 lg:w-[250px] lg:p-5">

                <div class="w-12 h-12 bg-white border-4 border-red-600 hover:border-green-600
                    rounded-full flex items-center justify-center absolute left-1">
                  <span class="text-black text-2xl pb-1 font-bold">+</span>
                </div>

                <span class="ml-9">Price: $489.00</span>
              </button>
            </div>




          </div>
        </div>


        <div>
          <div class="relative w-full h-[480px]">

            <img
              src="https://medi-dove.netlify.app/static/media/slider-bg-1.a5b879494592cab4771e.jpg"
              alt="Background Image"
              class="w-full h-full object-cover"
            />

            <div class="absolute inset-0 bg-blue-950 bg-opacity-90"></div>

            <div class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
              <h1 class="text-lg text-gray-400 font-extrabold lg:text-lg">Stay healthy & strong to enjoy life</h1>
              <h1 className='text-6xl mt-5 font-bold xs:text-sm sm:text-4xl lg:text-6xl'>Trust Us To Be There To Help All
                <h1>& Make Things Well Again.</h1>
              </h1>
              <button class="flex items-center bg-green-600 text-white font-semibold text-lg 
                    rounded-full px-7 mt-[60px] py-3 shadow-lg relative hover:bg-red-600 ">

                <div class="w-12 h-12 bg-white border-4 border-green-600 hover:border-red-600
                    rounded-full flex items-center justify-center absolute left-1">
                  <span class="text-black text-2xl pb-1 font-bold">+</span>
                </div>

                <span class="ml-9">GET A CONSULTANT</span>
              </button>
            </div>
          </div>
        </div>

        <div className='pb-[50px] '>
          <div className='flex justify-around pt-[100px] xs:mt-5 xs:flex-col xs:gap-[1px] xs:pl-[20px] sm:pl-[20px] sm:flex-row md:pl-[70px] lg:gap-[200px] lg:mt-[40px]'>
            <div className='relative w-[550px]'>
              <img className='w-[200px] xs:w-[150px] lg:w-[200px]' src="https://medi-dove.netlify.app/img/section/section-back-icon.png" alt="" />
              <div className='absolute inset-0'>
                <h3 className='font-bold text-gray-400 text-lg pt-[40px] lg:text-lg'>Our Team</h3>
                <h1 className='text-blue-950 font-bold text-6xl pt-5 xs:text-[30px] lg:text-6xl'>A Professional &
                  <h1>Care Provider</h1>
                </h1>
              </div>
              <div className="flex my-9">
                <div className="h-1 w-16 bg-red-500"></div>
                <div className="h-1 w-16 bg-red-500 mx-2"></div>
                <div className="h-1 w-16 bg-red-500"></div>
              </div>
            </div>

            <div>
              <button class="flex items-center bg-red-600 text-white font-semibold text-lg 
                    rounded-full px-[50px] mt-[150px] py-6 shadow-lg relative hover:bg-green-600 xs:mt-5 xs:text-sm sm:mt-[80px] sm:py-2 md:py-4 lg:py-6 lg:text-lg lg:mt-[100px]">

                <div class="w-[70px] h-[70px] bg-white border-4 border-red-600 hover:border-green-600
                    rounded-full flex items-center justify-center absolute left-1 sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]">
                  <span class="text-black text-2xl pb-1 font-bold">+</span>
                </div>

                <span class="ml-9">OUR BLOG</span>
              </button>
            </div>
          </div>

        </div>

        <div className='flex mt-[80px] justify-center ml-20'>

          <div className='grid grid-cols-2'>
            <div>
              <img src="https://medi-dove.netlify.app/img/blog/blog-thumb-1.jpg" alt="" />
              <h3 className='text-sm text-red-600 font-semibold mt-6'>MEDICAL</h3>
              <h1 className='font-bold w-[460px] text-2xl mt-3 hover:text-red-600'>Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.</h1>
              <p className='w-[400px] mt-4 font-medium text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div>
              <img src="https://medi-dove.netlify.app/img/blog/blog-thumb-2.jpg" alt="" />
              <h3 className='text-sm text-red-600 font-semibold mt-6'>MEDICAL</h3>
              <h1 className='font-bold w-[460px] text-2xl mt-3 hover:text-red-600'>Lorem ipsum dolor sit amet, cons ectetur adidis dicolo wiran.</h1>
              <p className='w-[400px] mt-4 font-medium text-gray-500' >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>


          <div className='border-[1px] border-gray-300 p-5'>
            <div>
              <h1 className='text-2xl w-[300px] font-bold text-gray-700'>Lorem ipsum dolor sit amet, consectetur adidis.</h1>
              <div className='flex pt-[20px] gap-2 items-center font-normal text-lg'>
                <SlCalender /><h3>23rd Jan 2022</h3>
                <AiOutlineComment /><h3>33 Comments</h3>
              </div>
            </div>
            <div>
              <h1 className='text-2xl w-[300px] font-bold text-gray-700 pt-[50px]'>Lorem ipsum dolor sit amet, consectetur adidis.</h1>
              <div className='flex pt-[20px] gap-2 items-center font-normal text-lg'>
                <SlCalender /><h3>23rd Jan 2022</h3>
                <AiOutlineComment /><h3>33 Comments</h3>
              </div>
            </div>
            <div>
              <h1 className='text-2xl w-[300px] font-bold text-gray-700 pt-[50px]'>Lorem ipsum dolor sit amet, consectetur adidis.</h1>
              <div className='flex pt-[20px] gap-2 items-center font-normal text-lg'>
                <SlCalender /><h3>23rd Jan 2022</h3>
                <AiOutlineComment /><h3>33 Comments</h3>
              </div>
            </div>
          </div>
        </div>


        <div className='mt-[80px] ml-[80%]'>
          <button class="flex items-center bg-green-600 text-white font-semibold text-lg 
                    rounded-full px-[60px] mt-[130px] py-6 shadow-lg relative hover:bg-red-600 ">

            <div class="w-[70px] h-[70px] bg-white border-4 border-green-600 hover:border-red-600
                    rounded-full flex items-center justify-center absolute left-1">
              <span class="text-black text-2xl pb-1 font-bold"><IoCall /></span>
            </div>

            <span class="ml-9 font-bold">MAKE CALL</span>
          </button>
        </div>
      </main>

      <footer className='bg-gray-800 relative h-[550px] mt-[50px]'>
        <div className='w-[400px] h-[650px] px-[40px] pt-[50px] bg-white rounded-[30px] absolute bottom-[80px] left-[280px] shadow-2xl'>
          <div className='pt-[30px]'>
            <div className='flex items-center gap-2'>
              <IoCall className='text-red-600 text-4xl' /><h2 className='text-lg font-semibold text-gray-400'>Emergency number</h2>
            </div>
            <h1 className='text-4xl font-bold pl-9'>202-555-0104</h1>
            <img className='pt-[30px] pl-[20px]' src="https://medi-dove.netlify.app/img/logo/footer-logo.png" alt="" />
            <p className='w-[320px] text-lg pl-[15px] pt-[30px] font-semibold text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
            <div className='flex items-center gap-2 pt-[30px] font-semibold text-lg pl-[10px] text-gray-600'>
              <MdOutlineLocalPostOffice /><h3>info@examplemedical.com</h3>
            </div>
            <div className='flex items-center gap-2 pt-[10px] font-semibold text-lg pl-[10px] text-gray-600'>
              <MdOutlineLocalPostOffice /><h3>examplemedical.com</h3>
            </div>
            <div className='flex items-center gap-2 pt-[10px] font-semibold text-lg pl-[10px] text-gray-600'>
              <MdOutlineLocalPostOffice /><h3>227 Marion Street, Columbia</h3>
            </div>
          </div>
        </div>

        <div className='flex pl-[50%] pt-[6%] gap-[70px]'>
          <div>
            <h1 className='text-4xl font-semibold text-white'>Departments</h1>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Surgery and Radiology</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Family Medicine</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Women’s Health</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Optician</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Pediatrics</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Dermatology</h2>
          </div>

          <div>
            <h1 className='text-4xl font-semibold text-white'>Quick Links</h1>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Departments</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Our Doctors</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>News</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Shop</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Contact Us</h2>
            <h2 className='pt-[30px] text-gray-500 font-semibold'>Book an Appointment</h2>
          </div>
        </div>
      </footer>

    </>


  )
}

export default Home
