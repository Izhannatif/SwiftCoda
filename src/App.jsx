import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'
import Home from './Pages/Home'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CursorProvider } from './context/CursorContext';
import { SpeedInsights } from '@vercel/speed-insights/react';


function App() {
  return (
    <>
      <SpeedInsights />

      <ParallaxProvider>
        <CursorProvider>
          <Home />
        </CursorProvider>
      </ParallaxProvider>
    </>
  )
}

export default App
