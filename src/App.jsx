import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'
import Home from './Pages/Home'
import { useContext, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CursorContext, CursorProvider } from './context/CursorContext';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Custom404 from './Components/Custom404';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  const cursorRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
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
        Object.assign(cursorRef.current.style);
      }
      requestAnimationFrame(updateCursor);
    };
    updateCursor();
  }, []);
  return (
    <>
      <Router>
        <SpeedInsights />
        <ParallaxProvider>
          <CursorProvider>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path='*' Component={Custom404} />
            </Routes>
            <Footer />
          </CursorProvider>
        </ParallaxProvider>
      </Router >
    </>
  )
}

export default App
