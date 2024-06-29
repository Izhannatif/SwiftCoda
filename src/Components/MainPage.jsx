import React, { useEffect, useRef } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-scroll';
import { CiDesktopMouse1 } from "react-icons/ci";
import { IoIosArrowRoundDown } from "react-icons/io";
import Pills from './Pills';
import Marquee from 'react-fast-marquee';

const MainPage = () => {

  return (
    <div id='home' className="main-page w-full flex flex-col justify-evenly items-center h-screen md:pl-5 sm:pl-5">
      <div className='h-[50vh] lg:h-[60vh] w-full flex flex-col items-center justify-end pb-10 '>
        <div className="text-6xl lg:text-9xl md:text-5xl text-white rounded-3xl font-bold flex justify-center items-start pl-3 -mt-20">
          <div className=''>SwiftCoda.</div>
        </div>
        <div className='rounded-xl text-white flex flex-col justify-center items-center p-4'>
          <div className='text-2xl lg:text-2xl md:2xl tracking-tight pb-5'>
            Web Design and Branding Agency.
          </div>

          <div className='flex flex-row space-x-5 py-3'>
            <Link to='work'><div className='flex flex-row items-center space-x-[-10px] font-medium'>
              <button className='bg-white text-[#1f1f1f] rounded-3xl px-5 py-2'>View our work</button>
              <FaArrowRight size={40} className='bg-white text-[#1f1f1f] p-3 rounded-full rotate-45 hover:rotate-90 transition-all duration-300 hover:translate-x-4' />
            </div></Link>
            <Link to='contact'><button className='bg-[#0f0f0f] rounded-3xl px-5 py-2'>Contact</button></Link>
          </div>
        </div>
      </div>
      <Marquee loop={0} speed={125} autoFill={true} direction='right' className='overflow-hidden py-0 lg:py-2 '>
        <p className='text-[#646464c4] text-6xl lg:text-8xl font-black uppercase tracking-tighter'> <span className='hover:text-white  transition-all duration-500'>INNOVATE</span> .<span className='hover:text-white  transition-all duration-500'> ELEVATE .</span> <span className='hover:text-white  transition-all duration-500'>DOMINATE&nbsp;.</span>&nbsp;</p>
      </Marquee>
      
      {/* <Pills /> */}
      <div className='text-center flex flex-col justify-center items-center'>
        <CiDesktopMouse1 size={30} className='text-white' />
        <div>scroll</div>
        <IoIosArrowRoundDown size={30} className='text-white animate-bounce pt-2' />
      </div>
    </div>
  );
}

export default MainPage;
