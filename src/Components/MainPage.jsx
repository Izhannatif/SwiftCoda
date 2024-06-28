import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';
import { CiDesktopMouse1 } from "react-icons/ci";
import { IoIosArrowRoundDown } from "react-icons/io";

const MainPage = () => {
  
  return (
    <div className="main-page w-full flex flex-col justify-evenly items-center h-screen lg:pl-32 md:pl-5 sm:pl-5">
      
      <div className='w-full h-[60vh] flex flex-col items-start justify-center '>
        <div className="text-5xl lg:text-9xl md:text-5xl  text-white rounded-3xl font-bold flex justify-start items-start pl-3">
          <div className=''>SwiftCoda.</div>
        </div>
        <div className='rounded-xl text-white flex flex-col justify-start items-start p-4'>
          <div className='text-2xl lg:text-3xl md:2xl tracking-tight pb-5'>
            Web Design and Branding Agency.
          </div>
          <div className='flex flex-row space-x-5 py-3'>
            <div className='flex flex-row items-center space-x-[-10px] font-medium'>
              <button className='bg-white text-[#1f1f1f] rounded-3xl px-5 py-2'>View our work</button>
              <FaArrowRight size={40} className='bg-white text-[#1f1f1f] p-3 rounded-full rotate-45 hover:rotate-90 transition-all duration-300 hover:translate-x-4' />
            </div>
            <button className='bg-[#0f0f0f] rounded-3xl px-5 py-2'>Contact</button>
          </div>
        </div>
      </div>
      <div className='text-center flex flex-col justify-center items-center'>
        <CiDesktopMouse1 size={30} className='text-white' />
        <div>scroll</div>
        <IoIosArrowRoundDown size={30} className='text-white animate-bounce pt-2' />
      </div>
    </div>
  );
}

export default MainPage;
