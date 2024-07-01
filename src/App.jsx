import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'
import Home from './Pages/Home'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CursorProvider } from './context/CursorContext';


function App() {
  return (
    <>

      <ParallaxProvider>
        <CursorProvider>
          <Home />
        </CursorProvider>
      </ParallaxProvider>
    </>
  )
}

export default App
