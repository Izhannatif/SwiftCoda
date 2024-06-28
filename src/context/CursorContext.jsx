import React, { createContext, useState } from 'react';

const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  
  const [cursorStyle, setCursorStyle] = useState({
    height: '40px',
    width: '40px',
    backgroundColor: 'white',
    mixBlendMode: 'difference',
  });

  return (
    <CursorContext.Provider value={{ cursorStyle, setCursorStyle }}>
      {children}
    </CursorContext.Provider>
  );
};

export { CursorProvider, CursorContext };
