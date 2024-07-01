import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import TicTacToe from './TicTacToe';
import { CiMenuFries } from "react-icons/ci";
import {Link} from 'react-scroll';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=''>
      <div className={`bg-[#ffffff21] ${menuOpen ?'text-black w-full p-5' : 'p-1 text-[#fff] m-3 w-[95vw] rounded-full shadow-2xl backdrop-blur-sm'} flex lg:hidden flex-row justify-between items-center fixed left-0 top-0 z-50 w-full`}>
        <div className='w-max transition-all duration-700 hover:rotate-[360deg] hover:translate-x-12'>
            <p className='bg-black text-white text-2xl font-black text-center  rounded-full p-1'>SC</p>
        </div>
        <div className="flex flex-col space-y-4 pr-5" onClick={toggleMenu}>
          {menuOpen ? <RxCross1 size={30} className='font-bold' /> : <CiMenuFries size={30} className='font-black' />}
        </div>
      </div>
      <motion.div
        className={`header-container fixed top-0 left-0 w-12 h-full py-5 px-2 flex flex-col justify-between items-center text-black z-30  lg:flex md:hidden sm:hidden`}
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="flex flex-col space-y-4" onClick={toggleMenu}>
          {menuOpen ? <RxCross1 size={30} className='font-bold rotate-90' /> : <CiMenuFries size={30} className='font-black rotate-180' />}
        </div>
        <div className="flex flex-col space-y-3 mb-2">
          <a href="mailto:hello@swiftcoda.com" target='_blank'><MdOutlineAlternateEmail size={24} /></a>
          <a href="https://instagram.com" target='_blank'><FaInstagram size={24} /></a>
          <a href="https://linkedin.com" target='_blank'><FaLinkedin size={24} /></a>
        </div>
        <div className="text-2xl pl-20 rotate-[-90deg]">SwiftCoda.</div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`overlay-menu fixed inset-0 bg-[#030303] text-white flex flex-row items-center justify-center pt-10 lg:pt-0 z-20 pl-5 lg:pl-20 text-left`}
            initial={{ x: "-100%", opacity:0 }}
            animate={{ x: "0%", opacity:1 }}
            exit={{ x: "-100%", opacity:0 }}
            transition={{ duration: 1,ease:"easeInOut" }}
            key="menu"
          >
            <div className="w-full lg:w-1/2 pl-0 lg:pl-20 h-full">
              <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold">
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='home' onClick={toggleMenu}>Home</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='about' onClick={toggleMenu}>About</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='work' onClick={toggleMenu}>Work</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='services' onClick={toggleMenu}>Services</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='process' onClick={toggleMenu}>Process</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='contact' onClick={toggleMenu}>Contact</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-full w-1/2 p-5 hidden lg:flex flex-col justify-evenly items-center text-stone-800">
              <div className='text-center flex flex-col justify-evenly h-full'>
                <div className='text-5xl font-black swiftcoda normal-case'>
                  SwiftCoda
                </div>
                <div className='game-heading'>vs</div>
                <div className='italic text-3xl font-medium'>you</div>
              </div>
              <div className='game-heading'>
                Ready, Set, Play !
                <TicTacToe />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
