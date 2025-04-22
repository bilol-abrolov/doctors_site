import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaBehance, FaYoutube, FaInvision, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  console.log(doctors);

  const getAllDoctors = async () => {
    try {
      const res = await axiosInstance.get('/doctors/get-all');
      console.log(res);

      setDoctors(res.data); // Do'ktonlar ro'yxatini o'zgartiradi
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <section className="pt-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7 px-4 sm:px-8 lg:px-[160px]" style={{ fontFamily: 'Poppins, sans-serif' }}>
  {doctors.map((doctor, index) => (
    <Link to={`/doctordetails/${doctor._id}`}>
    <div key={index} className="w-full h-auto bg-white shadow-lg p-6">
      {/* Doctor's photo */}
      <div className="w-[300px] h-[300px] overflow-hidden mx-auto mb-4">
        <img className="w-full h-full object-cover" src={doctor.photo || 'https://via.placeholder.com/150'} alt="Doctor" />
      </div>

      {/* Doctor's name */}
      <h1 className="font-semibold text-3xl text-gray-800 hover:text-green-600 cursor-pointer mb-2 text-center font-sans tracking-wide transition-all duration-300">{doctor.name}</h1>

      {/* Doctor's profession */}
      <h3 className="font-medium text-lg text-red-500 mb-3 text-center font-sans italic">{doctor.profession}</h3>
      {/* Social media icons */}
      <div className="flex justify-center text-xl gap-6 pt-4 text-gray-400 hover:text-gray-600 transition-colors duration-200">
        <FaFacebookF className="hover:text-blue-600 cursor-pointer transition-colors duration-200" />
        <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors duration-200" />
        <FaBehance className="hover:text-blue-500 cursor-pointer transition-colors duration-200" />
        <FaPinterest className="hover:text-red-600 cursor-pointer transition-colors duration-200" />
        <FaInvision className="hover:text-pink-600 cursor-pointer transition-colors duration-200" />
      </div>
    </div>
    </Link>
  ))}
</section>
  );
};

const Doctor = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const target1 = 358;
  const target2 = 358;
  const target3 = 238;

  useEffect(() => {
    if (count1 < target1) {
      const timeout = setTimeout(() => setCount1(count1 + 1), 10);
      return () => clearTimeout(timeout);
    }
  }, [count1]);

  useEffect(() => {
    if (count2 < target2) {
      const timeout = setTimeout(() => setCount2(count2 + 1), 10);
      return () => clearTimeout(timeout);
    }
  }, [count2]);

  useEffect(() => {
    if (count3 < target3) {
      const timeout = setTimeout(() => setCount3(count3 + 1), 10);
      return () => clearTimeout(timeout);
    }
  }, [count3]);

  return (
    <>
      {/* Header */}
      <header className='fixed top-0 left-0 w-full bg-white text-center p-4 shadow-lg z-50'>
        <div className='flex justify-around'>
          <img src="https://medi-dove.netlify.app/img/logo/logo.png" alt="Logo" />
          <div className='flex gap-5 text-[17px] text-gray-500 font-bold items-center'>
            <Link to="/">Home+</Link>
            <h1>Department+</h1>
            <h1>Doctors+</h1>
            <Link to="/shop">Shop</Link>
            <h1>News+</h1>
            <h1>Pages+</h1>
            <FaFacebookF />
            <FaBehance />
            <FaYoutube />
            <FaInvision />
            <FaPinterest />
            <img className='h-[60px] w-[60px]' src="https://medi-dove.netlify.app/img/icon/lang.png" alt="Lang" />
            <select>
              <option value="">Eng</option>
              <option value="">Uzb</option>
              <option value="">Spain</option>
            </select>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="relative w-full h-[540px]">
        <img src="https://medi-dove.netlify.app/static/media/page-bg.19c1fbc541073bd8ef07.jpg" alt="" className='mt-[110px] w-full h-full object-cover' />
        <div className="absolute inset-0 flex items-center justify-around gap-[400px]">
          <div>
            <h3 className='text-xl font-semibold text-gray-500'>We are here for your care.</h3>
            <h1 className='text-7xl font-semibold text-blue-950 pt-[30px]'>Doctors 02</h1>
          </div>
          <div className='flex gap-2 items-center pt-[40px]'>
            <h3 className='text-lg text-gray-400 font-bold'>Home</h3>/ <h3 className='text-lg text-red-600 font-bold'>Doctor</h3>
          </div>
        </div>
      </div>


      <div className='relative pl-[50px] flex justify-center pt-[80px]'>
        <img src="https://medi-dove.netlify.app/img/section/section-back-icon.png" alt="" />
        <div className='absolute inset-0 text-center pl-[50px] pt-[130px]'>
          <h3 className='text-gray-500 font-semibold text-lg'>Departments
            <h1 className='text-blue-950 font-bold text-5xl'>Managed Your</h1>
            <h1 className='text-blue-950 font-bold text-6xl'>Heathcare Services</h1>
          </h3>
        </div>
      </div>


      {/* Doctors List */}
      <Link to={`/doctordetails/{}`}>
      <Doctors/>
      </Link>

      {/* CTA Section */}
      <section className='relative mt-[180px] flex justify-center gap-[100px] bg-blue-950 pb-[150px] text-white p-10'>
        <img src="https://medi-dove.netlify.app/static/media/map.54de82487cec37de8695.png" alt="Background Map" className="absolute inset-0 w-full h-full object-cover opacity-350" />
        <div className='pt-[150px]'>
          <h2 className='font-medium text-xl text-gray-500'>We are available 24/7</h2>
          <h1 className='font-bold text-white text-8xl mt-5 mb-[60px]'>We Always Ready For A Challenge.</h1>
          <button className="flex items-center bg-red-600 text-white font-semibold text-lg rounded-full px-7 py-3 shadow-lg relative hover:bg-green-600">
            <div className="w-12 h-12 bg-white border-4 border-red-600 hover:border-green-600 rounded-full flex items-center justify-center absolute left-1">
              <span className="text-black text-2xl pb-1 font-bold">+</span>
            </div>
            <span className="ml-9">MAKE APPOINTMENT</span>
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="p-6 shadow-lg bg-white rounded-lg">
            <img src="https://medi-dove.netlify.app/img/counter/counter-icon-1.png" alt="Branches" className="mx-auto w-20 mb-5" />
            <h1 className="text-5xl font-bold text-red-600">{count1}+</h1>
            <h3 className="text-xl font-semibold mt-2">Worldwide Branches</h3>
          </div>
          <div className="p-6 shadow-lg bg-white rounded-lg">
            <img src="https://medi-dove.netlify.app/img/counter/counter-icon-2.png" alt="Hospitals" className="mx-auto w-20 mb-5" />
            <h1 className="text-5xl font-bold text-red-600">{count2}+</h1>
            <h3 className="text-xl font-semibold mt-2">Hospitals Formed</h3>
          </div>
          <div className="p-6 shadow-lg bg-white rounded-lg">
            <img src="https://medi-dove.netlify.app/img/counter/counter-icon-3.png" alt="Partners" className="mx-auto w-20 mb-5" />
            <h1 className="text-5xl font-bold text-red-600">{count3}+</h1>
            <h3 className="text-xl font-semibold mt-2">Local Partners</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
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
  );
};

export default Doctor;
