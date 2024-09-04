import React, { useContext, useEffect, useRef, useState } from 'react'
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
import ReactGA from 'react-ga4';
import { CursorContext, CursorProvider } from '../context/CursorContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';

const Custom404 = () => {
  const cursorRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const servicesRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('#030303');

  const { cursorStyle } = useContext(CursorContext);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageView",
      page: '/*',
      title: "404"
    })
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const updateCursor = () => {
      const { x, y } = mousePosition.current;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x - 16}px, ${y - 16}px, 0)`;
        Object.assign(cursorRef.current.style, cursorStyle);
      }
      requestAnimationFrame(updateCursor);
    };

    updateCursor();
  }, [cursorStyle]);
  return (
    // <CursorProvider>
      <>
      <motion.div
        ref={cursorRef}
        className="cursor hidden xl:block lg:block md:hidden sm:hidden shadow-2xl"
        style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'transform 0.1s ease, height 0.1s ease, width 0.1s ease',
          zIndex: 10000,
          ...cursorStyle,
        }}
      />
      <section className='h-screen flex flex-col w-full bg-black text-white pl-0 lg:pl-20 items-center justify-center space-y-5'>
        <div className='w-full  lg:w-2/3'>
          <Marquee loop={0} speed={100} autoFill={true} className='overflow-hidden py-0 lg:py-2 border-t-2 border-b-2'>
            <p className='text-4xl lg:text-6xl font-black p-3 uppercase tracking-tighter'>404 Error&nbsp;.&nbsp;where am i ?</p>
          </Marquee>
        </div>
        <Link to={'/'} ><div className='bg-white text-black h-10 pr-5 pl-5 py-2 rounded-full flex items-center justify-evenly w-max space-x-2 home-404-btn'>
          <p className='font-semibold text-xl uppercase'>Take me home</p>
          <div className=' bg-black text-white rounded-full '><MdArrowOutward  className='home-404-arrow bg-black text-white p-1 rounded-full h-8 w-8' /></div>
        </div></Link>
      </section>
      </>
    // </CursorProvider> 
  )
}

export default Custom404