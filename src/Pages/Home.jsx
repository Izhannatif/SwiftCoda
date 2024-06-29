import React, { useEffect, useRef, useContext, useState } from 'react';
import MainPage from '../Components/MainPage';
import About from '../Components/About';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Projects from '../Components/Projects';
import Preloader from '../Components/Preloader';
import Services from '../Components/Services';
import { motion } from 'framer-motion';
import { CursorProvider, CursorContext } from '../context/CursorContext';
import OurProcess from '../Components/OurProcess';
import Contact from '../Components/Contact';

const Home = () => {
  const cursorRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const servicesRef = useRef(null);
  const [backgroundColor, setBackgroundColor] = useState('#030303');

  const { cursorStyle } = useContext(CursorContext);

  useEffect(() => {
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

  return (<>
    <Preloader />
    <CursorProvider>
      <motion.div
        ref={cursorRef}
        className="cursor hidden xl:block lg:block md:hidden sm:hidden"
        style={{
          position: 'fixed',
          borderRadius: '50%',
          pointerEvents: 'none',
          transition: 'transform 0.1s ease, height 0.1s ease, width 0.1s ease',
          zIndex: 10000,
          ...cursorStyle,
        }}
      />
      <main>
        <Header />
        <MainPage />
        <About />
        <Projects />
        <Services />
        <OurProcess />
        <Contact />
        <Footer />

      </main>
    </CursorProvider>
  </>
  );
};

export default Home;
