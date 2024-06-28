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
import ProjectsCarousel from '../Components/ProjectsCarousel';

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
  const projects = [
    {
      imageUrl: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/sketch-website.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1707141871&s=438e1e3662fb9fbb53df517ff93b4a4a',
      date: '2024',
      name: 'Project 101'
    },
    {
      imageUrl: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Monday-Clicks/Thumbnail-Square-2.jpg?w=800&h=600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1683035994&s=87c7136fa83e17615f921ba511fc96da',
      date: '2022',
      name: 'Innovative Designs'
    },
    {
      imageUrl: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Idyll-Home/LIFESTYLE_MODULE-MOUSSE.jpeg?w=1119&h=839.25&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1619171556&s=f799965d6c518f9d3684b13e20af5513',
      date: '2021',
      name: 'Tech Advancements'
    },
    {
      imageUrl: 'https://made-byshape.transforms.svdcdn.com/production/uploads/images/Projects/Time/Time-Thumbnail.jpg?w=1200&h=900&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1674121789&s=c81c471c983dbf624bd474b4f665bc59',
      date: '2019',
      name: 'Dynamic Web'
    },
  ];
  return (
    <CursorProvider>
      {/* <Preloader /> */}
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
        {/* <ProjectsCarousel projects={projects} /> */}
        <Projects />
        <Services />
        <OurProcess />
        <Contact />
      {/* <ThreeJs /> */}
        <Footer />

      </main>
    </CursorProvider>
  );
};

export default Home;
